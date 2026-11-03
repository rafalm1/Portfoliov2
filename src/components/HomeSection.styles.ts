import styled, { css, keyframes } from 'styled-components';

export const illustrationShadow = keyframes`
  0%, 100% { filter: drop-shadow(0 18px 22px rgba(0, 0, 0, .25)); }
  50% { filter: drop-shadow(0 22px 30px rgba(199, 169, 113, .16)); }
`;

export const Home = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.75fr);
  align-items: center;
  gap: 8vw;
  padding: clamp(16px, 3vh, 48px) 0;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 50px;
    padding-top: 4vh;
  }
`;

export const Copy = styled.div`
  min-width: 0;
`;

export const Eyebrow = styled.p`
  color: var(--accent);
  margin: 0 0 24px;
  font:
    16px 'DM Mono',
    monospace;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Greeting = styled.h2`
  margin: 0 0 12px;
  color: var(--muted);
  font-size: clamp(24px, 3vw, 40px);
  font-weight: 400;
  letter-spacing: 0.02em;
`;

const drawName = keyframes`
  to { stroke-dashoffset: 0; }
`;

export const NameLogo = styled.div<{ $animate: boolean }>`
  display: block;
  width: min(100%, 620px);
  margin-bottom: 12px;

  svg {
    display: block;
    width: 100%;
    height: auto;
  }

  path {
    stroke: var(--accent);
    stroke-dasharray: 1;
    stroke-dashoffset: ${({ $animate }) => ($animate ? 1 : 0)};
    animation: ${({ $animate }) =>
      $animate
        ? css`
            ${drawName} 2.5s ease forwards 1.5s
          `
        : 'none'};
  }

  @media (prefers-reduced-motion: reduce) {
    path {
      stroke-dashoffset: 0;
      animation: none;
    }
  }
`;

export const Summary = styled.p`
  max-width: 575px;
  margin: 0;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.6;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  margin-top: clamp(20px, 4vh, 36px);
`;

export const PrimaryButton = styled.button`
  border: 0;
  background: var(--accent);
  color: #111316;
  padding: 15px 19px;
  font-weight: 700;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;

  span {
    display: inline-block;
    margin-left: 22px;
    transition: transform 0.2s ease;
  }

  &:hover,
  &:focus-visible {
    background: var(--accent-light);
    box-shadow: 0 8px 24px rgba(199, 169, 113, 0.22);
    transform: translateY(-3px);
    outline: none;
  }

  &:hover span,
  &:focus-visible span {
    transform: translate(3px, -3px);
  }
`;

export const Illustration = styled.div`
  position: relative;
  max-width: 560px;
  padding: 18px;
  border-bottom: 1px solid var(--accent);

  img {
    display: block;
    width: 100%;
    height: auto;
    animation: ${illustrationShadow} 6s ease-in-out infinite;
  }
`;
