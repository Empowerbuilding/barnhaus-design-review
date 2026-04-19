import { useState, useEffect } from 'react';
import Lightbox from './Lightbox';
const styles = `
  .image-viewer {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1rem;
    overflow-y: auto;
    background: #1a1a1a;
  }
  .image-viewer.empty {
    align-items: center;
    justify-content: center;
    color: #555;
  }
  .image-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    flex-shrink: 0;
  }
  .room-label {
    font-size: 1rem;
    font-weight: 600;
    color: #B8860B;
  }
  .ref-badge {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
    background: #2a2a2a;
    border: 1px solid #B8860B;
    border-radius: 12px;
    color: #B8860B;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .image-counter {
    font-size: 0.78rem;
    font-weight: 700;
    padding: 0.2rem 0.7rem;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    border-radius: 12px;
    letter-spacing: 0.03em;
  }
  .image-name {
    font-size: 0.78rem;
    color: #555;
    margin-left: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 200px;
  }
  .image-main-wrap {
    position: relative;
    flex: 1;
    display: flex;
    align-items: stretch;
    min-height: 0;
  }
  .image-main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: #2a2a2a;
    border-radius: 8px;
    border: 1px solid #3a3a3a;
  }
  .main-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 6px;
  }
  .nav-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(184, 134, 11, 0.9);
    color: #1a1a1a;
    border: none;
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: background 0.2s, transform 0.15s;
    line-height: 1;
  }
  .nav-arrow:hover { background: #DAA520; transform: translateY(-50%) scale(1.1); }
  .nav-prev { left: 8px; }
  .nav-next { right: 8px; }
  .thumbnails {
    flex-shrink: 0;
    margin-top: 0.75rem;
  }
  .thumb-scroll-hint {
    font-size: 0.72rem;
    color: #aaa;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  .thumb-strip {
    display: flex;
    gap: 0.6rem;
    overflow-x: auto;
    padding-bottom: 4px;
  }
  .thumb-strip::-webkit-scrollbar { height: 4px; }
  .thumb-strip::-webkit-scrollbar-track { background: #2a2a2a; border-radius: 2px; }
  .thumb-strip::-webkit-scrollbar-thumb { background: #3a3a3a; border-radius: 2px; }
  .thumb {
    position: relative;
    width: 90px;
    height: 68px;
    border-radius: 6px;
    overflow: hidden;
    border: 2px solid #3a3a3a;
    cursor: pointer;
    padding: 0;
    background: #2a2a2a;
    flex-shrink: 0;
    transition: border-color 0.2s, transform 0.15s;
  }
  .thumb:hover { border-color: #aaa; transform: scale(1.03); }
  .thumb.active { border-color: #DAA520; box-shadow: 0 0 0 1px #B8860B; }
  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .thumb-num {
    position: absolute;
    bottom: 3px;
    right: 5px;
    font-size: 0.65rem;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 1px 3px rgba(0,0,0,0.8);
  }
  .image-controls {
    flex-shrink: 0;
  }
  .btn-floor-next {
    margin-top: 0.75rem;
    padding: 0.6rem 1.5rem;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: opacity 0.2s;
    width: 100%;
  }
  .btn-floor-next:hover { opacity: 0.85; }

  /* Inspiration grid */
  .inspiration-section {
    flex-shrink: 0;
    border-top: 1px solid #2a2a2a;
    padding-top: 0.5rem;
    margin-top: 0.75rem;
  }
  .inspiration-label {
    font-size: 0.72rem;
    color: #aaa;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  .inspiration-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
  }
  .inspiration-thumb {
    aspect-ratio: 4/3;
    position: relative;
    aspect-ratio: 4/3;
    border-radius: 6px;
    overflow: hidden;
    border: 2px solid #3a3a3a;
    cursor: pointer;
    background: #2a2a2a;
    transition: border-color 0.2s, transform 0.15s;
  }
  .inspiration-thumb:hover { border-color: #B8860B; transform: scale(1.02); }
  .inspiration-thumb.selected { border-color: #DAA520; box-shadow: 0 0 0 1px #B8860B; }
  .inspiration-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .inspiration-thumb-title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.3rem 0.4rem;
    background: linear-gradient(transparent, rgba(0,0,0,0.75));
    font-size: 0.65rem;
    color: #fff;
    line-height: 1.3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Revit thumbnail strip when inspiration grid is shown */
  .revit-mini {
    flex-shrink: 0;
    margin-top: 0.5rem;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid #3a3a3a;
    max-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2a2a2a;
    cursor: zoom-in;
  }
  .revit-mini img {
    max-height: 100px;
    max-width: 100%;
    object-fit: contain;
  }
  .revit-mini-label {
    font-size: 0.65rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-top: 0.25rem;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    .image-viewer {
      height: auto;
      overflow-y: visible;
      padding: 0.75rem;
    }
    .image-main-wrap { flex: none; }
    .image-main { max-height: 45vh; }
    .main-image { max-height: 45vh; }
    .room-label { font-size: 0.9rem; }
    .image-name { max-width: 120px; font-size: 0.72rem; }
    .thumb { width: 80px; height: 60px; min-width: 80px; min-height: 60px; }
    .nav-arrow { width: 44px; height: 44px; font-size: 1.6rem; }
    .btn-floor-next {
      width: 100%;
      padding: 0.75rem 1rem;
      font-size: 0.9rem;
      min-height: 44px;
      margin-top: 0.75rem;
    }
    .inspiration-grid { grid-template-columns: repeat(4, 1fr); gap: 0.3rem; }
  }
`;

