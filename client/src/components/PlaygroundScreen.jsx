import { useState, useCallback, useEffect, useRef } from 'react';
import InspirationStrip from './InspirationStrip';
import EnhanceButton from './EnhanceButton';

const LOGO = 'https://barnhaussteelbuilders.com/assets/images/logo-BbjiAVC6.png';

const styles = `
  @keyframes spin { to { transform: rotate(360deg); } }
  .pg-screen {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    background: #1a1a1a;
    color: #e0e0e0;
    font-family: 'Inter', sans-serif;
  }
  .pg-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.65rem 1.25rem;
    border-bottom: 1px solid #2a2a2a;
    flex-shrink: 0;
  }
  .pg-logo { height: 28px; }
  .pg-title {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #B8860B;
  }
  .pg-counter {
    font-size: 0.75rem;
    color: #666;
    min-width: 3rem;
    text-align: right;
  }
  .pg-image-area {
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 0;
    background: #111;
  }
  .pg-main-img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
    display: block;
  }
  .pg-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12);
    color: #ccc;
    cursor: pointer;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s;
    z-index: 2;
    line-height: 1;
  }
  .pg-arrow:hover { background: rgba(255,255,255,0.18); }
  .pg-arrow-left { left: 0.75rem; }
  .pg-arrow-right { right: 0.75rem; }
  .pg-room-label {
    text-align: center;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #B8860B;
    padding: 0.4rem 0 0.2rem;
    flex-shrink: 0;
  }
  .pg-bottom {
    flex-shrink: 0;
  }
  .pg-footer {
    padding: 0.5rem 1.25rem 0.75rem;
    flex-shrink: 0;
  }
  .pg-send-btn {
    width: 100%;
    padding: 0.85rem;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.95rem;
    letter-spacing: 0.03em;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: opacity 0.2s, transform 0.15s;
  }
  .pg-send-btn:hover:not(:disabled) { opacity: 0.85; transform: scale(1.01); }
  .pg-send-btn:disabled { opacity: 0.5; cursor: not-allowed; }
  @keyframes pg-pulse {
    0%, 100% { opacity: 0.35; }
    50% { opacity: 0.65; }
  }
  .pg-skeleton-strip {
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
  }
  .pg-skeleton-box {
    flex: 1;
    height: 72px;
    border-radius: 6px;
    background: rgba(184, 134, 11, 0.25);
    animation: pg-pulse 1.4s ease-in-out infinite;
  }
  .pg-skeleton-box:nth-child(2) { animation-delay: 0.15s; }
  .pg-skeleton-box:nth-child(3) { animation-delay: 0.3s; }
  .pg-skeleton-box:nth-child(4) { animation-delay: 0.45s; }
  .pg-skeleton-box:nth-child(5) { animation-delay: 0.6s; }
`;

