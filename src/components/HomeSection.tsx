import codeThinking from '../svg/code_thinking.svg';
import logo from '../svg/logo.svg';
import { Actions, Copy, Eyebrow, Greeting, Home, Illustration, NameLogo, PrimaryButton, Summary } from './HomeSection.styles';

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
        <NameLogo src={logo} alt={profileName} />
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
