import { useState, useRef, useEffect } from 'react';

export default function ChatWindow({ messages, onSend, isComplete, calendlyLink }) {
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
        <div className="chat-header-dot" />
        <span>Barnhaus Design Assistant</span>
      </div>
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-msg ${msg.role}`}>
            {msg.role === 'assistant' && <div className="msg-avatar">B</div>}
            <div className="msg-bubble">{msg.content}</div>
          </div>
        ))}
        {sending && (
          <div className="chat-msg assistant">
            <div className="msg-avatar">B</div>
            <div className="msg-bubble typing">
              <span /><span /><span />
            </div>
          </div>
        )}
        {isComplete && calendlyLink && (
          <div className="chat-msg assistant">
            <div className="msg-avatar">B</div>
            <div className="msg-bubble">
              <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="calendly-btn">
                Book Your 30-Min Design Call
              </a>
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
        <button onClick={handleSend} disabled={!input.trim() || sending || isComplete}>
          Send
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
    background: var(--charcoal);
  }
  .chat-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: var(--charcoal-light);
    border-bottom: 1px solid var(--charcoal-lighter);
    font-weight: 500;
    font-size: 0.9rem;
  }
  .chat-header-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #4caf50;
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
    max-width: 90%;
  }
  .chat-msg.user {
    align-self: flex-end;
    flex-direction: row-reverse;
  }
  .msg-avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--gold);
    color: var(--charcoal);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
    flex-shrink: 0;
  }
  .msg-bubble {
    padding: 0.6rem 0.9rem;
    border-radius: 12px;
    font-size: 0.9rem;
    line-height: 1.5;
    white-space: pre-wrap;
  }
  .chat-msg.assistant .msg-bubble {
    background: var(--charcoal-light);
    border: 1px solid var(--charcoal-lighter);
  }
  .chat-msg.user .msg-bubble {
    background: var(--gold);
    color: var(--charcoal);
  }
  .msg-bubble.typing {
    display: flex;
    gap: 4px;
    padding: 0.8rem 1rem;
  }
  .msg-bubble.typing span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #666;
    animation: typingDot 1.2s infinite;
  }
  .msg-bubble.typing span:nth-child(2) { animation-delay: 0.2s; }
  .msg-bubble.typing span:nth-child(3) { animation-delay: 0.4s; }
  @keyframes typingDot {
    0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
    30% { opacity: 1; transform: translateY(-3px); }
  }
  .calendly-btn {
    display: inline-block;
    background: var(--gold);
    color: var(--charcoal);
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: background 0.2s;
  }
  .calendly-btn:hover {
    background: var(--gold-bright);
  }
  .chat-input-area {
    display: flex;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-top: 1px solid var(--charcoal-lighter);
    background: var(--charcoal-light);
  }
  .chat-input-area input {
    flex: 1;
    padding: 0.6rem 0.9rem;
    background: var(--charcoal);
    border: 1px solid var(--charcoal-lighter);
    border-radius: 8px;
    color: var(--text);
    font-size: 0.9rem;
    font-family: inherit;
    outline: none;
    transition: border-color 0.2s;
  }
  .chat-input-area input:focus { border-color: var(--gold); }
  .chat-input-area input::placeholder { color: #555; }
  .chat-input-area input:disabled { opacity: 0.5; }
  .chat-input-area button {
    padding: 0.6rem 1.2rem;
    background: var(--gold);
    color: var(--charcoal);
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
  }
  .chat-input-area button:hover:not(:disabled) { background: var(--gold-bright); }
  .chat-input-area button:disabled { opacity: 0.5; cursor: not-allowed; }
`;
