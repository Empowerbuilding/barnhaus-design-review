const Anthropic = require('@anthropic-ai/sdk');

let client = null;
function getClient() {
  if (!client) client = new Anthropic();
  return client;
}

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

async function analyzeImage(imageId, base64, mimeType) {
  if (analysisCache.has(imageId)) return analysisCache.get(imageId);

  const anthropic = getClient();
  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 500,
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'image',
            source: { type: 'base64', media_type: mimeType, data: base64 },
          },
          {
            type: 'text',
            text: `Analyze this architectural render. Return JSON only:
{
  "roomType": "<one of: exterior, floor plan, kitchen, living room, great room, primary bedroom, primary bath, bathroom, office, bonus room, patio, outdoor, garage, hallway, laundry, dining room, other>",
  "angle": "<front, rear, side, aerial, interior, detail>",
  "features": ["<visible features like fireplace, island, beams, etc>"],
  "isFloorPlan": <true/false>
}`,
          },
        ],
      },
    ],
  });

  let analysis;
  try {
    const text = response.content[0].text;
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    analysis = JSON.parse(jsonMatch ? jsonMatch[0] : text);
  } catch {
    analysis = { roomType: 'other', angle: 'interior', features: [], isFloorPlan: false };
  }

  analysisCache.set(imageId, analysis);
  return analysis;
}

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

async function chatResponse(messages, systemPrompt, imageBase64, imageMime) {
  const anthropic = getClient();

  // Build message array — inject image into last user message only
  const claudeMessages = messages.map((m, i) => {
    if (i === messages.length - 1 && m.role === 'user' && imageBase64) {
      return {
        role: 'user',
        content: [
          { type: 'image', source: { type: 'base64', media_type: imageMime || 'image/png', data: imageBase64 } },
          { type: 'text', text: m.content },
        ],
      };
    }
    return m;
  });

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    system: systemPrompt,
    messages: claudeMessages,
  });
  return response.content[0].text;
}



async function analyzeInspirationImage(imageUrl) {
  const anthropic = getClient();
  try {
    // Fetch the image and convert to base64
    const res = await fetch(imageUrl);
    if (!res.ok) throw new Error(`Image fetch ${res.status}`);
    const buffer = await res.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    const mimeType = res.headers.get('content-type') || 'image/jpeg';

    const response = await anthropic.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 300,
      messages: [{
        role: 'user',
        content: [
          { type: 'image', source: { type: 'base64', media_type: mimeType, data: base64 } },
          { type: 'text', text: 'Describe this interior/exterior design inspiration image concisely for a designer. Cover: overall style, color palette, key materials, standout features, and mood. 3-4 sentences max.' },
        ],
      }],
    });
    return response.content[0].text;
  } catch (err) {
    console.error('Inspiration analysis error:', err.message);
    return null;
  }
}

module.exports = { analyzeImage, getQuestionsForRoom, groupAndSortImages, chatResponse, analyzeInspirationImage, QUESTION_BANK };
