const JUANITO_URL = process.env.JUANITO_GATEWAY_URL || 'http://127.0.0.1:18792';
const JUANITO_TOKEN = process.env.JUANITO_GATEWAY_TOKEN || 'juanito-2026';
const SESSION_KEY = 'agent:main:main';

const analysisCache = new Map();

const QUESTION_BANK = {
  exterior: [
    'What is your first reaction to the overall look?',
    'How do you feel about the roofline and pitch?',
    'Any changes to the entry or front door?',
    'How do you feel about the window sizes and placement?',
  ],
  kitchen: [
    'What cabinet color or finish are you thinking — white, navy, natural wood, or two-tone?',
    'Countertop preference — quartz, marble look, concrete, or butcher block?',
    'Does the island size feel right for how you cook and entertain?',
    'Open shelving, upper cabinets, or a mix?',
  ],
  'living room': [
    'How do you feel about the ceiling height and any exposed beams?',
    'Fireplace placement and surround feel right?',
    'Any changes to the window wall or views?',
  ],
  'great room': [
    'How do you feel about the ceiling height and any exposed beams?',
    'Fireplace placement and surround feel right?',
    'Any changes to the window wall or views?',
  ],
  'primary bedroom': [
    'Does this feel like the right size and scale?',
    'What flooring would you like — hardwood, tile, or carpet?',
    'How do you feel about the natural light and window placement?',
  ],
  'master bedroom': [
    'Does this feel like the right size and scale?',
    'What flooring would you like — hardwood, tile, or carpet?',
    'How do you feel about the natural light and window placement?',
  ],
  'primary bath': [
    'What tile finish — marble, large format, subway, or concrete look?',
    'Freestanding tub or built-in? Walk-in shower size?',
    'Any changes to the vanity layout?',
  ],
  'master bath': [
    'What tile finish — marble, large format, subway, or concrete look?',
    'Freestanding tub or built-in? Walk-in shower size?',
    'Any changes to the vanity layout?',
  ],
  bathroom: [
    'What tile finish — marble, large format, subway, or concrete look?',
    'Freestanding tub or built-in? Walk-in shower size?',
    'Any changes to the vanity layout?',
  ],
  patio: [
    'What finish on the ceiling — wood, painted, or exposed steel?',
    'Outdoor kitchen yes or no?',
    'Fireplace or fire pit outside?',
  ],
  outdoor: [
    'What finish on the ceiling — wood, painted, or exposed steel?',
    'Outdoor kitchen yes or no?',
    'Fireplace or fire pit outside?',
  ],
  'floor plan': [
    'Does the overall layout flow feel right?',
    'Anything about room sizes or placement you would change?',
    'Does the garage placement work?',
  ],
  default: [
    'Does this room feel like the right size?',
    'What finish or style direction do you want here?',
  ],
};

function getQuestionsForRoom(roomType) {
  const key = roomType.toLowerCase();
  for (const [k, questions] of Object.entries(QUESTION_BANK)) {
    if (key.includes(k) || k.includes(key)) return questions;
  }
  return QUESTION_BANK.default;
}

const ROOM_ORDER = [
  'floor plan',
  'exterior',
  'kitchen',
  'living room',
  'great room',
  'dining room',
  'primary bedroom',
  'primary bath',
  'master bedroom',
  'master bath',
  'bathroom',
  'office',
  'bonus room',
  'laundry',
  'hallway',
  'patio',
  'outdoor',
  'garage',
  'other',
];

function groupAndSortImages(analyzedImages) {
  const groups = {};
  for (const img of analyzedImages) {
    const room = img.analysis.roomType || 'other';
    if (!groups[room]) groups[room] = [];
    groups[room].push(img);
  }

  const sorted = [];
  for (const room of ROOM_ORDER) {
    if (groups[room]) {
      sorted.push({ roomType: room, images: groups[room] });
      delete groups[room];
    }
  }
  for (const [room, images] of Object.entries(groups)) {
    sorted.push({ roomType: room, images });
  }

  return sorted;
}

async function sendToJuanito(message, imageBase64, imageMime) {
  let text = message;
  if (imageBase64) {
    text = `data:${imageMime};base64,${imageBase64}\n\n${message}`;
  }

  try {
    const response = await fetch(`${JUANITO_URL}/tools/invoke`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${JUANITO_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tool: 'sessions_send',
        args: {
          sessionKey: SESSION_KEY,
          message: text,
          timeoutSeconds: 45,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Juanito returned ${response.status}`);
    }

    const result = await response.json();
    return result.content[0].text;
  } catch (err) {
    console.error('Juanito unreachable:', err.message);
    return "I'm having trouble connecting right now. Please try again in a moment.";
  }
}

async function initJuanitoSession(projectSlug, clientName, projectName) {
  const message = `DESIGN REVIEW SESSION STARTING. Client: ${clientName}. Project: ${projectSlug} (${projectName}). You are now Silas, the Barnhaus design review assistant. Walk the client through their D1 renders warmly and professionally. Begin with a warm greeting.`;
  return sendToJuanito(message);
}

async function analyzeImageWithJuanito(imageId, base64, mimeType) {
  if (analysisCache.has(imageId)) return analysisCache.get(imageId);

  const prompt = 'Analyze this architectural render. Return ONLY valid JSON: { "roomType": "<exterior|floor plan|kitchen|living room|great room|primary bedroom|primary bath|bathroom|office|bonus room|patio|outdoor|garage|hallway|laundry|dining room|other>", "angle": "<front|rear|side|aerial|interior|detail>", "features": ["<visible features>"], "isFloorPlan": <true/false> }';

  let analysis;
  try {
    const text = await sendToJuanito(prompt, base64, mimeType);
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    analysis = JSON.parse(jsonMatch ? jsonMatch[0] : text);
  } catch {
    analysis = { roomType: 'other', angle: 'interior', features: [], isFloorPlan: false };
  }

  analysisCache.set(imageId, analysis);
  return analysis;
}

module.exports = {
  sendToJuanito,
  initJuanitoSession,
  analyzeImageWithJuanito,
  getQuestionsForRoom,
  groupAndSortImages,
  QUESTION_BANK,
};
