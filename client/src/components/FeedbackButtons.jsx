import { useState, useEffect } from 'react';

export default function FeedbackButtons({ imageId, feedback, onFeedback, onNext, hasNext, onComplete, isLastImage }) {
  const [notes, setNotes] = useState(feedback?.notes || '');
  const [selected, setSelected] = useState(feedback?.status || null);

  // Reset/restore state when image changes
  useEffect(() => {
    setSelected(feedback?.status || null);
    setNotes(feedback?.notes || '');
  }, [imageId]);

  const handleSelect = status => {
    setSelected(status);
    onFeedback(status, notes);
  };

  const handleNotes = e => {
    setNotes(e.target.value);
    if (selected) onFeedback(selected, e.target.value);
  };

  return (
    <div className="feedback-section">
      <style>{styles}</style>
      <div className="feedback-label">How do you feel about this render?</div>
      <div className="feedback-buttons">
        <button className={`fb-btn love ${selected === 'love' ? 'active' : ''}`} onClick={() => handleSelect('love')}>💚 Love It</button>
        <button className={`fb-btn change ${selected === 'change' ? 'active' : ''}`} onClick={() => handleSelect('change')}>🔶 Change It</button>
        <button className={`fb-btn question ${selected === 'question' ? 'active' : ''}`} onClick={() => handleSelect('question')}>❓ Question</button>
      </div>

      {selected && (
        <>
          <textarea
            className="feedback-notes"
            value={notes}
            onChange={handleNotes}
            placeholder="Add any notes or details..."
            rows={2}
          />
          {isLastImage ? (
            <button className="btn-next btn-submit" onClick={onComplete}>Submit Review ✓</button>
          ) : hasNext ? (
            <button className="btn-next" onClick={onNext}>Next Image →</button>
          ) : null}
        </>
      )}
    </div>
  );
}

const styles = `
  .feedback-section {
    padding: 0.75rem 0;
    border-top: 1px solid #3a3a3a;
    margin-top: 0.5rem;
  }
  .feedback-label {
    font-size: 0.78rem;
    color: #aaa;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .feedback-buttons {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .fb-btn {
    flex: 1;
    padding: 0.5rem 0.5rem;
    background: #2a2a2a;
    border: 1px solid #3a3a3a;
    border-radius: 8px;
    color: #aaa;
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: all 0.2s;
    white-space: nowrap;
  }
  .fb-btn:hover { border-color: #666; color: #f0f0f0; }
  .fb-btn.love.active { background: #1a3a1a; border-color: #4caf50; color: #4caf50; }
  .fb-btn.change.active { background: #3a2a1a; border-color: #ff9800; color: #ff9800; }
  .fb-btn.question.active { background: #1a2a3a; border-color: #2196f3; color: #2196f3; }
  .feedback-notes {
    width: 100%;
    padding: 0.55rem 0.75rem;
    background: #2a2a2a;
    border: 1px solid #3a3a3a;
    border-radius: 8px;
    color: #f0f0f0;
    font-size: 0.85rem;
    font-family: 'Inter', sans-serif;
    resize: vertical;
    outline: none;
    margin-bottom: 0.5rem;
    transition: border-color 0.2s;
  }
  .feedback-notes:focus { border-color: #B8860B; }
  .feedback-notes::placeholder { color: #555; }
  .btn-next {
    padding: 0.55rem 1.5rem;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: opacity 0.2s;
  }
  .btn-next:hover { opacity: 0.85; }
  .btn-submit { padding: 0.55rem 2rem; }
`;
