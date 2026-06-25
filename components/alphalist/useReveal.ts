'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function useReveal(maxStep: number) {
  const pathname = usePathname();
  const showAll = pathname.startsWith('/alphalist-cto-bootcamp-munich');
  const [step, setStep] = useState(showAll ? maxStep : 0);

  useEffect(() => {
    if (showAll) {
      setStep(maxStep);
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault();
        setStep((prev) => Math.min(maxStep, prev + 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setStep((prev) => Math.max(0, prev - 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [maxStep, showAll]);

  return step;
}
