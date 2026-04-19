import { useState, useCallback, useEffect } from 'react';
import InspirationStrip from './InspirationStrip';
import EnhanceButton from './EnhanceButton';

const styles = `
  .playground-screen {
    display: flex;
    flex-direction: column;
    background: #1a1a1a;
  }
  .playground-intro {
    padding: 1.5rem 2rem 0.5rem;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
  }
  .playground-intro h2 {
    font-size: 1.25rem;
    font-weight: 400;
    color: #f0f0f0;
    margin-bottom: 0.5rem;
    letter-spacing: 0.05em;
  }
  .playground-intro p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.6;
  }
  .playground-gallery {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem 2rem;
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
  }
  .playground-card {
    background: #222;
    border: 1px solid #2a2a2a;
    border-radius: 12px;
    overflow: hidden;
  }
  .playground-card-image {
    width: 100%;
    max-height: 400px;
    object-fit: contain;
    background: #2a2a2a;
    display: block;
  }
  .playground-card-body { padding: 1.25rem; }
  .playground-card-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }
  .playground-card-room {
    font-size: 0.95rem;
    font-weight: 600;
    color: #B8860B;
    text-transform: capitalize;
  }
  .playground-card-status {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
    border-radius: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .status-change { background: #3a2a1a; color: #ff9800; border: 1px solid #ff9800; }
  .status-question { background: #1a2a3a; color: #2196f3; border: 1px solid #2196f3; }
  .playground-card-notes {
    font-size: 0.85rem;
    color: #aaa;
    line-height: 1.5;
    margin-bottom: 1rem;
    padding: 0.6rem 0.75rem;
    background: #2a2a2a;
    border-radius: 6px;
    border-left: 3px solid #B8860B;
  }
  .playground-card-notes-label {
    font-size: 0.7rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 0.25rem;
  }
  .playground-visualized-label {
    font-size: 0.75rem;
    color: #DAA520;
    margin-bottom: 0.35rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .playground-visualized-img {
    width: 100%;
    border-radius: 8px;
    max-height: 300px;
    object-fit: contain;
    background: #2a2a2a;
    display: block;
    margin-bottom: 0.75rem;
  }
  .playground-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 0.75rem;
    border-top: 1px solid #2a2a2a;
    margin-top: 1rem;
  }
  .btn-send-michael {
    padding: 0.85rem 2.5rem;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: opacity 0.2s, transform 0.15s;
    letter-spacing: 0.02em;
  }
  .btn-send-michael:hover:not(:disabled) { opacity: 0.85; transform: scale(1.02); }
  .btn-send-michael:disabled { opacity: 0.55; cursor: not-allowed; }
  .playground-footer-hint {
    color: #555;
    font-size: 0.8rem;
    text-align: center;
    max-width: 360px;
  }

  @media (max-width: 768px) {
    .playground-gallery { padding: 1rem; }
    .playground-intro { padding: 1rem 1rem 0.25rem; }
  }
`;

function PlaygroundCard({ item, clientName, projectSlug, sessionId }) {
  const [inspirationImages, setInspirationImages] = useState([]);
  const [autoEnhancePrompt, setAutoEnhancePrompt] = useState(item.notes || '');
  const [enhancedUrl, setEnhancedUrl] = useState(null);

  useEffect(() => {
    async function fetchInspiration() {
      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: [],
            clientName,
            projectSlug,
            currentRoom: item.roomType,
            isImageChangeTrigger: true,
            triggerMessage: `[PLAYGROUND] Fetch 4-6 inspiration images for a ${item.roomType}. Client note: "${item.notes || 'no specific preference'}". Return inspiration images only.`,
            sessionId,
          }),
        });
        const data = await res.json();
        if (data.inspiration && data.inspiration.length > 0) {
          setInspirationImages(data.inspiration);
        }
      } catch {
        // silently fail
      }
    }
    fetchInspiration();
  }, []);

  const handleVibePick = useCallback(async (img, index) => {
    setInspirationImages([]);
    if (!img) return;
    try {
      const res = await fetch('/api/inspiration/pick', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageUrl: img.url,
          imageIndex: index,
          roomType: item.roomType,
          clientName,
          sessionId,
        }),
      });
      const data = await res.json();
      if (data.description) {
        setAutoEnhancePrompt(
          `Transform this render to match the client's chosen inspiration style. ${data.description} Maintain the existing room layout and dimensions exactly.`
        );
      }
    } catch {
      // silently fail
    }
  }, [item.roomType, clientName, sessionId]);

  const statusClass = item.status === 'change' ? 'status-change' : 'status-question';
  const statusLabel = item.status === 'change' ? '🔶 Change It' : '❓ Question';

  return (
    <div className="playground-card">
      <img src={item.originalUrl} alt={item.imageName} className="playground-card-image" />
      <div className="playground-card-body">
        <div className="playground-card-header">
          <span className="playground-card-room">{item.roomType}</span>
          <span className={`playground-card-status ${statusClass}`}>{statusLabel}</span>
        </div>

        {item.notes && (
          <div className="playground-card-notes">
            <div className="playground-card-notes-label">Your feedback</div>
            {item.notes}
          </div>
        )}

        {enhancedUrl && (
          <div>
            <div className="playground-visualized-label">✨ Visualized</div>
            <img src={enhancedUrl} alt="Visualized render" className="playground-visualized-img" />
          </div>
        )}

        <InspirationStrip images={inspirationImages} onPick={handleVibePick} />

        <EnhanceButton
          imageUrl={item.originalUrl}
          roomType={item.roomType || 'room'}
          onEnhanced={setEnhancedUrl}
          autoEnhancePrompt={autoEnhancePrompt}
        />
      </div>
    </div>
  );
}

export default function PlaygroundScreen({ feedback, project, clientName, projectSlug, sessionId, onSendToMichael }) {
  const [sending, setSending] = useState(false);

  // Build items from feedback, falling back to all project images (except floor plan)
  const feedbackItems = Object.values(feedback);
  let items = feedbackItems;
  if (items.length === 0 && project?.groups) {
    items = project.groups
      .filter(g => g.roomType?.toLowerCase() !== 'floor plan')
      .flatMap(g => (g.images || []).map(img => ({
        imageId: img.id,
        imageName: img.name,
        roomType: g.roomType,
        originalUrl: img.url,
        status: null,
        notes: '',
      })));
  }

  const handleSend = async () => {
    setSending(true);
    try {
      await onSendToMichael();
    } catch {
      setSending(false);
    }
  };

  return (
    <div className="playground-screen">
      <style>{styles}</style>

      <div className="playground-intro">
        <h2>Visualize Your Changes</h2>
        <p>
          Below are the rooms you flagged. Browse inspiration, enhance the renders,
          and send your final vision to Michael.
        </p>
      </div>

      <div className="playground-gallery">
        {items.map(item => (
          <PlaygroundCard
            key={item.imageId}
            item={item}
            clientName={clientName}
            projectSlug={projectSlug}
            sessionId={sessionId}
          />
        ))}
      </div>

      <div className="playground-footer">
        <button className="btn-send-michael" onClick={handleSend} disabled={sending}>
          {sending ? 'Sending…' : 'Send to Michael ✓'}
        </button>
        <div className="playground-footer-hint">
          This will send your feedback and any visualizations to the Barnhaus team.
        </div>
      </div>
    </div>
  );
}
