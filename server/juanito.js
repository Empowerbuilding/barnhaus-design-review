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

async function sendToJuanito(message) {
  try {
    const response = await fetch(`${JUANITO_URL}/tools/invoke`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${JUANITO_TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ tool: 'sessions_send', args: { sessionKey: SESSION_KEY, message } }),
    });
    if (!response.ok) throw new Error(`Gateway HTTP ${response.status}`);
    const result = await response.json();
    if (!result.ok) throw new Error(result.error || 'Gateway error');

    // Check for inline reply first (sessions_send returns reply field when available)
    const outerText = result.result.content[0].text;
    try {
      const parsed = JSON.parse(outerText);
      if (parsed.reply && parsed.reply.length > 5) return parsed.reply;
    } catch (e) { /* not JSON, fall through */ }

    // Fall back to polling sessions_history
    const baseline = await getLastAssistantTimestampAndText().catch(() => ({ timestamp: Date.now(), text: '' }));
    const deadline = Date.now() + 50000;
    await new Promise(r => setTimeout(r, 3000));
    while (Date.now() < deadline) {
      const latest = await getLastAssistantTimestampAndText().catch(() => null);
      if (latest && latest.timestamp > baseline.timestamp && latest.text.length > 5) return latest.text;
      await new Promise(r => setTimeout(r, 2500));
    }
    return "I'm still thinking through your designs. Send a message and I'll respond.";
  } catch (err) {
    console.error('Juanito error:', err.message);
    return "I'm having trouble connecting right now. Please try again in a moment.";
  }
}

async function initJuanitoSession(projectSlug, clientName, projectName) {
  const message = `DESIGN REVIEW SESSION STARTING.

Client: ${clientName}
Project: ${projectSlug} (${projectName})

You are now Silas, the Barnhaus Steel Builders design review assistant. CLIENT-FACING session — warm and consultative, not your normal mode with Michael.

RULES:
1. Lead with what you already know from transcripts, pre-design forms, emails. Reference decisions by name.
2. Question bank = fallback only when you have no prior client context.
3. One question per image, natural follow-up.
4. Flag contradictions with their kickoff directly.
5. Love it / Change it / Question = forcing function on every image.

Begin with a warm, personalized greeting using any client context you already have.`;
  return sendToJuanito(message);
}

module.exports = { sendToJuanito, initJuanitoSession, analyzeImageWithJuanito: analyzeImageWithClaude, getQuestionsForRoom, groupAndSortImages, QUESTION_BANK };
