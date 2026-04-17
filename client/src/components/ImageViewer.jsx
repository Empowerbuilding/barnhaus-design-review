import { useState, useEffect } from 'react';
import EnhanceButton from './EnhanceButton';
import Lightbox from './Lightbox';
import FeedbackButtons from './FeedbackButtons';
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
  .enhanced-container {
    margin-top: 0.75rem;
    border: 1px solid rgba(184, 134, 11, 0.3);
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .enhanced-label {
    padding: 0.4rem 0.75rem;
    background: rgba(184, 134, 11, 0.1);
    font-size: 0.75rem;
    color: #DAA520;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .enhanced-toggle-row {
    display: flex;
    gap: 0.4rem;
    margin-bottom: 0.6rem;
  }
  .toggle-btn {
    flex: 1;
    padding: 0.45rem 0.75rem;
    border-radius: 20px;
    border: 1px solid #3a3a3a;
    background: #2a2a2a;
    color: #888;
    font-size: 0.8rem;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    transition: all 0.2s;
  }
  .toggle-btn.active {
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    font-weight: 600;
    border-color: transparent;
  }
  .enhanced-image {
    width: 100%;
    max-height: 300px;
    object-fit: contain;
    background: #2a2a2a;
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
  }
  .btn-floor-next:hover { opacity: 0.85; }

  @media (max-width: 768px) {
    .image-viewer {
      height: auto;
      overflow-y: visible;
      padding: 0.75rem;
    }
    .image-main-wrap {
      flex: none;
    }
    .image-main {
      max-height: 45vh;
    }
    .main-image {
      max-height: 45vh;
    }
    .room-label {
      font-size: 0.9rem;
    }
    .image-name {
      max-width: 120px;
      font-size: 0.72rem;
    }
    .thumb {
      width: 80px;
      height: 60px;
      min-width: 80px;
      min-height: 60px;
    }
    .nav-arrow {
      width: 44px;
      height: 44px;
      font-size: 1.6rem;
    }
    .btn-floor-next {
      width: 100%;
      padding: 0.75rem 1rem;
      font-size: 0.9rem;
      min-height: 44px;
      margin-top: 0.75rem;
    }
    .enhanced-toggle-row {
    display: flex;
    gap: 0.4rem;
    margin-bottom: 0.6rem;
  }
  .toggle-btn {
    flex: 1;
    padding: 0.45rem 0.75rem;
    border-radius: 20px;
    border: 1px solid #3a3a3a;
    background: #2a2a2a;
    color: #888;
    font-size: 0.8rem;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    transition: all 0.2s;
  }
  .toggle-btn.active {
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    font-weight: 600;
    border-color: transparent;
  }
  .enhanced-image {
      max-height: 200px;
    }
  }
`;

export default function ImageViewer({
  image,
  images,
  currentIndex,
  onSelectImage,
  isFloorPlan,
  enhancedUrl,
  roomType,
  onEnhanced,
  autoEnhancePrompt,
  feedback,
  onFeedback,
  onNext,
  hasNext,
  onComplete,
  isLastImage,
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [showEnhanced, setShowEnhanced] = useState(true);
  useEffect(() => { setImgLoaded(false); }, [image?.id]);
  useEffect(() => { setShowEnhanced(true); }, [enhancedUrl]);

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

  const goPrev = () => { if (currentIndex > 0) onSelectImage(currentIndex - 1); };
  const goNext = () => { if (currentIndex < totalImages - 1) onSelectImage(currentIndex + 1); };

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

      {enhancedUrl && (
        <div className="enhanced-container">
          <div className="enhanced-toggle-row">
            <button
              className={`toggle-btn ${!showEnhanced ? 'active' : ''}`}
              onClick={() => setShowEnhanced(false)}
            >Original</button>
            <button
              className={`toggle-btn ${showEnhanced ? 'active' : ''}`}
              onClick={() => setShowEnhanced(true)}
            >✨ Visualized</button>
          </div>
          <img
            src={showEnhanced ? enhancedUrl : image.url}
            alt={showEnhanced ? 'Visualized render' : 'Original render'}
            className="enhanced-image"
            onClick={() => setLightboxOpen(true)}
            style={{ cursor: 'zoom-in' }}
          />
        </div>
      )}

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

      <div className="image-controls">
        {!isFloorPlan && (
          <EnhanceButton imageUrl={image.url} roomType={roomType} onEnhanced={onEnhanced} autoPrompt={autoEnhancePrompt} />
        )}

        {!isFloorPlan && (
          <FeedbackButtons
            imageId={image.id}
            feedback={feedback}
            onFeedback={onFeedback}
            onNext={onNext}
            hasNext={hasNext}
            onComplete={onComplete}
            isLastImage={isLastImage}
          />
        )}

        {isFloorPlan && hasNext && (
          <button className="btn-floor-next" onClick={onNext}>
            Continue to Next Section →
          </button>
        )}
      </div>
    {lightboxOpen && (
      <Lightbox
        src={enhancedUrl || image.url}
        alt={image.name}
        onClose={() => setLightboxOpen(false)}
      />
    )}
    </div>
  );
}

