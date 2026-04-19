const styles = `
  .progress-sidebar {
    width: 200px;
    min-width: 200px;
    background: #1e1e1e;
    border-right: 1px solid #2a2a2a;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    flex-shrink: 0;
  }
  .sidebar-header {
    padding: 0.75rem 1rem 0.5rem;
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #555;
    font-weight: 600;
    border-bottom: 1px solid #2a2a2a;
    flex-shrink: 0;
  }
  .sidebar-rooms {
    flex: 1;
    padding: 0.5rem 0;
  }
  .sidebar-room {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.45rem 1rem;
    cursor: pointer;
    transition: background 0.15s;
    border-radius: 0;
  }
  .sidebar-room:hover { background: rgba(184,134,11,0.06); }
  .sidebar-room.active { background: rgba(184,134,11,0.1); }
  .room-indicator {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 0.7rem;
    font-weight: 700;
  }
  .room-indicator.done {
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
  }
  .room-indicator.active {
    background: transparent;
    border: 2px solid #B8860B;
    position: relative;
    overflow: hidden;
  }
  .room-indicator.active::after {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: var(--fill, 0%);
    height: 100%;
    background: rgba(184,134,11,0.25);
  }
  .room-indicator.pending {
    background: #2a2a2a;
    border: 2px solid #3a3a3a;
  }
  .room-indicator-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #555;
  }
  .room-name {
    font-size: 0.78rem;
    font-weight: 500;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .sidebar-room.active .room-name { color: #DAA520; }
  .sidebar-room.done .room-name { color: #f0f0f0; }
  .sidebar-room.pending .room-name { color: #555; }
  .room-progress-text {
    font-size: 0.65rem;
    color: #666;
    flex-shrink: 0;
  }
  .sidebar-room.active .room-progress-text { color: #B8860B; }

  /* Mobile: collapse to thin horizontal bar */
  @media (max-width: 768px) {
    .progress-sidebar {
      width: 100%;
      min-width: 0;
      height: 6px;
      border-right: none;
      border-bottom: 1px solid #2a2a2a;
      flex-direction: row;
      overflow: hidden;
    }
    .sidebar-header { display: none; }
    .sidebar-rooms {
      display: flex;
      flex-direction: row;
      padding: 0;
      width: 100%;
      gap: 2px;
    }
    .sidebar-room {
      flex: 1;
      height: 6px;
      padding: 0;
      border-radius: 0;
      gap: 0;
    }
    .room-indicator, .room-name, .room-progress-text { display: none; }
    .sidebar-room.done { background: linear-gradient(135deg, #B8860B, #DAA520); }
    .sidebar-room.active { background: rgba(184,134,11,0.4); }
    .sidebar-room.pending { background: #2a2a2a; }
  }
`;

const ROOM_ICONS = {
  'floor plan': '📐',
  exterior: '🏠',
  kitchen: '🍳',
  pantry: '🗄️',
  'great room': '🔥',
  'living room': '🛋️',
  'dining room': '🍽️',
  'primary bedroom': '🛏️',
  'primary bath': '🚿',
  'master bedroom': '🛏️',
  'master bath': '🚿',
  garage: '🚗',
  mudroom: '🧥',
  laundry: '👕',
  office: '💼',
  porch: '🌿',
  foyer: '🚪',
  entryway: '🚪',
  'guest bedroom': '🛏️',
  'bunk room': '🛏️',
  'half bath': '🪞',
  'powder room': '🪞',
  pool: '💧',
  'safe room': '🔒',
  loft: '🏗️',
  kitchenette: '🥂',
  'game room': '🎱',
  'media room': '🎬',
  theater: '🎬',
  bar: '🍷',
  winery: '🍷',
  default: '🏗️',
};

export default function ProgressSidebar({ sections, currentSection, questionProgress, onSelect }) {
  return (
    <div className="progress-sidebar">
      <style>{styles}</style>
      <div className="sidebar-header">Rooms</div>
      <div className="sidebar-rooms">
        {sections.map((section, i) => {
          const roomType = section.toLowerCase();
          const icon = ROOM_ICONS[roomType] || ROOM_ICONS.default;
          const progress = questionProgress?.[section] || questionProgress?.[roomType] || null;
          const isActive = i === currentSection;
          const isDone = progress && progress.current >= progress.total && progress.total > 0;
          const isPending = !isActive && !isDone;

          const fillPct = progress && progress.total > 0
            ? Math.round((progress.current / progress.total) * 100)
            : 0;

          let statusClass = 'pending';
          if (isDone) statusClass = 'done';
          else if (isActive) statusClass = 'active';

          return (
            <div
              key={i}
              className={`sidebar-room ${statusClass}`}
              onClick={() => onSelect && onSelect(i)}
              title={section}
            >
              <div
                className={`room-indicator ${statusClass}`}
                style={isActive ? { '--fill': fillPct + '%' } : {}}
              >
                {isDone ? '✓' : isActive ? <span style={{ fontSize: '0.6rem', color: '#B8860B', position: 'relative', zIndex: 1 }}>{icon}</span> : <span className="room-indicator-dot" />}
              </div>
              <span className="room-name">{section}</span>
              {progress && !isDone && (
                <span className="room-progress-text">{progress.current}/{progress.total}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