export default function ImageViewer({
  image,
  images,
  currentIndex,
  onSelectImage,
  isFloorPlan,
  roomType,
  onNext,
  hasNext,
  onComplete,
  isLastImage,
  inspirationImages,
  onInspirationSelect,
  onLoadMoreInspiration,
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [selectedInspiration, setSelectedInspiration] = useState(null);
  const [inspirationLightbox, setInspirationLightbox] = useState(null); // {img, idx}
  useEffect(() => { setImgLoaded(false); }, [image?.id]);
  useEffect(() => { setSelectedInspiration(null); }, [image?.id]);

  if (!image) {
    return (
      <div className="image-viewer empty">
        <style>{styles}</style>
        <p>No image to display</p>
      </div>
    );
  }

  const displayLabel = roomType ? roomType.charAt(0).toUpperCase() + roomType.slice(1) : '';
  const totalImages = images.length;
  const hasMultiple = totalImages > 1;
  const hasInspiration = inspirationImages && inspirationImages.length > 0;

  const goPrev = () => { if (currentIndex > 0) onSelectImage(currentIndex - 1); };
  const goNext = () => { if (currentIndex < totalImages - 1) onSelectImage(currentIndex + 1); };

  const handleInspirationClick = (img, idx) => {
    setInspirationLightbox({ img, idx });
  };

  const handleInspirationConfirm = () => {
    if (!inspirationLightbox) return;
    const { img, idx } = inspirationLightbox;
    setSelectedInspiration(idx);
    setInspirationLightbox(null);
    if (onInspirationSelect) {
      onInspirationSelect(`[Selected inspiration: ${img.title || 'image ' + (idx + 1)}]`);
    }
  };

  return (
    <div className="image-viewer">
      <style>{styles}</style>

      <div className="image-header">
        <span className="room-label">{displayLabel}</span>
        {isFloorPlan && <span className="ref-badge">Reference Only</span>}
        {hasMultiple && (
          <span className="image-counter">{currentIndex + 1} of {totalImages}</span>
        )}
        <span className="image-name">{image.name}</span>
      </div>

      {/* Render always stays as the hero — inspiration strip appears below it */}
      <div className="image-main-wrap">
          {hasMultiple && currentIndex > 0 && (
            <button className="nav-arrow nav-prev" onClick={goPrev} aria-label="Previous image">‹</button>
          )}
          <div className="image-main">
            {!imgLoaded && (
              <div style={{
                width: '100%', minHeight: 300,
                background: 'linear-gradient(90deg, #2a2a2a 25%, #333 50%, #2a2a2a 75%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 1.5s infinite',
                borderRadius: 8,
              }} />
            )}
            <img
              src={image.url}
              alt={image.name}
              className="main-image"
              onClick={() => setLightboxOpen(true)}
              onLoad={() => setImgLoaded(true)}
              style={{ cursor: 'zoom-in', display: imgLoaded ? 'block' : 'none' }}
              title="Click to zoom"
            />
          </div>
          {hasMultiple && currentIndex < totalImages - 1 && (
            <button className="nav-arrow nav-next" onClick={goNext} aria-label="Next image">›</button>
          )}
        </div>

      {hasMultiple && (
        <div className="thumbnails">
          <div className="thumb-scroll-hint">
            {totalImages} views — click to explore
          </div>
          <div className="thumb-strip">
            {images.map((img, i) => (
              <button
                key={img.id}
                className={`thumb ${i === currentIndex ? 'active' : ''}`}
                onClick={() => onSelectImage(i)}
                title={img.name}
              >
                <img src={img.url} alt={img.name} />
                <span className="thumb-num">{i + 1}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {hasInspiration && (
        <div className="inspiration-section">
          <div className="inspiration-label">Reference images — tap one that matches your vision</div>
          <div className="inspiration-grid">
            {inspirationImages.slice(0, 4).map((img, i) => (
              <div
                key={i}
                className={`inspiration-thumb ${selectedInspiration === i ? 'selected' : ''}`}
                onClick={() => handleInspirationClick(img, i)}
              >
                <img src={img.url || img.thumb} alt={img.title || ''} loading="lazy" />
                {img.title && <div className="inspiration-thumb-title">{img.title}</div>}
              </div>
            ))}
          </div>
          {onLoadMoreInspiration && (
            <button
              onClick={onLoadMoreInspiration}
              style={{
                marginTop: '0.5rem',
                background: 'transparent',
                border: '1px solid #3a3a3a',
                color: '#888',
                fontSize: '0.75rem',
                padding: '0.3rem 0.8rem',
                borderRadius: '12px',
                cursor: 'pointer',
                width: '100%',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.target.style.borderColor = '#B8860B'; e.target.style.color = '#DAA520'; }}
              onMouseLeave={e => { e.target.style.borderColor = '#3a3a3a'; e.target.style.color = '#888'; }}
            >
              None of these — show me 4 more
            </button>
          )}
        </div>
      )}

      <div className="image-controls">
        {isFloorPlan && hasNext && (
          <button className="btn-floor-next" onClick={onNext}>
            Continue to Next Section →
          </button>
        )}
        {!isFloorPlan && isLastImage && (
          <button className="btn-floor-next" style={{ marginTop: '0.75rem' }} onClick={onComplete}>
            Send to Michael →
          </button>
        )}
        {!isFloorPlan && !isLastImage && hasNext && currentIndex === totalImages - 1 && (
          <button className="btn-floor-next" style={{ marginTop: '0.75rem', background: '#2a2a2a', border: '1px solid #B8860B', color: '#DAA520' }} onClick={onNext}>
            Next Section →
          </button>
        )}
      </div>

      {/* Inspiration image lightbox */}
      {inspirationLightbox && (
        <div
          onClick={() => setInspirationLightbox(null)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.88)',
            zIndex: 9999, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', padding: '1.5rem',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative', maxWidth: '780px', width: '100%',
              background: '#111', borderRadius: '12px', overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
            }}
          >
            {/* X button */}
            <button
              onClick={() => setInspirationLightbox(null)}
              style={{
                position: 'absolute', top: '0.75rem', right: '0.75rem',
                background: 'rgba(0,0,0,0.6)', border: 'none', color: '#fff',
                borderRadius: '50%', width: '32px', height: '32px',
                cursor: 'pointer', fontSize: '1.1rem', zIndex: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >✕</button>

            {/* Image */}
            <img
              src={inspirationLightbox.img.url}
              alt={inspirationLightbox.img.title || 'Inspiration'}
              style={{ width: '100%', maxHeight: '65vh', objectFit: 'cover', display: 'block' }}
            />

            {/* Title + confirm */}
            <div style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
              <div>
                <div style={{ color: '#eee', fontSize: '0.9rem', fontWeight: 500 }}>
                  {inspirationLightbox.img.title || 'Reference image'}
                </div>
                {inspirationLightbox.img.source && (
                  <div style={{ color: '#666', fontSize: '0.75rem', marginTop: '0.2rem' }}>
                    {inspirationLightbox.img.source}
                  </div>
                )}
              </div>
              <button
                onClick={handleInspirationConfirm}
                style={{
                  background: '#B8860B', color: '#fff', border: 'none',
                  borderRadius: '8px', padding: '0.6rem 1.4rem',
                  fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
                  whiteSpace: 'nowrap', flexShrink: 0,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.target.style.background = '#DAA520'}
                onMouseLeave={e => e.target.style.background = '#B8860B'}
              >
                Yes, I like this direction
              </button>
            </div>
          </div>
        </div>
      )}

      {lightboxOpen && (
        <Lightbox
          src={image.url}
          alt={image.name}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
