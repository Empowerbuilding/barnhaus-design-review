import { useRef, useEffect, useState } from 'react';
import ChatWindow from './ChatWindow';
import InspirationStrip from './InspirationStrip';

export default function ChatDrawer({ open, onClose, messages, onSend, isComplete, inspirationImages, onVibePick }) {
  const dragStartY = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    setTranslateY(0);
  }, [open]);

  const onTouchStart = (e) => {
    dragStartY.current = e.touches[0].clientY;
    setDragging(true);
  };

  const onTouchMove = (e) => {
    if (dragStartY.current === null) return;
    const delta = e.touches[0].clientY - dragStartY.current;
    if (delta > 0) setTranslateY(delta);
  };

  const onTouchEnd = () => {
    setDragging(false);
    if (translateY > 120) {
      onClose();
      setTranslateY(0);
    } else {
      setTranslateY(0);
    }
    dragStartY.current = null;
  };

  return (
    <>
      <style>{styles}</style>
      <div className={`chat-drawer-backdrop ${open ? 'visible' : ''}`} onClick={onClose} />
      <div
        className={`chat-drawer ${open ? 'open' : ''}`}
        style={{
          transform: open ? `translateY(${translateY}px)` : 'translateY(100%)',
          transition: dragging ? 'none' : 'transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)',
        }}
      >
        <div
          className="chat-drawer-handle-area"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="chat-drawer-handle" />
          <button className="chat-drawer-close" onClick={onClose} aria-label="Close chat">✕</button>
        </div>
        <div className="chat-drawer-body">
          <ChatWindow messages={messages} onSend={onSend} isComplete={isComplete} />
          <InspirationStrip images={inspirationImages || []} onPick={onVibePick || (() => {})} />
        </div>
      </div>
    </>
  );
}

const styles = `
  .chat-drawer-backdrop {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.55);
    z-index: 200;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  .chat-drawer-backdrop.visible {
    opacity: 1;
    pointer-events: all;
  }
  .chat-drawer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 72vh;
    z-index: 201;
    border-radius: 20px 20px 0 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: #1a1a1a;
    box-shadow: 0 -8px 40px rgba(0,0,0,0.6);
    will-change: transform;
  }
  .chat-drawer-handle-area {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 1rem 6px;
    background: #2a2a2a;
    border-bottom: 1px solid #3a3a3a;
    flex-shrink: 0;
    position: relative;
    touch-action: none;
    cursor: grab;
  }
  .chat-drawer-handle {
    width: 40px;
    height: 4px;
    border-radius: 2px;
    background: #555;
  }
  .chat-drawer-close {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #888;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 0.35rem 0.5rem;
    line-height: 1;
    transition: color 0.2s;
  }
  .chat-drawer-close:hover { color: #f0f0f0; }
  .chat-drawer-body {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .chat-drawer-body .chat-window {
    height: 100% !important;
    min-height: 0 !important;
  }
  .chat-drawer-body .chat-messages {
    max-height: none !important;
    flex: 1;
  }
  @media (min-width: 769px) {
    .chat-drawer-backdrop,
    .chat-drawer {
      display: none !important;
    }
  }
  @media (max-width: 768px) {
    .chat-drawer-backdrop {
      display: block;
    }
  }
`;
