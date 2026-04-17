// Inspiration image fetcher — Pexels now, Pinterest-ready adapter pattern
// To swap to Pinterest: implement fetchPinterest() and update getInspirationImages()

const PEXELS_KEY = process.env.PEXELS_API_KEY;
const PINTEREST_TOKEN = process.env.PINTEREST_ACCESS_TOKEN;

// Room type → search query mapping
// Style prefix gets prepended when known (e.g. "Scandinavian farmhouse kitchen interior")
const ROOM_QUERIES = {
  exterior:          'modern farmhouse steel home exterior curb appeal',
  kitchen:           'modern farmhouse kitchen interior design',
  'great room':      'modern open concept great room fireplace vaulted ceiling',
  'living room':     'modern farmhouse living room interior',
  'dining room':     'modern farmhouse dining room interior',
  'primary bedroom': 'modern master bedroom interior design',
  'master bedroom':  'modern master bedroom interior design',
  'primary bath':    'luxury master bathroom interior design',
  'master bath':     'luxury master bathroom interior design',
  bathroom:          'modern bathroom interior tile design',
  office:            'modern home office interior design',
  'bonus room':      'modern bonus room interior design',
  patio:             'covered outdoor patio pergola design',
  outdoor:           'covered outdoor living space design',
  garage:            'modern garage interior design',
  laundry:           'modern laundry room interior design',
  hallway:           'modern home hallway interior design',
  default:           'modern farmhouse interior design',
};

const cache = new Map();

async function fetchPexels(query, count = 3) {
  if (!PEXELS_KEY) return null;
  const cacheKey = `pexels:${query}:${count}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  try {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${count * 3}&orientation=landscape`;
    const res = await fetch(url, { headers: { Authorization: PEXELS_KEY } });
    if (!res.ok) throw new Error(`Pexels ${res.status}`);
    const data = await res.json();
    const photos = (data.photos || []).slice(0, count).map(p => ({
      url: p.src.large,
      thumb: p.src.medium,
      link: p.url,
      credit: p.photographer,
      source: 'pexels',
    }));
    cache.set(cacheKey, photos);
    // expire cache after 1 hour
    setTimeout(() => cache.delete(cacheKey), 3600000);
    return photos;
  } catch (err) {
    console.error('Pexels error:', err.message);
    return null;
  }
}

async function fetchPinterest(query, count = 3) {
  if (!PINTEREST_TOKEN) return null;
  // Pinterest v5 search — swap in when app is approved
  try {
    const url = `https://api.pinterest.com/v5/pins/?query=${encodeURIComponent(query)}&page_size=${count}`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${PINTEREST_TOKEN}` } });
    if (!res.ok) throw new Error(`Pinterest ${res.status}`);
    const data = await res.json();
    return (data.items || []).slice(0, count).map(pin => ({
      url: pin.media?.images?.['1200x']?.url || pin.media?.images?.originals?.url,
      thumb: pin.media?.images?.['400x300']?.url,
      link: `https://pinterest.com/pin/${pin.id}`,
      credit: null,
      source: 'pinterest',
    })).filter(p => p.url);
  } catch (err) {
    console.error('Pinterest error:', err.message);
    return null;
  }
}

async function getInspirationImages(roomType, stylePrefix = '', count = 3) {
  // Skip floor plans — visual inspiration doesn't apply
  if (!roomType || roomType === 'floor plan') return [];

  const baseQuery = ROOM_QUERIES[roomType.toLowerCase()] || ROOM_QUERIES.default;
  const query = stylePrefix ? `${stylePrefix} ${baseQuery}` : baseQuery;

  // Pinterest first if available, then Pexels
  if (PINTEREST_TOKEN) {
    const pins = await fetchPinterest(query, count);
    if (pins && pins.length > 0) return pins;
  }

  if (PEXELS_KEY) {
    const photos = await fetchPexels(query, count);
    if (photos && photos.length > 0) return photos;
  }

  return [];
}

// Build a style prefix from a project slug by checking the session's known style
// (populated by Silas during memo generation — stored in session style cache)
const styleCache = new Map(); // projectSlug → style keywords

function setProjectStyle(projectSlug, styleKeywords) {
  styleCache.set(projectSlug, styleKeywords);
}

function getProjectStyle(projectSlug) {
  return styleCache.get(projectSlug) || '';
}

module.exports = { getInspirationImages, setProjectStyle, getProjectStyle };
