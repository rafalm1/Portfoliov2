import styled, { keyframes } from 'styled-components';

export const illustrationShadow = keyframes`
  0%, 100% { filter: drop-shadow(0 18px 22px rgba(0, 0, 0, .25)); }
  50% { filter: drop-shadow(0 22px 30px rgba(199, 169, 113, .16)); }
`;

export const Home = styled.section`
  min-height: calc(100vh - 140px);
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr);
  align-items: center;
  gap: 8vw;
  padding: 4vh 0 12vh;

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

export const NameLogo = styled.img`
  display: block;
  width: min(100%, 620px);
  height: auto;
  margin-bottom: 12px;
`;

export const Summary = styled.p`
  max-width: 570px;
  margin: 0;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.6;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  margin-top: 36px;
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
