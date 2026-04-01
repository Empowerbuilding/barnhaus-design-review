import { useState, useEffect, useCallback, useRef } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import ChatWindow from './components/ChatWindow';
import ImageViewer from './components/ImageViewer';
import ProgressBar from './components/ProgressBar';
import './App.css';

const SECTION_LABELS = {
  'floor plan': 'Floor Plan',
  exterior: 'Exterior',
  kitchen: 'Kitchen',
  'living room': 'Living Room',
  'great room': 'Great Room',
  'dining room': 'Dining Room',
  'primary bedroom': 'Primary Bedroom',
  'primary bath': 'Primary Bath',
  'master bedroom': 'Primary Bedroom',
  'master bath': 'Primary Bath',
  bathroom: 'Bathroom',
  office: 'Office',
  'bonus room': 'Bonus Room',
  laundry: 'Laundry',
  hallway: 'Hallway',
  patio: 'Patio',
  outdoor: 'Outdoor',
  garage: 'Garage',
  other: 'Other',
};

function ReviewPage() {
  const { projectSlug, draft } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentGroupIdx, setCurrentGroupIdx] = useState(0);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [messages, setMessages] = useState([]);
  const [feedback, setFeedback] = useState({});
  const [enhancedImages, setEnhancedImages] = useState({});
  const [completed, setCompleted] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const initialGreetingSent = useRef(false);

  const clientName = projectSlug
    ? projectSlug.charAt(0).toUpperCase() + projectSlug.slice(1)
    : 'Client';

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/project/${projectSlug}`);
        if (!res.ok) throw new Error('Project not found');
        const data = await res.json();
        setProject(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [projectSlug]);

  // Start Supabase session when project loads
  useEffect(() => {
    if (!project) return;
    fetch('/api/session/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ projectSlug, draft, clientName }),
    })
      .then(r => r.json())
      .then(data => {
        if (data.sessionId) setSessionId(data.sessionId);
      })
      .catch(() => {});
  }, [project]);

  const currentGroup = project?.groups?.[currentGroupIdx];
  const currentImage = currentGroup?.images?.[currentImageIdx];
  const isFloorPlan = currentGroup?.roomType?.toLowerCase() === 'floor plan';
  const sectionLabels = project?.groups?.map(g => SECTION_LABELS[g.roomType] || g.roomType) || [];

  // Next section name for Silas to guide to
  const nextSectionLabel = project?.groups?.[currentGroupIdx + 1]
    ? SECTION_LABELS[project.groups[currentGroupIdx + 1].roomType] || project.groups[currentGroupIdx + 1].roomType
    : null;

  const sendChat = useCallback(
    async (userMessage) => {
      const newMessages = [...messages, { role: 'user', content: userMessage }];
      setMessages(newMessages);

      // Patch transcript
      if (sessionId) {
        fetch(`/api/session/${sessionId}/transcript`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ transcript: newMessages }),
        }).catch(() => {});
      }

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: newMessages.map(m => ({ role: m.role, content: m.content })),
            projectName: project?.projectName,
            clientName,
            currentRoom: currentGroup?.roomType || 'greeting',
            currentImage: currentImage?.name || '',
            currentImageId: currentImage?.id || null,
            totalImagesInSection: currentGroup?.images?.length || 1,
            currentImageIndexInSection: currentImageIdx,
            nextSectionName: currentImageIdx === (currentGroup?.images?.length || 1) - 1 ? nextSectionLabel : null,
          }),
        });
        const data = await res.json();
        const updatedMessages = [...newMessages, { role: 'assistant', content: data.reply }];
        setMessages(updatedMessages);

        // Patch transcript with assistant reply
        if (sessionId) {
          fetch(`/api/session/${sessionId}/transcript`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ transcript: updatedMessages }),
          }).catch(() => {});
        }
      } catch {
        setMessages(prev => [
          ...prev,
          { role: 'assistant', content: "I'm having trouble connecting. Please try again." },
        ]);
      }
    },
    [messages, project, clientName, currentGroup, currentImage, currentImageIdx, nextSectionLabel, sessionId]
  );

  useEffect(() => {
    if (project && !initialGreetingSent.current) {
      initialGreetingSent.current = true;
      const greeting = `Hi, I'm ${clientName} and I'm here to review the ${project.projectName} ${draft || 'draft'} designs.`;
      setMessages([{ role: 'user', content: greeting }]);
      fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: greeting }],
          projectName: project.projectName,
          clientName,
          currentRoom: project.groups?.[0]?.roomType || 'greeting',
          currentImage: project.groups?.[0]?.images?.[0]?.name || '',
          currentImageId: project.groups?.[0]?.images?.[0]?.id || null,
          totalImagesInSection: project.groups?.[0]?.images?.length || 1,
          currentImageIndexInSection: 0,
          nextSectionName: null,
        }),
      })
        .then(r => r.json())
        .then(data => {
          setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
        })
        .catch(() => {
          setMessages(prev => [
            ...prev,
            { role: 'assistant', content: `Welcome ${clientName}! I'm Silas, your Barnhaus design guide. Let's walk through your ${project.projectName} renders together — I'll ask about each space and we'll capture everything you love or want to change. Ready to get started?` },
          ]);
        });
    }
  }, [project, clientName, draft]);

  const handleNextImage = useCallback(() => {
    if (!currentGroup) return;
    if (currentImageIdx < currentGroup.images.length - 1) {
      setCurrentImageIdx(prev => prev + 1);
    } else if (currentGroupIdx < project.groups.length - 1) {
      setCurrentGroupIdx(prev => prev + 1);
      setCurrentImageIdx(0);
    }
  }, [currentGroup, currentGroupIdx, currentImageIdx, project]);

  const handleSectionChange = useCallback((idx) => {
    setCurrentGroupIdx(idx);
    setCurrentImageIdx(0);
  }, []);

  const handleFeedback = useCallback(
    (imageId, status, notes) => {
      setFeedback(prev => ({
        ...prev,
        [imageId]: {
          imageId,
          imageName: currentImage?.name,
          roomType: currentGroup?.roomType,
          status,
          notes,
          originalUrl: currentImage?.url,
          enhancedUrl: enhancedImages[imageId] || null,
        },
      }));
    },
    [currentImage, currentGroup, enhancedImages]
  );

  const handleEnhanced = useCallback((imageId, enhancedUrl) => {
    setEnhancedImages(prev => ({ ...prev, [imageId]: enhancedUrl }));
  }, []);

  const handleComplete = useCallback(async () => {
    const feedbackList = Object.values(feedback);
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectName: project?.projectName,
          clientName,
          feedback: feedbackList,
          sessionId,
        }),
      });
      setCompleted(true);
    } catch {
      alert('Failed to submit feedback. Please try again.');
    }
  }, [feedback, project, clientName, sessionId]);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p>Loading your design review...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-screen">
        <h2>Unable to Load Project</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="completion-screen">
        <style>{completionStyles}</style>
        <div className="completion-card">
          <img src="https://barnhaussteelbuilders.com/assets/images/logo-BbjiAVC6.png" alt="Barnhaus" className="completion-logo" />
          <div className="completion-checkmark">✓</div>
          <h2>Review Complete</h2>
          <p className="completion-message">Your feedback has been sent to the Barnhaus team. We'll be in touch shortly with next steps.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="review-page">
      <header className="review-header">
        <div className="header-inner">
          <img src="https://barnhaussteelbuilders.com/assets/images/logo-BbjiAVC6.png" alt="Barnhaus Steel Builders" className="header-logo" />
          <div className="header-subtitle">Design Review</div>
        </div>
      </header>

      <ProgressBar sections={sectionLabels} currentIndex={currentGroupIdx} onSelect={handleSectionChange} />

      <div className="review-content">
        <div className="image-panel">
          <ImageViewer
            image={currentImage}
            images={currentGroup?.images || []}
            currentIndex={currentImageIdx}
            onSelectImage={setCurrentImageIdx}
            isFloorPlan={isFloorPlan}
            enhancedUrl={enhancedImages[currentImage?.id]}
            roomType={currentGroup?.roomType}
            onEnhanced={url => handleEnhanced(currentImage?.id, url)}
            feedback={feedback[currentImage?.id]}
            onFeedback={(status, notes) => handleFeedback(currentImage?.id, status, notes)}
            onNext={handleNextImage}
            hasNext={
              currentImageIdx < (currentGroup?.images?.length || 0) - 1 ||
              currentGroupIdx < (project?.groups?.length || 0) - 1
            }
            onComplete={handleComplete}
            isLastImage={
              currentGroupIdx === (project?.groups?.length || 0) - 1 &&
              currentImageIdx === (currentGroup?.images?.length || 0) - 1
            }
          />
        </div>

        <div className="chat-panel">
          <ChatWindow
            messages={messages}
            onSend={sendChat}
            isComplete={completed}
          />
        </div>
      </div>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-card">
        <img src="https://barnhaussteelbuilders.com/assets/images/logo-BbjiAVC6.png" alt="Barnhaus Steel Builders" style={{ height: '44px', marginBottom: '1.5rem' }} />
        <h2>Design Review Portal</h2>
        <p>Use the unique link provided by your Barnhaus team to access your design review.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <style>{appStyles}</style>
      <Routes>
        <Route path="/review/:projectSlug/:draft" element={<ReviewPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </>
  );
}

const completionStyles = `
  .completion-screen {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: var(--charcoal);
    padding: 2rem;
  }
  .completion-card {
    background: var(--charcoal-light);
    border: 1px solid var(--charcoal-lighter);
    border-radius: 16px;
    padding: 3rem 4rem;
    text-align: center;
    max-width: 480px;
    width: 100%;
  }
  .completion-logo {
    height: 44px;
    margin-bottom: 2rem;
  }
  .completion-checkmark {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    font-size: 2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
  }
  .completion-card h2 {
    color: var(--text);
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
    letter-spacing: 0.05em;
  }
  .completion-message {
    color: var(--text-dim);
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const appStyles = `
  .loading-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .loading-screen p { margin-top: 1rem; color: var(--text-muted); }

  .landing-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem;
    text-align: center;
  }
  .landing-card {
    background: var(--charcoal-light);
    padding: 3rem 4rem;
    border-radius: 12px;
    border: 1px solid var(--charcoal-lighter);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .landing-card h2 {
    font-size: 1.2rem;
    font-weight: 300;
    color: var(--text-dim);
    margin-bottom: 1rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .landing-card p { color: #666; max-width: 400px; }

  .review-page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }
  .review-header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    background: var(--charcoal-light);
    border-bottom: 1px solid var(--charcoal-lighter);
    flex-shrink: 0;
  }
  .header-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }
  .header-logo {
    height: 44px;
  }
  .header-subtitle {
    font-size: 0.7rem;
    letter-spacing: 0.25em;
    color: var(--text-muted);
    text-transform: uppercase;
    font-weight: 400;
  }
  .review-content {
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    .review-page {
      height: auto;
      min-height: 100vh;
      overflow: visible;
    }
    .review-content {
      flex-direction: column;
      overflow: visible;
      flex: none;
    }
    .header-logo {
      height: 36px;
    }
    .header-subtitle {
      font-size: 0.65rem;
    }
    .landing-card {
      padding: 2rem 1.5rem;
    }
  }
`;
