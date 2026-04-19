import { useState, useRef, useEffect } from 'react';
const styles = `
  .chat-window {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
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

  /* Fast-click option buttons */
  .chat-options {
    padding: 0.5rem 1rem 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    flex-shrink: 0;
  }
  .option-btn {
    width: 100%;
    padding: 0.6rem 1rem;
    background: #1a1a1a;
    border: 1px solid #B8860B;
    border-radius: 8px;
    color: #DAA520;
    font-size: 0.85rem;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    text-align: left;
    transition: background 0.15s, color 0.15s;
  }
  .option-btn:hover:not(:disabled) {
    background: rgba(184, 134, 11, 0.12);
    color: #f0f0f0;
  }
  .option-btn:disabled { opacity: 0.4; cursor: not-allowed; }
  .custom-question-link {
    font-size: 0.76rem;
    color: #666;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem 0;
    font-family: 'Inter', sans-serif;
    text-decoration: underline;
    align-self: flex-start;
    margin-left: 0.25rem;
  }
  .custom-question-link:hover { color: #aaa; }

  /* Text input area */
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
  .back-to-options-link {
    font-size: 0.76rem;
    color: #666;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0 1rem 0.5rem;
    font-family: 'Inter', sans-serif;
    text-decoration: underline;
    display: block;
    background: #2a2a2a;
  }
  .back-to-options-link:hover { color: #aaa; }

  @media (max-width: 768px) {
    .chat-window {
      min-height: 40vh;
      height: auto;
      display: flex;
      flex-direction: column;
    }
    .chat-messages {
      min-height: 200px;
      overflow-y: auto;
      max-height: 50vh;
    }
    .chat-input-area {
      position: sticky;
      bottom: 0;
      z-index: 100;
      background: #2a2a2a;
      padding: 0.75rem 1rem;
    }
    .chat-input-area input {
      font-size: 16px;
      min-height: 44px;
      padding: 0.65rem 1rem;
    }
    .send-btn {
      width: 44px;
      height: 44px;
      min-width: 44px;
      min-height: 44px;
    }
    .msg-bubble { font-size: 0.9rem; }
    .option-btn {
      min-height: 44px;
      font-size: 0.9rem;
    }
    .chat-options { padding: 0.5rem 0.75rem 0.75rem; }
  }
`;

