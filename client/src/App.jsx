import { useState, useEffect, useCallback, useRef } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import ChatWindow from './components/ChatWindow';
import ChatDrawer from './components/ChatDrawer';
import ImageViewer from './components/ImageViewer';
import ProgressBar from './components/ProgressBar';
import ProgressSidebar from './components/ProgressSidebar';
import InspirationVault from './components/InspirationVault';
import OverviewScreen from './components/OverviewScreen';
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

  .desktop-only { display: flex; }
  .mobile-only { display: none !important; }

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
  .header-logo { height: 44px; }
  .header-subtitle {
    font-size: 0.7rem;
    letter-spacing: 0.25em;
    color: var(--text-muted);
    text-transform: uppercase;
    font-weight: 400;
  }
  .review-body {
    display: flex;
    flex: 1;
    overflow: hidden;
    position: relative;
  }
  .review-content {
    display: flex;
    flex: 1;
    overflow: hidden;
    position: relative;
  }
  .image-panel {
    flex: 1;
    height: 100%;
    overflow: hidden;
    position: relative;
    transition: flex 0.3s ease;
  }

  /* Desktop chat toggle button */
  .chat-toggle-btn {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    z-index: 10;
    background: rgba(30,30,30,0.85);
    border: 1px solid #3a3a3a;
    border-radius: 20px;
    color: #f0f0f0;
    font-size: 0.8rem;
    padding: 0.4rem 0.85rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.35rem;
    backdrop-filter: blur(6px);
    transition: background 0.2s, border-color 0.2s;
    white-space: nowrap;
  }
  .chat-toggle-btn:hover {
    background: rgba(50,50,50,0.95);
    border-color: #B8860B;
  }

  /* Desktop chat panel */
  .chat-panel {
    width: 35%;
    min-width: 280px;
    max-width: 420px;
    border-left: 1px solid var(--charcoal-lighter);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    transition: width 0.3s ease, min-width 0.3s ease, opacity 0.3s ease;
  }
  .chat-panel-closed {
    width: 0 !important;
    min-width: 0 !important;
    opacity: 0;
    pointer-events: none;
    border-left: none;
  }

  /* Mobile FAB */
  .mobile-chat-fab {
    display: none !important;
    position: fixed;
    bottom: 80px;
    right: 1rem;
    z-index: 50;
    background: linear-gradient(135deg, #B8860B, #DAA520);
    color: #1a1a1a;
    border: none;
    border-radius: 28px;
    padding: 0.65rem 1.1rem;
    font-size: 0.88rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    align-items: center;
    gap: 0.4rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
    transition: transform 0.15s, opacity 0.15s;
  }
  .mobile-chat-fab:hover { transform: scale(1.03); }
  .mobile-chat-fab:active { transform: scale(0.97); }
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.8; }
  }

  .mobile-chat-bar { display: none; }

  @media (max-width: 768px) {
    .desktop-only { display: none !important; }
    .mobile-only { display: flex !important; }

    .mobile-chat-bar {
      display: block;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100;
      background: linear-gradient(135deg, #B8860B, #DAA520);
      padding: 0.75rem 1.25rem;
      cursor: pointer;
      box-shadow: 0 -2px 16px rgba(0,0,0,0.4);
    }
    .mobile-chat-bar-inner {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      color: #1a1a1a;
      font-weight: 600;
      font-size: 0.95rem;
    }
    .silas-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #1a1a1a;
      opacity: 0.6;
      animation: pulse 1.5s infinite;
    }
    .mobile-chat-unread {
      margin-left: auto;
      background: #1a1a1a;
      color: #DAA520;
      font-size: 0.72rem;
      font-weight: 700;
      padding: 0.2rem 0.5rem;
      border-radius: 10px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }
    .mobile-chat-hint {
      margin-left: auto;
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.78rem;
      font-weight: 500;
      opacity: 0.75;
      animation: bounceUp 1.2s ease-in-out infinite;
    }
    .mobile-chat-hint-arrow {
      font-size: 1rem;
      animation: bounceUp 1.2s ease-in-out infinite;
    }
    @keyframes bounceUp {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-4px); }
    }

    .review-page {
      height: auto;
      min-height: 100vh;
      overflow: visible;
    }
    .review-body {
      flex-direction: column;
      overflow: visible;
    }
    .review-content {
      flex-direction: column;
      overflow: visible;
      flex: none;
    }
    .image-panel {
      width: 100%;
      flex: none;
      padding-bottom: 60px;
    }
    .header-logo { height: 36px; }
    .header-subtitle { font-size: 0.65rem; }
    .landing-card { padding: 2rem 1.5rem; }
    .mobile-chat-fab { display: flex !important; bottom: 80px; right: 1rem; }
  }
