'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
  presentationName: string;
  currentIndex: number;
  totalSlides: number;
}

export function SlideNavigation({
  presentationName,
  currentIndex,
  totalSlides,
}: Props) {
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Backspace' && currentIndex > 0) {
        router.push(`/${presentationName}/${currentIndex - 1}`);
      } else if (event.key === 'Enter' && currentIndex < totalSlides - 1) {
        router.push(`/${presentationName}/${currentIndex + 1}`);
      } else if (event.key === 'Escape') {
        router.push(`/${presentationName}/0`);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router, presentationName, currentIndex, totalSlides]);

  return null;
}
