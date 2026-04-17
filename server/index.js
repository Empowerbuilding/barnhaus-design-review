require('dotenv').config();
const express = require('express');
const path = require('path');
const { WebSocketServer } = require('ws');
const http = require('http');
const { getProjectRenders, streamImage, getImageBase64 } = require('./drive');
const { sendToJuanito, initJuanitoSession } = require('./juanito');
const { analyzeImage, groupAndSortImages, analyzeInspirationImage } = require('./claude');
const { notifyDiscord, writeToCRM, enhanceImage } = require('./notify');
const multer = require('multer');
const { getInspirationImages, setProjectStyle, getProjectStyle } = require('./inspiration');
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 20 * 1024 * 1024 } });

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
  const draft = req.query.draft || 'draft1';
  try {

    const { projectName, images } = await getProjectRenders(projectSlug, draft);

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
  const { projectSlug, draft, clientName, projectName, rooms } = req.body;
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
    const memo = await initJuanitoSession(projectSlug, clientName || 'there', projectName || projectSlug, rooms || []);
    // Extract style keywords from memo for inspiration image queries
    if (memo) {
      const styleMatch = memo.match(/scandinavian|farmhouse|modern|rustic|industrial|transitional|mediterranean|craftsman|contemporary|minimalist/gi);
      if (styleMatch) setProjectStyle(projectSlug, [...new Set(styleMatch.map(s => s.toLowerCase()))].slice(0, 2).join(' '));
    }
    res.json({ sessionId: sessionId || null, memo });
  } catch (err) {
    console.error('Session start error:', err.message);
    res.json({ sessionId: null, memo: null });
  }
});

// Inspiration image upload
app.post('/api/session/inspiration', upload.array('images', 10), async (req, res) => {
  const { sessionId } = req.body;
  const files = req.files || [];
  if (!files.length) return res.json({ ok: true });
  try {
    // Send inspiration context to Juanito
    const descriptions = files.map(f => f.originalname).join(', ');
    const imageContents = [];
    for (const f of files.slice(0, 5)) {
      imageContents.push(`[CLIENT INSPIRATION IMAGE: ${f.originalname} (${f.mimetype})]`);
    }
    const msg = `[CLIENT UPLOADED INSPIRATION IMAGES before starting the review]\n${imageContents.join('\n')}\nThe client has shared these inspiration images before the walkthrough begins. Keep them in mind as context for their style preferences throughout the session.`;
    await sendToJuanito(msg).catch(() => {});
    if (sessionId) {
      await supabaseFetch(`/rest/v1/design_review_sessions?id=eq.${sessionId}`, {
        method: 'PATCH',
        body: JSON.stringify({ inspiration_uploaded: true, inspiration_count: files.length }),
      }).catch(() => {});
    }
    res.json({ ok: true });
  } catch (err) {
    console.error('Inspiration upload error:', err.message);
    res.json({ ok: false });
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
    messages, clientName, currentRoom, currentImage, currentImageId,
    isImageChangeTrigger, triggerMessage, projectSlug,
  } = req.body;

  try {
    let fullMessage;

    if (isImageChangeTrigger && triggerMessage) {
      fullMessage = triggerMessage;
    } else {
      const lastUserMessage = [...messages].reverse().find(m => m.role === 'user')?.content || '';
      const contextPrefix = `[CONTEXT: room=${currentRoom}, image=${currentImage}, client=${clientName}]`;
      fullMessage = `${contextPrefix}\n\n${lastUserMessage}`;
    }

    // Fetch inspiration images in parallel with Silas response (image-change only)
    const inspirationPromise = (isImageChangeTrigger && currentRoom && currentRoom !== 'floor plan' && currentRoom !== 'other')
      ? getInspirationImages(currentRoom, getProjectStyle(projectSlug || ''), 3)
      : Promise.resolve([]);

    const [reply, inspiration] = await Promise.all([
      sendToJuanito(fullMessage),
      inspirationPromise,
    ]);

    res.json({ reply, inspiration: inspiration || [] });
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

// Client picked an inspiration image — analyze it and send to Silas
app.post('/api/inspiration/pick', async (req, res) => {
  const { imageUrl, imageIndex, roomType, clientName, sessionId } = req.body;
  try {
    // Analyze the image in parallel with sending the pick to Silas
    const description = await analyzeInspirationImage(imageUrl);

    const contextMsg = description
      ? `[CLIENT INSPIRATION PICK — ${roomType}]
The client selected inspiration image ${imageIndex} for the ${roomType}.

Visual analysis of what they picked:
${description}

Image URL: ${imageUrl}

You now know their visual direction for this room. Acknowledge their pick with 1 sentence referencing something specific you see in the image (a color, material, or feature). Then immediately continue with your most important detail question for this room based on what the inspiration reveals.`
      : `[CLIENT INSPIRATION PICK — ${roomType}]
The client selected inspiration image ${imageIndex} for the ${roomType}.
Image URL: ${imageUrl}
Acknowledge their pick and continue with targeted detail questions.`;

    const reply = await sendToJuanito(contextMsg);

    // Save picked image to session
    if (sessionId) {
      supabaseFetch(`/rest/v1/design_review_sessions?id=eq.${sessionId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          [`picked_inspiration_${roomType.replace(/\s/g,'_')}`]: { url: imageUrl, description, index: imageIndex },
        }),
      }).catch(() => {});
    }

    res.json({ reply, description });
  } catch (err) {
    console.error('Inspiration pick error:', err.message);
    res.status(500).json({ error: 'Failed to process pick' });
  }
});

// Submit final feedback
app.post('/api/feedback', async (req, res) => {
  const { projectName, clientName, feedback, sessionId, chatTranscript } = req.body;
  try {
    await Promise.allSettled([
      notifyDiscord(projectName, clientName, feedback, chatTranscript),
      writeToCRM(projectName, clientName, feedback, chatTranscript),
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