export default function PlaygroundScreen({ feedback, project, clientName, projectSlug, sessionId, onSendToMichael }) {
  const feedbackItems = Object.values(feedback || {});
  let items = feedbackItems.filter(i => i?.imageId);
  if (items.length === 0 && project?.groups?.length > 0) {
    items = project.groups
      .filter(g => g.roomType?.toLowerCase() !== 'floor plan')
      .flatMap(g => (g.images || []).map(img => ({
        imageId: img.id,
        imageName: img.name,
        roomType: g.roomType,
        originalUrl: img.url || `/api/image/${img.id}`,
        status: null,
        notes: '',
      })))
      .filter(i => i.imageId);
  }

  console.log('[Playground] items:', items.length, 'feedback:', feedbackItems.length, 'groups:', project?.groups?.length, 'first item url:', items[0]?.originalUrl);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [inspirationImages, setInspirationImages] = useState([]);
  const [inspirationLoading, setInspirationLoading] = useState(false);
  const [autoEnhancePrompt, setAutoEnhancePrompt] = useState('');
  const [enhancedUrls, setEnhancedUrls] = useState({});
  const [sending, setSending] = useState(false);
  const [vibeLoading, setVibeLoading] = useState(false);
  const vibeCache = useRef({});
  const promptCache = useRef({}); // per-imageId prompt // cache by imageId

  // Guard: if no items, show loading/empty state
  if (items.length === 0) {
    return (
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%',background:'#1a1a1a',color:'#555',flexDirection:'column',gap:'1rem'}}>
        <div style={{fontSize:'2rem'}}>🖼️</div>
        <div style={{fontSize:'0.85rem',letterSpacing:'0.05em'}}>Loading your renders...</div>
      </div>
    );
  }

  const item = items[currentIdx];
  const isFirst = currentIdx === 0;
  const isLast = currentIdx === items.length - 1;

  const fetchVibesForIdx = useCallback(async (idx, applyToState) => {
    const target = items[idx];
    if (!target || !target.roomType) return;
    // Return cache immediately
    if (vibeCache.current[target.imageId]) {
      if (applyToState) {
        setInspirationImages(vibeCache.current[target.imageId]);
        setInspirationLoading(false);
      }
      return;
    }
    try {
      const res = await fetch(`/api/inspiration?room=${encodeURIComponent(target.roomType)}&count=5`);
      const data = await res.json();
      const imgs = data.images || [];
      vibeCache.current[target.imageId] = imgs;
      if (applyToState) {
        setInspirationImages(imgs);
        setInspirationLoading(false);
      }
    } catch {
      if (applyToState) setInspirationLoading(false);
    }
  }, [items]);

  // Fetch current image vibes + prefetch next
  useEffect(() => {
    if (!item) return;
    setAutoEnhancePrompt(promptCache.current[item.imageId] || item.notes || '');

    // Show cached immediately or fetch
    if (vibeCache.current[item.imageId]) {
      setInspirationImages(vibeCache.current[item.imageId]);
      setInspirationLoading(false);
    } else {
      setInspirationImages([]);
      setInspirationLoading(true);
      fetchVibesForIdx(currentIdx, true);
    }

    // Prefetch next in background (don't apply to state)
    if (currentIdx + 1 < items.length) {
      fetchVibesForIdx(currentIdx + 1, false);
    }
  }, [currentIdx]);  // eslint-disable-line react-hooks/exhaustive-deps

  const handleVibePick = useCallback(async (img, index) => {
    if (!img || !item) return;
    setVibeLoading(true);
    try {
      const res = await fetch('/api/inspiration/pick', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageUrl: img.url,
          imageIndex: index,
          roomType: item.roomType,
          clientName,
          sessionId,
        }),
      });
      const data = await res.json();
      if (data.description) {
        const existing = promptCache.current[item.imageId] || '';
        const vibes = existing
          ? existing + ' Also incorporate: ' + data.description
          : `Transform this ${item.roomType} render with the following style inspiration: ${data.description}`;
        const prompt = vibes + ' Keep the existing layout and dimensions intact.';
        promptCache.current[item.imageId] = prompt;
        setAutoEnhancePrompt(prompt);
      }
    } catch {
      // silently fail
    } finally {
      setVibeLoading(false);
    }
  }, [item, clientName, sessionId]);

  const handleEnhanced = useCallback((url) => {
    if (item) setEnhancedUrls(prev => ({ ...prev, [item.imageId]: url }));
  }, [item?.imageId]);

  const handleSend = async () => {
    setSending(true);
    try {
      await onSendToMichael();
    } catch {
      setSending(false);
    }
  };

  console.log("[Playground] rendering item:", item?.imageId, "url:", item?.originalUrl);
  if (!item) return null;

  const displayUrl = enhancedUrls[item.imageId] || item.originalUrl;

  return (
    <div className="pg-screen">
      <style>{styles}</style>
      <div className="pg-counter">{currentIdx + 1} / {items.length}</div>

      <div className="pg-image-area">
        {!isFirst && (
          <button className="pg-arrow pg-arrow-left" onClick={() => setCurrentIdx(i => i - 1)}>‹</button>
        )}
        <img src={displayUrl} alt={item.imageName} className="pg-main-img" />
        {!isLast && (
          <button className="pg-arrow pg-arrow-right" onClick={() => setCurrentIdx(i => i + 1)}>›</button>
        )}
      </div>

      <div className="pg-room-label">{item.roomType}</div>

      <div className="pg-bottom">
        {inspirationLoading && inspirationImages.length === 0
          ? (
            <div className="pg-skeleton-strip">
              {[0,1,2,3,4].map(i => <div key={i} className="pg-skeleton-box" />)}
            </div>
          )
          : <InspirationStrip images={inspirationImages} onPick={handleVibePick} />
        }
        {vibeLoading && (
          <div style={{padding:'0.5rem 1rem',fontSize:'0.75rem',color:'#B8860B',letterSpacing:'0.05em',display:'flex',alignItems:'center',gap:'0.5rem'}}>
            <span style={{display:'inline-block',width:'10px',height:'10px',border:'2px solid #B8860B',borderTopColor:'transparent',borderRadius:'50%',animation:'spin 0.7s linear infinite'}} />
            Building your prompt…
          </div>
        )}
        <EnhanceButton
          key={item.imageId}
          imageUrl={item.originalUrl}
          roomType={item.roomType || 'room'}
          onEnhanced={handleEnhanced}
          autoEnhancePrompt={autoEnhancePrompt}
        />
      </div>

      {isLast && (
        <div className="pg-footer">
          <button className="pg-send-btn" onClick={handleSend} disabled={sending}>
            {sending ? 'Sending…' : 'Send to Michael ✓'}
          </button>
        </div>
      )}
    </div>
  );
}
