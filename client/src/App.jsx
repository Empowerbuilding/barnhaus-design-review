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
  const [calendlyLink, setCalendlyLink] = useState('');
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

  const currentGroup = project?.groups?.[currentGroupIdx];
  const currentImage = currentGroup?.images?.[currentImageIdx];
  const isFloorPlan = currentGroup?.roomType?.toLowerCase() === 'floor plan';
  const sectionLabels = project?.groups?.map(g => SECTION_LABELS[g.roomType] || g.roomType) || [];

  const sendChat = useCallback(
    async (userMessage) => {
      const newMessages = [...messages, { role: 'user', content: userMessage }];
      setMessages(newMessages);

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
          }),
        });
        const data = await res.json();
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      } catch {
        setMessages(prev => [
          ...prev,
          { role: 'assistant', content: "I'm having trouble connecting. Please try again." },
        ]);
      }
    },
    [messages, project, clientName, currentGroup, currentImage]
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
        }),
      })
        .then(r => r.json())
        .then(data => {
          setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
        })
        .catch(() => {
          setMessages(prev => [
            ...prev,
            { role: 'assistant', content: `Welcome ${clientName}! Let's review your ${project.projectName} designs together. I'll walk you through each render and we'll discuss what you love and what you'd like to change. Ready to get started?` },
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
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectName: project?.projectName,
          clientName,
          feedback: feedbackList,
        }),
      });
      const data = await res.json();
      setCalendlyLink(data.calendlyLink || '');
      setCompleted(true);
    } catch {
      alert('Failed to submit feedback. Please try again.');
    }
  }, [feedback, project, clientName]);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader" />
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

  return (
    <div className="review-page">
      <header className="review-header">
        <div className="logo">BARNHAUS</div>
        <div className="project-title">{project?.projectName} — Draft {draft}</div>
      </header>

      <ProgressBar sections={sectionLabels} currentIndex={currentGroupIdx} />

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
            calendlyLink={calendlyLink}
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
        <h1>BARNHAUS</h1>
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

const appStyles = `
  .loading-screen .loader {
    width: 48px; height: 48px;
    border: 3px solid var(--charcoal-lighter);
    border-top-color: var(--gold);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
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
  .landing-page h1 {
    font-size: 3rem;
    letter-spacing: 0.3em;
    color: var(--gold);
    font-weight: 300;
  }
  .landing-page h2 {
    font-size: 1.2rem;
    font-weight: 300;
    color: var(--text-muted);
    margin-top: 0.5rem;
  }
  .landing-page p { margin-top: 2rem; color: #666; max-width: 400px; }
  .landing-card {
    background: var(--charcoal-light);
    padding: 3rem 4rem;
    border-radius: 12px;
    border: 1px solid var(--charcoal-lighter);
  }

  .review-page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }
  .review-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1.5rem;
    background: var(--charcoal-light);
    border-bottom: 1px solid var(--charcoal-lighter);
    flex-shrink: 0;
  }
  .logo {
    font-size: 1.1rem;
    letter-spacing: 0.25em;
    color: var(--gold);
    font-weight: 300;
  }
  .project-title {
    font-size: 0.85rem;
    color: var(--text-muted);
    font-weight: 400;
  }
  .review-content {
    display: flex;
    flex: 1;
    overflow: hidden;
  }
`;
