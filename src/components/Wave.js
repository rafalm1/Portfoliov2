import { useMediaQuery } from 'react-responsive';
import wave from '../svg/waveBrown.svg';
import wave2 from '../svg/waveBrown2.svg';

export function Wave() {
  const isLaptop = useMediaQuery({ query: '(min-height: 800px)' });
  let waveType;
  if (isLaptop) {
    waveType = wave;
  } else {
    waveType = wave2;
  }

  return waveType;
}
