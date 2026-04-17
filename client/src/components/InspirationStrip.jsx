export default function InspirationStrip({ images, onPick }) {
const styles = `
  .inspiration-strip {
    padding: 0.75rem 1rem;
    background: #1e1e1e;
    border-top: 1px solid #2a2a2a;
    flex-shrink: 0;
  }
  .strip-label {
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #B8860B;
    margin-bottom: 0.6rem;
    font-weight: 500;
  }
  .strip-images {
    display: flex;
    gap: 0.6rem;
    overflow-x: auto;
    padding-bottom: 0.25rem;
    scrollbar-width: thin;
    scrollbar-color: #333 transparent;
  }
  .strip-images::-webkit-scrollbar { height: 3px; }
  .strip-images::-webkit-scrollbar-track { background: transparent; }
  .strip-images::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }

  .strip-card {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    width: 130px;
  }
  .strip-img-wrap {
    width: 130px;
    height: 88px;
    border-radius: 6px;
    overflow: hidden;
    background: #2a2a2a;
    border: 1px solid #333;
  }
  .strip-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s;
  }
  .strip-img-wrap:hover img { transform: scale(1.04); }

  .strip-pick-btn {
    width: 100%;
    padding: 0.35rem 0;
    background: transparent;
    border: 1px solid #B8860B55;
    border-radius: 5px;
    color: #B8860B;
    font-size: 0.72rem;
    font-family: inherit;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s;
    letter-spacing: 0.02em;
  }
  .strip-pick-btn:hover {
    background: #B8860B15;
    border-color: #B8860B;
  }
  .strip-pick-none {
    border-color: #333;
    color: #555;
  }
  .strip-pick-none:hover {
    background: #222;
    border-color: #444;
    color: #888;
  }

  .strip-none {
    width: 90px;
  }
  .strip-none-inner {
    width: 90px;
    height: 88px;
    border-radius: 6px;
    border: 1px dashed #2e2e2e;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3a3a3a;
    font-size: 0.75rem;
    text-align: center;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    .strip-card { width: 110px; }
    .strip-img-wrap { width: 110px; height: 74px; }
    .strip-none { width: 78px; }
    .strip-none-inner { width: 78px; height: 74px; }
  }
`;
  if (!images || images.length === 0) return null;

  return (
    <div className="inspiration-strip">
      <style>{styles}</style>
      <div className="strip-label">Pick a vibe →</div>
      <div className="strip-images">
        {images.map((img, i) => (
          <div key={i} className="strip-card">
            <div className="strip-img-wrap">
              <img
                src={img.thumb || img.url}
                alt={`Inspiration ${i + 1}`}
                loading="lazy"
                onError={e => { e.target.style.display = 'none'; }}
              />
            </div>
            <button
              className="strip-pick-btn"
              onClick={() => onPick(img, i + 1)}
            >
              This vibe ✓
            </button>
          </div>
        ))}
        <div className="strip-card strip-none">
          <div className="strip-none-inner">
            <span>None of<br />these</span>
          </div>
          <button
            className="strip-pick-btn strip-pick-none"
            onClick={() => onPick(null, 0)}
          >
            Skip →
          </button>
        </div>
      </div>
    </div>
  );
}

