require('dotenv').config();
const express = require('express');
const path = require('path');
const { WebSocketServer } = require('ws');
const http = require('http');
const { getProjectRenders, streamImage, getImageBase64 } = require('./drive');
const { sendToJuanito, initJuanitoSession, generateDesignBrief, getQuestionsForRoom, QUESTION_BANK, setSessionContext } = require('./juanito');
const { analyzeImage, groupAndSortImages, analyzeInspirationImage } = require('./claude');
const { notifyDiscord, notifyDiscordBrief, writeToCRM } = require('./notify');
const multer = require('multer');
const { getInspirationImages, getInspirationForQuestion, setProjectStyle, getProjectStyle } = require('./inspiration');
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 20 * 1024 * 1024 } });

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: '/ws' });

app.use(express.json({ limit: '50mb' }));

const PORT = process.env.PORT || 3000;
const projectCache = new Map();
const roomQuestionIndexes = new Map(); // key: `${sessionId}:${roomType}` → index

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
      return;
    }
    // Table doesn't exist — create it via Supabase Management API
    console.log('design_review_sessions not found — attempting to create...');
    const createRes = await fetch(`${SUPABASE_URL}/rest/v1/rpc/create_design_review_sessions_if_not_exists`, {
      method: 'POST',
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}`, 'Content-Type': 'application/json' },
      body: '{}',
    }).catch(() => null);
    if (!createRes?.ok) {
      // Fall back: make sessions work without DB (in-memory only)
      console.log('Running without session persistence — create design_review_sessions table in Supabase');
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
      // Store memo as session context so Silas has client-specific knowledge on every call
      if (sessionId) setSessionContext(sessionId, memo);
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
    await sendToJuanito(msg, [], null).catch(() => {});
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
    isImageChangeTrigger, triggerMessage, projectSlug, currentImageFeatures, sessionId,
    isInspirationSelection,
  } = req.body;

  try {
    let fullMessage;
    const roomKey = `${sessionId || 'anon'}:${currentRoom || 'default'}`;

    if (isImageChangeTrigger && triggerMessage) {
      const roomQuestions = getQuestionsForRoom(currentRoom || 'default');
      const questionList = roomQuestions?.questions?.map((q, i) => {
        const text = typeof q === 'string' ? q : (q.text || '');
        return `${i+1}. ${text}`;
      }).join('\n') || '';
      const baselineText = roomQuestions?.baseline
        ? (typeof roomQuestions.baseline === 'string' ? roomQuestions.baseline : roomQuestions.baseline.text)
        : '';
      const openingNote = roomQuestions?.opening
        ? `\n\nROOM GUIDANCE:\n${roomQuestions.opening}${baselineText ? '\n\nBASELINE: ' + baselineText : ''}`
        : '';
      const behaviorRules = `

RULES FOR THIS IMAGE — READ BEFORE RESPONDING:
- Ask ONE question at a time. Wait for the client to respond before asking the next.
- Do NOT suggest moving to the next section or say "feel free to move on" — the client controls navigation.
- Do NOT say "I've flagged that" and then wrap up. After flagging a structural item, immediately pivot to the next question on the list.
- Stay in this room until the client navigates away. Keep the conversation going.
- If the client gives a short answer, probe deeper before moving to the next question.
- Output ONLY your message to the client. No reasoning, no meta-commentary.`;

      // Build a summary of what's already been discussed in this room so Silas doesn't repeat
      const priorAnswers = messages.length > 0
        ? `\n\nALREADY COVERED IN THIS SESSION — DO NOT RE-ASK THESE:\nThe following topics have already been discussed with the client. Do not bring them up again unless the client raises them:\n${
            messages
              .filter(m => m.role === 'user')
              .slice(-15)
              .map(m => `- Client said: "${(m.content || '').slice(0, 120)}"`)
              .join('\n')
          }`
        : '';

      fullMessage = triggerMessage
        + openingNote
        + (questionList ? `\n\nQUESTION BANK FOR ${(currentRoom || 'this room').toUpperCase()} — work through these conversationally. Skip anything already answered above:\n${questionList}` : '')
        + priorAnswers
        + behaviorRules;

      // Reset question index for this room on new image trigger
      roomQuestionIndexes.set(roomKey, 0);
    } else {
      const lastUserMessage = [...messages].reverse().find(m => m.role === 'user')?.content || '';
      const contextPrefix = `[CONTEXT: room=${currentRoom}, image=${currentImage}, client=${clientName}]`;
      fullMessage = `${contextPrefix}\n\n${lastUserMessage}`;

      // Advance question index on each user response
      const curIdx = roomQuestionIndexes.get(roomKey) || 0;
      roomQuestionIndexes.set(roomKey, curIdx + 1);
    }

    // Question bank drives buttons — Silas is instructed to ask the next question
    const roomBank = getQuestionsForRoom(currentRoom || 'default');
    // Prepend baseline as question[0] if it exists, so options stay in sync with Silas
    const baselineQ = roomBank?.baseline && typeof roomBank.baseline === 'object' ? roomBank.baseline : null;
    const allQuestions = baselineQ
      ? [baselineQ, ...(roomBank?.questions || [])]
      : (roomBank?.questions || []);

    const qIdx = roomQuestionIndexes.get(roomKey) || 0;

    // Which question should Silas ask NOW? (before advancing)
    const askIdx = (!isImageChangeTrigger && !isInspirationSelection) ? qIdx + 1 : qIdx;

    // Advance AFTER computing askIdx
    if (!isImageChangeTrigger && !isInspirationSelection) {
      roomQuestionIndexes.set(roomKey, qIdx + 1);
    }
    const sectionDone = askIdx >= allQuestions.length;
    const questionToAsk = sectionDone ? null : allQuestions[askIdx];

    // Inject the correct next question into Silas's prompt
    if (!isImageChangeTrigger) {
      if (questionToAsk) {
        const qText = typeof questionToAsk === 'string' ? questionToAsk : questionToAsk.text;
        fullMessage += `\n\n[NEXT QUESTION TO ASK: ${qText} — acknowledge their last answer briefly, then ask this in your own words naturally.]`;
      } else if (sectionDone) {
        fullMessage += `\n\n[ALL QUESTIONS FOR THIS SECTION ARE COMPLETE. Acknowledge their last answer warmly, give a brief summary of what was locked in, and let them know they can move to the next section using the Next button when ready.]`;
      }
    }

    // Options and images always come from the question Silas is about to ask
    const options = questionToAsk?.options || [];
    const serperContext = questionToAsk?.serperContext || null;
    const requiresImage = questionToAsk?.requiresImage || false;

    const roomProgress = {
      current: Math.min(askIdx + 1, allQuestions.length),
      total: allQuestions.length,
    };

    // Fetch inspiration images from QUESTION_BANK serperContext if this question needs them
    // Also check Silas SEARCH tag as fallback
    let inspirationFetch = Promise.resolve([]);
    if (requiresImage && serperContext) {
      inspirationFetch = getInspirationForQuestion(
        serperContext,
        getProjectStyle(projectSlug || ''),
        4
      );
    }

    const [silasResult, inspirationImages] = await Promise.all([
      sendToJuanito(fullMessage, messages, sessionId),
      inspirationFetch,
    ]);

    const reply = silasResult?.text || silasResult || '';
    // Use SEARCH tag from Silas if no serperContext in question bank
    const searchQuery = silasResult?.searchQuery || null;
    let finalImages = inspirationImages;
    if (!finalImages.length && searchQuery) {
      finalImages = await getInspirationForQuestion(searchQuery, getProjectStyle(projectSlug || ''), 4).catch(() => []);
    }

    res.json({
      reply,
      options: isInspirationSelection ? null : options,
      inspirationImages: finalImages,
      searchQuery: serperContext || searchQuery || null,
      questionIndex: qIdx,
      roomProgress: isInspirationSelection ? null : roomProgress,
    });
  } catch (err) {
    console.error('Chat error:', err.message);
    res.status(500).json({ error: 'Chat failed' });
  }
});

// Load more inspiration images (next page of results)
app.post('/api/inspiration/more', async (req, res) => {
  const { searchQuery, projectSlug, offset = 0 } = req.body;
  try {
    if (!searchQuery) return res.json({ images: [] });
    const images = await getInspirationForQuestion(
      searchQuery,
      getProjectStyle(projectSlug || ''),
      4,
      offset
    );
    res.json({ images: images || [] });
  } catch (err) {
    console.error('Inspiration more error:', err.message);
    res.json({ images: [] });
  }
});

// Client picked an inspiration image — analyze it and send to Silas

app.get('/api/inspiration', async (req, res) => {
  const { room, style = '', count = 5 } = req.query;
  if (!room) return res.status(400).json({ error: 'room required' });
  try {
    const images = await getInspirationImages(room, style, parseInt(count), []);
    res.json({ images });
  } catch (err) {
    console.error('Inspiration fetch error:', err.message);
    res.json({ images: [] });
  }
});

app.post('/api/inspiration/pick', async (req, res) => {
  const { imageUrl, imageIndex, roomType, clientName, sessionId, messages } = req.body;
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

    const silasPickResult = await sendToJuanito(contextMsg, messages || [], sessionId);
    const reply = silasPickResult?.text || silasPickResult || '';

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
    // Generate AI design brief first (Silas summarizes decisions for Michael)
    const projectSlug = req.body.projectSlug || projectName?.toLowerCase().replace(/\s+/g, '-') || 'unknown';
    const briefPromise = generateDesignBrief(projectSlug, clientName, chatTranscript, feedback)
      .then(brief => brief ? notifyDiscordBrief(projectName, clientName, brief) : null)
      .catch(err => console.error('Brief generation error:', err.message));

    await Promise.allSettled([
      briefPromise,
      notifyDiscord(projectName, clientName, feedback, req.body.enhancedUrls || {}),
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
    // Log but don't fail — client should always get success so they don't see error
    console.error('Feedback submission error:', err.message, err.stack);
    res.json({ success: true, warning: err.message });
  }
});

// Serve React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'dist'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js') || filePath.endsWith('.css')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
  }
}));
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
