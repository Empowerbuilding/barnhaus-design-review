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
      { text: "Are all the rooms you requested accounted for on this floor plan?", options: ["Yes, all rooms are here", "Some rooms are missing", "Flag for Michael"], requiresImage: false, serperContext: "" },
      { text: "Is the house oriented correctly for your driveway approach and your best views?", options: ["Yes, orientation works great", "Needs adjustment", "Flag for Michael"], requiresImage: false, serperContext: "" },
      { text: "How is the overall circulation feeling — can you mentally walk from the entry through the main living areas without confusion?", options: ["Flows naturally", "Has some confusion points", "Flag for Michael"], requiresImage: false, serperContext: "" },
      { text: "Any gut reactions on room sizes or placement before we move into the finishes?", options: ["Everything looks good", "I have items to flag", "Flag for Michael"], requiresImage: false, serperContext: "" }
    ]
  },

  'exterior': {
    opening: `Start with a vibe check — show 3 inspiration images before asking anything functional. Reference their specific kickoff style direction. Frame the AI renders honestly if they show distorted proportions.`,
    baseline: { text: "Standard Barnhaus exterior baseline: corrugated or standing seam metal roof, board-and-batten or metal panel siding, black window frames, stone or brick wainscoting at base. Does this baseline work for you?", options: ["Approve baseline", "Change something"], requiresImage: false, serperContext: "" },
    questions: [
      { text: "Does this color blocking and material palette match the vision you had in mind?", options: ["Yes, nailed it", "Something feels off", "Michael's call"], requiresImage: true, serperContext: "modern farmhouse exterior material palette board batten metal siding houzz" },
      { text: "Are the rooflines and roof pitches hitting the mark, or do we need to adjust the pitch or form?", options: ["Rooflines look great", "Adjust the pitch", "Flag for Michael"], requiresImage: true, serperContext: "barndominium standing seam metal roof pitch form exterior houzz" },
      { text: "Siding: are we confirmed on the siding type — corrugated vs standing seam, board and batten, or mixed materials?", options: ["Corrugated metal", "Standing seam metal", "Board and batten", "Mixed materials"], requiresImage: true, serperContext: "corrugated metal siding board batten mixed materials farmhouse exterior houzz" },
      { text: "Window frames: black, white, or another color?", options: ["Black (modern)", "White (classic)", "Bronze", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Do we need more natural light in any specific rooms — bigger windows anywhere?", options: ["Happy with current windows", "Need larger windows somewhere", "Flag for Michael"], requiresImage: false, serperContext: "" },
      { text: "Porches and patios: are the overhang depths sufficient, or do we need to extend the covered outdoor living?", options: ["Depths look sufficient", "Need more coverage", "Flag for Michael"], requiresImage: false, serperContext: "" },
      { text: "Window grids: no grids (clean modern look), simple modern grids, or traditional multi-pane?", options: ["No grids (clean modern)", "Simple modern grids", "Traditional multi-pane", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Any black metal awnings over windows, or keep the lines clean?", options: ["Add metal awnings", "Keep lines clean", "Michael's call"], requiresImage: true, serperContext: "black metal awnings farmhouse exterior window architectural detail houzz" },
      { text: "Stone or brick wainscoting across the base — confirmed, or adjust the height?", options: ["Confirmed, looks great", "Adjust the height", "Remove it", "Michael's call"], requiresImage: true, serperContext: "stone brick wainscoting base exterior modern farmhouse black windows houzz" }
    ]
  },

  'kitchen': {
    opening: `Start with The Recommended Function List. Present the baseline and get them to approve it before drilling into aesthetics. This saves 45 minutes of questioning.`,
    baseline: { text: "Michael's standard high-end kitchen baseline: built-in panel-ready refrigerator, drawers for all base cabinets (not doors), dishwasher and dedicated trash pull-out directly beside the main sink, skinny pull-out spice & tray cabinets flanking both sides of the range. Does this baseline work for you?", options: ["Approve baseline", "Change something"], requiresImage: false, serperContext: "" },
    questions: [
      { text: "Island: what size feels right? Do you want a waterfall stone edge, or a standard square overhang?", options: ["Waterfall stone edge", "Standard square overhang", "No island", "Michael's call"], requiresImage: true, serperContext: "kitchen island waterfall quartz edge modern farmhouse houzz" },
      { text: "Island seating: which side, and how many seats?", options: ["2 seats", "3 seats", "4 seats", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Microwave: Michael usually tucks it into a drawer in the island — does that work, or do you want it elsewhere?", options: ["Island drawer (Michael's rec)", "Built into upper cabinets", "Above range", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Range hood: custom plaster, exposed metal/steel, or built-in to match the cabinets?", options: ["Custom plaster hood", "Exposed metal/steel", "Built-in cabinet style", "Michael's call"], requiresImage: true, serperContext: "custom range hood plaster metal modern farmhouse kitchen houzz" },
      { text: "Upper cabinets vs open floating shelves flanking the hood — which do you prefer?", options: ["Upper cabinets", "Open floating shelves", "Mix of both", "Michael's call"], requiresImage: true, serperContext: "open floating shelves vs upper cabinets kitchen flanking hood houzz" },
      { text: "Kitchen ceiling: vault it with the great room, keep it flat and high, or drop it flat and start the vault at the edge of the kitchen?", options: ["Vault with great room", "Flat and high", "Drop flat, vault at edge", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Sink placement confirmed? Any secondary sink (island or butler's pantry side)?", options: ["Primary sink only is fine", "Add island sink", "Add butler's pantry sink", "Flag for Michael"], requiresImage: false, serperContext: "" },
      { text: "Range placement and fridge placement — are we happy with where those land?", options: ["Both placements work", "Adjust range placement", "Adjust fridge placement", "Flag for Michael"], requiresImage: false, serperContext: "" },
      { text: "Double-stacked wall oven — do you want this, or stick with the main range?", options: ["Add double wall oven", "Keep main range only", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Warming drawers — do you want these?", options: ["Yes, add warming drawers", "No thanks", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Backsplash: tile, stone, or slab behind the range?", options: ["Full slab (seamless)", "Stone/marble tile", "Ceramic/porcelain tile", "Michael's call"], requiresImage: true, serperContext: "kitchen backsplash slab quartz tile behind range modern farmhouse houzz" },
      { text: "Any extras: ice machine, beverage fridge, wine cooler, additional sink?", options: ["Ice machine", "Beverage fridge", "Wine cooler", "None of these"], requiresImage: false, serperContext: "" }
    ]
  },

  'pantry': {
    opening: `Show a beautiful butler's pantry image first — the sexy hook. Standard setup: deep countertops, open shelving on top, base storage on bottom. Almost everyone loves this.`,
    baseline: { text: "Standard Barnhaus butler's pantry: thick wood open shelving on top, deep countertops for appliances, base storage (open shelves with baskets — lower cost, great look). Does this setup work for you?", options: ["Approve baseline", "Change something"], requiresImage: false, serperContext: "" },
    questions: [
      { text: "Base storage: open shelves with baskets (lower cost, great look), or full custom drawers and cabinet faces on the bottom?", options: ["Open shelves with baskets", "Full custom drawers", "Michael's call"], requiresImage: true, serperContext: "butler pantry base storage open shelves baskets custom drawers houzz" },
      { text: "What small appliances are living back here — air fryer, toaster, coffee maker?", options: ["Air fryer + toaster", "Coffee maker setup", "All of the above", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Can those appliances sit on the counter, or do you want them hidden behind an appliance garage door?", options: ["On the counter is fine", "Hidden appliance garage", "Michael's call"], requiresImage: true, serperContext: "appliance garage door pantry hidden countertop modern houzz" },
      { text: "Coffee station: do you need a water line run for a plumbed-in espresso machine?", options: ["Yes, plumb it in", "No, just counter space", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Secondary fridge back here? Dedicated ice machine? Wine cooler?", options: ["Secondary fridge", "Ice machine", "Wine cooler", "None needed"], requiresImage: false, serperContext: "" },
      { text: "Prep sink in the pantry?", options: ["Yes, add a prep sink", "No sink needed", "Michael's call"], requiresImage: false, serperContext: "" }
    ]
  },

  'great room': {
    opening: `Fireplace is the centerpiece — start with 3 inspiration images. The right image answers almost every question at once. Standard setup: stone or tile surround, base cabinets flanking both sides, thick open floating shelves above the cabinets, heavy mantle for the TV.`,
    baseline: { text: "Standard Barnhaus fireplace setup: stone or tile surround, base cabinets flanking the firebox for storage, thick open floating shelves above those cabinets, and a heavy solid wood mantle sized for the TV. Does this layout work for you?", options: ["Approve baseline", "Change something"], requiresImage: false, serperContext: "" },
    questions: [
      { text: "Fireplace surround vibe check — which direction are we going?", options: ["Stone surround (classic)", "Large format tile (modern)", "Stucco/plaster (clean)", "Michael's call"], requiresImage: true, serperContext: "modern farmhouse fireplace surround stone tile great room vaulted ceiling houzz" },
      { text: "Fireplace type: gas or wood-burning? (affects framing for flue/chase)", options: ["Gas (easier operation)", "Wood-burning (authentic feel)", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "TV: are you planning to mount the TV above the mantle?", options: ["Yes, TV above mantle", "No TV at fireplace", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Flanking cabinets: match the wood finish of the floating shelves, or paint them to match the kitchen cabinets?", options: ["Match wood floating shelves", "Paint to match kitchen", "Michael's call"], requiresImage: true, serperContext: "flanking cabinets fireplace built-in floating shelves great room houzz" },
      { text: "Hearth: raised hearth bench at the base, or firebox flush to the floor?", options: ["Raised hearth bench", "Flush to floor", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Ceiling in the great room: vault confirmed, or any changes to the height or form?", options: ["Vault looks great", "Adjust vault height", "Flag for Michael"], requiresImage: false, serperContext: "" }
    ]
  },

  'living room': {
    opening: `Same as great room — vibe check first, then confirm the fireplace and built-in details if applicable.`,
    questions: [
      { text: "Is there a fireplace in this room?", options: ["Yes, run fireplace flow", "No fireplace", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Built-in shelving or entertainment center on any wall?", options: ["Yes, add built-ins", "No, keep it open", "Michael's call"], requiresImage: true, serperContext: "living room built-in shelving entertainment center modern farmhouse houzz" },
      { text: "Ceiling: vault, flat high, or coffered?", options: ["Vault", "Flat and high", "Coffered", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Natural light: are we happy with the window placement in this room?", options: ["Yes, windows look great", "Need more light", "Flag for Michael"], requiresImage: false, serperContext: "" }
    ]
  },

  'primary bedroom': {
    opening: `Confirm the suite setup — privacy, ceiling, and any built-ins. Michael separates the master from the rest of the house whenever possible.`,
    questions: [
      { text: "Does the bedroom fit your furniture — king bed plus nightstands on both sides with comfortable clearance?", options: ["Yes, fits great", "Feels a bit tight", "Flag for Michael"], requiresImage: false, serperContext: "" },
      { text: "Ceiling: vault, tray, or flat? Any tongue and groove?", options: ["Vault", "Tray ceiling", "Flat", "Tongue and groove"], requiresImage: true, serperContext: "primary bedroom vaulted ceiling tongue groove wood modern farmhouse houzz" },
      { text: "Is the privacy entrance or separation from the guest wing working for you?", options: ["Yes, privacy works", "Need more separation", "Flag for Michael"], requiresImage: false, serperContext: "" },
      { text: "Any built-ins — window seat, built-in bench, reading nook?", options: ["Add window seat", "Add reading nook", "Keep it open", "Michael's call"], requiresImage: true, serperContext: "primary bedroom built-in window seat reading nook modern houzz" },
      { text: "Fireplace in the master — do you want one?", options: ["Yes, add a fireplace", "No fireplace", "Michael's call"], requiresImage: true, serperContext: "master bedroom fireplace cozy luxury modern houzz" }
    ]
  },

  'primary bath': {
    opening: `Master bath is all about the luxury fixtures. Show images — freestanding tub, massive walk-in shower, double vanity. This one is worth spending time on.`,
    questions: [
      { text: "Overall bath vibe — which direction are we going?", options: ["Spa-modern (clean marble)", "Dark moody (matte black)", "Warm natural (wood accents)", "Michael's call"], requiresImage: true, serperContext: "luxury primary bath spa marble freestanding tub walk-in shower houzz" },
      { text: "Freestanding soaking tub or no tub — Michael recommends against a traditional drop-in for luxury builds.", options: ["Freestanding tub (yes)", "Skip the tub entirely", "Michael's call"], requiresImage: true, serperContext: "freestanding soaking tub primary bath marble luxury houzz" },
      { text: "Walk-in shower: rain head, wall heads, handheld — all three?", options: ["All three (rain + wall + handheld)", "Rain head only", "Rain + handheld", "Michael's call"], requiresImage: true, serperContext: "walk-in shower rain head wall heads primary bath luxury tile houzz" },
      { text: "Separate shower valves or a single all-in-one unit?", options: ["Separate valves (more control)", "Single all-in-one unit", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Double vanity confirmed? How long — 72 inches, 84 inches, longer?", options: ["72 inches", "84 inches", "96+ inches", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Vanity style: floating modern, or traditional base cabinet to the floor?", options: ["Floating modern", "Traditional (to the floor)", "Michael's call"], requiresImage: true, serperContext: "floating vanity primary bath modern vs traditional base cabinet houzz" },
      { text: "Mirror: one massive slab mirror, individual mirrors per sink, or backlit LED mirrors?", options: ["One massive slab mirror", "Individual mirrors per sink", "Backlit LED mirrors", "Michael's call"], requiresImage: true, serperContext: "bathroom mirror slab backlit LED individual primary bath houzz" },
      { text: "Lighting: flanking wall sconces vs overhead bar — or both?", options: ["Flanking wall sconces", "Overhead bar light", "Both", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Shower niche: horizontal niche under the window sill, or vertical niche on the side wall?", options: ["Horizontal under window sill", "Vertical on side wall", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Wet room (shower and tub in same wet zone with no door) — is this something you want to explore?", options: ["Yes, explore wet room", "No, keep separate", "Michael's call"], requiresImage: true, serperContext: "wet room shower freestanding tub same zone luxury bath houzz" },
      { text: "Heated floors in the master bath?", options: ["Yes, heated floors", "No thanks", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Any water closet (private toilet room with a door) or open layout?", options: ["Water closet (private)", "Open layout", "Michael's call"], requiresImage: false, serperContext: "" }
    ]
  },

  'master bedroom': {
    opening: `Same as primary bedroom — confirm suite layout, privacy, ceiling, and any built-ins.`,
    questions: [
      { text: "Does the bedroom fit your furniture — king bed plus nightstands with comfortable clearance?", options: ["Yes, fits great", "Feels a bit tight", "Flag for Michael"], requiresImage: false, serperContext: "" },
      { text: "Ceiling: vault, tray, flat, or tongue and groove?", options: ["Vault", "Tray ceiling", "Flat", "Tongue and groove"], requiresImage: true, serperContext: "master bedroom vaulted ceiling wood beam tongue groove houzz" },
      { text: "Privacy entrance or separation from guest wing — is that working?", options: ["Yes, privacy works", "Need more separation", "Flag for Michael"], requiresImage: false, serperContext: "" },
      { text: "Any built-ins or fireplace in the master?", options: ["Add built-ins", "Add fireplace", "Keep it open", "Michael's call"], requiresImage: true, serperContext: "master bedroom fireplace built-in luxury cozy houzz" }
    ]
  },

  'master bath': {
    opening: `Same as primary bath — luxury fixtures, show images first.`,
    questions: [
      { text: "Overall bath vibe — which direction are we going?", options: ["Spa-modern (clean marble)", "Dark moody (matte black)", "Warm natural (wood accents)", "Michael's call"], requiresImage: true, serperContext: "luxury master bath spa marble freestanding tub walk-in shower houzz" },
      { text: "Freestanding soaking tub, or no tub?", options: ["Freestanding tub (yes)", "Skip the tub", "Michael's call"], requiresImage: true, serperContext: "freestanding soaking tub master bath luxury marble houzz" },
      { text: "Walk-in shower size and fixtures — rain head, wall heads, handheld?", options: ["All three (rain + wall + handheld)", "Rain head only", "Rain + handheld", "Michael's call"], requiresImage: true, serperContext: "walk-in shower rain head luxury tile master bath houzz" },
      { text: "Double vanity: size and style (floating vs traditional)?", options: ["Floating modern", "Traditional (to the floor)", "Michael's call"], requiresImage: true, serperContext: "double vanity floating modern master bath houzz" },
      { text: "Mirror setup: slab, individual, or backlit?", options: ["One massive slab mirror", "Individual per sink", "Backlit LED", "Michael's call"], requiresImage: true, serperContext: "bathroom mirror slab backlit luxury master bath houzz" },
      { text: "Shower niche placement and orientation?", options: ["Horizontal under window sill", "Vertical on side wall", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Wet room option?", options: ["Yes, explore wet room", "No, keep separate", "Michael's call"], requiresImage: true, serperContext: "wet room shower tub same zone luxury bath houzz" },
      { text: "Heated floors?", options: ["Yes, heated floors", "No thanks", "Michael's call"], requiresImage: false, serperContext: "" }
    ]
  },

  'garage': {
    opening: `Confirm the practical stuff — door sizes, storage, any special needs like a workshop or utility bay.`,
    questions: [
      { text: "Door sizes confirmed — do the openings fit your largest vehicle (dually, tall truck, boat trailer)?", options: ["Yes, door sizes work", "Need larger openings", "Flag for Michael"], requiresImage: false, serperContext: "" },
      { text: "How many cars is this designed for — is that count still correct?", options: ["Count is correct", "Need one more bay", "Flag for Michael"], requiresImage: false, serperContext: "" },
      { text: "Any dedicated workshop space or utility bay inside the garage?", options: ["Yes, add workshop space", "No, standard garage only", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Built-in storage wall or just open walls?", options: ["Built-in storage wall", "Open walls", "Michael's call"], requiresImage: true, serperContext: "garage built-in storage wall organized cabinets custom houzz" },
      { text: "Utility sink in the garage?", options: ["Yes, utility sink", "No sink needed", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "EV charger rough-in?", options: ["Yes, rough in EV charger", "No EV charger", "Michael's call"], requiresImage: false, serperContext: "" }
    ]
  },

  'mudroom': {
    opening: `Show a great mudroom image first — bench, lockers, storage. This space depends heavily on whether laundry is combined or separate.`,
    baseline: { text: "Standard Barnhaus mudroom: heavy wood bench with open shoe cubbies underneath, coat hooks or locker doors above, built-in storage. Does this setup work for you?", options: ["Approve baseline", "Change something"], requiresImage: false, serperContext: "" },
    questions: [
      { text: "Open coat hooks or closed locker doors to hide the mess?", options: ["Open coat hooks (easy access)", "Closed locker doors (cleaner look)", "Michael's call"], requiresImage: true, serperContext: "mudroom open hooks vs closed locker doors built-in bench storage houzz" },
      { text: "Dog wash station or just a deep utility mop sink for boots and gear?", options: ["Dog wash station", "Deep utility mop sink", "Neither", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Is laundry combined in this room or in a separate laundry room?", options: ["Combined with mudroom", "Separate laundry room", "Flag for Michael"], requiresImage: false, serperContext: "" }
    ]
  },

  'laundry': {
    opening: `Laundry room details — start with machine type since that determines everything else.`,
    questions: [
      { text: "Front-load or top-load machines? (Front-load = continuous countertop over the top. Top-load = counters only on the side.)", options: ["Front-load", "Top-load", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Do you want the washer and dryer elevated on pedestals so you don't have to bend over?", options: ["Yes, elevated on pedestals", "No, standard height", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Continuous folding countertop running across the top of the machines?", options: ["Yes, add countertop", "No countertop needed", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Hanging rod and open shelves above for drying clothes?", options: ["Yes, hanging rod + shelves", "Shelves only", "No", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Utility sink in the laundry room?", options: ["Yes, utility sink", "No sink", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Broom closet: tall built-in cabinet, or a framed closet with a door?", options: ["Tall built-in cabinet", "Framed closet with door", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Soap and supply storage: closed upper cabinets above the machines, or open floating shelves?", options: ["Closed upper cabinets", "Open floating shelves", "Michael's call"], requiresImage: true, serperContext: "laundry room upper cabinets vs open shelves organized modern houzz" }
    ]
  },

  'office': {
    opening: `Confirm the office function — built-in desk, storage, any specialty needs.`,
    questions: [
      { text: "Built-in desk with upper cabinets and shelving, or keep it open for furniture?", options: ["Built-in desk + cabinets", "Open for furniture", "Michael's call"], requiresImage: true, serperContext: "home office built-in desk upper cabinets shelving dark moody houzz" },
      { text: "Any built-in bookcase or display wall?", options: ["Yes, built-in bookcase", "Display wall", "No, keep it open", "Michael's call"], requiresImage: true, serperContext: "home office built-in bookcase display wall modern houzz" },
      { text: "Ceiling: vault or flat?", options: ["Vault", "Flat", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Murphy bed for flex use as a guest room?", options: ["Yes, add Murphy bed", "No Murphy bed", "Michael's call"], requiresImage: false, serperContext: "" }
    ]
  },

  'porch': {
    opening: `Outdoor living is a big deal — confirm the coverage, ceiling, and outdoor kitchen or grill setup.`,
    questions: [
      { text: "Is the depth of the covered porch sufficient — do you have enough shade in the afternoon?", options: ["Yes, depth is great", "Need more depth", "Flag for Michael"], requiresImage: false, serperContext: "" },
      { text: "Outdoor kitchen: full built-in grill and counter setup, or just a gas hookup and space for a freestanding grill?", options: ["Full built-in outdoor kitchen", "Gas hookup for freestanding grill", "Michael's call"], requiresImage: true, serperContext: "covered porch outdoor kitchen built-in grill concrete countertop modern farmhouse houzz" },
      { text: "Outdoor fireplace or fire pit?", options: ["Outdoor fireplace", "Fire pit", "Neither", "Michael's call"], requiresImage: true, serperContext: "covered porch outdoor fireplace fire pit farmhouse concrete houzz" },
      { text: "Tongue and groove or bead board on the porch ceiling?", options: ["Tongue and groove", "Bead board", "Painted drywall", "Michael's call"], requiresImage: true, serperContext: "covered porch tongue groove ceiling outdoor living farmhouse houzz" },
      { text: "Ceiling fans — how many?", options: ["One fan", "Two fans", "None", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "TV hookup rough-in on the porch?", options: ["Yes, rough in TV hookup", "No TV hookup", "Michael's call"], requiresImage: false, serperContext: "" }
    ]
  },

  'dining room': {
    opening: `Confirm the dining setup — formal vs casual, built-ins, ceiling.`,
    questions: [
      { text: "Formal dining room or more of a casual everyday dining space?", options: ["Formal dining", "Casual everyday", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Built-in buffet or china cabinet on any wall?", options: ["Add built-in buffet", "Add china cabinet", "Neither", "Michael's call"], requiresImage: true, serperContext: "dining room built-in buffet china cabinet modern farmhouse houzz" },
      { text: "Ceiling: coffered, tray, or flat?", options: ["Coffered", "Tray ceiling", "Flat", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Chandelier rough-in centered over the table?", options: ["Yes, rough in chandelier", "No chandelier", "Michael's call"], requiresImage: false, serperContext: "" }
    ]
  },

  'foyer': {
    opening: `Show a high-end entryway image matching the aesthetic. Only ask if a foyer exists on the floor plan.`,
    questions: [
      { text: "Foyer vibe check — which direction are we going?", options: ["Grand statement entry", "Clean minimalist entry", "Warm farmhouse entry", "Michael's call"], requiresImage: true, serperContext: "grand foyer entry chandelier herringbone tile statement modern houzz" },
      { text: "Storage: built-in coat closet, or a clean entry bench with art/mirrors on the wall?", options: ["Built-in coat closet", "Entry bench with art/mirrors", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Sightline: keep it completely open, or add architectural framing (archway) to transition into the great room?", options: ["Keep it open", "Add archway/framing", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Lighting: statement chandelier or recessed lighting?", options: ["Statement chandelier", "Recessed lighting", "Both", "Michael's call"], requiresImage: true, serperContext: "foyer statement chandelier pendant lighting grand entry houzz" },
      { text: "Front entry approach: wide tiered concrete steps up to the front door, or a continuous ramped walkway?", options: ["Tiered concrete steps", "Continuous ramped walkway", "Michael's call"], requiresImage: false, serperContext: "" }
    ]
  },

  'entryway': {
    opening: `Same as foyer — show inspiration image, confirm storage and lighting.`,
    questions: [
      { text: "Entryway vibe check — which direction are we going?", options: ["Grand statement entry", "Clean minimalist entry", "Warm farmhouse entry", "Michael's call"], requiresImage: true, serperContext: "entryway entry hall modern farmhouse statement lighting houzz" },
      { text: "Built-in coat closet or entry bench with mirrors?", options: ["Built-in coat closet", "Entry bench with mirrors", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Statement chandelier or recessed lighting?", options: ["Statement chandelier", "Recessed lighting", "Both", "Michael's call"], requiresImage: true, serperContext: "entryway chandelier pendant statement lighting modern farmhouse houzz" },
      { text: "Front steps or ramped approach from the driveway?", options: ["Tiered steps", "Ramped walkway", "Michael's call"], requiresImage: false, serperContext: "" }
    ]
  },

  'guest bedroom': {
    opening: `Confirm ceilings, bunk details if applicable, and guest closets. Design one closet, apply to all.`,
    questions: [
      { text: "Ceiling: Michael's standard is flat 10-foot for guest rooms to save on HVAC. Want to vault any of them?", options: ["Keep flat 10-foot (standard)", "Vault one or more", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Bunk room (if applicable): built-in bunks with stairs/cubbies vs freestanding frames — which direction?", options: ["Custom built-in bunks", "Freestanding frames", "No bunks", "Michael's call"], requiresImage: true, serperContext: "custom built-in bunk room stairs cubbies storage modern farmhouse houzz" },
      { text: "Guest closets: simple walk-in layout — 2-row hanging, shoe rack, simple cubbies. Does this work? Michael will apply to all guest closets.", options: ["Yes, apply to all", "Want custom built-ins", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Guest closet: full custom built-ins, or simple rods and shelves?", options: ["Full custom built-ins", "Simple rods and shelves", "Michael's call"], requiresImage: true, serperContext: "guest bedroom walk-in closet simple organized rods shelves houzz" }
    ]
  },

  'bunk room': {
    opening: `Show Pinterest images of custom built-in bunk rooms with stairs and cubbies vs freestanding frames.`,
    questions: [
      { text: "Custom built-in bunks with stairs vs freestanding frames — which direction?", options: ["Custom built-in bunks with stairs", "Freestanding frames", "Michael's call"], requiresImage: true, serperContext: "custom built-in bunk room stairs cubbies storage kids houzz pinterest" },
      { text: "How many bunks — twin over twin, twin over full, or full over full?", options: ["Twin over twin", "Twin over full", "Full over full", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Built-in stairs with storage cubbies, or a simple ladder?", options: ["Built-in stairs + cubbies", "Simple ladder", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Individual reading lights and outlets at each bunk?", options: ["Yes, individual lights + outlets", "No, overhead only", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Ceiling height confirmed for top bunk clearance?", options: ["Yes, height looks good", "Concerned about clearance", "Flag for Michael"], requiresImage: false, serperContext: "" }
    ]
  },

  'half bath': {
    opening: `The powder room is a statement piece — treat it separately from the guest baths. Show a dramatic powder room image (moody, floating vanity, backlit mirror).`,
    questions: [
      { text: "Bold statement piece or clean and light like the guest baths?", options: ["Bold statement (dark, dramatic)", "Clean and light", "Michael's call"], requiresImage: true, serperContext: "dramatic powder room moody dark floating vanity backlit mirror houzz" },
      { text: "Vanity: floating wall-mounted, or a vessel sink on a custom wood console?", options: ["Floating wall-mounted", "Vessel sink on wood console", "Michael's call"], requiresImage: true, serperContext: "powder room floating vanity vessel sink console half bath houzz" },
      { text: "Mirror: round statement mirror, backlit rectangular, or framed art mirror?", options: ["Round statement mirror", "Backlit rectangular", "Framed art mirror", "Michael's call"], requiresImage: true, serperContext: "powder room statement mirror round backlit half bath houzz" },
      { text: "Cabinet over the toilet: yes or no?", options: ["Yes, cabinet over toilet", "No, keep it open", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Any floating shelves for decor or storage?", options: ["Yes, floating shelves", "No, keep it minimal", "Michael's call"], requiresImage: false, serperContext: "" }
    ]
  },

  'powder room': {
    opening: `Same as half bath — show dramatic inspiration image, treat as a statement piece.`,
    questions: [
      { text: "Bold statement or clean and light like the guest baths?", options: ["Bold statement (dark, dramatic)", "Clean and light", "Michael's call"], requiresImage: true, serperContext: "dramatic powder room moody dark vessel sink statement houzz" },
      { text: "Vanity style: floating, vessel sink, or console?", options: ["Floating wall-mounted", "Vessel sink", "Wood console", "Michael's call"], requiresImage: true, serperContext: "powder room vanity floating vessel sink console dramatic houzz" },
      { text: "Mirror: round, backlit, or framed art?", options: ["Round statement mirror", "Backlit rectangular", "Framed art mirror", "Michael's call"], requiresImage: true, serperContext: "powder room mirror round backlit art statement houzz" }
    ]
  },

  'pool': {
    opening: `Pool is practically a second design contract. Only trigger if on Draft 1 or explicitly requested. Start with a big vibe check — 3 pool images.`,
    questions: [
      { text: "Pool style vibe check — which direction are we going?", options: ["Modern geometric", "Infinity edge", "Natural rock/freeform", "Michael's call"], requiresImage: true, serperContext: "luxury pool modern geometric infinity edge outdoor living houzz" },
      { text: "Hot tub: raised overflow hot tub spilling into the pool, or flush with the deck?", options: ["Raised overflow hot tub", "Flush with deck", "No hot tub", "Michael's call"], requiresImage: true, serperContext: "pool hot tub raised overflow spillover luxury outdoor houzz" },
      { text: "Shallow tanning ledge for loungers — yes or no?", options: ["Yes, tanning ledge", "No tanning ledge", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Built-in sunken fire pit by the pool, or concrete pad for a freestanding fire pit?", options: ["Built-in sunken fire pit", "Concrete pad for freestanding", "Neither", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Outdoor kitchen/bar: out by the pool under a separate pavilion, or keep it attached to the main house patio?", options: ["Separate pool pavilion", "Attached to main patio", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "How much deck/flatwork concrete around the pool?", options: ["Minimal deck (more lawn)", "Moderate deck", "Large deck (entertaining)", "Michael's call"], requiresImage: false, serperContext: "" }
    ]
  },

  'safe room': {
    opening: `Only trigger if a safe room, gun vault, or storm shelter is on the floor plan or explicitly requested.`,
    questions: [
      { text: "Is the current square footage sufficient for your needs?", options: ["Yes, size is good", "Need more space", "Flag for Michael"], requiresImage: false, serperContext: "" },
      { text: "Security level: heavy vault door with cinder block reinforced walls, or a standard steel door in a framed room?", options: ["Heavy vault door + cinder block", "Standard steel door", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Built-in shelving and gun racks, or bringing your own freestanding safes?", options: ["Built-in shelving + gun racks", "Freestanding safes", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Ventilation and climate control needed inside?", options: ["Yes, HVAC/ventilation needed", "No, standard room", "Michael's call"], requiresImage: false, serperContext: "" }
    ]
  },

  'loft': {
    opening: `Only ask if a loft exists on the floor plan. Show a Pinterest image of an open loft overlooking a great room.`,
    questions: [
      { text: "Loft vibe check — which direction are we going?", options: ["Open to great room (modern railing)", "Semi-private (solid half-wall)", "Michael's call"], requiresImage: true, serperContext: "open loft overlook great room modern metal railing sitting area houzz" },
      { text: "Open to the great room with a clean metal or wood railing, or a solid half-wall for more privacy?", options: ["Open with metal railing", "Open with wood railing", "Solid half-wall", "Michael's call"], requiresImage: true, serperContext: "loft railing metal wood open overlook living room houzz" },
      { text: "What is the loft used for — sitting area, office, kids play area, sleeping?", options: ["Sitting area", "Office/study", "Kids play area", "Sleeping area"], requiresImage: false, serperContext: "" }
    ]
  },

  'kitchenette': {
    opening: `Ask exactly what appliances are needed — don't over-engineer it.`,
    questions: [
      { text: "Full-size fridge or just an under-counter beverage fridge?", options: ["Full-size fridge", "Under-counter beverage fridge", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Sink and microwave — yes or no?", options: ["Both sink and microwave", "Sink only", "Microwave only", "Neither"], requiresImage: false, serperContext: "" },
      { text: "Full range or just a two-burner cooktop?", options: ["Full range", "Two-burner cooktop", "Neither", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Counter material: match the main kitchen or something simpler?", options: ["Match main kitchen", "Something simpler", "Michael's call"], requiresImage: false, serperContext: "" }
    ]
  },

  'game room': {
    opening: `Confirm the game room function. Only ask if on the floor plan.`,
    questions: [
      { text: "Game room vibe check — which direction are we going?", options: ["High-end lounge (bar + seating)", "Classic game room (pool table)", "Kids/family game room", "Michael's call"], requiresImage: true, serperContext: "high-end game room bar seating pool table lounge modern farmhouse houzz" },
      { text: "Built-in bar or wet bar in here?", options: ["Yes, built-in bar", "Yes, wet bar", "No bar", "Michael's call"], requiresImage: true, serperContext: "game room built-in wet bar custom cabinets modern houzz" },
      { text: "Custom storage for games/equipment?", options: ["Yes, custom storage", "Standard shelving", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Built-in seating?", options: ["Yes, built-in booth seating", "No, freestanding furniture", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Ceiling: vault, flat, or coffered?", options: ["Vault", "Flat", "Coffered", "Michael's call"], requiresImage: false, serperContext: "" }
    ]
  },

  'media room': {
    opening: `Confirm theater/media room setup. Show a high-end media room image first.`,
    questions: [
      { text: "Media room vibe check — which direction are we going?", options: ["Home theater (dark, acoustic)", "Modern media room (open)", "Cozy family room style", "Michael's call"], requiresImage: true, serperContext: "luxury home media room recliner seating acoustic panels dark houzz" },
      { text: "Stepped platform seating for a stadium effect, or flat floor with furniture?", options: ["Stepped platform seating", "Flat floor with furniture", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Built-in media wall with screen and integrated speaker bays?", options: ["Yes, full built-in media wall", "No, freestanding setup", "Michael's call"], requiresImage: true, serperContext: "media room built-in wall screen speaker bays modern houzz" },
      { text: "Ceiling: coffered, flat, or specialized acoustic treatment?", options: ["Coffered ceiling", "Flat ceiling", "Acoustic treatment panels", "Michael's call"], requiresImage: false, serperContext: "" }
    ]
  },

  'theater': {
    opening: `Same as media room.`,
    questions: [
      { text: "Theater vibe check — which direction are we going?", options: ["Classic home theater", "Modern minimalist screening room", "Luxury private cinema", "Michael's call"], requiresImage: true, serperContext: "luxury home theater private cinema recliner seats dark acoustic houzz" },
      { text: "Stepped platform seating yes or no?", options: ["Yes, stepped seating", "No, flat floor", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Built-in media wall for the screen?", options: ["Yes, built-in media wall", "No, freestanding screen", "Michael's call"], requiresImage: true, serperContext: "home theater built-in screen media wall integrated speakers houzz" },
      { text: "Acoustic panels or sound treatment on walls/ceiling?", options: ["Yes, acoustic panels", "No treatment", "Michael's call"], requiresImage: false, serperContext: "" }
    ]
  },

  'bar': {
    opening: `Show a high-end wet bar or wine nook image first — presents a fully designed concept, not open-ended questions.`,
    questions: [
      { text: "Bar vibe check — which direction are we going?", options: ["Dark moody (floating shelves + LED)", "Clean modern (quartz + minimal)", "Warm farmhouse (shiplap + brass)", "Michael's call"], requiresImage: true, serperContext: "custom home bar dark cabinets floating shelves LED backlit houzz" },
      { text: "Wine fridge, under-counter beverage fridge, or both?", options: ["Wine fridge only", "Beverage fridge only", "Both", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Floating shelves with LED backlight for bottle display, or full upper cabinetry?", options: ["Floating shelves + LED backlight", "Full upper cabinetry", "Michael's call"], requiresImage: true, serperContext: "bar floating shelves LED backlit bottle display modern houzz" },
      { text: "Wet bar sink — yes or no?", options: ["Yes, wet bar sink", "No sink", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Dedicated under-counter ice machine?", options: ["Yes, ice machine", "No thanks", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Bar overhang for seating?", options: ["Yes, bar seating overhang", "No bar seating", "Michael's call"], requiresImage: false, serperContext: "" }
    ]
  },

  'winery': {
    opening: `Same as bar — show high-end winery inspiration first.`,
    questions: [
      { text: "Wine room vibe check — which direction are we going?", options: ["Dark wood + ambient lighting", "Modern glass cellar", "Rustic brick cellar", "Michael's call"], requiresImage: true, serperContext: "luxury wine room cellar dark wood LED ambient lighting houzz" },
      { text: "Built-in wine fridge, secondary beverage cooler, or both?", options: ["Wine fridge only", "Both wine + beverage", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Floating wood shelves backlit with LED strips, or enclosed cabinetry?", options: ["Floating shelves + LED backlit", "Enclosed cabinetry", "Michael's call"], requiresImage: true, serperContext: "wine room floating wood shelves LED backlit display houzz" },
      { text: "Quartz counter and prep sink?", options: ["Yes, counter + prep sink", "Counter only", "Neither", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Bar seating overhang?", options: ["Yes, bar seating", "No bar seating", "Michael's call"], requiresImage: false, serperContext: "" }
    ]
  },

  'default': {
    opening: `Confirm the space function and any built-ins or special features. Start with 'What were you most excited about in this room from your kickoff conversation?'`,
    questions: [
      { text: "Is this space sized correctly for how you plan to use it?", options: ["Yes, size works great", "Needs to be larger", "Needs to be smaller", "Flag for Michael"], requiresImage: false, serperContext: "" },
      { text: "Any built-ins or specialty millwork in this room?", options: ["Yes, add built-ins", "No, keep it open", "Michael's call"], requiresImage: true, serperContext: "custom built-in shelving millwork luxury interior houzz" },
      { text: "Ceiling treatment — vault, tray, or flat?", options: ["Vault", "Tray", "Flat", "Michael's call"], requiresImage: false, serperContext: "" },
      { text: "Natural light — are we happy with the window count and placement?", options: ["Yes, windows look great", "Need more light", "Flag for Michael"], requiresImage: false, serperContext: "" }
    ]
  }
};

const CLOSET_QUESTIONS = {
  opening: `Show a master closet inspiration image first. If his & hers are separate, show a luxury 'her' closet and a more masculine 'his' closet. If it's one shared walk-in, show a large shared built-in layout.`,
  baseline: { text: "Standard Barnhaus master closet: two rows of hanging (one section reserved for long hanging — dresses, coats), built-in dresser drawers, open cubbies for folded items, angled shoe rack at the bottom, open shelving on top. Does this layout work for you?", options: ["Approve baseline", "Change something"], requiresImage: false, serperContext: "" },
  questions: [
    { text: "Closet vibe check — full custom built-ins like this, or simpler shelves and hanging rods?", options: ["Full custom built-ins", "Simpler shelves and hanging rods", "Michael's call"], requiresImage: true, serperContext: "luxury master closet custom built-in his hers organized houzz" },
    { text: "If his & hers are separate: does he want closed cabinetry for hunting/outdoor gear or gun safe integration?", options: ["Yes, closed cabinetry for gear", "Open shelving is fine", "Michael's call"], requiresImage: false, serperContext: "" },
    { text: "Center island in the closet: do you want a stone top (to match the bath) or wood?", options: ["Stone top (match the bath)", "Wood top", "No island", "Michael's call"], requiresImage: true, serperContext: "master closet center island stone wood top luxury houzz" },
    { text: "Long hanging zone for dresses and coats — one dedicated section on the ladies' side?", options: ["Yes, full-length hanging section", "Standard two-row hanging is fine", "Michael's call"], requiresImage: false, serperContext: "" },
    { text: "Drawers: built-in dresser drawers in the wall panels, or open cubbies for folded items?", options: ["Built-in dresser drawers", "Open cubbies", "Both", "Michael's call"], requiresImage: false, serperContext: "" },
    { text: "Shoes: angled display rack at the bottom, or flat open shelving?", options: ["Angled display rack", "Flat open shelving", "Michael's call"], requiresImage: false, serperContext: "" }
  ]
};

const BAR_QUESTIONS = {
  opening: `Show a high-end wet bar or wine nook image. Usually triggers excitement.`,
  questions: [
    { text: "Bar vibe check — which direction are we going?", options: ["Dark moody (floating shelves + LED)", "Clean modern", "Farmhouse (shiplap + brass)", "Michael's call"], requiresImage: true, serperContext: "custom wet bar floating shelves LED backlit dark modern houzz" },
    { text: "Wine fridge, under-counter beverage fridge, or both?", options: ["Wine fridge only", "Beverage fridge only", "Both", "Michael's call"], requiresImage: false, serperContext: "" },
    { text: "Floating shelves above the counter for display, or full upper cabinetry?", options: ["Floating shelves + LED", "Full upper cabinetry", "Michael's call"], requiresImage: true, serperContext: "bar floating shelves display LED backlit modern houzz" },
    { text: "Sink at the bar — yes or no?", options: ["Yes, wet bar sink", "No sink", "Michael's call"], requiresImage: false, serperContext: "" },
    { text: "Ice machine dedicated under the counter?", options: ["Yes, ice machine", "No thanks", "Michael's call"], requiresImage: false, serperContext: "" }
  ]
};

const STAIRCASE_QUESTIONS = {
  questions: [
    { text: "Treads: wood (matches floors), or carpet?", options: ["Wood treads (match floors)", "Carpet", "Michael's call"], requiresImage: true, serperContext: "staircase wood treads modern open riser metal railing houzz" },
    { text: "Railing: metal (cable, rod, or flat bar), wood, or combination?", options: ["Metal cable", "Metal rod or flat bar", "Wood", "Combination"], requiresImage: true, serperContext: "staircase railing metal cable rod wood modern farmhouse houzz" },
    { text: "Open risers (floating modern look) or closed risers?", options: ["Open risers (modern)", "Closed risers (traditional)", "Michael's call"], requiresImage: true, serperContext: "staircase open risers floating modern metal railing houzz" },
    { text: "Angled/straight run or L-shaped?", options: ["Straight run", "L-shaped", "U-shaped", "Flag for Michael"], requiresImage: false, serperContext: "" }
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

async function generateDesignBrief(projectSlug, clientName, chatTranscript, feedback) {
  const chatSummary = chatTranscript
    ? chatTranscript
        .filter(m => m.role !== 'system')
        .slice(-60)
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
