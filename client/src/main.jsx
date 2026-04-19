import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(err, info) { console.error('App crash:', err, info); }
  render() {
    if (this.state.error) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#1a1a1a', color: '#eee', fontFamily: 'sans-serif', gap: '1rem' }}>
          <img src="https://barnhaussteelbuilders.com/assets/images/logo-BbjiAVC6.png" alt="Barnhaus" style={{ height: 48, opacity: 0.7 }} />
          <p style={{ color: '#888' }}>Something went wrong loading the review. Please refresh the page.</p>
          <button onClick={() => window.location.reload()} style={{ background: '#B8860B', color: '#fff', border: 'none', borderRadius: 8, padding: '0.5rem 1.5rem', cursor: 'pointer', fontSize: '0.9rem' }}>Refresh</button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>
);
