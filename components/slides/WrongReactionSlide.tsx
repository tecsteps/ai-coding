'use client';

import { useState, useEffect } from 'react';
import { WrongReactionSlide as WrongReactionSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { cn } from '@/lib/utils';

interface Props {
  slide: WrongReactionSlideType;
}

export function WrongReactionSlide({ slide }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);
  const isFading = slide.direction === 'fading';

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault();
        setVisibleCount((prev) => Math.min(slide.items.length, prev + 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setVisibleCount((prev) => Math.max(0, prev - 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slide.items.length]);
  const colorClass = isFading ? 'rgba(251, 191, 36, 0.12)' : 'rgba(34, 197, 94, 0.15)';

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-50"
        color={colorClass}
        blur={60}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        {/* Header */}
        <div className="pt-6 sm:pt-8 md:pt-12 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className={cn(
              "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight",
              isFading ? "text-amber-400" : "text-green-400"
            )}>
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Content */}
        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8">
          <div className="w-full max-w-2xl space-y-3 sm:space-y-4 md:space-y-5">
            {slide.items.map((item, index) => {
              const isVisible = index < visibleCount;
              const opacity = isFading
                ? 1 - (index * 0.25)
                : 0.4 + (index * 0.2);
              const scale = isFading
                ? 1 - (index * 0.05)
                : 0.9 + (index * 0.033);

              return (
                <div
                  key={index}
                  className={cn(
                    "p-3 sm:p-4 md:p-5 rounded-xl border text-center transition-all duration-300",
                    isFading
                      ? "border-amber-500/30 bg-amber-950/20"
                      : "border-green-500/30 bg-green-950/20",
                    !isVisible && "opacity-20"
                  )}
                  style={isVisible ? {
                    opacity: Math.max(0.3, opacity),
                    transform: `scale(${scale})`,
                  } : undefined}
                >
                  <p className={cn(
                    "text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium",
                    isFading ? "text-amber-200" : "text-green-200",
                    !isVisible && "text-slate-600"
                  )}>
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
