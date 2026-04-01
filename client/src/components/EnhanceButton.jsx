import { useState } from 'react';

export default function EnhanceButton({ imageUrl, roomType, onEnhanced }) {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleEnhance = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/enhance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageUrl: window.location.origin + imageUrl,
          prompt: `${roomType}: ${prompt}`,
        }),
      });
      const data = await res.json();
      if (data.enhancedImage) {
        onEnhanced(data.enhancedImage);
        setShowInput(false);
        setPrompt('');
      }
    } catch {
      alert('Enhancement failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="enhance-section">
      <style>{styles}</style>
      {!showInput ? (
        <button className="btn-enhance" onClick={() => setShowInput(true)}>
          Enhance This Render
        </button>
      ) : (
        <div className="enhance-input-group">
          <input
            type="text"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            placeholder={`Describe your finish preferences for this ${roomType}...`}
            disabled={loading}
            onKeyDown={e => e.key === 'Enter' && handleEnhance()}
          />
          <button className="btn-enhance" onClick={handleEnhance} disabled={loading || !prompt.trim()}>
            {loading ? <span className="enhance-spinner" /> : 'Enhance'}
          </button>
          <button className="btn-cancel" onClick={() => { setShowInput(false); setPrompt(''); }}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

const styles = `
  .enhance-section {
    padding: 0.75rem 0;
  }
  .btn-enhance {
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
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
  .btn-enhance:hover:not(:disabled) { background: var(--gold-bright); }
  .btn-enhance:disabled { opacity: 0.6; cursor: not-allowed; }
  .btn-cancel {
    padding: 0.6rem 1rem;
    background: transparent;
    color: #888;
    border: 1px solid var(--charcoal-lighter);
    border-radius: 8px;
    font-size: 0.85rem;
    cursor: pointer;
    font-family: inherit;
  }
  .btn-cancel:hover { border-color: #666; color: #aaa; }
  .enhance-input-group {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    flex-wrap: wrap;
  }
  .enhance-input-group input {
    flex: 1;
    min-width: 200px;
    padding: 0.6rem 0.9rem;
    background: var(--charcoal-light);
    border: 1px solid var(--charcoal-lighter);
    border-radius: 8px;
    color: var(--text);
    font-size: 0.85rem;
    font-family: inherit;
    outline: none;
  }
  .enhance-input-group input:focus { border-color: var(--gold); }
  .enhance-input-group input::placeholder { color: #555; }
  .enhance-spinner {
    width: 16px; height: 16px;
    border: 2px solid rgba(26, 26, 26, 0.25);
    border-top-color: var(--charcoal);
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }
`;
