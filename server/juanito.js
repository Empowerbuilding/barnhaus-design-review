const JUANITO_URL = process.env.JUANITO_GATEWAY_URL || 'http://127.0.0.1:18792';
const JUANITO_TOKEN = process.env.JUANITO_GATEWAY_TOKEN || 'juanito-2026';
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY;
const SESSION_KEY = 'agent:main:main';

const analysisCache = new Map();

const QUESTION_BANK = {
  'floor plan': {
    opening: `The floor plan is NOT for Silas to redesign — that is Michael's job on the live call. Silas plays SPONGE here: validate what was built, collect gut reactions, flag any redlines for Michael. Do NOT promise layout changes. Do NOT say you will move walls.

STEP 1 — VALIDATION: Open by proving you listened. Name the specific SF, key rooms, and constraints Michael honored. Make it feel like real work was done.
Example: "Here is the Draft 1 floor plan. Michael locked in the [X] SF footprint, [specific room], [specific constraint from kickoff]."

STEP 2 — GUT REACTION: Ask 2-3 macro questions. No layout redesign, just notes.
Example: "Before we move into the room-by-room finishes, give me your gut reaction on the layout."

STEP 3 — TRAP DOOR: If they try to move walls or redesign rooms, acknowledge and redirect immediately.
Say: "I've flagged that layout change for your live meeting with Michael. He'll review the structural impact and make those adjustments with you in real-time. For now, let's move into locking in your aesthetic vibe for these rooms."

STEP 4 — AUTO-ADVANCE: After collecting their floor plan notes, tell them Silas is moving to the room finishes now.`,
    questions: [
      "Are all the rooms you requested accounted for on this floor plan?",
      "Is the house oriented correctly for your driveway approach and your best views?",
      "How is the overall circulation feeling — can you mentally walk from the entry through the main living areas without confusion?",
      "Any gut reactions on room sizes or placement before we move into the finishes? (Flag anything for Michael — he will address it on your live call.)"
    ]
  },

  'exterior': {
    opening: `Start with a vibe check — show 3 inspiration images before asking anything functional. Reference their specific kickoff style direction. Frame the AI renders honestly if they show distorted proportions.`,
    baseline: `Standard Barnhaus exterior baseline: corrugated or standing seam metal roof, board-and-batten or metal panel siding, black window frames, stone or brick wainscoting at base. Auto-approve this baseline, only dig in if they want changes.`,
    questions: [
      "Does this color blocking and material palette match the vision you had in mind? (vibe check first)",
      "Are the rooflines and roof pitches hitting the mark, or do we need to adjust the pitch or form?",
      "Siding: are we confirmed on the siding type — corrugated vs standing seam, board and batten, or mixed materials?",
      "Window frames: black, white, or another color?",
      "Do we need more natural light in any specific rooms — bigger windows anywhere?",
      "Porches and patios: are the overhang depths sufficient, or do we need to extend the covered outdoor living?",
      "Window grids: no grids (clean modern look), simple modern grids (2x2 or single horizontal), or traditional multi-pane grids?",
      "Any black metal awnings over windows, or keep the lines clean?",
      "Stone or brick wainscoting across the base — confirmed, or adjust the height?"
    ]
  },

  'kitchen': {
    opening: `Start with The Recommended Function List. Present the baseline and get them to approve it before drilling into aesthetics. This saves 45 minutes of questioning.`,
    baseline: `Michael's standard high-end kitchen baseline — auto-approve unless they request changes:
✅ Built-in panel-ready refrigerator
✅ Drawers for all base cabinets (not doors)
✅ Dishwasher and dedicated trash pull-out directly beside the main sink
✅ Skinny pull-out spice & tray cabinets flanking both sides of the range
Ask: "Does this baseline work for you, or do you want to change anything?"`,
    questions: [
      "BASELINE FIRST: Present the standard function list and get Love it / Change it before aesthetics.",
      "Island: what size feels right? Do you want a waterfall stone edge, or a standard square overhang?",
      "Island seating: which side, and how many seats?",
      "Microwave: Michael usually tucks it into a drawer in the island — does that work, or do you want it elsewhere?",
      "Range hood: custom plaster, exposed metal/steel, or built-in to match the cabinets?",
      "Upper cabinets vs open floating shelves flanking the hood — which do you prefer?",
      "Kitchen ceiling: vault it with the great room, keep it flat and high, or drop it flat and start the vault at the edge of the kitchen?",
      "Sink placement confirmed? Any secondary sink (island or butler's pantry side)?",
      "Range placement and fridge placement — are we happy with where those land?",
      "Double-stacked wall oven — do you want this, or stick with the main range?",
      "Warming drawers — do you want these?",
      "Backsplash: tile, stone, or slab behind the range?",
      "Any extras: ice machine, beverage fridge, wine cooler, additional sink?"
    ]
  },

  'pantry': {
    opening: `Show a beautiful butler's pantry image first — the sexy hook. Standard setup: deep countertops, open shelving on top, base storage on bottom. Almost everyone loves this.`,
    baseline: `Standard Barnhaus butler's pantry: thick wood open shelving on top, deep countertops for appliances, base storage (open shelves with baskets is cheaper and looks great). Show the image and get approval first.`,
    questions: [
      "VIBE CHECK FIRST: Show a high-end butler's pantry image. 'Does this vibe match what you're envisioning?'",
      "Base storage: open shelves with baskets (lower cost, great look), or full custom drawers and cabinet faces on the bottom?",
      "What small appliances are living back here — air fryer, toaster, coffee maker?",
      "Can those appliances sit on the counter, or do you want them built-in or hidden behind an appliance garage door?",
      "Coffee station: how will it function? Do you need a water line run for a plumbed-in espresso machine?",
      "Secondary fridge back here? Dedicated ice machine? Wine cooler?",
      "Prep sink in the pantry?"
    ]
  },

  'great room': {
    opening: `Fireplace is the centerpiece — start with 3 inspiration images. The right image answers almost every question at once. Standard setup: stone or tile surround, base cabinets flanking both sides, thick open floating shelves above the cabinets, heavy mantle for the TV.`,
    baseline: `Standard Barnhaus fireplace setup: stone or tile surround, base cabinets flanking the firebox for storage, thick open floating shelves above those cabinets, and a heavy solid wood mantle sized for the TV. Almost nobody says no to this layout.`,
    questions: [
      "VIBE CHECK FIRST: Show 3 fireplace inspiration images that match their style. 'Which of these hits closest to your vision?'",
      "Fireplace type: gas or wood-burning? (affects framing for flue/chase)",
      "TV: are you planning to mount the TV above the mantle?",
      "Flanking cabinets: match the wood finish of the floating shelves above, or paint them to match the kitchen cabinets?",
      "Hearth: raised hearth bench at the base, or firebox flush to the floor?",
      "Ceiling in the great room: vault confirmed, or any changes to the height or form?"
    ]
  },

  'living room': {
    opening: `Same as great room — vibe check first, then confirm the fireplace and built-in details if applicable.`,
    questions: [
      "Is there a fireplace in this room? (if yes, run the great room fireplace flow)",
      "Built-in shelving or entertainment center on any wall?",
      "Ceiling: vault, flat high, or coffered?",
      "Natural light: are we happy with the window placement in this room?"
    ]
  },

  'primary bedroom': {
    opening: `Confirm the suite setup — privacy, ceiling, and any built-ins. Michael separates the master from the rest of the house whenever possible.`,
    questions: [
      "Does the bedroom fit your furniture — king bed plus nightstands on both sides with comfortable clearance?",
      "Ceiling: vault, tray, or flat? Any tongue and groove?",
      "Is the privacy entrance or separation from the guest wing working for you?",
      "Any built-ins — window seat, built-in bench, reading nook?",
      "Fireplace in the master — do you want one?"
    ]
  },

  'primary bath': {
    opening: `Master bath is all about the luxury fixtures. Show images — freestanding tub, massive walk-in shower, double vanity. This one is worth spending time on.`,
    questions: [
      "VIBE CHECK FIRST: Show 3 high-end master bath images. 'Which overall vibe matches your vision?'",
      "Freestanding soaking tub or no tub — Michael recommends against a traditional tub drop-in for luxury builds. Freestanding or skip the tub entirely?",
      "Walk-in shower: how large? Rain head, wall heads, handheld — all three?",
      "Separate shower valves or a single all-in-one unit?",
      "Double vanity confirmed? How long — 72 inches, 84 inches, longer?",
      "Vanity style: floating modern, or traditional base cabinet to the floor?",
      "Mirror: one massive slab mirror, individual mirrors per sink, or backlit LED mirrors?",
      "Lighting: flanking wall sconces vs overhead bar — or both?",
      "Shower niche: horizontal niche under the window sill, or vertical niche on the side wall?",
      "Wet room (shower and tub in same wet zone with no door) — is this something you want to explore?",
      "Heated floors in the master bath?",
      "Any water closet (private toilet room with a door) or open layout?"
    ]
  },

  'master bedroom': {
    opening: `Same as primary bedroom — confirm suite layout, privacy, ceiling, and any built-ins.`,
    questions: [
      "Does the bedroom fit your furniture — king bed plus nightstands with comfortable clearance?",
      "Ceiling: vault, tray, flat, or tongue and groove?",
      "Privacy entrance or separation from guest wing — is that working?",
      "Any built-ins or fireplace in the master?"
    ]
  },

  'master bath': {
    opening: `Same as primary bath — luxury fixtures, show images first.`,
    questions: [
      "VIBE CHECK FIRST: Show 3 high-end master bath images.",
      "Freestanding soaking tub, or no tub?",
      "Walk-in shower size and fixtures — rain head, wall heads, handheld?",
      "Double vanity: size and style (floating vs traditional)?",
      "Mirror setup: slab, individual, or backlit?",
      "Shower niche placement and orientation?",
      "Wet room option?",
      "Heated floors?"
    ]
  },

  'garage': {
    opening: `Confirm the practical stuff — door sizes, storage, any special needs like a workshop or utility bay.`,
    questions: [
      "Door sizes confirmed — do the openings fit your largest vehicle (dually, tall truck, boat trailer)?",
      "How many cars is this designed for — is that count still correct?",
      "Any dedicated workshop space or utility bay inside the garage?",
      "Built-in storage wall or just open walls?",
      "Utility sink in the garage?",
      "EV charger rough-in?"
    ]
  },

  'mudroom': {
    opening: `Show a great mudroom image first — bench, lockers, storage. This space depends heavily on whether laundry is combined or separate.`,
    baseline: `Standard Barnhaus mudroom: heavy wood bench with open shoe cubbies underneath, coat hooks or locker doors above, built-in storage. Show the image and ask which vibe they prefer before drilling into details.`,
    questions: [
      "VIBE CHECK FIRST: Show mudroom inspiration images — open hooks vs closed locker doors. 'Which style for the drop zone?'",
      "Open coat hooks or closed locker doors to hide the mess?",
      "Dog wash station or just a deep utility mop sink for boots and gear?",
      "Is laundry combined in this room or in a separate laundry room? (This determines the counter layout)"
    ]
  },

  'laundry': {
    opening: `Laundry room details — start with machine type since that determines everything else.`,
    questions: [
      "Front-load or top-load machines? (Front-load = continuous countertop over the top. Top-load = counters only on the side.)",
      "Do you want the washer and dryer elevated on pedestals so you don't have to bend over?",
      "Continuous folding countertop running across the top of the machines?",
      "How much counter space do you need for folding clothes?",
      "Hanging rod and open shelves above for drying clothes?",
      "Utility sink in the laundry room?",
      "Broom closet: tall built-in cabinet, or a framed closet with a door?",
      "Soap and supply storage: closed upper cabinets above the machines, or open floating shelves?"
    ]
  },

  'office': {
    opening: `Confirm the office function — built-in desk, storage, any specialty needs.`,
    questions: [
      "Built-in desk with upper cabinets and shelving, or keep it open for furniture?",
      "Any built-in bookcase or display wall?",
      "Ceiling: vault or flat?",
      "Murphy bed for flex use as a guest room?"
    ]
  },

  'porch': {
    opening: `Outdoor living is a big deal — confirm the coverage, ceiling, and outdoor kitchen or grill setup.`,
    questions: [
      "Is the depth of the covered porch sufficient — do you have enough shade in the afternoon?",
      "Outdoor kitchen: full built-in grill and counter setup, or just a gas hookup and space for a freestanding grill?",
      "Outdoor fireplace or fire pit?",
      "Tongue and groove or bead board on the porch ceiling?",
      "Ceiling fans — how many?",
      "TV hookup rough-in on the porch?"
    ]
  },

  'dining room': {
    opening: `Confirm the dining setup — formal vs casual, built-ins, ceiling.`,
    questions: [
      "Formal dining room or more of a casual everyday dining space?",
      "Built-in buffet or china cabinet on any wall?",
      "Ceiling: coffered, tray, or flat?",
      "Chandelier rough-in centered over the table?"
    ]
  },

  'foyer': {
    opening: `Show a high-end entryway image matching the aesthetic. Only ask if a foyer exists on the floor plan.`,
    questions: [
      "VIBE CHECK FIRST: Show a high-end entryway image matching their style.",
      "Storage: built-in coat closet, or a clean entry bench with art/mirrors on the wall?",
      "Sightline: keep it completely open, or add architectural framing (archway) to transition into the great room?",
      "Lighting: statement chandelier or recessed lighting?",
      "Front entry approach: wide tiered concrete steps up to the front door, or a continuous ramped walkway?"
    ]
  },

  'entryway': {
    opening: `Same as foyer — show inspiration image, confirm storage and lighting.`,
    questions: [
      "VIBE CHECK FIRST: Show a high-end entryway image.",
      "Built-in coat closet or entry bench with mirrors?",
      "Statement chandelier or recessed lighting?",
      "Front steps or ramped approach from the driveway?"
    ]
  },

  'guest bedroom': {
    opening: `Confirm ceilings, bunk details if applicable, and guest closets. Design one closet, apply to all.`,
    questions: [
      "Ceiling: Michael's standard is flat 10-foot for guest rooms to save on HVAC. Want to vault any of them?",
      "Bunk room (if applicable): VIBE CHECK — show custom built-in bunks with stairs/cubbies vs freestanding frames. Which direction?",
      "Guest closets: show a simple walk-in layout — 2-row hanging, shoe rack, simple cubbies. Does this work? Michael will apply this to all guest closets.",
      "Guest closet: full custom built-ins, or simple rods and shelves?"
    ]
  },

  'bunk room': {
    opening: `Show Pinterest images of custom built-in bunk rooms with stairs and cubbies vs freestanding frames.`,
    questions: [
      "VIBE CHECK FIRST: Custom built-in bunks with stairs vs freestanding frames — which direction?",
      "How many bunks — twin over twin, twin over full, or full over full?",
      "Built-in stairs with storage cubbies, or a simple ladder?",
      "Individual reading lights and outlets at each bunk?",
      "Ceiling height confirmed for top bunk clearance?"
    ]
  },

  'half bath': {
    opening: `The powder room is a statement piece — treat it separately from the guest baths. Show a dramatic powder room image (moody, floating vanity, backlit mirror).`,
    questions: [
      "VIBE CHECK FIRST: Show a dramatic high-end powder room. 'Bold statement piece, or clean and light like the guest baths?'",
      "Vanity: floating wall-mounted, or a vessel sink on a custom wood console?",
      "Mirror: round statement mirror, backlit rectangular, or framed art mirror?",
      "Cabinet over the toilet: yes or no?",
      "Any floating shelves for decor or storage?"
    ]
  },

  'powder room': {
    opening: `Same as half bath — show dramatic inspiration image, treat as a statement piece.`,
    questions: [
      "VIBE CHECK FIRST: Show a dramatic powder room image.",
      "Bold statement or clean and light like the guest baths?",
      "Vanity style: floating, vessel sink, or console?",
      "Mirror: round, backlit, or framed art?"
    ]
  },

  'pool': {
    opening: `Pool is practically a second design contract. Only trigger if on Draft 1 or explicitly requested. Start with a big vibe check — 3 pool images.`,
    questions: [
      "VIBE CHECK FIRST: Show 3 pool styles — modern geometric, infinity edge, natural rock/freeform. Which feels right?",
      "Hot tub: raised overflow hot tub spilling into the pool, or flush with the deck?",
      "Shallow tanning ledge for loungers — yes or no?",
      "How deep are we going?",
      "Built-in sunken fire pit by the pool, or concrete pad for a freestanding fire pit?",
      "Outdoor kitchen/bar: out by the pool under a separate pavilion, or keep it attached to the main house patio?",
      "How much deck/flatwork concrete around the pool?"
    ]
  },

  'safe room': {
    opening: `Only trigger if a safe room, gun vault, or storm shelter is on the floor plan or explicitly requested.`,
    questions: [
      "Is the current square footage sufficient for your needs?",
      "Security level: heavy vault door with cinder block reinforced walls, or a standard steel door in a framed room?",
      "Built-in shelving and gun racks, or bringing your own freestanding safes?",
      "Ventilation and climate control needed inside?"
    ]
  },

  'loft': {
    opening: `Only ask if a loft exists on the floor plan. Show a Pinterest image of an open loft overlooking a great room.`,
    questions: [
      "VIBE CHECK FIRST: Show an open loft overlooking a great room.",
      "Open to the great room with a clean metal or wood railing, or a solid half-wall for more privacy?",
      "What is the loft used for — sitting area, office, kids play area, sleeping?"
    ]
  },

  'kitchenette': {
    opening: `Ask exactly what appliances are needed — don't over-engineer it.`,
    questions: [
      "Full-size fridge or just an under-counter beverage fridge?",
      "Sink and microwave — yes or no?",
      "Full range or just a two-burner cooktop?",
      "How much cabinet storage is needed here?",
      "Counter material: match the main kitchen or something simpler?"
    ]
  },

  'game room': {
    opening: `Confirm the game room function. Only ask if on the floor plan.`,
    questions: [
      "VIBE CHECK FIRST: Show a high-end game room image.",
      "Built-in bar or wet bar in here?",
      "Custom storage for games/equipment?",
      "Built-in seating?",
      "Ceiling: vault, flat, or coffered?"
    ]
  },

  'media room': {
    opening: `Confirm theater/media room setup. Show a high-end media room image first.`,
    questions: [
      "VIBE CHECK FIRST: Show a high-end media room.",
      "Stepped platform seating for a stadium effect, or flat floor with furniture?",
      "Built-in media wall with screen and integrated speaker bays?",
      "Ceiling: coffered, flat, or specialized acoustic treatment?"
    ]
  },

  'theater': {
    opening: `Same as media room.`,
    questions: [
      "VIBE CHECK FIRST: Show a high-end home theater image.",
      "Stepped platform seating yes or no?",
      "Built-in media wall for the screen?",
      "Acoustic panels or sound treatment on walls/ceiling?"
    ]
  },

  'bar': {
    opening: `Show a high-end wet bar or wine nook image first — presents a fully designed concept, not open-ended questions.`,
    questions: [
      "VIBE CHECK FIRST: Show a high-end bar/wine nook matching their aesthetic.",
      "Wine fridge, under-counter beverage fridge, or both?",
      "Floating shelves with LED backlight for bottle display, or full upper cabinetry?",
      "Wet bar sink — yes or no?",
      "Dedicated under-counter ice machine?",
      "Bar overhang for seating?"
    ]
  },

  'winery': {
    opening: `Same as bar — show high-end winery inspiration first.`,
    questions: [
      "VIBE CHECK FIRST: Show a high-end wine room image.",
      "Built-in wine fridge, secondary beverage cooler, or both?",
      "Floating wood shelves backlit with LED strips, or enclosed cabinetry?",
      "Quartz counter and prep sink?",
      "Bar seating overhang?"
    ]
  },

  'default': {
    opening: `Confirm the space function and any built-ins or special features. Start with 'What were you most excited about in this room from your kickoff conversation?'`,
    questions: [
      "Is this space sized correctly for how you plan to use it?",
      "Any built-ins or specialty millwork in this room?",
      "Ceiling treatment — vault, tray, or flat?",
      "Natural light — are we happy with the window count and placement?"
    ]
  }
};

