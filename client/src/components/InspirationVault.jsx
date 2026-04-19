import { useState } from 'react';

const styles = `
  .vault-panel {
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    z-index: 500;
    font-family: inherit;
  }

  .vault-tab {
    background: #1a1a1a;
    border: 1px solid #3a3a3a;
    border-radius: 10px;
    padding: 0.45rem 0.85rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    color: #DAA520;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.03em;
    transition: border-color 0.2s;
    user-select: none;
  }
  .vault-tab:hover { border-color: #B8860B; }
  .vault-tab .vault-count {
    background: #B8860B;
    color: #fff;
    border-radius: 50%;
    width: 18px; height: 18px;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.7rem; font-weight: 700;
  }

  .vault-drawer {
    position: absolute;
    bottom: calc(100% + 0.5rem);
    left: 0;
    width: 300px;
    max-height: 420px;
    overflow-y: auto;
    background: #141414;
    border: 1px solid #3a3a3a;
    border-radius: 12px;
    padding: 0.75rem;
    box-shadow: 0 8px 32px rgba(0,0,0,0.6);
  }

  .vault-header {
    color: #DAA520;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 0.6rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #2a2a2a;
  }

  .vault-item {
    display: flex;
    gap: 0.6rem;
    align-items: flex-start;
    padding: 0.5rem 0;
    border-bottom: 1px solid #1e1e1e;
  }
  .vault-item:last-child { border-bottom: none; }

  .vault-thumb {
    width: 56px;
    height: 42px;
    object-fit: cover;
    border-radius: 6px;
    flex-shrink: 0;
    background: #222;
  }

  .vault-item-info { flex: 1; min-width: 0; }
  .vault-item-title {
    color: #ccc;
    font-size: 0.75rem;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .vault-item-note {
    color: #888;
    font-size: 0.7rem;
    margin-top: 0.2rem;
    font-style: italic;
    line-height: 1.3;
  }
`;

export default function InspirationVault({ items }) {
  const [open, setOpen] = useState(false);
  if (!items || items.length === 0) return null;

  return (
    <div className="vault-panel">
      <style>{styles}</style>
      {open && (
        <div className="vault-drawer">
          <div className="vault-header">⭐ Saved Inspiration ({items.length})</div>
          {items.map((item, i) => (
            <div key={i} className="vault-item">
              {item.thumb && (
                <img src={item.thumb} alt={item.title} className="vault-thumb" onError={e => e.target.style.display='none'} />
              )}
              <div className="vault-item-info">
                <div className="vault-item-title">{item.title || 'Reference image'}</div>
                {item.note && <div className="vault-item-note">"{item.note}"</div>}
                {item.source && <div className="vault-item-note" style={{fontStyle:'normal', color:'#555'}}>{item.source}</div>}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="vault-tab" onClick={() => setOpen(o => !o)}>
        <span>⭐ Saved Vibes</span>
        <span className="vault-count">{items.length}</span>
      </div>
    </div>
  );
}
