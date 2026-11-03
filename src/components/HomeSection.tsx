import codeThinking from '../svg/code_thinking.svg';
import logoMarkup from '../svg/logo.svg?raw';
import { Actions, Copy, Eyebrow, Greeting, Home, Illustration, NameLogo, PrimaryButton, Summary } from './HomeSection.styles';

const nameMarkup = logoMarkup.replace(/<style>[\s\S]*?<\/style>/, '').replace(/<path /g, '<path pathLength="1" ');

type HomeSectionProps = {
  greeting: string;
  eyebrow: string;
  summary: string;
  profileName: string;
  askLabel: string;
  illustrationAlt: string;
  onNavigate: (section: 'experience') => void;
};

export default function HomeSection({ greeting, eyebrow, summary, profileName, askLabel, illustrationAlt, onNavigate }: HomeSectionProps) {
  return (
    <Home>
      <Copy>
        <Greeting>{greeting}</Greeting>
        <NameLogo role="img" aria-label={profileName} dangerouslySetInnerHTML={{ __html: nameMarkup }} />
        <Eyebrow>{eyebrow}</Eyebrow>
        <Summary>{summary}</Summary>
        <Actions>
          <PrimaryButton onClick={() => onNavigate('experience')}>
            {askLabel} <span aria-hidden="true">↗</span>
          </PrimaryButton>
        </Actions>
      </Copy>
      <Illustration>
        <img src={codeThinking} alt={illustrationAlt} />
      </Illustration>
    </Home>
  );
}
