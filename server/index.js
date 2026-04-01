require('dotenv').config();
const express = require('express');
const path = require('path');
const { WebSocketServer } = require('ws');
const http = require('http');
const { getProjectRenders, streamImage, getImageBase64 } = require('./drive');
const { analyzeImage, getQuestionsForRoom, groupAndSortImages, chatResponse } = require('./claude');
const { notifyDiscord, writeToCRM, enhanceImage } = require('./notify');

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: '/ws' });

app.use(express.json({ limit: '50mb' }));

const PORT = process.env.PORT || 3000;
const projectCache = new Map();

// Serve images from Google Drive
app.get('/api/image/:fileId', async (req, res) => {
  try {
    await streamImage(req.params.fileId, res);
  } catch (err) {
    console.error('Image stream error:', err.message);
    res.status(500).json({ error: 'Failed to load image' });
  }
});

// Get project data with analyzed images
app.get('/api/project/:projectSlug', async (req, res) => {
  const { projectSlug } = req.params;
  try {
    if (projectCache.has(projectSlug)) {
      return res.json(projectCache.get(projectSlug));
    }

    const { projectName, images } = await getProjectRenders(projectSlug);

    // Analyze all images with Claude vision
    const analyzed = [];
    for (const img of images) {
      try {
        const { base64, mimeType } = await getImageBase64(img.id);
        const analysis = await analyzeImage(img.id, base64, mimeType);
        analyzed.push({ ...img, analysis });
      } catch (err) {
        console.error(`Failed to analyze ${img.name}:`, err.message);
        analyzed.push({
          ...img,
          analysis: { roomType: 'other', angle: 'interior', features: [], isFloorPlan: false },
        });
      }
    }

    const groups = groupAndSortImages(analyzed);

    const result = {
      projectName,
      projectSlug,
      groups,
      allImages: analyzed,
    };

    projectCache.set(projectSlug, result);
    res.json(result);
  } catch (err) {
    console.error('Project load error:', err.message);
    res.status(404).json({ error: err.message });
  }
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  const { messages, projectName, clientName, currentRoom, currentImage, currentImageId } = req.body;

  const questions = getQuestionsForRoom(currentRoom || 'other');
  const isFloorPlan = currentRoom?.toLowerCase() === 'floor plan';

  const systemPrompt = `You are the Barnhaus Steel Builders design review assistant. You are walking ${clientName || 'the client'} through their design renders for the ${projectName || 'project'} project.

Current room/section: ${currentRoom || 'greeting'}
${currentImage ? `Current image: ${currentImage}` : ''}

Your personality: Warm, professional, knowledgeable about home design. You speak like a design consultant — encouraging but detailed.

CONVERSATION RULES:
- Keep responses concise — 2-4 sentences max per message
- Ask ONE question at a time from the question bank for this room type
- After the client answers style/finish questions, suggest they try the Enhance button to see their preferences applied
- ${isFloorPlan ? 'This is a floor plan — reference only, no enhance button available' : 'After discussing the image, remind them they can mark it as Love it, Change it, or Question'}
- When wrapping up, read back all their feedback and ask if anything was missed

Question bank for ${currentRoom || 'this room'}:
${questions.map((q, i) => `${i + 1}. ${q}`).join('\n')}

Keep the conversation flowing naturally. Don't list all questions at once — ask them one by one based on the client's responses.`;

  try {
    // Fetch current image for vision context
    let imageBase64 = null, imageMime = null;
    if (currentImageId) {
      try {
        const imgData = await getImageBase64(currentImageId);
        imageBase64 = imgData.base64;
        imageMime = imgData.mimeType;
      } catch (e) { /* skip if image fetch fails */ }
    }
    const reply = await chatResponse(messages, systemPrompt, imageBase64, imageMime);
    res.json({ reply });
  } catch (err) {
    console.error('Chat error:', err.message);
    res.status(500).json({ error: 'Chat failed' });
  }
});

// Enhance image
app.post('/api/enhance', async (req, res) => {
  const { imageUrl, prompt } = req.body;
  try {
    const result = await enhanceImage(imageUrl, prompt);
    res.json(result);
  } catch (err) {
    console.error('Enhance error:', err.message);
    res.status(500).json({ error: 'Enhancement failed' });
  }
});

// Submit final feedback
app.post('/api/feedback', async (req, res) => {
  const { projectName, clientName, feedback } = req.body;
  try {
    await Promise.allSettled([
      notifyDiscord(projectName, clientName, feedback),
      writeToCRM(projectName, clientName, feedback),
    ]);
    res.json({ success: true, calendlyLink: process.env.CALENDLY_LINK || '' });
  } catch (err) {
    console.error('Feedback submission error:', err.message);
    res.status(500).json({ error: 'Submission failed' });
  }
});

// Serve React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
  });
}

// WebSocket for real-time updates
wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    try {
      const msg = JSON.parse(data);
      if (msg.type === 'ping') ws.send(JSON.stringify({ type: 'pong' }));
    } catch {}
  });
});

server.listen(PORT, () => {
  console.log(`Barnhaus Design Review running on port ${PORT}`);
});
