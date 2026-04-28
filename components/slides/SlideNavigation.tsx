'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

interface Props {
  currentIndex: number;
  totalSlides: number;
  basePath?: string;
}

export function SlideNavigation({
  currentIndex,
  totalSlides,
  basePath = '/presentation',
}: Props) {
  const router = useRouter();
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowLeft' && currentIndex > 0) {
        router.push(`${basePath}/${currentIndex - 1}`);
      } else if (event.key === 'ArrowRight' && currentIndex < totalSlides - 1) {
        router.push(`${basePath}/${currentIndex + 1}`);
      }
    }

    function handleTouchStart(event: TouchEvent) {
      touchStartX.current = event.touches[0].clientX;
      touchStartY.current = event.touches[0].clientY;
    }

    function handleTouchEnd(event: TouchEvent) {
      if (touchStartX.current === null || touchStartY.current === null) return;

      const touchEndX = event.changedTouches[0].clientX;
      const touchEndY = event.changedTouches[0].clientY;
      const deltaX = touchEndX - touchStartX.current;
      const deltaY = touchEndY - touchStartY.current;

      // Only trigger if horizontal swipe is dominant and significant
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0 && currentIndex > 0) {
          // Swipe right - go to previous
          router.push(`${basePath}/${currentIndex - 1}`);
        } else if (deltaX < 0 && currentIndex < totalSlides - 1) {
          // Swipe left - go to next
          router.push(`${basePath}/${currentIndex + 1}`);
        }
      }

      touchStartX.current = null;
      touchStartY.current = null;
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [router, currentIndex, totalSlides, basePath]);

  return null;
}
