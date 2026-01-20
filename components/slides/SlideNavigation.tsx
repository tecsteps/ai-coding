'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  const goToPrev = () => {
    if (currentIndex > 0) {
      router.push(`${basePath}/${currentIndex - 1}`);
    }
  };

  const goToNext = () => {
    if (currentIndex < totalSlides - 1) {
      router.push(`${basePath}/${currentIndex + 1}`);
    }
  };

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

  return (
    <>
      {/* Mobile navigation buttons */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 sm:hidden">
        <button
          onClick={goToPrev}
          disabled={currentIndex === 0}
          className={`flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 transition-all ${
            currentIndex === 0
              ? 'opacity-30 cursor-not-allowed'
              : 'opacity-100 active:scale-95'
          }`}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        <div className="px-3 py-1.5 rounded-full bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 text-xs text-slate-400">
          {currentIndex + 1} / {totalSlides}
        </div>

        <button
          onClick={goToNext}
          disabled={currentIndex === totalSlides - 1}
          className={`flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 transition-all ${
            currentIndex === totalSlides - 1
              ? 'opacity-30 cursor-not-allowed'
              : 'opacity-100 active:scale-95'
          }`}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </>
  );
}