`;

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
  .completion-logo { height: 44px; margin-bottom: 2rem; }
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
  .completion-message { color: var(--text-dim); font-size: 1rem; line-height: 1.6; }
`;

function ReviewPage() {
  const { projectSlug, draft } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentGroupIdx, setCurrentGroupIdx] = useState(0);
  const [maxUnlocked, setMaxUnlocked] = useState(0);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [phase, setPhase] = useState('overview'); // 'overview' | 'walkthrough'
  const [memo, setMemo] = useState(null);
  const [messages, setMessages] = useState([]);
  const sectionMessages = useRef({}); // persists chat history per section index
  const [completed, setCompleted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [chatOpen, setChatOpen] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  // Inactivity timeout — stop pinging server after 2h of no client interaction
  const lastActivityRef = useRef(Date.now());
  useEffect(() => {
    const bump = () => { lastActivityRef.current = Date.now(); };
    window.addEventListener('click', bump);
    window.addEventListener('keydown', bump);
    window.addEventListener('touchstart', bump);
    const check = setInterval(() => {
      if (Date.now() - lastActivityRef.current > 2 * 60 * 60 * 1000) {
        // 2 hours of inactivity — mark completed to stop all API calls
        setCompleted(true);
      }
    }, 60 * 1000);
    return () => {
      window.removeEventListener('click', bump);
      window.removeEventListener('keydown', bump);
      window.removeEventListener('touchstart', bump);
      clearInterval(check);
    };
  }, []);

  const [chatOptions, setChatOptions] = useState([]);
  const [inspirationImages, setInspirationImages] = useState([]);
  const [questionProgress, setQuestionProgress] = useState({});
  const [silasTyping, setSilasTyping] = useState(false);
  const [currentSearchQuery, setCurrentSearchQuery] = useState(null);
  const [savedVibes, setSavedVibes] = useState([]);
  const [inspirationOffset, setInspirationOffset] = useState(0);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const [unread, setUnread] = useState(false);
  const prevMessageCount = useRef(0);
  const drawerAutoOpened = useRef(false);

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

  useEffect(() => {
    if (!project) return;
    const rooms = (project.groups || []).map(g => SECTION_LABELS[g.roomType] || g.roomType);
    fetch('/api/session/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ projectSlug, draft, clientName, projectName: project.projectName, rooms }),
    })
      .then(r => r.json())
      .then(data => {
        if (data.sessionId) setSessionId(data.sessionId);
        if (data.memo) setMemo(data.memo);
      })
      .catch(() => {});
  }, [project]);

  const currentGroup = project?.groups?.[currentGroupIdx];
  const currentImage = currentGroup?.images?.[currentImageIdx];
  const isFloorPlan = currentGroup?.roomType?.toLowerCase() === 'floor plan';
  const sectionLabels = project?.groups?.map(g => SECTION_LABELS[g.roomType] || g.roomType) || [];

  const nextSectionLabel = project?.groups?.[currentGroupIdx + 1]
    ? SECTION_LABELS[project.groups[currentGroupIdx + 1].roomType] || project.groups[currentGroupIdx + 1].roomType
    : null;

  const lastNotifiedImage = useRef(null);
  const firedTriggers = useRef(new Set()); // prevent double-fire per imageKey
  const triggerAbortRef = useRef(null);
  const hasInputOnCurrentImage = useRef(false);

  useEffect(() => {
    if (!project || !currentImage || phase !== 'walkthrough') return;
    const imageKey = `${currentGroup?.roomType}-${currentImage.id}`;
    if (lastNotifiedImage.current === imageKey) return;

    const isFirstInSection = currentImageIdx === 0;
    if (!isFirstInSection) {
      lastNotifiedImage.current = imageKey;
      hasInputOnCurrentImage.current = false;
      return;
    }

    lastNotifiedImage.current = imageKey;
    hasInputOnCurrentImage.current = false;

    // Hard guard — only fire once per imageKey ever
    if (firedTriggers.current.has(imageKey)) return;
    firedTriggers.current.add(imageKey);

    if (triggerAbortRef.current) triggerAbortRef.current.abort();
    const controller = new AbortController();
    triggerAbortRef.current = controller;

    const roomLabel = currentGroup?.roomType || 'other';
    const features = currentImage.analysis?.features?.join(', ') || '';
    const trigger = `[IMAGE CHANGE] The client is now viewing image ${currentImageIdx + 1} of ${currentGroup?.images?.length} in the ${roomLabel} section. Image name: ${currentImage.name}. Visible features: ${features || 'not analyzed'}. Open the conversation for this image — ask one targeted question based on the room type and what you know about this client. Do not wait for them to speak first.`;

    setSilasTyping(true);
    fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: messages.filter(m => !m.silent).map(m => ({ role: m.role, content: m.content })),
        clientName,
        projectSlug,
        currentRoom: roomLabel,
        currentImage: currentImage.name,
        currentImageId: currentImage.id,
        currentImageFeatures: currentImage.analysis?.features || [],
        sessionId,
        currentImageIndexInSection: currentImageIdx,
        isImageChangeTrigger: true,
        triggerMessage: trigger,
      }),
    })
      .then(r => r.json())
      .then(data => {
        setSilasTyping(false);
        if (data.reply && data.reply !== 'NO_REPLY' && data.reply !== 'ANNOUNCE_SKIP') {
          setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
        }
        if (!isInspirationSelection) setChatOptions(data.options || []);
        if (data.inspirationImages?.length) { setInspirationImages(data.inspirationImages); setInspirationOffset(0); } else if (!isInspirationSelection) { setInspirationImages([]); setInspirationOffset(0); }
        if (data.searchQuery) setCurrentSearchQuery(data.searchQuery || currentSearchQuery);
        // Don't update roomProgress from image change trigger — only client answers drive the counter
      })
      .catch(() => { setSilasTyping(false); });
  }, [currentGroup, currentImage, currentGroupIdx, currentImageIdx, project, sessionId, clientName, phase, messages]);

  useEffect(() => {
    const lastMsg = messages[messages.length - 1];
    if (lastMsg && lastMsg.role === 'assistant' && messages.length > prevMessageCount.current) {
      if (!drawerOpen) {
        if (!drawerAutoOpened.current && isMobile) {
          drawerAutoOpened.current = true;
          setDrawerOpen(true);
        } else {
          setUnread(true);
        }
      }
    }
    prevMessageCount.current = messages.length;
  }, [messages, drawerOpen, isMobile]);

  const openDrawer = () => { setDrawerOpen(true); setUnread(false); };
  const closeDrawer = () => setDrawerOpen(false);

  const triggerSilasForCurrentImage = useCallback(() => {
    if (!currentImage || !currentGroup || phase !== 'walkthrough') return;
    const imageKey = `${currentGroup.roomType}-${currentImage.id}`;
    if (lastNotifiedImage.current === imageKey) return;
    if (firedTriggers.current.has(imageKey)) return;
    lastNotifiedImage.current = imageKey;
    firedTriggers.current.add(imageKey);

    const roomLabel = currentGroup.roomType || 'other';
    const features = currentImage.analysis?.features?.join(', ') || '';
    const trigger = `[IMAGE CHANGE] Image ${currentImageIdx + 1} of ${currentGroup.images?.length} in the ${roomLabel} section. Image name: ${currentImage.name}. Visible features: ${features || 'not analyzed'}.\n\nContinue the conversation naturally for this image. Output ONLY the message to the client.`;

    fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: messages.filter(m => !m.silent).map(m => ({ role: m.role, content: m.content })),
        clientName,
        projectSlug,
        currentRoom: roomLabel,
        currentImage: currentImage.name,
        currentImageId: currentImage.id,
        currentImageFeatures: currentImage.analysis?.features || [],
        sessionId,
        currentImageIndexInSection: currentImageIdx,
        isImageChangeTrigger: true,
        triggerMessage: trigger,
      }),
    })
      .then(r => r.json())
      .then(data => {
        if (data.reply && data.reply !== 'NO_REPLY' && data.reply !== 'ANNOUNCE_SKIP')
          setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
        if (!isInspirationSelection) setChatOptions(data.options || []);
        if (data.inspirationImages) setInspirationImages(data.inspirationImages);
      })
      .catch(() => {});
  }, [currentImage, currentGroup, currentImageIdx, clientName, projectSlug, sessionId, phase, messages]);

  const sendChat = useCallback(
    async (userMessage, opts = {}) => {
      const isInspirationSelection = opts.isInspirationSelection || false;
      const newMessages = [...messages, { role: 'user', content: userMessage }];
      setMessages(newMessages);
      if (!isInspirationSelection) setChatOptions([]);
      if (!isInspirationSelection) setInspirationImages([]);

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
            messages: newMessages.filter(m => !m.silent).map(m => ({ role: m.role, content: m.content })),
            projectName: project?.projectName,
            clientName,
            currentRoom: currentGroup?.roomType || 'greeting',
            currentImage: currentImage?.name || '',
            currentImageId: currentImage?.id || null,
            totalImagesInSection: currentGroup?.images?.length || 1,
            currentImageIndexInSection: currentImageIdx,
            nextSectionName: nextSectionLabel || null,
            sessionId,
          }),
        });
        const data = await res.json();
        if (!data.reply || data.reply === 'NO_REPLY' || data.reply === 'ANNOUNCE_SKIP') return;
        const updatedMessages = [...newMessages, { role: 'assistant', content: data.reply }];
        setMessages(updatedMessages);
        if (!isInspirationSelection) setChatOptions(data.options || []);
        if (data.inspirationImages?.length) { setInspirationImages(data.inspirationImages); setInspirationOffset(0); } else if (!isInspirationSelection) { setInspirationImages([]); setInspirationOffset(0); }
        setCurrentSearchQuery(data.searchQuery || currentSearchQuery);
        if (data.roomProgress && !isInspirationSelection) {
          const roomLabel = currentGroup?.roomType || 'other';
          setQuestionProgress(prev => ({
            ...prev,
            [SECTION_LABELS[roomLabel] || roomLabel]: data.roomProgress,
          }));
        }

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
    [messages, project, clientName, currentGroup, currentImage, currentImageIdx, nextSectionLabel, sessionId, triggerSilasForCurrentImage]
  );

  const handleStart = useCallback(() => { setPhase('walkthrough'); }, []);

  const handleNextImage = useCallback(() => {
    if (!currentGroup) return;
    setChatOptions([]);
    setInspirationImages([]);
    if (currentImageIdx < currentGroup.images.length - 1) {
      setCurrentImageIdx(prev => prev + 1);
    } else if (currentGroupIdx < project.groups.length - 1) {
      const nextIdx = currentGroupIdx + 1;
      setCurrentGroupIdx(nextIdx);
      setCurrentImageIdx(0);
      setMaxUnlocked(prev => Math.max(prev, nextIdx));
    }
  }, [currentGroup, currentGroupIdx, currentImageIdx, project]);

  const handleSectionChange = useCallback((idx) => {
    // Save current section's messages before leaving
    sectionMessages.current[currentGroupIdx] = messages;
    // Clear fired trigger for target section so image change re-fires on arrival
    const targetGroup = project?.groups?.[idx];
    if (targetGroup?.images?.[0]) {
      const targetKey = `${targetGroup.roomType}-${targetGroup.images[0].id}`;
      firedTriggers.current.delete(targetKey);
    }
    // Initialize progress for target section so bar shows 0/N immediately
    if (targetGroup) {
      const roomLabel = targetGroup.roomType || 'other';
      setQuestionProgress(prev => ({
        ...prev,
        [SECTION_LABELS[roomLabel] || roomLabel]: { current: prev[SECTION_LABELS[roomLabel] || roomLabel]?.current || 0, total: prev[SECTION_LABELS[roomLabel] || roomLabel]?.total || 0 },
      }));
    }

    // Load saved messages for the target section (empty if first visit)
    const saved = sectionMessages.current[idx] || [];
    setMessages(saved);

    // If returning to a section mid-conversation, restore its options too
    // (options are lost on nav — Silas will re-surface them on next message naturally)
    setChatOptions([]);
    setInspirationImages([]);
    setInspirationOffset(0);
    setCurrentGroupIdx(idx);
    setCurrentImageIdx(0);

    // If returning to a section that already has a conversation, add a silent re-orient note
    if (saved.length > 0) {
      const targetGroup = project?.groups?.[idx];
      const roomLabel = targetGroup?.roomType || 'room';
      const reorientMsg = {
        role: 'user',
        content: `[Client returned to the ${SECTION_LABELS[roomLabel] || roomLabel} section — pick up the conversation right where you left off. Do not re-introduce yourself or repeat questions already answered.]`,
        silent: true,
      };
      // We can't call sendChat here (state not updated yet) — attach to saved for next Silas call
      sectionMessages.current[idx] = [...saved, reorientMsg];
      setTimeout(() => setMessages(prev => {
        if (prev[prev.length - 1]?.content?.includes('returned to the')) return prev;
        return [...prev, reorientMsg];
      }), 50);
    }
  }, [currentGroupIdx, messages, project]);

  const handleLoadMoreInspiration = useCallback(async () => {
    if (!currentSearchQuery) return;
    const nextOffset = inspirationOffset + 4;
    try {
      const res = await fetch('/api/inspiration/more', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ searchQuery: currentSearchQuery, projectSlug, offset: nextOffset }),
      });
      const data = await res.json();
      if (data.images?.length) {
        // Append new images rather than replace so labeled option images stay visible
        setInspirationImages(prev => [...prev, ...data.images]);
        setInspirationOffset(nextOffset);
      }
    } catch {}
  }, [currentSearchQuery, inspirationOffset, projectSlug]);

  const handleInspirationSelect = useCallback((message, vaultItem) => {
    // Save to vault
    if (vaultItem) setSavedVibes(prev => [...prev, vaultItem]);
    // Still log silently to transcript for the brief
    setMessages(prev => [...prev, { role: 'user', content: message, silent: true }]);
  }, []);

  const handleComplete = useCallback(() => {
    if (submitting) return;
    setSubmitting(true);
    // Show complete screen immediately — fire submission in background
    setCompleted(true);
    fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        projectName: project?.projectName,
        projectSlug,
        clientName,
        feedback: [],
        sessionId,
        chatTranscript: messages,
        enhancedUrls: {},
        vibes: savedVibes,
      }),
    }).catch(err => console.error('Submit feedback error:', err));
  }, [project, clientName, sessionId, messages, projectSlug, submitting, savedVibes]);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p>Loading your design review...</p>
      </div>
    );
  }

  if (!loading && !error && phase === 'overview') {
    return <OverviewScreen memo={memo} sessionId={sessionId} onStart={handleStart} />;
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

  const isLastImage =
    currentGroupIdx === (project?.groups?.length || 0) - 1 &&
    currentImageIdx === (currentGroup?.images?.length || 0) - 1;

  const hasNext =
    currentImageIdx < (currentGroup?.images?.length || 0) - 1 ||
    currentGroupIdx < (project?.groups?.length || 0) - 1;

  return (
    <div className="review-page">
      <style>{appStyles}</style>
      <header className="review-header">
        <div className="header-inner">
          <img src="https://barnhaussteelbuilders.com/assets/images/logo-BbjiAVC6.png" alt="Barnhaus Steel Builders" className="header-logo" />
          <div className="header-subtitle">Design Review</div>
        </div>
      </header>

      <ProgressBar sections={sectionLabels} currentIndex={currentGroupIdx} onSelect={handleSectionChange} locked={false} maxUnlocked={maxUnlocked} />

      <div className="review-body">
        {/* Left sidebar — desktop only */}
        <InspirationVault items={savedVibes} />
      <ProgressSidebar
          sections={sectionLabels}
          currentSection={currentGroupIdx}
          maxUnlocked={maxUnlocked}
          questionProgress={questionProgress}
          onSelect={handleSectionChange}
        />

        <div className="review-content">
          <div className="image-panel">
            <button
              className="chat-toggle-btn desktop-only"
              onClick={() => setChatOpen(o => !o)}
              aria-label={chatOpen ? 'Hide chat' : 'Show chat'}
            >
              💬 {chatOpen ? 'Hide Silas' : 'Silas'}
            </button>

            <ImageViewer
              image={currentImage}
              images={currentGroup?.images || []}
              currentIndex={currentImageIdx}
              onSelectImage={setCurrentImageIdx}
              isFloorPlan={isFloorPlan}
              roomType={currentGroup?.roomType}
              onNext={handleNextImage}
              hasNext={hasNext}
              onComplete={handleComplete}
              isLastImage={isLastImage}
              inspirationImages={currentGroup?.roomType?.toLowerCase().includes('floor') ? [] : inspirationImages}
              onInspirationSelect={handleInspirationSelect}
              onLoadMoreInspiration={handleLoadMoreInspiration}
            />
          </div>

          <div className={`chat-panel desktop-only ${chatOpen ? 'chat-panel-open' : 'chat-panel-closed'}`}>
            <ChatWindow
              messages={messages}
              onSend={sendChat}
              isComplete={completed}
              options={chatOptions}
              isTyping={silasTyping}
            />
          </div>
        </div>
      </div>

      {isMobile && (
        <div className="mobile-chat-bar" onClick={openDrawer}>
          <div className="mobile-chat-bar-inner">
            <div className="silas-dot" />
            <span>💬 Chat with Silas</span>
            {unread && <span className="mobile-chat-unread">New message</span>}
            {!drawerAutoOpened.current && !unread && (
              <span className="mobile-chat-hint">
                Tap to start&nbsp;<span className="mobile-chat-hint-arrow">↑</span>
              </span>
            )}
          </div>
        </div>
      )}

      <ChatDrawer
        open={drawerOpen}
        onClose={closeDrawer}
        messages={messages}
        onSend={sendChat}
        isComplete={completed}
        options={chatOptions}
        isTyping={silasTyping}
      />
    </div>
  );
}

function LandingPage() {
  return (
    <div className="landing-page">
      <style>{appStyles}</style>
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
      <Routes>
        <Route path="/review/:projectSlug/:draft" element={<ReviewPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </>
  );
}
