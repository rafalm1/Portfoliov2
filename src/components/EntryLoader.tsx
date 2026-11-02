import { useEffect, useState } from 'react';
import logo from '../svg/logo.svg';
import { LoaderBar, LoaderBrand, LoaderFrame, LoaderLogo, LoaderShell, LoaderStatus } from './EntryLoader.styles';

type EntryLoaderProps = {
  onComplete: () => void;
  label: string;
  status: string;
};

export default function EntryLoader({ onComplete, label, status }: EntryLoaderProps) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const revealTimer = window.setTimeout(() => setLeaving(true), 1225);
    const completeTimer = window.setTimeout(onComplete, 1375);

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <LoaderShell $leaving={leaving} aria-label={label} role="status">
      <LoaderFrame>
        <LoaderBrand>RM / PORTFOLIO</LoaderBrand>
        <LoaderLogo src={logo} alt="Rafał Małyszko" />
        <LoaderStatus>{status}</LoaderStatus>
        <LoaderBar />
      </LoaderFrame>
    </LoaderShell>
  );
}
