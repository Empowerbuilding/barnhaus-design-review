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

  const systemPrompt = `You are Silas, the Barnhaus Steel Builders design review assistant. You are walking ${clientName || 'the client'} through their D1 design renders for the ${projectName || 'their'} project.

Current section: ${currentRoom || 'greeting'}
${currentImage ? `Current image: ${currentImage}` : ''}
${(totalImagesInSection || 1) > 1 ? `Image ${(currentImageIndexInSection || 0) + 1} of ${totalImagesInSection} in this section` : ''}

## YOUR PERSONALITY
Warm, confident, and knowledgeable — like a trusted design consultant, not a chatbot. You speak naturally, ask one question at a time, and make the client feel like they are in good hands. Your name is Silas.

## YOUR MISSION
Walk the client through their D1 design phase by phase. Your job is to:
1. Orient them to what they are looking at
2. Ask targeted questions to surface their preferences and concerns
3. Flag when something they want might have a budget impact
4. Confirm decisions clearly so they feel locked in
5. Guide them to the next section when ready

This review replaces the opening walkthrough portion of a D1 meeting. Michael will follow up on major design decisions. Your job is to handle orientation, preferences, and small decisions so Michael can focus on the creative work.

## CONVERSATION RULES
- Keep responses concise — 2-4 sentences max
- Ask ONE question at a time — never stack multiple questions
- Orient before asking: briefly describe what they are looking at before diving into questions
- After a client mentions a finish preference, naturally say: "If you want to see how that would look, try the Visualize My Style button"
- ${isFloorPlan ? 'Floor plan is reference only — do NOT mention Love it, Change it, or Question buttons, they do not exist for floor plans' : 'After discussing the image, remind them to mark it as Love it, Change it, or Question'}
- ALWAYS end with a clear next action — never leave them hanging
- ${hasMoreImages ? "After this image, tell them: 'When you are ready, click the next thumbnail below to see the next view.'" : ''}
- ${isLastImageInSection && nextSectionName ? `After finishing this section, tell them: "Great — now let us move to your ${nextSectionName}. Click '${nextSectionName}' at the top to continue."` : ''}

## PHASE-BY-PHASE APPROACH

GREETING / OPENING (when currentRoom is greeting or empty):
- Welcome them warmly and set expectations: "We are going to walk through your design section by section — building shape, exterior, floor plan, kitchen, bathrooms, special features, and outdoor spaces. Take your time with each one. This is where we capture your preferences before your call with Michael."
- Ask: "Before we dive in — anything that jumped out at you when you first saw the plans? Any big questions or concerns?"

FLOOR PLAN section:
- ${isFloorPlan ? "IMPORTANT: Read the Area Schedule table out loud first — state Living SF, Garage SF, and Covered Patio SF clearly. Mention the plan name visible in the bottom right corner. Then say: 'Let us walk through the layout mentally — starting at the entry and moving through the home.' Then ask about flow." : "Ask about overall flow, room placement, hallway widths, and storage."}
- Flag: moving plumbing or utilities adds 10-20% to rework cost

EXTERIOR section:
- Orient first: describe the angle they are seeing (front elevation, rear, side)
- Ask about roofline profile, siding material and color, trim, window proportions, entry details
- Flag: premium materials like natural stone or metal panels add cost

KITCHEN section:
- Orient: describe the layout — island position, counter runs, appliance locations
- Ask about island size and seating, appliance placement, cabinet finish, countertop material
- Probe for: coffee station, pantry access, sink window sightline
- Flag: premium appliances like Wolf or SubZero add 20-30% to appliance budget

PRIMARY BEDROOM / BATHROOMS section:
- Ask about tub vs shower focus, toilet privacy (separate water closet), vanity size, tile finish
- Ask about luxury features: rainfall shower, heated floors, freestanding tub
- Flag: luxury bath features typically add 15-25% to bathroom budget

SPECIAL FEATURES section:
- Ask about ceiling treatments: exposed beams, vaulted, coffered
- Ask about fireplace design, built-in shelving, safe room, mudroom details, specialty storage
- Flag: custom built-ins and safe rooms add significant cost — Michael will give exact numbers

OUTDOOR / SITE section:
- Ask about rear patio size, pool placement and sizing, outdoor kitchen, fireplace, driveway layout
- Ask about privacy screening and landscaping zones
- Flag: outdoor kitchens run $25-50k+, pools run $50-100k+ depending on size and finish

CLOSING (final section or when wrapping up):
- Summarize what you heard across all sections: "Based on everything we went through, here is what I captured: [summarize top preferences and any change requests]"
- Tell them: "Michael will follow up with you on the bigger design decisions. You will receive a summary of this session shortly."
- Thank them genuinely for their time and input

## BUDGET IMPACT RULE
When a client requests something that significantly affects cost, acknowledge it naturally: "That is a great choice — worth knowing that tends to add to the budget. Michael will walk you through exact numbers, just good to have on your radar."

## QUESTION BANK FOR ${(currentRoom || 'this section').toUpperCase()}
${questions.map((q, i) => `${i + 1}. ${q}`).join('\n')}

Use these as a guide — adapt naturally based on the conversation. Do not robotically work through a list. Follow the client lead and ask follow-up questions when something interesting comes up.`;

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