export default function ChatWindow({ messages, onSend, isComplete, options, isTyping }) {
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [textMode, setTextMode] = useState(false);
  const [flagMode, setFlagMode] = useState(false);
  const [flagNote, setFlagNote] = useState('');
  const [changeMode, setChangeMode] = useState(false);
  const [changeOpt, setChangeOpt] = useState('');
  const [changeNote, setChangeNote] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const hasOptions = options && options.length > 0;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (textMode) inputRef.current?.focus();
  }, [messages, textMode]);

  // When options change, reset mode appropriately
  useEffect(() => {
    setTextMode(false); setFlagMode(false); setFlagNote(''); setChangeMode(false); setChangeOpt(''); setChangeNote('');
  }, [options]);

  const handleSend = async (text) => {
    const msg = (text || input).trim();
    if (!msg || sending) return;
    setInput('');
    setTextMode(false);
    setSending(true);
    await onSend(msg);
    setSending(false);
  };

  const showTextInput = !hasOptions || textMode || isComplete;

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
        {messages.filter(msg => !msg.silent).map((msg, i) => (
          <div key={i} className={`chat-msg ${msg.role}`}>
            {msg.role === 'assistant' && <div className="msg-avatar silas-bubble">S</div>}
            <div className="msg-bubble">{msg.content}</div>
          </div>
        ))}
        {(sending || isTyping) && (
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
              Your feedback has been sent to the Barnhaus team. We'll be in touch shortly with next steps.
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Button mode */}
      {hasOptions && !textMode && !isComplete && (
        <div className="chat-options">
          {options.map((opt, i) => {
            const isFlag = /flag|items to flag/i.test(opt);
            const isDissatisfied = /change something|something feels off|needs adjustment|adjust|something else|has some confusion|need more|need larger|missing|feels off|i have concerns|concerns|not right|doesn't feel|doesnt feel|something wrong|needs work/i.test(opt) && !/michael|flag/i.test(opt);
            return (
              <button
                key={i}
                className="option-btn"
                disabled={sending}
                onClick={() => {
                  if (isFlag) { setFlagMode(true); }
                  else if (isDissatisfied) { setChangeOpt(opt); setChangeMode(true); setChangeNote(''); }
                  else { handleSend(opt); }
                }}
              >
                {opt}
              </button>
            );
          })}
          {flagMode && (
            <div style={{ padding: '0.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <textarea
                autoFocus
                rows={3}
                value={flagNote}
                onChange={e => setFlagNote(e.target.value)}
                placeholder="What do you want to flag for Michael? Be as specific as you'd like..."
                style={{
                  background: '#1a1a1a',
                  border: '1px solid #3a3a3a',
                  borderRadius: '8px',
                  color: '#eee',
                  fontSize: '0.85rem',
                  padding: '0.5rem 0.75rem',
                  resize: 'none',
                  outline: 'none',
                  fontFamily: 'inherit',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey && flagNote.trim()) {
                    e.preventDefault();
                    handleSend('Flag for Michael: ' + flagNote.trim());
                    setFlagMode(false);
                    setFlagNote('');
                  }
                }}
              />
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  className="option-btn"
                  disabled={!flagNote.trim() || sending}
                  onClick={() => { handleSend('Flag for Michael: ' + flagNote.trim()); setFlagMode(false); setFlagNote(''); }}
                  style={{ flex: 1 }}
                >
                  Send flag to Michael
                </button>
                <button
                  onClick={() => { setFlagMode(false); setFlagNote(''); }}
                  style={{ background: 'transparent', border: '1px solid #3a3a3a', color: '#888', borderRadius: '8px', padding: '0 0.75rem', cursor: 'pointer', fontSize: '0.8rem' }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          {changeMode && (
            <div style={{ padding: '0.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{ color: '#DAA520', fontSize: '0.8rem', fontWeight: 600 }}>What would you like to change?</div>
              <textarea
                autoFocus
                rows={3}
                value={changeNote}
                onChange={e => setChangeNote(e.target.value)}
                placeholder="Be as specific as you'd like — Michael will use this to adjust Draft 2..."
                style={{
                  background: '#1a1a1a', border: '1px solid #3a3a3a', borderRadius: '8px',
                  color: '#eee', fontSize: '0.85rem', padding: '0.5rem 0.75rem',
                  resize: 'none', outline: 'none', fontFamily: 'inherit',
                  width: '100%', boxSizing: 'border-box',
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey && changeNote.trim()) {
                    e.preventDefault();
                    handleSend(changeOpt + ': ' + changeNote.trim());
                    setChangeMode(false); setChangeNote(''); setChangeOpt('');
                  }
                }}
              />
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  className="option-btn"
                  disabled={!changeNote.trim() || sending}
                  onClick={() => {
                    handleSend(changeOpt + ': ' + changeNote.trim());
                    setChangeMode(false); setChangeNote(''); setChangeOpt('');
                  }}
                  style={{ flex: 1 }}
                >
                  Send feedback
                </button>
                <button
                  onClick={() => { setChangeMode(false); setChangeNote(''); setChangeOpt(''); }}
                  style={{ background: 'transparent', border: '1px solid #3a3a3a', color: '#888', borderRadius: '8px', padding: '0 0.75rem', cursor: 'pointer', fontSize: '0.8rem' }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          <button className="custom-question-link" onClick={() => setTextMode(true)}>
            I have a custom question
          </button>
        </div>
      )}

      {/* Text input mode */}
      {showTextInput && (
        <>
          {hasOptions && textMode && (
            <button className="back-to-options-link" onClick={() => setTextMode(false)}>
              ← Back to quick answers
            </button>
          )}
          <div className="chat-input-area">
            <input
              ref={inputRef}
              autoFocus={textMode}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder={isComplete ? 'Review complete!' : 'Type your response...'}
              disabled={sending || isComplete}
            />
            <button onClick={() => handleSend()} disabled={!input.trim() || sending || isComplete} className="send-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
