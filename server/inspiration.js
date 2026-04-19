const SERPER_API_KEY = process.env.SERPER_API_KEY;

const STYLE_VARIANTS = {
  'exterior': [
    'modern farmhouse exterior steel home curb appeal',
    'industrial barndominium exterior black metal siding',
    'contemporary minimalist home exterior concrete glass',
  ],
  'kitchen': [
    'modern farmhouse kitchen white oak cabinets houzz',
    'industrial kitchen dark cabinets open shelving concrete',
    'luxury contemporary kitchen marble waterfall island pinterest',
  ],
  'pantry': [
    'custom butler pantry white shelving organized houzz',
    'walk-in pantry open shelving dark moody design',
    'modern pantry storage glass doors brass hardware',
  ],
  'great room': [
    'modern farmhouse great room vaulted ceiling fireplace houzz',
    'industrial living room exposed beams concrete fireplace',
    'contemporary open concept living room floor to ceiling windows',
  ],
  'living room': [
    'modern farmhouse living room shiplap fireplace houzz',
    'luxury contemporary living room marble fireplace pinterest',
    'industrial loft living room exposed brick leather',
  ],
  'dining room': [
    'modern farmhouse dining room wood table pendant lights',
    'luxury contemporary dining room chandelier dark walls',
    'industrial dining room black metal chairs concrete floor',
  ],
  'primary bedroom': [
    'luxury master bedroom vaulted ceiling shiplap houzz',
    'contemporary primary bedroom floor to ceiling windows minimal',
    'modern farmhouse master bedroom wood beams cozy',
  ],
  'master bedroom': [
    'luxury master bedroom vaulted ceiling shiplap houzz',
    'contemporary primary bedroom floor to ceiling windows minimal',
    'modern farmhouse master bedroom wood beams cozy',
  ],
  'primary bath': [
    'luxury master bathroom freestanding tub marble houzz',
    'modern primary bath walk-in shower floor to ceiling tile',
    'spa bathroom dark moody tile rain shower pinterest',
  ],
  'master bath': [
    'luxury master bathroom freestanding tub marble houzz',
    'modern primary bath walk-in shower floor to ceiling tile',
    'spa bathroom dark moody tile rain shower pinterest',
  ],
  'bathroom': [
    'custom guest bathroom modern tile houzz',
    'contemporary bathroom floating vanity black fixtures',
    'farmhouse bathroom shiplap clawfoot tub',
  ],
  'guest bath': [
    'custom guest bathroom modern tile houzz',
    'contemporary bathroom floating vanity black fixtures',
    'farmhouse bathroom bold wallpaper statement mirror',
  ],
  'half bath': [
    'modern powder room bold wallpaper vessel sink',
    'luxury powder room marble vanity dramatic lighting',
    'farmhouse half bath shiplap wood accents',
  ],
  'powder room': [
    'modern powder room bold wallpaper vessel sink',
    'luxury powder room marble vanity dramatic lighting',
    'farmhouse half bath shiplap wood accents',
  ],
  'mudroom': [
    'custom mudroom built-in lockers bench storage houzz',
    'farmhouse mudroom shiplap hooks baskets organized',
    'modern mudroom dark cabinets dog wash station',
  ],
  'laundry': [
    'custom laundry room cabinets countertop houzz',
    'modern laundry room dark tile open shelving',
    'farmhouse laundry room shiplap apron sink',
  ],
  'office': [
    'custom home office built-in shelving dark moody houzz',
    'modern home office concrete desk floor to ceiling windows',
    'farmhouse office wood beams board batten walls',
  ],
  'garage': [
    'custom garage epoxy floor built-in storage workshop',
    'luxury garage car collection showroom lighting',
    'modern garage black doors metal shelving',
  ],
  'porch': [
    'covered porch outdoor living string lights cozy houzz',
    'modern outdoor patio concrete fireplace sectional',
    'farmhouse wraparound porch rocking chairs board batten',
  ],
  'foyer': [
    'grand foyer entry chandelier herringbone tile houzz',
    'modern entry way floating stairs statement lighting',
    'farmhouse foyer shiplap console table mirror',
  ],
  'entryway': [
    'grand foyer entry chandelier herringbone tile houzz',
    'modern entry way floating stairs statement lighting',
    'farmhouse entryway board batten hooks bench',
  ],
  'loft': [
    'modern loft railing overlook living space houzz',
    'industrial loft exposed beams reading nook',
    'farmhouse loft shiplap kids play area',
  ],
  'game room': [
    'modern game room bar seating projector houzz',
    'luxury game room pool table lounge area',
    'farmhouse game room reclaimed wood entertainment',
  ],
  'media room': [
    'luxury home theater media room recliner seating houzz',
    'modern media room acoustic panels projector screen',
    'cozy media room dark walls built-in shelving',
  ],
  'bar': [
    'custom home bar dark cabinets floating shelves houzz',
    'modern wet bar quartz waterfall back bar lighting',
    'farmhouse bar shiplap wine storage brass fixtures',
  ],
  'pool': [
    'modern pool outdoor living concrete pavers houzz',
    'luxury pool infinity edge landscape lighting',
    'farmhouse pool wood pergola string lights',
  ],
  'outdoor': [
    'modern outdoor living space covered patio fireplace houzz',
    'luxury outdoor kitchen concrete pavers lighting',
    'farmhouse outdoor porch string lights garden',
  ],
  'default': [
    'luxury custom home interior modern houzz',
    'contemporary home design architectural digest',
    'farmhouse modern home interior pinterest',
  ],
};

