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

const SUPABASE_URL = 'https://ejsnbluvkqocuchifdvp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqc25ibHV2a3FvY3VjaGlmZHZwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjgwMTQ5NywiZXhwIjoyMDgyMzc3NDk3fQ.ZUTMAnnrwi7KPYYhkWL4Gexbn7ClrxOkG_CGWl2Q5X8';

async function supabaseFetch(urlPath, options = {}) {
  return fetch(`${SUPABASE_URL}${urlPath}`, {
    ...options,
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation',
      ...(options.headers || {}),
    },
  });
}

// Ensure table exists on startup via Management API SQL
async function ensureTable() {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/design_review_sessions?limit=1`, {
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` },
    });
    if (res.ok) {
      console.log('design_review_sessions table ready');
    } else {
      console.log('design_review_sessions table not found (status', res.status, ') — create it in Supabase dashboard');
    }
  } catch (e) {
    console.error('Table check failed:', e.message);
  }
}
ensureTable();

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

    const { projectName, images } = await getProjectRenders(projectSlug);

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
    const result = { projectName, projectSlug, groups, allImages: analyzed };
    res.json(result);
  } catch (err) {
    console.error('Project load error:', err.message);
    res.status(404).json({ error: err.message });
  }
});

// Start a new design review session
app.post('/api/session/start', async (req, res) => {
  const { projectSlug, draft, clientName } = req.body;
  try {
    const r = await supabaseFetch('/rest/v1/design_review_sessions', {
      method: 'POST',
      body: JSON.stringify({
        project_slug: projectSlug,
        draft: draft || '1',
        client_name: clientName || null,
        status: 'in_progress',
        chat_transcript: [],
        image_feedback: {},
      }),
    });
    const data = await r.json();
    const sessionId = Array.isArray(data) ? data[0]?.id : data?.id;
    res.json({ sessionId: sessionId || null });
  } catch (err) {
    console.error('Session start error:', err.message);
    res.json({ sessionId: null });
  }
});

// Update chat transcript
app.patch('/api/session/:sessionId/transcript', async (req, res) => {
  const { sessionId } = req.params;
  const { transcript } = req.body;
  try {
    await supabaseFetch(`/rest/v1/design_review_sessions?id=eq.${sessionId}`, {
      method: 'PATCH',
      body: JSON.stringify({ chat_transcript: transcript }),
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('Transcript update error:', err.message);
    res.json({ ok: false });
  }
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  const {
    messages, projectName, clientName, currentRoom, currentImage, currentImageId,
    totalImagesInSection, currentImageIndexInSection, nextSectionName,
  } = req.body;

  const questions = getQuestionsForRoom(currentRoom || 'other');
  const isFloorPlan = currentRoom?.toLowerCase() === 'floor plan';
  const hasMoreImages = (totalImagesInSection || 1) > 1 && (currentImageIndexInSection || 0) < (totalImagesInSection || 1) - 1;
  const isLastImageInSection = (currentImageIndexInSection || 0) === (totalImagesInSection || 1) - 1;

  const systemPrompt = `You are Silas, the Barnhaus Steel Builders design review assistant. You are walking ${clientName || 'the client'} through their design renders for the ${projectName || 'project'} project.

Current room/section: ${currentRoom || 'greeting'}
${currentImage ? `Current image: ${currentImage}` : ''}
${(totalImagesInSection || 1) > 1 ? `Image ${(currentImageIndexInSection || 0) + 1} of ${totalImagesInSection} in this section` : ''}

Your personality: Warm, professional, knowledgeable about home design. You speak like a design consultant — encouraging but detailed. Your name is Silas.

CONVERSATION RULES:
- Keep responses concise — 2-4 sentences max per message
- Ask ONE question at a time from the question bank for this room type
- After the client answers style/finish questions, naturally mention: "If you want to see how a specific finish would look, try the ✨ Visualize My Style button on any render"
- ${isFloorPlan ? 'This is a floor plan — reference only, no Visualize My Style button available. When starting the floor plan review, ALWAYS look at the image carefully and read out the square footage breakdown table visible on the plan (total SF, per-room or per-floor breakdowns). Lead with this in your opening message so the client knows exactly what they are reviewing.' : 'After discussing the image, remind them they can mark it as Love it, Change it, or Question'}
- ${hasMoreImages ? `After discussing this image, tell the client to click the next thumbnail below the image to see the next view. Example: "Take a look at the next exterior view when you're ready — click the next thumbnail below."` : ''}
- ${isLastImageInSection && nextSectionName ? `After finishing this image, tell the client: "Now let's look at your ${nextSectionName} — click '${nextSectionName}' at the top to continue."` : ''}
- ALWAYS end each message with a clear prompt guiding the client to their next action
- Never wrap up a section without telling the client what to do next

Question bank for ${currentRoom || 'this room'}:
${questions.map((q, i) => `${i + 1}. ${q}`).join('\n')}

Keep the conversation flowing naturally. Ask questions one at a time based on responses.`;

  try {
    let imageBase64 = null, imageMime = null;
    if (currentImageId) {
      try {
        const imgData = await getImageBase64(currentImageId);
        imageBase64 = imgData.base64;
        imageMime = imgData.mimeType;
      } catch (e) { console.error('Image fetch for vision failed:', e.message); }
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
  const { projectName, clientName, feedback, sessionId } = req.body;
  try {
    await Promise.allSettled([
      notifyDiscord(projectName, clientName, feedback),
      writeToCRM(projectName, clientName, feedback),
      sessionId ? supabaseFetch(`/rest/v1/design_review_sessions?id=eq.${sessionId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          completed_at: new Date().toISOString(),
          image_feedback: feedback,
          status: 'completed',
        }),
      }) : Promise.resolve(),
    ]);
    res.json({ success: true });
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
