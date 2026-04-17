const JUANITO_URL = process.env.JUANITO_GATEWAY_URL || 'http://127.0.0.1:18792';
const JUANITO_TOKEN = process.env.JUANITO_GATEWAY_TOKEN || 'juanito-2026';
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY;
const SESSION_KEY = 'agent:main:main';

const analysisCache = new Map();

const QUESTION_BANK = {
  exterior: ['What is your first reaction to the overall look?','How do you feel about the roofline and pitch?','Any changes to the entry or front door?','How do you feel about the window sizes and placement?'],
  kitchen: ['What cabinet color or finish are you thinking — white, navy, natural wood, or two-tone?','Countertop preference — quartz, marble look, concrete, or butcher block?','Does the island size feel right for how you cook and entertain?','Open shelving, upper cabinets, or a mix?'],
  'living room': ['How do you feel about the ceiling height and any exposed beams?','Fireplace placement and surround feel right?','Any changes to the window wall or views?'],
  'great room': ['How do you feel about the ceiling height and any exposed beams?','Fireplace placement and surround feel right?','Any changes to the window wall or views?'],
  'primary bedroom': ['Does this feel like the right size and scale?','What flooring would you like — hardwood, tile, or carpet?','How do you feel about the natural light and window placement?'],
  'master bedroom': ['Does this feel like the right size and scale?','What flooring would you like — hardwood, tile, or carpet?','How do you feel about the natural light and window placement?'],
  'primary bath': ['What tile finish — marble, large format, subway, or concrete look?','Freestanding tub or built-in? Walk-in shower size?','Any changes to the vanity layout?'],
  'master bath': ['What tile finish — marble, large format, subway, or concrete look?','Freestanding tub or built-in? Walk-in shower size?','Any changes to the vanity layout?'],
  bathroom: ['What tile finish — marble, large format, subway, or concrete look?','Freestanding tub or built-in? Walk-in shower size?','Any changes to the vanity layout?'],
  patio: ['What finish on the ceiling — wood, painted, or exposed steel?','Outdoor kitchen yes or no?','Fireplace or fire pit outside?'],
  outdoor: ['What finish on the ceiling — wood, painted, or exposed steel?','Outdoor kitchen yes or no?','Fireplace or fire pit outside?'],
  'floor plan': ['Does the overall layout flow feel right?','Anything about room sizes or placement you would change?','Does the garage placement work?'],
  default: ['Does this room feel like the right size?','What finish or style direction do you want here?'],
};

function getQuestionsForRoom(roomType) {
  const key = roomType.toLowerCase();
  for (const [k, questions] of Object.entries(QUESTION_BANK)) {
    if (key.includes(k) || k.includes(key)) return questions;
  }
  return QUESTION_BANK.default;
}

const ROOM_ORDER = ['floor plan','exterior','kitchen','living room','great room','dining room','primary bedroom','primary bath','master bedroom','master bath','bathroom','office','bonus room','laundry','hallway','patio','outdoor','garage','other'];

function groupAndSortImages(analyzedImages) {
  const groups = {};
  for (const img of analyzedImages) {
    const room = img.analysis.roomType || 'other';
    if (!groups[room]) groups[room] = [];
    groups[room].push(img);
  }
  const sorted = [];
  for (const room of ROOM_ORDER) {
    if (groups[room]) { sorted.push({ roomType: room, images: groups[room] }); delete groups[room]; }
  }
  for (const [room, images] of Object.entries(groups)) sorted.push({ roomType: room, images });
  return sorted;
}

// Image analysis via Claude API directly (never send base64 to Juanito session)
async function analyzeImageWithClaude(imageId, base64, mimeType) {
  if (analysisCache.has(imageId)) return analysisCache.get(imageId);
  const fallback = { roomType: 'other', angle: 'interior', features: [], isFloorPlan: false };
  if (!ANTHROPIC_KEY) { analysisCache.set(imageId, fallback); return fallback; }
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'x-api-key': ANTHROPIC_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251022',
        max_tokens: 256,
        messages: [{ role: 'user', content: [
          { type: 'image', source: { type: 'base64', media_type: mimeType, data: base64 } },
          { type: 'text', text: 'Analyze this architectural render. Return ONLY valid JSON: { "roomType": "<exterior|floor plan|kitchen|living room|great room|primary bedroom|primary bath|bathroom|office|bonus room|patio|outdoor|garage|hallway|laundry|dining room|other>", "angle": "<front|rear|side|aerial|interior|detail>", "features": ["<2-4 visible features>"], "isFloorPlan": <true/false> }' },
        ]}],
      }),
    });
    if (!response.ok) throw new Error(`Claude API ${response.status}`);
    const data = await response.json();
    const text = data.content[0].text;
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const analysis = JSON.parse(jsonMatch ? jsonMatch[0] : text);
    analysisCache.set(imageId, analysis);
    return analysis;
  } catch (err) {
    console.error('Image analysis error:', err.message);
    analysisCache.set(imageId, fallback);
    return fallback;
  }
}

