export default function ProgressBar({ sections, currentIndex, onSelect }) {
  if (!sections.length) return null;

  return (
    <div className="progress-bar-container">
      <style>{styles}</style>
      <div className="progress-track">
        {sections.map((label, i) => (
          <div
            key={i}
            className={`progress-step ${i < currentIndex ? 'done' : ''} ${i === currentIndex ? 'active' : ''}`}
            onClick={() => onSelect && onSelect(i)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && onSelect && onSelect(i)}
          >
            <div className="step-dot" />
            <span className="step-label">{label}</span>
          </div>
        ))}
        <div
          className="progress-fill"
          style={{ width: `${(currentIndex / Math.max(sections.length - 1, 1)) * 100}%` }}
        />
      </div>
    </div>
  );
}

const styles = `
  .progress-bar-container {
    padding: 0.5rem 1.5rem;
    background: #2a2a2a;
    border-bottom: 1px solid #3a3a3a;
    overflow-x: auto;
    flex-shrink: 0;
  }
  .progress-track {
    display: flex;
    align-items: center;
    position: relative;
    min-width: fit-content;
  }
  .progress-fill {
    position: absolute;
    top: 50%;
    left: 0;
    height: 2px;
    background: linear-gradient(90deg, #B8860B, #DAA520);
    transform: translateY(-50%);
    transition: width 0.4s ease;
    z-index: 0;
    pointer-events: none;
  }
  .progress-step {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
    min-width: 64px;
    cursor: pointer;
    user-select: none;
    outline: none;
  }
  .progress-step:hover .step-dot { border-color: #DAA520; }
  .progress-step:hover .step-label { color: #aaa; }
  .step-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #3a3a3a;
    border: 2px solid #444;
    transition: all 0.3s;
  }
  .progress-step.done .step-dot {
    background: #B8860B;
    border-color: #B8860B;
  }
  .progress-step.active .step-dot {
    background: #1a1a1a;
    border-color: #DAA520;
    box-shadow: 0 0 0 3px rgba(184, 134, 11, 0.3);
  }
  .step-label {
    font-size: 0.65rem;
    color: #555;
    margin-top: 4px;
    white-space: nowrap;
    transition: color 0.3s;
    font-family: 'Inter', sans-serif;
  }
  .progress-step.active .step-label { color: #DAA520; font-weight: 600; }
  .progress-step.done .step-label { color: #888; }
`;
