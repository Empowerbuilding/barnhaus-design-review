// Inspiration image fetcher — Google Custom Search (image search)
// Searches curated design/architecture sites for relevant inspiration photos

const GOOGLE_API_KEY = process.env.GOOGLE_SEARCH_API_KEY;
const GOOGLE_CX = process.env.GOOGLE_SEARCH_CX || '707c8de58964749d1';

const ROOM_QUERIES = {
  'kitchen': 'kitchen interior design',
  'living room': 'living room interior design',
  'great room': 'great room open plan interior',
  'master bedroom': 'primary bedroom interior design',
  'primary bedroom': 'primary bedroom interior design',
  'master bath': 'primary bathroom interior design',
  'primary bath': 'primary bathroom interior design',
  'exterior': 'home exterior architecture',
  'floor plan': 'floor plan layout',
  'dining room': 'dining room interior design',
  'office': 'home office interior design',
  'mudroom': 'mudroom laundry room design',
  'garage': 'garage interior design',
  'porch': 'covered porch outdoor living design',
  'default': 'custom home interior design',
};

async function fetchGoogleImages(query, count = 10) {
  if (!GOOGLE_API_KEY) {
    console.warn('GOOGLE_SEARCH_API_KEY not set');
    return [];
  }
  const fetchPage = async (start = 1) => {
    const params = new URLSearchParams({
      key: GOOGLE_API_KEY,
      cx: GOOGLE_CX,
      q: query,
      searchType: 'image',
      num: Math.min(count, 10),
      start,
      imgType: 'photo',
      imgSize: 'large',
      safe: 'off',
    });
    const res = await fetch(`https://www.googleapis.com/customsearch/v1?${params}`);
    if (!res.ok) {
      const err = await res.text();
      console.error('Google Search error:', res.status, err.slice(0, 200));
      return [];
    }
    const data = await res.json();
    return (data.items || []).map(item => ({
      url: item.link,
      thumb: item.image?.thumbnailLink || item.link,
      title: item.title,
      source: item.displayLink,
    }));
  };

  if (count <= 10) return fetchPage(1);
  // Fetch two pages in parallel for >10 results
  const [p1, p2] = await Promise.all([fetchPage(1), fetchPage(11)]);
  return [...p1, ...p2].slice(0, count);
}

async function getInspirationImages(roomType, stylePrefix = '', count = 3, features = []) {
  const baseQuery = ROOM_QUERIES[roomType.toLowerCase()] || ROOM_QUERIES.default;
  const featureStr = features.filter(f => f && f.length > 2).slice(0, 3).join(' ');
  const query = [stylePrefix, featureStr || '', baseQuery].filter(Boolean).join(' ').trim();

  try {
    return await fetchGoogleImages(query, count);
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
