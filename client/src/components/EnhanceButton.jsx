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
          prompt: `Photorealistic architectural render, luxury custom home, high-end finishes. ${roomType.charAt(0).toUpperCase() + roomType.slice(1)}: ${prompt}. Cinematic lighting, sharp detail, professional architectural photography quality.`,
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
          ✨ Visualize My Style
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
            {loading ? <span className="enhance-spinner" /> : 'Apply'}
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
    padding: 0.75rem 0 0.25rem;
  }
  .btn-enhance {
    padding: 0.6rem 1.4rem;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.88rem;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: opacity 0.2s, transform 0.15s;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    letter-spacing: 0.01em;
  }
  .btn-enhance:hover:not(:disabled) { opacity: 0.85; transform: scale(1.02); }
  .btn-enhance:disabled { opacity: 0.55; cursor: not-allowed; }
  .btn-cancel {
    padding: 0.6rem 1rem;
    background: transparent;
    color: #aaa;
    border: 1px solid #3a3a3a;
    border-radius: 8px;
    font-size: 0.85rem;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: border-color 0.2s;
  }
  .btn-cancel:hover { border-color: #666; color: #f0f0f0; }
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
    background: #2a2a2a;
    border: 1px solid #3a3a3a;
    border-radius: 8px;
    color: #f0f0f0;
    font-size: 0.85rem;
    font-family: 'Inter', sans-serif;
    outline: none;
    transition: border-color 0.2s;
  }
  .enhance-input-group input:focus { border-color: #B8860B; }
  .enhance-input-group input::placeholder { color: #555; }
  .enhance-spinner {
    width: 16px; height: 16px;
    border: 2px solid rgba(26, 26, 26, 0.25);
    border-top-color: #1a1a1a;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
    display: inline-block;
  }
`;
