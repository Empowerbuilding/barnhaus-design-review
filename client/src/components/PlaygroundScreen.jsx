import { useState, useCallback, useEffect } from 'react';
import InspirationStrip from './InspirationStrip';
import EnhanceButton from './EnhanceButton';

const styles = `
  .pg-wrap {
    background: #1a1a1a;
    overflow-y: auto;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .pg-header {
    padding: 2rem 1.5rem 0.75rem;
    text-align: center;
  }
  .pg-logo {
    height: 40px;
    display: block;
    margin: 0 auto 0.75rem;
  }
  .pg-subtitle {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #B8860B;
    margin-bottom: 0.5rem;
  }
  .pg-tagline {
    font-size: 0.85rem;
    color: #555;
    letter-spacing: 0.02em;
  }
  .pg-gallery {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem 1.25rem 1rem;
    width: 100%;
    max-width: 720px;
    box-sizing: border-box;
  }
  .pg-card {
    display: flex;
    flex-direction: column;
  }
  .pg-card-image {
    width: 100%;
    display: block;
    border-radius: 10px 10px 0 0;
  }
  .pg-card-room {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #B8860B;
    padding: 0.6rem 0 0.75rem;
  }
  .pg-enhanced-label {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #DAA520;
    margin-bottom: 0.4rem;
  }
  .pg-enhanced-img {
    width: 100%;
    display: block;
    border-radius: 8px;
    margin-bottom: 0.75rem;
  }
  .pg-footer {
    width: 100%;
    max-width: 720px;
    padding: 1rem 1.25rem 2.5rem;
    box-sizing: border-box;
  }
  .pg-send-btn {
    width: 100%;
    padding: 0.9rem;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.95rem;
    letter-spacing: 0.03em;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: opacity 0.2s, transform 0.15s;
  }
  .pg-send-btn:hover:not(:disabled) { opacity: 0.85; transform: scale(1.01); }
  .pg-send-btn:disabled { opacity: 0.5; cursor: not-allowed; }

  @media (max-width: 600px) {
    .pg-gallery { padding: 1rem 0.75rem; }
    .pg-footer { padding: 0.75rem 0.75rem 2rem; }
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

  return (
    <div className="pg-card">
      <img src={item.originalUrl} alt={item.imageName} className="pg-card-image" />
      <div className="pg-card-room">{item.roomType}</div>

      {enhancedUrl && (
        <>
          <div className="pg-enhanced-label">✨ Visualized</div>
          <img src={enhancedUrl} alt="Visualized render" className="pg-enhanced-img" />
        </>
      )}

      <InspirationStrip images={inspirationImages} onPick={handleVibePick} />

      <EnhanceButton
        imageUrl={item.originalUrl}
        roomType={item.roomType || 'room'}
        onEnhanced={setEnhancedUrl}
        autoEnhancePrompt={autoEnhancePrompt}
      />
    </div>
  );
}

export default function PlaygroundScreen({ feedback, project, clientName, projectSlug, sessionId, onSendToMichael }) {
  const [sending, setSending] = useState(false);

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
    <div className="pg-wrap">
      <style>{styles}</style>

      <div className="pg-header">
        <img src="https://barnhaussteelbuilders.com/assets/images/logo-BbjiAVC6.png" alt="Barnhaus" className="pg-logo" />
        <div className="pg-subtitle">Make It Yours</div>
        <div className="pg-tagline">Explore your renders. Pick a vibe. See it come to life.</div>
      </div>

      <div className="pg-gallery">
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

      <div className="pg-footer">
        <button className="pg-send-btn" onClick={handleSend} disabled={sending}>
          {sending ? 'Sending…' : 'Send to Michael ✓'}
        </button>
      </div>
    </div>
  );
}
