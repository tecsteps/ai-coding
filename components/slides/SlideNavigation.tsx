'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
  currentIndex: number;
  totalSlides: number;
}

export function SlideNavigation({
  currentIndex,
  totalSlides,
}: Props) {
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowLeft' && currentIndex > 0) {
        router.push(`/presentation/${currentIndex - 1}`);
      } else if (event.key === 'ArrowRight' && currentIndex < totalSlides - 1) {
        router.push(`/presentation/${currentIndex + 1}`);
      } else if (event.key === 'Escape') {
        router.push(`/presentation/0`);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router, currentIndex, totalSlides]);

  return null;
}