async function fetchSerper(query, count, page = 1) {
  const res = await fetch('https://google.serper.dev/images', {
    method: 'POST',
    headers: { 'X-API-KEY': SERPER_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ q: query, num: count, page }),
  });
  if (!res.ok) return [];
  const data = await res.json();
  return (data.images || []).map(img => ({
    url: img.imageUrl,
    thumb: img.thumbnailUrl || img.imageUrl,
    title: img.title,
    source: img.source,
    contextUrl: img.link,
  }));
}

async function getInspirationImages(roomType, stylePrefix = '', count = 6, features = []) {
  if (!SERPER_API_KEY) {
    console.warn('SERPER_API_KEY not set');
    return [];
  }

  const key = roomType?.toLowerCase() || 'default';
  const variants = STYLE_VARIANTS[key] || STYLE_VARIANTS.default;

  // Run all 3 style variant queries in parallel
  const perVariant = Math.ceil(count / variants.length);
  try {
    const results = await Promise.all(
      variants.map(q => fetchSerper(stylePrefix ? `${stylePrefix} ${q}` : q, perVariant))
    );
    // Interleave results for visual variety (1 from each style, round-robin)
    const merged = [];
    const max = Math.max(...results.map(r => r.length));
    for (let i = 0; i < max; i++) {
      for (const arr of results) {
        if (arr[i]) merged.push(arr[i]);
      }
    }
    return merged.slice(0, count * 2); // return up to 2x count for more variety
  } catch (err) {
    console.error('Inspiration fetch error:', err.message);
    return [];
  }
}

const projectStyles = {};

function setProjectStyle(projectSlug, style) {
  projectStyles[projectSlug] = style;
}

function getProjectStyle(projectSlug) {
  return projectStyles[projectSlug] || '';
}

async function getInspirationForQuestion(serperContext, projectStyle, count, offset) {
  count = count || 4;
  offset = offset || 0;
  projectStyle = projectStyle || '';
  if (!SERPER_API_KEY || !serperContext) return [];
  const query = projectStyle ? (projectStyle + ' ' + serperContext) : serperContext;
  // Convert offset to page number (each page = 10 results, we request 4 per page starting at offset)
  const page = Math.floor(offset / 4) + 1;
  try {
    return await fetchSerper(query, count, page);
  } catch (err) {
    console.error('Inspiration question fetch error:', err.message);
    return [];
  }
}

// Fetch one representative image per option so client can compare choices side by side
async function getInspirationPerOption(serperContext, options, projectStyle) {
  if (!SERPER_API_KEY || !serperContext || !options?.length) return [];
  const style = projectStyle || '';

  // Strip noise words from option labels to make cleaner queries
  const cleanOption = (opt) => opt
    .replace(/michael's call|flag for michael|something else|not sure|other/gi, '')
    .replace(/\(.*?\)/g, '')  // remove parentheticals like (modern)
    .trim();

  const queries = options
    .map(opt => cleanOption(opt))
    .filter(opt => opt.length > 2)
    .map(opt => {
      const q = style ? `${style} ${opt} ${serperContext}` : `${opt} ${serperContext}`;
      return q.replace(/\s+/g, ' ').trim();
    });

  if (!queries.length) return [];

  // Fetch more per option when few options, so UI always shows ~4 images
  const imgsPerOption = queries.length <= 2 ? 2 : 1;

  try {
    const results = await Promise.all(queries.map(q => fetchSerper(q, imgsPerOption)));
    // Expand: each option gets imgsPerOption images, all labeled with optionLabel
    const labeled = [];
    results.forEach((imgs, i) => {
      imgs.slice(0, imgsPerOption).forEach(img => {
        if (img) labeled.push({ ...img, optionLabel: options[i] });
      });
    });
    return labeled;
  } catch (err) {
    console.error('Inspiration per-option fetch error:', err.message);
    return [];
  }
}

module.exports = { getInspirationImages, getInspirationForQuestion, getInspirationPerOption, setProjectStyle, getProjectStyle };
