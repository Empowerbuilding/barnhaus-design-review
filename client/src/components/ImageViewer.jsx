import EnhanceButton from './EnhanceButton';
import FeedbackButtons from './FeedbackButtons';

export default function ImageViewer({
  image,
  images,
  currentIndex,
  onSelectImage,
  isFloorPlan,
  enhancedUrl,
  roomType,
  onEnhanced,
  feedback,
  onFeedback,
  onNext,
  hasNext,
  onComplete,
  isLastImage,
}) {
  if (!image) {
    return (
      <div className="image-viewer empty">
        <style>{styles}</style>
        <p>No image to display</p>
      </div>
    );
  }

  const displayLabel = roomType
    ? roomType.charAt(0).toUpperCase() + roomType.slice(1)
    : '';

  return (
    <div className="image-viewer">
      <style>{styles}</style>

      <div className="image-header">
        <span className="room-label">{displayLabel}</span>
        {isFloorPlan && <span className="ref-badge">Reference Only</span>}
        <span className="image-name">{image.name}</span>
      </div>

      <div className="image-main">
        <img src={image.url} alt={image.name} className="main-image" />
      </div>

      {enhancedUrl && (
        <div className="enhanced-container">
          <div className="enhanced-label">Enhanced Version</div>
          <img src={enhancedUrl} alt="Enhanced render" className="enhanced-image" />
        </div>
      )}

      <div className="image-controls">
        {!isFloorPlan && (
          <EnhanceButton imageUrl={image.url} roomType={roomType} onEnhanced={onEnhanced} />
        )}

        {!isFloorPlan && (
          <FeedbackButtons
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
            Continue to Next Section
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div className="thumbnails">
          {images.map((img, i) => (
            <button
              key={img.id}
              className={`thumb ${i === currentIndex ? 'active' : ''}`}
              onClick={() => onSelectImage(i)}
            >
              <img src={img.url} alt={img.name} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = `
  .image-viewer {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1rem;
    overflow-y: auto;
  }
  .image-viewer.empty {
    align-items: center;
    justify-content: center;
    color: #666;
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
    color: var(--gold);
  }
  .ref-badge {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
    background: var(--charcoal-light);
    border: 1px solid var(--gold);
    border-radius: 12px;
    color: var(--gold);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .image-name {
    font-size: 0.8rem;
    color: #666;
    margin-left: auto;
  }
  .image-main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 0;
    overflow: hidden;
    background: var(--charcoal-light);
    border-radius: 8px;
  }
  .main-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 4px;
  }
  .enhanced-container {
    margin-top: 0.75rem;
    border: 1px solid rgba(201, 168, 76, 0.2);
    border-radius: 8px;
    overflow: hidden;
  }
  .enhanced-label {
    padding: 0.4rem 0.75rem;
    background: rgba(201, 168, 76, 0.08);
    font-size: 0.75rem;
    color: var(--gold);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .enhanced-image {
    width: 100%;
    max-height: 300px;
    object-fit: contain;
    background: var(--charcoal-light);
  }
  .image-controls {
    flex-shrink: 0;
  }
  .btn-floor-next {
    margin-top: 0.75rem;
    padding: 0.6rem 1.5rem;
    background: var(--gold);
    color: var(--charcoal);
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
  }
  .btn-floor-next:hover { background: var(--gold-bright); }
  .thumbnails {
    display: flex;
    gap: 0.5rem;
    padding: 0.75rem 0 0;
    overflow-x: auto;
    flex-shrink: 0;
  }
  .thumb {
    width: 64px;
    height: 48px;
    border-radius: 6px;
    overflow: hidden;
    border: 2px solid transparent;
    cursor: pointer;
    padding: 0;
    background: var(--charcoal-light);
    flex-shrink: 0;
    transition: border-color 0.2s;
  }
  .thumb.active { border-color: var(--gold); }
  .thumb:hover { border-color: #666; }
  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
