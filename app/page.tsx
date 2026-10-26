'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Scene = {
  id: string;
  kind: 'intro' | 'work' | 'about' | 'contact';
  label: string;
  title: string;
  titleAccent?: string;
  description: string;
  image: string;
  video?: string;
  year: string;
  category: string;
  duration: string;
  client?: string;
  tags: string[];
};

// START HERE: replace the sample image URLs with your own files in /public/portfolio.
// Example: image: '/portfolio/my-reel-cover.jpg'
// To play a real clip in the large frame, add: video: '/portfolio/my-reel.mp4'
// MP4 files should be muted-friendly, H.264 encoded, and optimized for the web.
const scenes: Scene[] = [
  {
    id: 'intro',
    kind: 'intro',
    label: 'Opening frame',
    title: 'I hhhhhhhhh images',
    titleAccent: 'feel like something.',
    description:
      'Independent video editor and visual storyteller. I shape raw footage into films people remember.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=2200&q=88',
    year: '2026',
    category: 'VIDEO EDITOR / STORYTELLER',
    duration: '00:00',
    tags: ['Editing', 'Color', 'Story'],
  },
  {
    id: 'campaign',
    kind: 'work',
    label: '01 / Campaign film',
    title: 'Make a little',
    titleAccent: 'noise.',
    description:
      'A punchy campaign built around close detail, confident pacing, and a visual identity that refuses to sit still.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2200&q=88',
    year: '2026',
    category: 'CAMPAIGN / BRAND FILM',
    duration: '00:18',
    client: 'INDEPENDENT PROJECT',
    tags: ['Commercial', 'Pacing', 'Grade'],
  },
  {
    id: 'music',
    kind: 'work',
    label: '02 / Music visual',
    title: 'Let the rhythm',
    titleAccent: 'lead.',
    description:
      'A performance-led visual cut to the pulse of the track, using movement, match cuts, and tactile color.',
    image:
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=2200&q=88',
    year: '2025',
    category: 'MUSIC / PERFORMANCE',
    duration: '00:36',
    client: 'MUSIC VIDEO',
    tags: ['Music', 'Rhythm', 'Motion'],
  },
  {
    id: 'documentary',
    kind: 'work',
    label: '03 / Documentary',
    title: 'Find the human',
    titleAccent: 'in the frame.',
    description:
      'Quiet, character-first storytelling that gives the small moments enough room to say something real.',
    image:
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2200&q=88',
    year: '2025',
    category: 'DOCUMENTARY / SHORT',
    duration: '00:54',
    client: 'SHORT FORM STORY',
    tags: ['Documentary', 'Story', 'Sound'],
  },
  {
    id: 'about',
    kind: 'about',
    label: '04 / About me',
    title: 'Every cut has',
    titleAccent: 'a point of view.',
    description:
      'I work across short-form, brand, and artist-led projects—bringing structure to the footage without sanding away its soul.',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2200&q=88',
    year: 'BASED ANYWHERE',
    category: 'ABOUT THE EDITOR',
    duration: '01:12',
    tags: ['Premiere Pro', 'DaVinci Resolve', 'After Effects'],
  },
  {
    id: 'contact',
    kind: 'contact',
    label: '05 / Contact',
    title: 'Have a story?',
    titleAccent: 'Let’s cut it.',
    description:
      'Have a film in mind, a rough cut that needs direction, or a project that deserves a little more feeling? Let’s talk.',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2200&q=88',
    year: 'OPEN FOR SELECT PROJECTS',
    category: 'START A CONVERSATION',
    duration: '01:30',
    tags: ['New projects', 'Freelance', 'Collaboration'],
  },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function formatIndex(value: number) {
  return String(value + 1).padStart(2, '0');
}

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const activeScene = scenes[activeIndex];
  const wheelLocked = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const goTo = useCallback((index: number) => {
    setActiveIndex(clamp(index, 0, scenes.length - 1));
  }, []);

  const step = useCallback((amount: number) => {
    setIsPlaying(false);
    setActiveIndex((current) => clamp(current + amount, 0, scenes.length - 1));
  }, []);

  const handleWheel = useCallback(
    (event: React.WheelEvent<HTMLElement>) => {
      // Let browser zoom gestures work, but convert normal wheel movement into timeline scrubbing.
      if (event.ctrlKey || (Math.abs(event.deltaY) < 10 && Math.abs(event.deltaX) < 10)) return;
      event.preventDefault();
      if (wheelLocked.current) return;

      const delta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      wheelLocked.current = true;
      setIsPlaying(false);
      setActiveIndex((current) => clamp(current + (delta > 0 ? 1 : -1), 0, scenes.length - 1));
      window.setTimeout(() => {
        wheelLocked.current = false;
      }, 520);
    },
    [],
  );

  useEffect(() => {
    if (isPlaying) {
      const timer = window.setInterval(() => {
        setActiveIndex((current) => (current >= scenes.length - 1 ? 0 : current + 1));
      }, 4200);
      return () => window.clearInterval(timer);
    }
  }, [isPlaying]);

  useEffect(() => {
    thumbnailRefs.current[activeIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, [activeIndex]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.target instanceof HTMLElement && ['BUTTON', 'A', 'INPUT', 'TEXTAREA'].includes(event.target.tagName)) {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight' && event.key !== ' ') return;
    }
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === ' ') {
      event.preventDefault();
      step(1);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      step(-1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      setIsPlaying(false);
      goTo(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      setIsPlaying(false);
      goTo(scenes.length - 1);
    }
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = event.changedTouches[0].clientX - touchStartX.current;
    const dy = event.changedTouches[0].clientY - touchStartY.current;
    if (Math.max(Math.abs(dx), Math.abs(dy)) > 45) {
      setIsPlaying(false);
      if (Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
      else step(dy < 0 ? 1 : -1);
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <main className="site-shell">
      <header className="page-header">
        <button className="wordmark" onClick={() => { setIsPlaying(false); goTo(0); }} aria-label="Go to opening frame">
          <span className="wordmark-symbol">F<span>.</span></span>
          <span className="wordmark-name">FRAME<span>SHIFT</span></span>
        </button>
        <div className="header-center"><span className="status-dot" /> INDEPENDENT VIDEO EDITOR <span className="header-slash">/</span> VISUAL STORYTELLER</div>
        <button className="header-contact" onClick={() => { setIsPlaying(false); goTo(scenes.length - 1); }}>
          LET’S TALK <span aria-hidden="true">↗</span>
        </button>
      </header>

      <section
        className="editor-frame"
        aria-label="Interactive video editing timeline portfolio"
        tabIndex={0}
        onWheel={handleWheel}
        onKeyDown={handleKeyDown}
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX;
          touchStartY.current = event.touches[0].clientY;
        }}
        onTouchEnd={handleTouchEnd}
      >
        <div className="viewer">
          <div className="viewer-media" key={activeScene.id}>
            {activeScene.video ? (
              <video className="scene-media" autoPlay muted loop playsInline poster={activeScene.image}>
                <source src={activeScene.video} type="video/mp4" />
              </video>
            ) : (
              // A standard img makes it simple to use either local project stills or remote portfolio images.
              // eslint-disable-next-line @next/next/no-img-element
              <img className="scene-media" src={activeScene.image} alt={`${activeScene.label} visual`} />
            )}
          </div>
          <div className="viewer-shade" />

          <div className="viewer-topline">
            <div className="project-pill"><span className="pill-rec" /> <span>{activeScene.category}</span></div>
            <div className="topline-right"><span>PORTFOLIO REEL</span><span className="topline-divider" /><span>MMXXVI</span></div>
          </div>

          <aside className="side-rail" aria-label="Timeline scene navigation">
            <div className="rail-caption">SCENES</div>
            {scenes.map((scene, index) => (
              <button
                className={`rail-step ${index === activeIndex ? 'is-active' : ''}`}
                key={scene.id}
                onClick={() => { setIsPlaying(false); goTo(index); }}
                aria-label={`Go to ${scene.label}`}
                aria-pressed={index === activeIndex}
              >
                <span>{formatIndex(index)}</span>
                <i />
              </button>
            ))}
          </aside>

          <div className={`scene-copy ${activeScene.kind === 'contact' ? 'scene-copy-contact' : ''}`} key={`${activeScene.id}-copy`}>
            <div className="scene-eyebrow"><span>{formatIndex(activeIndex)}</span><span className="eyebrow-line" />{activeScene.label.toUpperCase()}</div>
            <h1>{activeScene.title}<br /><em>{activeScene.titleAccent}</em></h1>
            {showInfo && <p className="scene-description">{activeScene.description}</p>}
            {showInfo && (activeScene.kind === 'contact' ? (
              <div className="contact-actions">
                <a className="primary-cta" href="mailto:hello@yourname.studio">Start a project <span aria-hidden="true">↗</span></a>
                <span className="contact-note">Replace this email with yours</span>
              </div>
            ) : (
              <div className="scene-tags">
                {activeScene.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            ))}
          </div>

          <div className="viewer-meta">
            <div className="meta-counter"><span>{formatIndex(activeIndex)}</span><b>/</b>{String(scenes.length).padStart(2, '0')}</div>
            <div className="meta-rule" />
            <div className="meta-year">{activeScene.year}</div>
            {activeScene.client && <div className="meta-client">{activeScene.client}</div>}
          </div>

          <div className="viewer-bottom-note"><span className="bottom-note-dot" /> SCROLL TO SCRUB <span className="note-sep">·</span> CLICK TO JUMP</div>
          <button className="info-toggle" onClick={() => setShowInfo((value) => !value)} aria-expanded={showInfo} aria-label={showInfo ? 'Hide scene tags' : 'Show scene tags'}>
            {showInfo ? 'i' : '+'}
          </button>
          {!showInfo && <div className="info-toast">Scene details are tucked away</div>}
          <div className="frame-number">FS—{formatIndex(activeIndex)}</div>
        </div>

        <div className="timeline-panel">
          <div className="timeline-heading">
            <div className="timeline-title"><span className="timeline-icon">▥</span><span>SEQUENCE</span><span className="timeline-count">{String(scenes.length).padStart(2, '0')} FRAMES</span></div>
            <div className="timeline-instructions"><span className="keycap">←</span><span className="keycap">→</span><span>TO NAVIGATE</span></div>
          </div>

          <div className="timeline-track-wrap">
            <div className="track-spine"><span className="track-progress" style={{ width: `${(activeIndex / Math.max(scenes.length - 1, 1)) * 100}%` }} /></div>
            <div className="timeline-track" aria-label="Click a timeline frame to navigate">
              {scenes.map((scene, index) => (
                <button
                  className={`timeline-card ${index === activeIndex ? 'is-active' : ''}`}
                  key={scene.id}
                  ref={(element) => { thumbnailRefs.current[index] = element; }}
                  onClick={() => { setIsPlaying(false); goTo(index); }}
                  aria-pressed={index === activeIndex}
                  aria-label={`Jump to ${scene.label}`}
                >
                  <span className="clip-thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={scene.image} alt="" loading={index === activeIndex ? 'eager' : 'lazy'} />
                    <span className="clip-index">{formatIndex(index)}</span>
                    {index === activeIndex && <span className="clip-playing"><i /><i /><i /></span>}
                  </span>
                  <span className="clip-meta"><span className="clip-name">{scene.label.replace(/^\d+\s\/\s/, '')}</span><span className="clip-time">{scene.duration}</span></span>
                </button>
              ))}
            </div>
          </div>

          <div className="player-controls">
            <div className="transport-group">
              <button className="transport-button" onClick={() => step(-1)} aria-label="Previous scene" disabled={activeIndex === 0}>‹</button>
              <button className={`play-button ${isPlaying ? 'is-playing' : ''}`} onClick={() => setIsPlaying((value) => !value)} aria-label={isPlaying ? 'Pause autoplay' : 'Play autoplay'}>
                {isPlaying ? <span className="pause-glyph">Ⅱ</span> : <span className="play-glyph">▶</span>}
              </button>
              <button className="transport-button" onClick={() => step(1)} aria-label="Next scene" disabled={activeIndex === scenes.length - 1}>›</button>
            </div>

            <div className="playback-readout"><span>{activeScene.duration}</span><span className="readout-divider">/</span><span>{scenes[scenes.length - 1].duration}</span></div>

            <div className="playback-progress" aria-label={`Frame ${activeIndex + 1} of ${scenes.length}`}>
              <span style={{ width: `${((activeIndex + 1) / scenes.length) * 100}%` }} />
            </div>

            <div className="control-status"><span className={`control-status-dot ${isPlaying ? 'is-playing' : ''}`} />{isPlaying ? 'PLAYING' : 'READY'}</div>
            <button className="fullscreen-mark" onClick={() => setShowInfo((value) => !value)} aria-label="Toggle scene details">⌗</button>
          </div>
        </div>
      </section>

      <footer className="page-footer">
        <span>© 2026 FRAME SHIFT STUDIO</span>
        <span className="footer-center">A PORTFOLIO THAT PLAYS FORWARD.</span>
        <span>MADE WITH INTENTION <i>✳</i></span>
      </footer>
    </main>
  );
}
