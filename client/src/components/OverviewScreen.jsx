import { useState, useRef, useCallback } from 'react';
const styles = `
  .overview-screen {
    height: 100vh;
    background: #1a1a1a;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem 1rem 5rem;
    overflow-y: auto;
  }
  .overview-inner {
    width: 100%;
    max-width: 680px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .overview-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
  }
  .overview-logo { height: 40px; }
  .overview-badge {
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #B8860B;
    border: 1px solid #B8860B44;
    padding: 0.3rem 0.75rem;
    border-radius: 20px;
  }
  .memo-card {
    background: #232323;
    border: 1px solid #2e2e2e;
    border-radius: 12px;
    overflow: visible;
  }
  .silas-tag {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    background: #1e1e1e;
    border-bottom: 1px solid #2a2a2a;
    font-size: 0.78rem;
    color: #888;
  }
  .silas-dot-lg {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #B8860B;
    flex-shrink: 0;
  }
  .memo-body {
    padding: 1.5rem 1.5rem 1.75rem;
    color: #d0d0d0;
    font-size: 0.95rem;
    line-height: 1.75;
  }
  .memo-section-heading {
    font-size: 0.72rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #B8860B;
    margin: 1.5rem 0 0.6rem;
    font-weight: 500;
  }
  .memo-section-heading:first-child { margin-top: 0; }
  .memo-p { margin: 0 0 0.6rem; }
  .memo-spacer { height: 0.4rem; }
  .memo-list { margin: 0 0 0.5rem; padding: 0; list-style: none; }
  .memo-bullet {
    padding: 0.2rem 0 0.2rem 1.1rem;
    position: relative;
    color: #bbb;
  }
  .memo-bullet::before {
    content: '—';
    position: absolute;
    left: 0;
    color: #B8860B;
    font-size: 0.85em;
  }
  .memo-loading {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #555;
    font-size: 0.9rem;
    padding: 0.5rem 0;
  }
  .memo-spinner {
    width: 18px; height: 18px;
    border: 2px solid #333;
    border-top-color: #B8860B;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    flex-shrink: 0;
  }
  .memo-spinner.small { width: 14px; height: 14px; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .inspiration-section { display: flex; flex-direction: column; gap: 0.6rem; }
  .inspiration-label { display: flex; flex-direction: column; gap: 0.15rem; }
  .inspiration-label span:first-child { font-size: 0.85rem; font-weight: 500; color: #bbb; }
  .inspiration-sub { font-size: 0.78rem; color: #555; }
  .drop-zone {
    border: 1.5px dashed #2e2e2e;
    border-radius: 10px;
    padding: 1.25rem;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
    min-height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .drop-zone:hover, .drop-zone-active { border-color: #B8860B; background: #B8860B0a; }
  .drop-zone-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    color: #444;
    font-size: 0.83rem;
    text-align: center;
  }
  .drop-icon { font-size: 1.3rem; }
  .drop-sub { font-size: 0.73rem; color: #3a3a3a; }
  .upload-grid { display: flex; flex-wrap: wrap; gap: 0.6rem; width: 100%; }
  .upload-thumb {
    position: relative;
    width: 70px; height: 70px;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid #333;
  }
  .upload-thumb img { width: 100%; height: 100%; object-fit: cover; }
  .upload-remove {
    position: absolute; top: 3px; right: 3px;
    width: 18px; height: 18px;
    border-radius: 50%;
    background: rgba(0,0,0,0.8);
    border: none; color: #fff;
    font-size: 0.8rem; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    line-height: 1;
  }
  .upload-add {
    width: 70px; height: 70px;
    border-radius: 6px;
    border: 1.5px dashed #2e2e2e;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.75rem; color: #444; cursor: pointer;
    transition: border-color 0.2s, color 0.2s;
  }
  .upload-add:hover { border-color: #B8860B; color: #B8860B; }
  .start-btn {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    font-size: 1rem;
    font-weight: 700;
    font-family: inherit;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    letter-spacing: 0.03em;
    transition: opacity 0.15s, transform 0.1s;
  }
  .start-btn:hover:not(:disabled) { opacity: 0.9; }
  .start-btn:active:not(:disabled) { transform: scale(0.99); }
  .start-btn:disabled { opacity: 0.35; cursor: default; }
  @media (max-width: 600px) {
    .overview-screen { padding: 1.25rem 0.75rem 4rem; }
    .memo-body { padding: 1.25rem; }
  }
`;

