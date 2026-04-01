import { useEffect, useState } from 'react';

export default function Lightbox({ src, alt, onClose }) {
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [lastTap, setLastTap] = useState(0);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleDoubleTap = (e) => {
    const now = Date.now();
    if (now - lastTap < 300) {
      setScale(s => s === 1 ? 2.5 : 1);
      setPos({ x: 0, y: 0 });
    }
    setLastTap(now);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    setScale(s => Math.min(5, Math.max(1, s - e.deltaY * 0.002)));
  };

  const handleMouseDown = (e) => {
    if (scale === 1) return;
    setDragging(true);
    setDragStart({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPos({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => setDragging(false);

  return (
    <div style={s.overlay} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <button style={s.closeBtn} onClick={onClose}>✕</button>
      <div
        style={s.imgWrap}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={handleDoubleTap}
      >
        <img
          src={src}
          alt={alt}
          style={{
            ...s.img,
            transform: `scale(${scale}) translate(${pos.x / scale}px, ${pos.y / scale}px)`,
            cursor: scale > 1 ? (dragging ? 'grabbing' : 'grab') : 'zoom-in',
          }}
          draggable={false}
        />
      </div>
      <div style={s.hint}>
        {scale === 1 ? 'Double-tap or scroll to zoom · Tap outside to close' : 'Scroll to zoom · Drag to pan · Double-tap to reset'}
      </div>
    </div>
  );
}

const s = {
  overlay: {
    position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)',
    zIndex: 9999, display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
  },
  closeBtn: {
    position: 'absolute', top: 16, right: 16,
    background: 'rgba(255,255,255,0.1)', border: 'none',
    color: '#fff', fontSize: 20, width: 44, height: 44,
    borderRadius: '50%', cursor: 'pointer', zIndex: 1,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  imgWrap: {
    maxWidth: '95vw', maxHeight: '90vh',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    overflow: 'hidden',
  },
  img: {
    maxWidth: '95vw', maxHeight: '88vh',
    objectFit: 'contain', transition: 'transform 0.1s ease',
    userSelect: 'none',
  },
  hint: {
    position: 'absolute', bottom: 16,
    color: 'rgba(255,255,255,0.4)', fontSize: 12,
    fontFamily: "'Inter', sans-serif",
  },
};
