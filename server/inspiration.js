const SERPER_API_KEY = process.env.SERPER_API_KEY;

const ROOM_QUERIES = {
  'exterior': 'modern farmhouse exterior house design houzz',
  'floor plan': 'open concept luxury home floor plan layout',
  'kitchen': 'luxury custom kitchen design houzz',
  'pantry': "butler's pantry custom storage design houzz",
  'great room': 'great room fireplace living room design houzz',
  'living room': 'luxury living room interior design houzz',
  'dining room': 'luxury dining room interior design houzz',
  'primary bedroom': 'luxury master bedroom interior design houzz',
  'master bedroom': 'luxury master bedroom interior design houzz',
  'primary bath': 'luxury master bathroom design houzz',
  'master bath': 'luxury master bathroom design houzz',
  'bathroom': 'custom guest bathroom design houzz',
  'guest bath': 'custom guest bathroom design houzz',
  'mudroom': 'custom mudroom bench lockers storage design houzz',
  'laundry': 'custom laundry room design houzz',
  'office': 'custom home office built-in design houzz',
  'garage': 'custom garage storage workshop design',
  'porch': 'covered porch outdoor living design houzz',
  'default': 'luxury custom home interior design houzz',
};

async function getInspirationImages(roomType, stylePrefix = '', count = 10, features = []) {
  if (!SERPER_API_KEY) {
    console.warn('SERPER_API_KEY not set');
    return [];
  }
  try {
    const baseQuery = ROOM_QUERIES[roomType?.toLowerCase()] || ROOM_QUERIES.default;
    const featureStr = features.filter(f => f && f.length > 2).slice(0, 2).join(' ');
    const query = [stylePrefix, featureStr || '', baseQuery].filter(Boolean).join(' ').trim();

    const res = await fetch('https://google.serper.dev/images', {
      method: 'POST',
      headers: {
        'X-API-KEY': SERPER_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ q: query, num: count }),
    });

    if (!res.ok) {
      console.error('Serper error:', res.status, await res.text());
      return [];
    }

    const data = await res.json();
    return (data.images || []).map(img => ({
      url: img.imageUrl,
      thumb: img.thumbnailUrl || img.imageUrl,
      title: img.title,
      source: img.source,
      contextUrl: img.link,
    }));
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

module.exports = { getInspirationImages, setProjectStyle, getProjectStyle };
