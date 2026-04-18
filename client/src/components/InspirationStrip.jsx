import { useState } from 'react';

const styles = `
  .inspiration-strip {
    padding: 0.75rem 1rem;
    background: #1e1e1e;
    border-top: 1px solid #2a2a2a;
    flex-shrink: 0;
  }
  .inspiration-label {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #666;
    margin-bottom: 0.5rem;
  }
  .inspiration-row {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    padding-bottom: 0.25rem;
    scrollbar-width: thin;
    scrollbar-color: #333 transparent;
  }
  .inspiration-thumb {
    flex-shrink: 0;
    width: 90px;
    height: 90px;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid transparent;
    transition: border-color 0.15s, transform 0.15s;
    position: relative;
  }
  .inspiration-thumb:hover { border-color: #B8860B; transform: scale(1.03); }
  .inspiration-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .inspiration-thumb .pick-overlay {
    position: absolute; inset: 0;
    background: rgba(0,0,0,0.45);
    display: flex; align-items: center; justify-content: center;
    opacity: 0; transition: opacity 0.15s;
    font-size: 0.7rem; color: #fff; font-weight: 600;
    flex-direction: column; gap: 3px;
  }
  .inspiration-thumb:hover .pick-overlay { opacity: 1; }
  .pick-icon { font-size: 1.1rem; }
  .inspiration-skip {
    flex-shrink: 0;
    width: 90px; height: 90px;
    border-radius: 6px;
    border: 2px dashed #333;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; color: #555; font-size: 0.7rem;
    transition: border-color 0.15s, color 0.15s;
    flex-direction: column; gap: 4px;
  }
  .inspiration-skip:hover { border-color: #555; color: #888; }

  /* Lightbox */
  .inspo-lightbox {
    position: fixed; inset: 0; z-index: 9999;
    background: rgba(0,0,0,0.92);
    display: flex; align-items: center; justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
  .inspo-lb-img {
    max-width: 80vw; max-height: 70vh;
    border-radius: 8px;
    object-fit: contain;
    box-shadow: 0 8px 40px rgba(0,0,0,0.6);
  }
  .inspo-lb-nav {
    display: flex; align-items: center; gap: 1.5rem;
  }
  .inspo-lb-arrow {
    background: rgba(255,255,255,0.1); border: none;
    color: #fff; font-size: 1.5rem;
    width: 44px; height: 44px; border-radius: 50%;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: background 0.15s;
  }
  .inspo-lb-arrow:hover { background: rgba(255,255,255,0.2); }
  .inspo-lb-arrow:disabled { opacity: 0.3; cursor: default; }
  .inspo-lb-actions {
    display: flex; gap: 0.75rem;
  }
  .inspo-lb-pick {
    background: #B8860B; color: #fff; border: none;
    padding: 0.5rem 1.25rem; border-radius: 20px;
    font-size: 0.85rem; font-weight: 600; cursor: pointer;
    transition: background 0.15s;
  }
  .inspo-lb-pick:hover { background: #d4a017; }
  .inspo-lb-skip {
    background: transparent; color: #888; border: 1px solid #444;
    padding: 0.5rem 1rem; border-radius: 20px;
    font-size: 0.85rem; cursor: pointer; transition: color 0.15s;
  }
  .inspo-lb-skip:hover { color: #aaa; }
  .inspo-lb-close {
    position: absolute; top: 1rem; right: 1.25rem;
    background: none; border: none; color: #888;
    font-size: 1.5rem; cursor: pointer; line-height: 1;
  }
  .inspo-lb-counter { color: #555; font-size: 0.75rem; }
  .inspo-lb-source { color: #444; font-size: 0.65rem; }
`;

export default function InspirationStrip({ images, onPick }) {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  if (!images || images.length === 0) return null;

  const openLightbox = (i) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);

  const prev = () => setLightboxIdx(i => Math.max(0, i - 1));
  const next = () => setLightboxIdx(i => Math.min(images.length - 1, i + 1));

  const handlePick = (idx) => {
    closeLightbox();
    onPick(images[idx], idx + 1);
  };

  const handleSkip = () => {
    closeLightbox();
    onPick(null, 0);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="inspiration-strip">
        <div className="inspiration-label">Pick a vibe →</div>
        <div className="inspiration-row">
          {images.map((img, i) => (
            <div key={i} className="inspiration-thumb" onClick={() => openLightbox(i)}>
              <img src={img.thumb || img.url} alt={img.title || `Option ${i + 1}`} loading="lazy" />
              <div className="pick-overlay">
                <span className="pick-icon">🔍</span>
                <span>View</span>
              </div>
            </div>
          ))}
          <div className="inspiration-skip" onClick={handleSkip}>
            <span>Skip →</span>
            <span>None fit</span>
          </div>
        </div>
      </div>

      {lightboxIdx !== null && (
        <div className="inspo-lightbox" onClick={closeLightbox}>
          <button className="inspo-lb-close" onClick={closeLightbox}>✕</button>
          <div onClick={e => e.stopPropagation()}>
            <img
              className="inspo-lb-img"
              src={images[lightboxIdx].url}
              alt={images[lightboxIdx].title || `Option ${lightboxIdx + 1}`}
            />
          </div>
          <div className="inspo-lb-nav" onClick={e => e.stopPropagation()}>
            <button className="inspo-lb-arrow" onClick={prev} disabled={lightboxIdx === 0}>‹</button>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'0.5rem'}}>
              <div className="inspo-lb-actions">
                <button className="inspo-lb-pick" onClick={() => handlePick(lightboxIdx)}>
                  ✓ This vibe
                </button>
                <button className="inspo-lb-skip" onClick={handleSkip}>None fit</button>
              </div>
              <div className="inspo-lb-counter">{lightboxIdx + 1} of {images.length}</div>
              {images[lightboxIdx].source && (
                <div className="inspo-lb-source">via {images[lightboxIdx].source}</div>
              )}
            </div>
            <button className="inspo-lb-arrow" onClick={next} disabled={lightboxIdx === images.length - 1}>›</button>
          </div>
        </div>
      )}
    </>
  );
}
