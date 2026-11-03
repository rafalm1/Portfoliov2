import styled, { keyframes } from 'styled-components';

const reveal = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

const blink = keyframes`
  50% { opacity: 0; }
`;

const fadeOut = keyframes`
  from { opacity: 1; visibility: visible; }
  to { opacity: 0; visibility: hidden; }
`;

export const LoaderShell = styled.div<{ $leaving: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 80% 0%, #3b342b 0, #111110 35%), #111110;
  animation: ${({ $leaving }) => ($leaving ? fadeOut : 'none')} 0.3s ease forwards;
  pointer-events: ${({ $leaving }) => ($leaving ? 'none' : 'auto')};
`;

export const LoaderFrame = styled.div`
  width: min(72vw, 620px);
  text-align: center;
`;

export const LoaderBrand = styled.p`
  margin: 0 0 24px;
  color: var(--accent);
  font:
    16px 'DM Mono',
    monospace;
  letter-spacing: 0.12em;
`;

// Terminal prompt with a blinking cursor.
export const LoaderPrompt = styled.p`
  margin: 0 0 14px;
  color: var(--muted);
  font:
    24px 'DM Mono',
    monospace;

  span {
    color: var(--accent);
    animation: ${blink} 0.8s steps(1) infinite;
  }
`;

export const LoaderBar = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  overflow: hidden;
  background: var(--line);

  &::after {
    position: absolute;
    inset: 0;
    content: '';
    background: var(--accent);
    transform-origin: left;
    animation: ${reveal} 2.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
    box-shadow: 0 0 16px rgba(199, 169, 113, 0.55);
  }
`;
