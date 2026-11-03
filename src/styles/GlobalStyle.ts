import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap');

  :root {
    --ink: #f4f1ea;
    --muted: #b8b0a2;
    --line: #403b35;
    --accent: #c7a971;
    --accent-light: #dec79b;
    --panel: #201f1e;
    font-family: 'Space Grotesk', sans-serif;
    color: var(--ink);
    background: #111110;
    font-synthesis: none;
  }

  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    min-width: 320px;
    background: radial-gradient(circle at 80% 0%, #3b342b 0, #111110 35%), #111110;
  }
  button,
  input {
    font: inherit;
  }
  button {
    cursor: pointer;
  }
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .app-shell {
    min-height: 100vh;
    min-height: 100dvh;
    padding: 0 5vw;
    display: flex;
    flex-direction: column;
  }
  .topbar {
    height: 84px;
    border-bottom: 1px solid var(--line);
    display: flex;
    align-items: center;
    gap: 28px;
  }
  .page-section {
    flex: 1;
    padding: 4vh 0 12vh;
  }
  .page-wipe {
    position: fixed;
    z-index: 20;
    inset: 0 0 auto;
    height: 2px;
    display: none;
    pointer-events: none;
    background: var(--accent);
    box-shadow: 0 0 18px rgba(199, 169, 113, .45);
  }
  .cursor-glow {
    position: fixed;
    z-index: 1;
    top: -100px;
    left: -100px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(199, 169, 113, .18), rgba(199, 169, 113, 0) 70%);
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    will-change: transform;
  }
  @media (max-width: 850px), (pointer: coarse) {
    .cursor-glow {
      display: none;
    }
  }

  .brand {
    color: var(--ink);
    background: transparent;
    border: 0;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: .04em;
    padding: 0;
  }
  .nav-tabs {
    display: flex;
    gap: 6px;
    margin-left: auto;
  }
  .nav-tabs button,
  .language-toggle {
    color: var(--muted);
    background: transparent;
    border: 1px solid transparent;
    padding: 8px 12px;
    font-size: 16px;
  }
  .nav-tabs button:hover,
  .nav-tabs button.active {
    color: var(--ink);
    border-color: var(--line);
  }
  .language-toggle {
    color: var(--accent);
    border-color: var(--line);
    font-family: 'DM Mono', monospace;
  }
  .menu-toggle {
    display: none;
  }

  .eyebrow,
  .message-label,
  small,
  .status-line,
  footer {
    font-family: 'DM Mono', monospace;
    letter-spacing: .08em;
    text-transform: uppercase;
    font-size: 16px;
  }
  .content-section {
    max-width: 1180px;
    width: 100%;
    margin: auto;
  }
  .section-heading {
    max-width: 800px;
    margin-bottom: 70px;
  }
  .section-heading h2,
  .ai-intro h2 {
    font-size: clamp(32px, 4vw, 52px);
    line-height: 1.1;
    letter-spacing: -.05em;
    margin: 18px 0 0;
  }
  .about-copy {
    max-width: 760px;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  .large-copy {
    font-size: 18px;
    line-height: 1.7;
    margin: 0;
  }
  .about-copy .large-copy {
    color: var(--muted);
  }
  .about-copy .large-copy:first-child {
    color: var(--ink);
  }

  .experience-list {
    border-top: 1px solid var(--line);
  }
  .experience-item {
    display: block;
    width: 100%;
    border-bottom: 1px solid var(--line);
    padding: 24px 0;
  }
  .experience-toggle {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 48px;
    gap: 20px;
    align-items: center;
    border: 0;
    border-bottom: 1px solid var(--line);
    background: transparent;
    color: var(--ink);
    text-align: left;
    padding: 24px 0;
  }
  .experience-toggle > span:first-child {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .experience-toggle strong {
    color: var(--accent);
    font-size: 18px;
  }
  .experience-toggle em {
    color: var(--muted);
    font: normal 16px 'DM Mono', monospace;
  }
  .experience-technologies {
    color: var(--muted);
    font: 16px 'DM Mono', monospace;
    line-height: 1.55;
  }
  .experience-technologies strong {
    font-weight: 700;
    color: var(--accent-light);
  }
  .experience-chevron {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border: 1px solid var(--accent);
    border-radius: 50%;
    color: var(--accent);
    font-size: 27px;
    line-height: 1;
    transition: background-color .25s ease, color .25s ease;
  }
  .experience-toggle:hover .experience-chevron,
  .experience-toggle:focus-visible .experience-chevron {
    background: var(--accent);
    color: #111110;
  }
  .experience-toggle:focus-visible {
    outline: 1px solid var(--accent);
    outline-offset: 5px;
  }
  .experience-details {
    display: block;
    width: 100%;
    clear: both;
    padding: 24px 0 34px;
    border-bottom: 1px solid var(--line);
  }
  /* Education below the jobs: same row layout as an experience entry, just not expandable. */
  .education {
    margin-top: 56px;
  }
  .education-entry {
    display: grid;
    grid-template-columns: 1fr 1fr 48px;
    gap: 20px;
    align-items: center;
    padding: 24px 0;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }
  .education-entry > span:first-child {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .education-entry > span:first-child strong {
    color: var(--accent);
    font-size: 18px;
  }
  .education-entry em {
    color: var(--muted);
    font: normal 16px 'DM Mono', monospace;
  }
  .company-description {
    max-width: 900px;
    color: var(--ink);
    font-size: 18px;
    line-height: 1.6;
    margin: 0 0 24px;
  }
  .project-list {
    display: block;
    width: 100%;
    margin-top: 30px;
    border-left: 1px solid var(--accent);
    padding-left: 20px;
  }
  .project-list-label {
    color: var(--accent);
    font: 16px 'DM Mono', monospace;
    letter-spacing: .08em;
    margin: 0 0 14px;
  }
  .project-grid {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1px;
    background: var(--line);
  }
  .project-entry {
    min-height: 120px;
    padding: 18px;
    background: var(--panel);
  }
  .project-number {
    display: block;
    color: var(--accent);
    font: 16px 'DM Mono', monospace;
    margin-bottom: 16px;
  }
  .project-entry strong {
    display: block;
    font-size: 18px;
    margin-bottom: 8px;
  }
  .project-entry p {
    color: var(--muted);
    font-size: 18px;
    line-height: 1.45;
    margin: 0;
  }
  .project-entry .todo-note {
    color: var(--accent-light);
    font-family: 'DM Mono', monospace;
    font-size: 16px;
  }
  .experience-all-toggle {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    margin-top: 30px;
    border: 1px solid var(--accent);
    background: transparent;
    color: var(--accent);
    padding: 11px 15px;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: .06em;
  }
  .experience-all-toggle:hover,
  .experience-all-toggle:focus-visible {
    background: var(--accent);
    color: #111110;
    outline: none;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: var(--line);
    border: 1px solid var(--line);
  }
  .skill-card {
    min-height: 210px;
    background: var(--panel);
    padding: 24px;
    display: flex;
    flex-direction: column;
  }
  .skill-card h3 {
    margin-top: auto;
    margin-bottom: 8px;
    font-size: 18px;
  }
  .skill-card p {
    color: var(--muted);
    font-size: 18px;
    line-height: 1.4;
    margin: 0;
  }

  .skill-cloud-shell {
    position: relative;
    height: 620px;
    overflow: hidden;
  }
  .skill-cloud-canvas {
    position: absolute;
    inset: 0;
    cursor: grab;
    touch-action: none;
  }
  .skill-cloud-canvas:active {
    cursor: grabbing;
  }

  .ai-section {
    display: grid;
    grid-template-columns: .7fr 1.3fr;
    gap: 8vw;
    align-items: start;
  }
  .ai-intro > p:not(.eyebrow) {
    max-width: 390px;
    color: var(--muted);
    font-size: 18px;
    line-height: 1.6;
    margin-top: 28px;
  }
  .status-line {
    margin-top: 38px;
    color: var(--muted);
  }
  .status-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--muted);
    margin-right: 8px;
  }
  .status-dot.online {
    background: var(--accent);
  }
  .status-dot.offline {
    background: #e58b6e;
  }
  .status-separator {
    margin: 0 8px;
    color: var(--line);
  }
  .chat-panel {
    border: 1px solid var(--line);
    background: rgba(24, 27, 28, .8);
  }
  .chat-log {
    min-height: 360px;
    max-height: 52vh;
    overflow-y: auto;
    padding: 24px;
  }
  .message {
    max-width: 80%;
    margin-bottom: 26px;
  }
  .message.user {
    margin-left: auto;
    text-align: right;
  }
  .message-label {
    color: var(--accent);
  }
  .message p {
    font-size: 18px;
    line-height: 1.55;
    margin: 7px 0 0;
    white-space: pre-wrap;
  }
  .message.user p {
    color: var(--muted);
  }
  .generating {
    color: var(--muted);
    font: 16px 'DM Mono', monospace;
  }
  .generating span {
    color: var(--accent);
    animation: blink 1s infinite;
  }
  .suggestions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    padding: 0 24px 20px;
  }
  .suggestions button {
    color: var(--muted);
    background: transparent;
    border: 1px solid var(--line);
    padding: 9px 11px;
    text-align: left;
    font-size: 16px;
  }
  .suggestions button:hover {
    color: var(--ink);
    border-color: var(--accent);
  }
  .chat-form {
    display: flex;
    border-top: 1px solid var(--line);
  }
  .chat-form input {
    flex: 1;
    min-width: 0;
    border: 0;
    background: transparent;
    color: var(--ink);
    padding: 20px 24px;
    outline: 0;
    font-size: 18px;
  }
  .chat-form button {
    border: 0;
    background: var(--accent);
    padding: 0 22px;
    font-weight: 700;
    font-size: 18px;
  }
  .chat-form button:disabled {
    opacity: .5;
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: clamp(24px, 4vw, 48px);
  }
  .contact-details a {
    color: var(--ink);
    text-decoration: none;
  }
  .contact-details a:hover {
    color: var(--accent);
  }
  .contact-details p {
    color: var(--muted);
    font-size: 18px;
  }
  footer {
    border-top: 1px solid var(--line);
    padding: 20px 0;
    color: var(--muted);
    display: flex;
    justify-content: space-between;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @media (max-width: 850px) {
    /* Sticky bar with a burger; the menu opens as a full-screen list below it. */
    .topbar {
      position: sticky;
      top: 0;
      z-index: 50;
      height: 72px;
      gap: 10px;
      margin: 0 -5vw;
      padding: 0 5vw;
      background: #111110;
    }
    .brand {
      margin-right: auto;
    }
    .nav-tabs {
      display: none;
    }
    .nav-tabs.open {
      position: fixed;
      inset: 72px 0 0;
      z-index: 40;
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 24px 5vw;
      background: #111110;
    }
    .nav-tabs.open button {
      padding: 14px 12px;
      font-size: 24px;
      text-align: left;
    }
    .menu-toggle {
      display: grid;
      place-content: center;
      gap: 6px;
      width: 42px;
      height: 42px;
      padding: 0;
      background: transparent;
      border: 1px solid var(--line);
    }
    .menu-toggle span {
      display: block;
      width: 18px;
      height: 2px;
      background: var(--ink);
      transition: transform 0.2s ease;
    }
    .menu-toggle.open span:first-child {
      transform: translateY(4px) rotate(45deg);
    }
    .menu-toggle.open span:last-child {
      transform: translateY(-4px) rotate(-45deg);
    }
    .skills-section {
      display: flex;
      flex-direction: column;
    }
    .skills-section .skill-cloud-shell {
      flex: 1;
      height: auto;
      min-height: 260px;
    }
    .hero,
    .ai-section,
    .about-grid {
      grid-template-columns: 1fr;
      gap: 50px;
    }
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .experience-toggle {
      grid-template-columns: 1fr 48px;
      gap: 10px;
    }
    .experience-chevron {
      grid-column: 2;
      grid-row: 1 / span 2;
    }
    .education-entry {
      grid-template-columns: 1fr;
      gap: 10px;
    }
    .page-section {
      padding: 4vh 0;
    }
  }

  @media (max-width: 500px) {
    .app-shell {
      padding: 0 20px;
    }
    .topbar {
      margin: 0 -20px;
      padding: 0 20px;
    }
    .nav-tabs.open {
      padding: 24px 20px;
    }
    footer {
      gap: 12px;
      font-size: 12px;
    }
    .skills-grid {
      grid-template-columns: 1fr;
    }
    .message {
      max-width: 94%;
    }
    .chat-form input {
      padding: 16px 12px;
    }
    .chat-form button {
      padding: 0 14px;
    }
  }
`;

export default GlobalStyle;