// Special sections not classified as rooms but tracked separately
const CLOSET_QUESTIONS = {
  opening: `Show a master closet inspiration image first. If his & hers are separate, show a luxury 'her' closet and a more masculine 'his' closet. If it's one shared walk-in, show a large shared built-in layout.`,
  baseline: `Standard Barnhaus master closet: two rows of hanging (one section reserved for long hanging — dresses, coats), built-in dresser drawers, open cubbies for folded items, angled shoe rack at the bottom, open shelving on top. Almost everyone wants this.`,
  questions: [
    "VIBE CHECK FIRST: Show closet inspiration image. 'Are you looking for full custom built-ins like this, or simpler shelves and hanging rods?'",
    "If his & hers are separate: show the masculine version for his. Does he want closed cabinetry for hunting/outdoor gear or gun safe integration?",
    "Center island in the closet: do you want a stone top (to match the bath) or wood?",
    "Long hanging zone for dresses and coats — one dedicated section on the ladies' side?",
    "Drawers: built-in dresser drawers in the wall panels, or open cubbies for folded items?",
    "Shoes: angled display rack at the bottom, or flat open shelving?"
  ]
};

const BAR_QUESTIONS = {
  opening: `Show a high-end wet bar or wine nook image. Usually triggers excitement.`,
  questions: [
    "VIBE CHECK FIRST: Show a high-end wet bar image. 'Is this the direction you want for the bar/wine area?'",
    "Wine fridge, under-counter beverage fridge, or both?",
    "Floating shelves above the counter for display, or full upper cabinetry?",
    "Sink at the bar — yes or no?",
    "Ice machine dedicated under the counter?"
  ]
};

