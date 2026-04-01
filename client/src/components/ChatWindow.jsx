import { useState, useRef, useEffect } from 'react';

export default function ChatWindow({ messages, onSend, isComplete }) {
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || sending) return;
    const text = input.trim();
    setInput('');
    setSending(true);
    await onSend(text);
    setSending(false);
  };

  return (
    <div className="chat-window">
      <style>{styles}</style>
      <div className="chat-header">
        <div className="silas-avatar-small">S</div>
        <div className="chat-header-info">
          <span className="chat-header-name">Silas</span>
          <span className="chat-header-role">Barnhaus Design Guide</span>
        </div>
        <div className="chat-header-status" />
      </div>
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-msg ${msg.role}`}>
            {msg.role === 'assistant' && <div className="msg-avatar silas-bubble">S</div>}
            <div className="msg-bubble">{msg.content}</div>
          </div>
        ))}
        {sending && (
          <div className="chat-msg assistant">
            <div className="msg-avatar silas-bubble">S</div>
            <div className="msg-bubble typing">
              <span /><span /><span />
            </div>
          </div>
        )}
        {isComplete && (
          <div className="chat-msg assistant">
            <div className="msg-avatar silas-bubble">S</div>
            <div className="msg-bubble completion-note">
              Your feedback has been sent to the Barnhaus team. We'll be in touch shortly with next steps. 🏡
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>
      <div className="chat-input-area">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder={isComplete ? 'Review complete!' : 'Type your response...'}
          disabled={sending || isComplete}
        />
        <button onClick={handleSend} disabled={!input.trim() || sending || isComplete} className="send-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  );
}

const styles = `
  .chat-window {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #1a1a1a;
  }
  .chat-header {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.75rem 1rem;
    background: #2a2a2a;
    border-bottom: 1px solid #3a3a3a;
    flex-shrink: 0;
  }
  .silas-avatar-small {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 700;
    flex-shrink: 0;
  }
  .chat-header-info {
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex: 1;
  }
  .chat-header-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: #f0f0f0;
    letter-spacing: 0.02em;
  }
  .chat-header-role {
    font-size: 0.7rem;
    color: #aaa;
    font-weight: 400;
  }
  .chat-header-status {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #4caf50;
    flex-shrink: 0;
  }
  .chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .chat-msg {
    display: flex;
    gap: 0.5rem;
    max-width: 92%;
  }
  .chat-msg.user {
    align-self: flex-end;
    flex-direction: row-reverse;
  }
  .msg-avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.72rem;
    font-weight: 700;
    flex-shrink: 0;
  }
  .silas-bubble {
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
  }
  .msg-bubble {
    padding: 0.6rem 0.9rem;
    border-radius: 12px;
    font-size: 0.88rem;
    line-height: 1.55;
    white-space: pre-wrap;
    color: #f0f0f0;
  }
  .chat-msg.assistant .msg-bubble {
    background: #2a2a2a;
    border: 1px solid #3a3a3a;
    border-radius: 2px 12px 12px 12px;
  }
  .chat-msg.user .msg-bubble {
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    font-weight: 500;
    border-radius: 12px 2px 12px 12px;
  }
  .completion-note {
    color: #f0f0f0 !important;
    border-color: rgba(184, 134, 11, 0.3) !important;
  }
  .msg-bubble.typing {
    display: flex;
    gap: 4px;
    padding: 0.8rem 1rem;
    align-items: center;
  }
  .msg-bubble.typing span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #555;
    animation: typingDot 1.2s infinite;
  }
  .msg-bubble.typing span:nth-child(2) { animation-delay: 0.2s; }
  .msg-bubble.typing span:nth-child(3) { animation-delay: 0.4s; }
  @keyframes typingDot {
    0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
    30% { opacity: 1; transform: translateY(-3px); }
  }
  .chat-input-area {
    display: flex;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-top: 1px solid #3a3a3a;
    background: #2a2a2a;
    align-items: center;
  }
  .chat-input-area input {
    flex: 1;
    padding: 0.65rem 1rem;
    background: #1a1a1a;
    border: 1px solid #3a3a3a;
    border-radius: 24px;
    color: #f0f0f0;
    font-size: 0.88rem;
    font-family: 'Inter', sans-serif;
    outline: none;
    transition: border-color 0.2s;
  }
  .chat-input-area input:focus { border-color: #B8860B; }
  .chat-input-area input::placeholder { color: #555; }
  .chat-input-area input:disabled { opacity: 0.45; }
  .send-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: opacity 0.2s, transform 0.15s;
  }
  .send-btn:hover:not(:disabled) { opacity: 0.85; transform: scale(1.05); }
  .send-btn:disabled { opacity: 0.35; cursor: not-allowed; }
`;
