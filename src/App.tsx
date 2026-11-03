import { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import en from './data/en.json';
import pl from './data/pl.json';
import HomeSection from './components/HomeSection';
import EntryLoader from './components/EntryLoader';
import SkillSphere from './components/SkillSphere';

type Section = 'home' | 'about' | 'experience' | 'skills' | 'ai' | 'contact';
type ChatMessage = { role: 'user' | 'assistant'; content: string; source?: string };

type ChatResponse = { answer: string; source: string; intent?: string };

type Experience = {
  company: string;
  role: string;
  dates: string;
  description: string;
  technologies: string;
  projects: Array<{ name: string; description: string }>;
};
type ExperienceByLocale = Record<'en' | 'pl', Experience[]>;

const sectionPaths: Record<Section, string> = {
  home: '/',
  about: '/about',
  experience: '/experience',
  skills: '/skills',
  ai: '/ai',
  contact: '/contact',
};

// The AI assistant is hidden until it has a production backend; set VITE_AI_ASSISTANT=true to bring it back.
const isAiAssistantEnabled = import.meta.env.VITE_AI_ASSISTANT === 'true';

function sectionFromPath(pathname: string): Section {
  const match = (Object.entries(sectionPaths) as Array<[Section, string]>).find(([, path]) => path === pathname);
  const section = match?.[0] ?? 'home';
  return section === 'ai' && !isAiAssistantEnabled ? 'home' : section;
}

function languageFromUrl(): 'EN' | 'PL' {
  return new URLSearchParams(window.location.search).get('lang')?.toLowerCase() === 'en' ? 'EN' : 'PL';
}

function initialMessageFor(language: 'EN' | 'PL'): ChatMessage {
  return { role: 'assistant', content: language === 'PL' ? pl.ai.welcome : en.ai.welcome, source: 'profile data' };
}

function staticAnswerFor(question: string, language: 'EN' | 'PL') {
  const normalizedQuestion = question
    .toLocaleLowerCase('pl-PL')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (normalizedQuestion !== 'z jakich frameworkow frontendowych korzystalem') return null;

  return language === 'PL'
    ? 'Korzystałem głównie z Vue, Nuxt, React, Next.js, Angular oraz React Native, zależnie od potrzeb projektu. Pracowałem zarówno przy aplikacjach B2B, platformach publicznych, jak i produktach mobilnych, skupiając się na architekturze komponentów, zarządzaniu stanem, wydajności i modernizacji frontendów.'
    : "I've mainly used Vue, Nuxt, React, Next.js, Angular, and React Native, depending on project needs. I've worked on B2B applications, public platforms, and mobile products, focusing on component architecture, state management, performance, and frontend modernization.";
}

function renderTechnologies(technologies: string) {
  return technologies
    .split(/(\bReact Native\b|\bReact Query\b|\bVue\b|\bReact\b|\bNext\b|\bNuxt\b|\bTypeScript\b|\bAngular\b(?!\s+Material)|\bRxJS\b)/gi)
    .map((technology, index) => {
      const isHighlighted = /^(React Native|Vue|React|Next|Nuxt|TypeScript|Angular|RxJS)$/i.test(technology);
      return isHighlighted ? <strong key={`${technology}-${index}`}>{technology}</strong> : technology;
    });
}

const prioritySkills = new Set(['React', 'Vue', 'Nuxt', 'Next', 'Angular', 'RxJS']);

function collectSkills(experienceData: Array<{ technologies: string }>) {
  const skills = experienceData.flatMap((item) => item.technologies.split(',').map((skill) => skill.trim()));
  return [...new Set(skills)].filter(Boolean);
}

function App() {
  const [section, setSection] = useState<Section>(() => sectionFromPath(window.location.pathname));
  const [language, setLanguage] = useState<'EN' | 'PL'>(() => languageFromUrl());
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [apiStatus, setApiStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const [experience, setExperience] = useState<ExperienceByLocale | null>(null);
  const [experienceFailed, setExperienceFailed] = useState(false);
  const [openExperience, setOpenExperience] = useState<Set<string>>(() => new Set());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainRef = useRef<HTMLElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  const locale = language === 'PL' ? 'pl' : 'en';
  const copy = locale === 'pl' ? pl : en;
  const localizedProfile = copy.profile;
  const localizedExperience = experience?.[locale] ?? [];
  const skillCloud = collectSkills(localizedExperience);
  const contentPlaceholder = experienceFailed ? copy.experience.error : copy.experience.loading;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const [messages, setMessages] = useState<ChatMessage[]>(() => [initialMessageFor(language)]);

  useEffect(() => {
    if (!isAiAssistantEnabled) return;
    fetch('/api/health')
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then(() => setApiStatus('online'))
      .catch(() => setApiStatus('offline'));
  }, []);

  useEffect(() => {
    fetch('/api/experience')
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((data: ExperienceByLocale) => setExperience(data))
      .catch(() => setExperienceFailed(true));
  }, []);

  useEffect(() => {
    const handlePopState = () => setSection(sectionFromPath(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const glow = cursorGlowRef.current;
    if (!glow) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(pointer: coarse)').matches) return;

    const moveX = gsap.quickTo(glow, 'x', { duration: 0.6, ease: 'power3' });
    const moveY = gsap.quickTo(glow, 'y', { duration: 0.6, ease: 'power3' });

    const handlePointerMove = (event: globalThis.PointerEvent) => {
      moveX(event.clientX);
      moveY(event.clientY);
      gsap.to(glow, { autoAlpha: 1, duration: 0.4, overwrite: 'auto' });
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  // Mobile menu: lock page scroll while it covers the screen, close it with Escape.
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const navigate = (nextSection: Section) => {
    setIsMenuOpen(false);

    const nextPath = sectionPaths[nextSection];

    if (window.location.pathname !== nextPath) {
      const url = new URL(window.location.href);
      url.pathname = nextPath;
      window.history.pushState({}, '', `${url.pathname}${url.search}`);
    }

    setSection(nextSection);
  };

  const toggleLanguage = () => {
    const nextLanguage = language === 'EN' ? 'PL' : 'EN';
    const url = new URL(window.location.href);
    url.searchParams.set('lang', nextLanguage.toLowerCase());
    window.history.replaceState({}, '', `${url.pathname}?${url.searchParams.toString()}`);

    setLanguage(nextLanguage);
    setMessages((current) => (current.length === 1 ? [initialMessageFor(nextLanguage)] : current));
  };

  const finishInitialLoading = useCallback(() => setIsInitialLoading(false), []);

  useEffect(() => {
    if (!mainRef.current || !wipeRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const main = mainRef.current;
    const wipe = wipeRef.current;
    const transition = gsap.timeline();

    transition
      .set(wipe, {
        display: 'block',
        top: 0,
        height: '2px',
        scaleX: 0,
        transformOrigin: 'left center',
        autoAlpha: 1,
      })
      .set(main, { autoAlpha: 0, y: 10 })
      .to(wipe, { scaleX: 1, duration: 0.22, ease: 'power2.out' })
      .to(main, { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power2.out' }, '-=0.08')
      .to(wipe, { autoAlpha: 0, scaleX: 0, transformOrigin: 'right center', duration: 0.2, ease: 'power2.in' }, '-=0.12')
      .set(wipe, { clearProps: 'all' });

    return () => {
      transition.kill();
    };
  }, [section]);

  const askQuestion = async (question: string) => {
    const trimmed = question.trim();
    if (!trimmed || isGenerating) return;

    setInput('');
    setMessages((current) => [...current, { role: 'user', content: trimmed }]);
    setIsGenerating(true);

    try {
      const staticAnswer = staticAnswerFor(trimmed, language);
      if (staticAnswer) {
        setMessages((current) => [...current, { role: 'assistant', content: staticAnswer, source: 'knowledge-base' }]);
        setIsGenerating(false);
        return;
      }

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, language: language.toLowerCase() }),
      });

      if (!response.ok) {
        throw new Error(copy.ai.error);
      }

      const contentType = response.headers.get('content-type') ?? '';

      if (contentType.includes('text/plain') && response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let answer = '';

        setMessages((current) => [...current, { role: 'assistant', content: '', source: 'ollama' }]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          answer += decoder.decode(value, { stream: true });
          setMessages((current) => {
            const next = [...current];
            next[next.length - 1] = { role: 'assistant', content: answer, source: 'ollama' };
            return next;
          });
        }
      } else {
        const result = (await response.json()) as ChatResponse;
        setMessages((current) => [...current, { role: 'assistant', content: result.answer, source: result.source }]);
      }
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content: copy.ai.error,
          source: 'system',
        },
      ]);
    } finally {
      setIsGenerating(false);
    }
  };

  const allNavItems: Array<{ id: Section; label: string }> = [
    { id: 'home', label: copy.nav.home },
    { id: 'experience', label: copy.nav.experience },
    { id: 'skills', label: copy.nav.skills },
    { id: 'ai', label: copy.nav.ai },
    { id: 'about', label: copy.nav.about },
    { id: 'contact', label: copy.nav.contact },
  ];
  const navItems = allNavItems.filter((item) => item.id !== 'ai' || isAiAssistantEnabled);

  // Section numbers ("01 / ...") follow the visible menu order, so hiding a section doesn't leave a gap.
  const numberedSections = navItems.filter((item) => item.id !== 'home').map((item) => item.id);
  const eyebrow = (id: Section, label: string) => `${String(numberedSections.indexOf(id) + 1).padStart(2, '0')} / ${label}`;

  return (
    <div className="app-shell">
      {isInitialLoading && <EntryLoader onComplete={finishInitialLoading} label={copy.loader.label} />}

      <div className="cursor-glow" ref={cursorGlowRef} aria-hidden="true" />

      <header className="topbar">
        <button className="brand" onClick={() => navigate('home')} aria-label={copy.nav.homeLabel}>
          RM
        </button>

        <nav id="main-nav" className={`nav-tabs ${isMenuOpen ? 'open' : ''}`} aria-label={copy.nav.label}>
          {navItems.map((item) => (
            <button key={item.id} className={section === item.id ? 'active' : ''} onClick={() => navigate(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>

        <button className="language-toggle" onClick={toggleLanguage}>
          {language}
        </button>

        <button
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          aria-expanded={isMenuOpen}
          aria-controls="main-nav"
          aria-label={isMenuOpen ? copy.nav.menuClose : copy.nav.menuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </header>

      <main ref={mainRef}>
        {section === 'home' && (
          <HomeSection
            greeting={copy.home.greeting}
            eyebrow={copy.home.role}
            summary={copy.home.summary}
            profileName={localizedProfile.name}
            askLabel={copy.home.ask}
            illustrationAlt={copy.home.illustrationAlt}
            onNavigate={navigate}
          />
        )}

        {section === 'about' && (
          <section className="page-section content-section">
            <div className="section-heading">
              <p className="eyebrow">{eyebrow('about', copy.about.eyebrow)}</p>
              <h2>{copy.about.title}</h2>
            </div>

            <div className="about-copy">
              {copy.about.paragraphs.map((paragraph, index) => (
                <p key={index} className="large-copy">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        )}

        {section === 'experience' && (
          <section className="page-section content-section">
            <div className="section-heading">
              <p className="eyebrow">{eyebrow('experience', copy.experience.eyebrow)}</p>
              <h2>{copy.experience.title}</h2>
              {experience && (
                <button
                  className="experience-all-toggle"
                  onClick={() =>
                    setOpenExperience((current) =>
                      current.size === localizedExperience.length ? new Set() : new Set(localizedExperience.map((item) => item.company)),
                    )
                  }
                >
                  {openExperience.size === localizedExperience.length ? copy.experience.collapse : copy.experience.expand}{' '}
                  <span>{openExperience.size === localizedExperience.length ? '−' : '+'}</span>
                </button>
              )}
            </div>

            {!experience && <p className="large-copy">{contentPlaceholder}</p>}

            <div className="experience-list">
              {localizedExperience.map((item) => {
                const isOpen = openExperience.has(item.company);

                return (
                  <article className={`experience-item ${isOpen ? 'open' : ''}`} key={item.company}>
                    <button
                      className="experience-toggle"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenExperience((current) => {
                          const next = new Set(current);
                          if (next.has(item.company)) next.delete(item.company);
                          else next.add(item.company);
                          return next;
                        })
                      }
                    >
                      <span>
                        <strong>{item.company}</strong>
                        <em>{item.dates}</em>
                      </span>
                      <span className="experience-technologies">{renderTechnologies(item.technologies)}</span>
                      <span className="experience-chevron" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="experience-details">
                        <p className="company-description">{item.description}</p>

                        <div className="project-list">
                          <p className="project-list-label">
                            {copy.experience.projects} / {item.projects.length}
                          </p>

                          <div className="project-grid">
                            {item.projects.map((project, index) => (
                              <div className="project-entry" key={project.name}>
                                <span className="project-number">0{index + 1}</span>
                                <strong>{project.name}</strong>
                                <p className={project.description === 'TODO' ? 'todo-note' : ''}>{project.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {section === 'skills' && (
          <section className="page-section content-section">
            <div className="section-heading">
              <p className="eyebrow">{eyebrow('skills', copy.skills.eyebrow)}</p>
              <h2>{copy.skills.title}</h2>
            </div>

            {experience ? (
              <div className="skill-cloud-shell">
                <SkillSphere skills={skillCloud} prioritySkills={prioritySkills} />
              </div>
            ) : (
              <p className="large-copy">{contentPlaceholder}</p>
            )}
          </section>
        )}

        {section === 'ai' && isAiAssistantEnabled && (
          <section className="page-section ai-section">
            <div className="ai-intro">
              <p className="eyebrow">{eyebrow('ai', copy.ai.eyebrow)}</p>
              <h2>{copy.ai.title}</h2>
              <p>{copy.ai.description}</p>

              <div className="status-line">
                <span className={`status-dot ${apiStatus}`} /> {copy.ai.api} {copy.status[apiStatus]} {copy.ai.local}
              </div>
            </div>

            <div className="chat-panel">
              <div className="chat-log">
                {messages.map((message, index) => (
                  <div className={`message ${message.role}`} key={`${message.role}-${index}`}>
                    {message.role === 'user' && <span className="message-label">{copy.ai.you}</span>}
                    <p>{message.content || copy.ai.generating}</p>
                  </div>
                ))}
                {isGenerating && <div className="generating">{copy.ai.generating}</div>}
              </div>

              <div className="suggestions">
                {copy.ai.suggestions.map((question) => (
                  <button key={question} onClick={() => askQuestion(question)}>
                    {question}
                  </button>
                ))}
              </div>

              <form
                className="chat-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  void askQuestion(input);
                }}
              >
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder={copy.ai.placeholder}
                  maxLength={800}
                  disabled={isGenerating}
                />
                <button type="submit" disabled={isGenerating || !input.trim()}>
                  {copy.ai.send} ↗
                </button>
              </form>
            </div>
          </section>
        )}

        {section === 'contact' && (
          <section className="page-section content-section contact-section">
            <div className="section-heading">
              <p className="eyebrow">{eyebrow('contact', copy.contact.eyebrow)}</p>
              <h2>{copy.contact.title}</h2>
            </div>

            <div className="contact-details">
              <a href={`mailto:${localizedProfile.email}`}>{localizedProfile.email}</a>
            </div>
          </section>
        )}
      </main>

      <div className="page-wipe" ref={wipeRef} aria-hidden="true" />

      <footer>
        <span>RM / SENIOR FRONTEND DEVELOPER</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

export default App;