const STAIRCASE_QUESTIONS = {
  questions: [
    "Treads: wood (matches floors), or carpet?",
    "Railing: metal (cable, rod, or flat bar), wood, or combination?",
    "Open risers (floating modern look) or closed risers?",
    "Angled/straight run or L-shaped?"
  ]
};



function getQuestionsForRoom(roomType) {
  const key = roomType.toLowerCase();
  for (const [k] of Object.entries(QUESTION_BANK)) {
    if (key.includes(k) || k.includes(key)) return QUESTION_BANK[k];
  }
  return QUESTION_BANK.default;
}

const ROOM_ORDER = ['floor plan','exterior','foyer','entryway','kitchen','pantry','dining room','great room','living room','bar','winery','master bedroom','primary bedroom','master bath','primary bath','master closet','guest bedroom','bunk room','bedroom','guest bath','bathroom','half bath','powder room','office','game room','media room','theater','loft','kitchenette','mudroom','laundry','safe room','pool','porch','patio','garage','shop','hallway','other'];

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

// Image analysis via Claude Haiku directly (never send base64 to Juanito session)
async function analyzeImageWithClaude(imageId, base64, mimeType) {
  if (analysisCache.has(imageId)) return analysisCache.get(imageId);
  const fallback = { roomType: 'other', angle: 'interior', features: [], isFloorPlan: false };
  if (!ANTHROPIC_KEY) { analysisCache.set(imageId, fallback); return fallback; }
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'x-api-key': ANTHROPIC_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 256,
        messages: [{ role: 'user', content: [
          { type: 'image', source: { type: 'base64', media_type: mimeType, data: base64 } },
          { type: 'text', text: 'Analyze this architectural render. Return ONLY valid JSON: { "roomType": "<exterior|floor plan|kitchen|pantry|living room|great room|primary bedroom|primary bath|bathroom|mudroom|laundry|porch|office|dining room|garage|other>", "angle": "<front|rear|side|aerial|interior|detail>", "features": ["<2-4 visible features>"], "isFloorPlan": <true/false> }' },
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

function stripThinkBlocks(text) {
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

CRITICAL BEHAVIOR RULES FOR THIS SESSION:
- You are Silas, Michael's automated design assistant.
- When a client responds to your question, DO NOT just acknowledge and go quiet. Dig in with the next relevant question from that room's question bank.
- Work through the room's key questions conversationally before naturally closing the section.
- Do NOT push the client to move on until you've covered the important decisions for that room.
- When a room is complete, close it naturally: "I think I have everything I need on [room] — feel free to move to the next section when you're ready."
- Output ONLY the message to send to the client. No internal reasoning, no meta-commentary.
- Never mention Zoom, Upworkers, or external tools. Say "live meeting with Michael" or "Google Meet."

STEP 1: Read projects/${projectSlug.charAt(0).toUpperCase() + projectSlug.slice(1)}.md right now before writing anything. If the file isn't found, try projects/${projectSlug}.md. Extract the client's first name, key kickoff decisions, style direction, and any specific requests they made.

STEP 2: Write the personalized Draft 1 Overview Memo. This is the FIRST thing the client sees — make it feel like real work was done specifically for them. Pull directly from the project file. No generic filler.

### Welcome
Warm, 2-sentence greeting using the client's actual first name. Reference one specific thing from their project — a room they were excited about, a design constraint, a vibe they described. Make it personal.

### What We Built
3-5 bullet points of specific kickoff decisions Michael honored in Draft 1. Name real things: actual rooms, materials, layout choices, constraints. Do NOT use placeholders. If you can't find specifics, read the file again.

### What We'll Cover Today
One line intro then a bullet list of the actual rooms in this draft (${roomList}). Tell them what Silas will ask about so there are no surprises.

### What Happens Next
1-2 sentences: their answers go straight to Michael for Draft 2. He'll review everything and reach out to schedule the next step.

Output the memo text only. No extra commentary, no questions.`;
  return sendToJuanito(message);
}

// Generate structured design brief at session end — posts to Discord
async function generateDesignBrief(projectSlug, clientName, chatTranscript, feedback) {
  // Build a compact summary of decisions captured in chat
  const chatSummary = chatTranscript
    ? chatTranscript
        .filter(m => m.role !== 'system')
        .slice(-60) // last 60 messages max
        .map(m => `${m.role === 'user' ? clientName : 'Silas'}: ${m.content}`)
        .join('\n')
    : '';

  const feedbackSummary = feedback && feedback.length > 0
    ? feedback.map(f => `${f.roomType || 'Room'} — ${f.imageName}: ${f.status}${f.notes ? ' (' + f.notes + ')' : ''}`).join('\n')
    : 'No image feedback recorded.';

  const message = `DESIGN REVIEW COMPLETE — GENERATE MICHAEL'S DESIGN BRIEF.

Client: ${clientName}
Project: ${projectSlug}

IMAGE FEEDBACK:
${feedbackSummary}

CHAT TRANSCRIPT (last 60 messages):
${chatSummary}

Read projects/${projectSlug.charAt(0).toUpperCase() + projectSlug.slice(1)}.md for full project context.

Now generate Michael's Design Brief for Draft 2. This is his instruction list — be specific and decisive. Format:

## 🏠 ${clientName} — Draft 2 Design Brief

For each room covered, output:
**[ROOM NAME]**
• [Decision 1 — specific and actionable]
• [Decision 2]
• [Any layout change flagged for live meeting]

Rules:
- Only include rooms actually discussed
- If something was approved (Love it), say "✅ Approved as designed"
- If something needs a change, describe the change specifically
- If they had a question, flag it as "❓ [question to address in live meeting]"
- End with a "## 🔴 Live Meeting Agenda" section listing any layout/structural changes they flagged

Output the brief text only. Michael will use this to brief his drafting session.`;

  return sendToJuanito(message);
}

module.exports = { sendToJuanito, initJuanitoSession, generateDesignBrief, analyzeImageWithJuanito: analyzeImageWithClaude, getQuestionsForRoom, groupAndSortImages, QUESTION_BANK };
