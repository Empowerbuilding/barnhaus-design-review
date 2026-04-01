import { useState } from 'react';

export default function FeedbackButtons({ feedback, onFeedback, onNext, hasNext, onComplete, isLastImage }) {
  const [notes, setNotes] = useState(feedback?.notes || '');
  const [selected, setSelected] = useState(feedback?.status || null);

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
        <button
          className={`fb-btn love ${selected === 'love' ? 'active' : ''}`}
          onClick={() => handleSelect('love')}
        >
          Love It
        </button>
        <button
          className={`fb-btn change ${selected === 'change' ? 'active' : ''}`}
          onClick={() => handleSelect('change')}
        >
          Change It
        </button>
        <button
          className={`fb-btn question ${selected === 'question' ? 'active' : ''}`}
          onClick={() => handleSelect('question')}
        >
          Question
        </button>
      </div>

      {selected && (
        <>
          <textarea
            className="feedback-notes"
            value={notes}
            onChange={handleNotes}
            placeholder="Add any notes..."
            rows={2}
          />
          {isLastImage ? (
            <button className="btn-next" onClick={onComplete}>
              Submit Review
            </button>
          ) : hasNext ? (
            <button className="btn-next" onClick={onNext}>
              Next Image
            </button>
          ) : null}
        </>
      )}
    </div>
  );
}

const styles = `
  .feedback-section {
    padding: 0.75rem 0;
    border-top: 1px solid var(--charcoal-lighter);
  }
  .feedback-label {
    font-size: 0.8rem;
    color: #888;
    margin-bottom: 0.5rem;
  }
  .feedback-buttons {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .fb-btn {
    flex: 1;
    padding: 0.5rem 0.75rem;
    background: var(--charcoal-light);
    border: 1px solid var(--charcoal-lighter);
    border-radius: 8px;
    color: #aaa;
    font-size: 0.82rem;
    font-weight: 500;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.2s;
  }
  .fb-btn:hover { border-color: #666; }
  .fb-btn.love.active { background: #1a3a1a; border-color: #4caf50; color: #4caf50; }
  .fb-btn.change.active { background: #3a2a1a; border-color: #ff9800; color: #ff9800; }
  .fb-btn.question.active { background: #1a2a3a; border-color: #2196f3; color: #2196f3; }
  .feedback-notes {
    width: 100%;
    padding: 0.5rem 0.75rem;
    background: var(--charcoal-light);
    border: 1px solid var(--charcoal-lighter);
    border-radius: 8px;
    color: var(--text);
    font-size: 0.85rem;
    font-family: inherit;
    resize: vertical;
    outline: none;
    margin-bottom: 0.5rem;
  }
  .feedback-notes:focus { border-color: var(--gold); }
  .feedback-notes::placeholder { color: #555; }
  .btn-next {
    padding: 0.55rem 1.5rem;
    background: var(--gold);
    color: var(--charcoal);
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s;
  }
  .btn-next:hover { background: var(--gold-bright); }
`;
