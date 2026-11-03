import { useEffect, useState } from 'react';
import { LoaderBar, LoaderBrand, LoaderFrame, LoaderPrompt, LoaderShell } from './EntryLoader.styles';

type EntryLoaderProps = {
  onComplete: () => void;
  label: string;
};

export default function EntryLoader({ onComplete, label }: EntryLoaderProps) {
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
        <LoaderPrompt aria-hidden="true">
          &gt;<span>_</span>
        </LoaderPrompt>
        <LoaderBar />
      </LoaderFrame>
    </LoaderShell>
  );
}
