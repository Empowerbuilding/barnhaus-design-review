export default function ProgressBar({ sections, currentIndex }) {
  if (!sections.length) return null;

  return (
    <div className="progress-bar-container">
      <style>{styles}</style>
      <div className="progress-track">
        {sections.map((label, i) => (
          <div
            key={i}
            className={`progress-step ${i < currentIndex ? 'done' : ''} ${i === currentIndex ? 'active' : ''}`}
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
    background: var(--charcoal-light);
    border-bottom: 1px solid var(--charcoal-lighter);
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
    background: var(--gold);
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
    min-width: 60px;
  }
  .step-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--charcoal-lighter);
    border: 2px solid #444;
    transition: all 0.3s;
  }
  .progress-step.done .step-dot {
    background: var(--gold);
    border-color: var(--gold);
  }
  .progress-step.active .step-dot {
    background: var(--charcoal);
    border-color: var(--gold);
    box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.3);
  }
  .step-label {
    font-size: 0.65rem;
    color: #555;
    margin-top: 4px;
    white-space: nowrap;
    transition: color 0.3s;
  }
  .progress-step.active .step-label { color: var(--gold); font-weight: 500; }
  .progress-step.done .step-label { color: #888; }
`;
