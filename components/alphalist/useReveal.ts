'use client';

import { useEffect, useState } from 'react';

export function useReveal(maxStep: number) {
  const [step, setStep] = useState(0);

  useEffect(() => {
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
  }, [maxStep]);

  return step;
}