export default function OverviewScreen({ memo, sessionId, onStart }) {
  const [uploads, setUploads] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFiles = useCallback(async (files) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    const newUploads = [];
    for (const file of Array.from(files)) {
      if (!file.type.startsWith('image/')) continue;
      const reader = new FileReader();
      const dataUrl = await new Promise(res => { reader.onload = e => res(e.target.result); reader.readAsDataURL(file); });
      newUploads.push({ name: file.name, dataUrl, file });
    }
    if (sessionId && newUploads.length > 0) {
      try {
        const formData = new FormData();
        newUploads.forEach(u => formData.append('images', u.file));
        formData.append('sessionId', sessionId);
        await fetch('/api/session/inspiration', { method: 'POST', body: formData });
      } catch (e) { /* non-blocking */ }
    }
    setUploads(prev => [...prev, ...newUploads]);
    setUploading(false);
  }, [sessionId]);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    setDragging(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const onDragOver = (e) => { e.preventDefault(); setDragging(true); };
  const onDragLeave = () => setDragging(false);
  const removeUpload = (idx) => setUploads(prev => prev.filter((_, i) => i !== idx));

  const renderMemo = (text) => {
    if (!text) return null;
    const lines = text.split('\n');
    const elements = [];
    let inList = false;
    let listItems = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(<ul key={`list-${elements.length}`} className="memo-list">{listItems}</ul>);
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, i) => {
      if (line.startsWith('### ') || line.startsWith('## ') || line.startsWith('# ')) {
        flushList();
        elements.push(<h3 key={i} className="memo-section-heading">{line.replace(/^#+\s*/, '')}</h3>);
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        inList = true;
        const content = line.replace(/^[-*]\s*/, '').replace(/\*\*([^*]+)\*\*/g, '$1');
        listItems.push(<li key={i} className="memo-bullet">{content}</li>);
      } else if (line.trim() === '') {
        flushList();
        elements.push(<div key={i} className="memo-spacer" />);
      } else {
        flushList();
        const content = line.replace(/\*\*([^*]+)\*\*/g, '$1');
        elements.push(<p key={i} className="memo-p">{content}</p>);
      }
    });
    flushList();
    return elements;
  };

  return (
    <div className="overview-screen">
      <style>{styles}</style>
      <div className="overview-inner">

        <div className="overview-header">
          <img src="https://barnhaussteelbuilders.com/assets/images/logo-BbjiAVC6.png" alt="Barnhaus" className="overview-logo" />
          <div className="overview-badge">Draft 1 Review</div>
        </div>

        <div className="memo-card">
          <div className="silas-tag">
            <div className="silas-dot-lg" />
            <span>Silas · Barnhaus Design Guide</span>
          </div>
          <div className="memo-body">
            {memo ? renderMemo(memo) : (
              <div className="memo-loading">
                <div className="memo-spinner" />
                <span>Preparing your overview...</span>
              </div>
            )}
          </div>
        </div>

        <div className="inspiration-section">
          <div className="inspiration-label">
            <span>Have inspiration images?</span>
            <span className="inspiration-sub">Drop them here — Silas will reference them throughout your review.</span>
          </div>
          <div
            className={`drop-zone ${dragging ? 'drop-zone-active' : ''}`}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onClick={() => fileInputRef.current?.click()}
          >
            <input ref={fileInputRef} type="file" accept="image/*" multiple style={{ display: 'none' }} onChange={e => handleFiles(e.target.files)} />
            {uploads.length === 0 ? (
              <div className="drop-zone-placeholder">
                {uploading
                  ? <><div className="memo-spinner small" /><span>Uploading...</span></>
                  : <><div className="drop-icon">📎</div><span>Drag &amp; drop or tap to browse</span><span className="drop-sub">Kitchen vibes, tile ideas, fireplace inspo — anything helps</span></>
                }
              </div>
            ) : (
              <div className="upload-grid">
                {uploads.map((u, i) => (
                  <div key={i} className="upload-thumb">
                    <img src={u.dataUrl} alt={u.name} />
                    <button className="upload-remove" onClick={e => { e.stopPropagation(); removeUpload(i); }}>×</button>
                  </div>
                ))}
                <div className="upload-add" onClick={e => { e.stopPropagation(); fileInputRef.current?.click(); }}>+ Add more</div>
              </div>
            )}
          </div>
        </div>

        <button className="start-btn" onClick={() => onStart(uploads)} disabled={!memo}>
          {memo ? 'Start My Review →' : 'Loading...'}
        </button>

      </div>
    </div>
  );
}