// Juanito gateway — text only, never images
async function invokeGateway(tool, args) {
  const response = await fetch(`${JUANITO_URL}/tools/invoke`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${JUANITO_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ tool, args }),
  });
  if (!response.ok) throw new Error(`Gateway HTTP ${response.status}`);
  const result = await response.json();
  if (!result.ok) throw new Error(result.error || 'Gateway error');
  return result.result.content[0].text;
}

async function getLastAssistantTimestampAndText() {
  const text = await invokeGateway('sessions_history', { sessionKey: SESSION_KEY, limit: 2 });
  try {
    const parsed = JSON.parse(text);
    const messages = parsed.messages || [];
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].role === 'assistant') {
        const msg = messages[i];
        const content = Array.isArray(msg.content)
          ? (msg.content.find(b => b.type === 'text') || {}).text || ''
          : (typeof msg.content === 'string' ? msg.content : '');
        return { timestamp: msg.timestamp || 0, text: content };
      }
    }
  } catch (e) { /* ignore */ }
  return { timestamp: 0, text: '' };
}

function stripThinkBlocks(text) {
  // Remove <think>...</think> reasoning blocks that shouldn't reach the client
  return text.replace(/<think>[\s\S]*?<\/think>/gi, '').replace(/<final>([\s\S]*?)<\/final>/i, '$1').trim();
}

async function sendToJuanito(message) {
  try {
    const response = await fetch(`${JUANITO_URL}/tools/invoke`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${JUANITO_TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tool: 'sessions_send',
        args: { sessionKey: SESSION_KEY, message, timeoutSeconds: 55 },
      }),
    });
    if (!response.ok) throw new Error(`Gateway HTTP ${response.status}`);
    const result = await response.json();
    if (!result.ok) throw new Error(result.error || 'Gateway error');

    const outerText = result.result.content[0].text;
    try {
      const parsed = JSON.parse(outerText);
      if (parsed.reply && parsed.reply.length > 5) {
      const clean = stripThinkBlocks(parsed.reply);
      if (clean === 'NO_REPLY' || clean === 'ANNOUNCE_SKIP' || clean === 'HEARTBEAT_OK') return null;
      return clean;
    }
    } catch (e) { /* not JSON */ }

    // outerText itself might be the reply
    if (outerText && outerText.length > 5 && !outerText.startsWith('{')) {
      const clean = stripThinkBlocks(outerText);
      if (clean === 'NO_REPLY' || clean === 'ANNOUNCE_SKIP' || clean === 'HEARTBEAT_OK') return null;
      return clean;
    }

    return "I'm still reviewing your designs — send a message and I'll respond.";
  } catch (err) {
    console.error('Juanito error:', err.message);
    return "I'm having trouble connecting right now. Please try again in a moment.";
  }
}

async function initJuanitoSession(projectSlug, clientName, projectName, rooms) {
  const roomList = rooms && rooms.length > 0 ? rooms.join(', ') : 'to be determined from the renders';
  const message = `DESIGN REVIEW SESSION STARTING — GENERATE DRAFT OVERVIEW MEMO.

Client: ${clientName}
Project: ${projectSlug} (${projectName})
Rooms in this draft: ${roomList}

STEP 1: Read projects/${projectSlug.charAt(0).toUpperCase() + projectSlug.slice(1)}.md right now before writing anything. If the file isn't found, try projects/${projectSlug}.md. Extract the client's first name, key kickoff decisions, style direction, and any specific requests they made.

STEP 2: Write the personalized Draft 1 Overview Memo. This is the FIRST thing the client sees — make it feel like real work was done specifically for them. Pull directly from the project file. No generic filler.

### Welcome
Warm, 2-sentence greeting using the client's actual first name. Reference one specific thing from their project — a room they were excited about, a design constraint, a vibe they described. Make it personal.

### What We Built
3-5 bullet points of specific kickoff decisions Michael honored in Draft 1. Name real things: actual rooms, materials, layout choices, constraints. (e.g. "Bunk room with stairs — not ladders — exactly as Amie specified.") Do NOT use placeholders. If you can't find specifics, read the file again.

### What We'll Cover Today
One line intro then a bullet list of the actual rooms in this draft (${roomList}). Tell them what Silas will ask about so there are no surprises.

### What Happens Next
1-2 sentences: their answers go straight to Michael for Draft 2. He'll review everything and reach out to schedule the next step.

Output the memo text only. No extra commentary, no questions.`;
  return sendToJuanito(message);
}

module.exports = { sendToJuanito, initJuanitoSession, analyzeImageWithJuanito: analyzeImageWithClaude, getQuestionsForRoom, groupAndSortImages, QUESTION_BANK };
