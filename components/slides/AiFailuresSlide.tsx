'use client';

import { useState, useEffect } from 'react';
import { AiFailuresSlide as AiFailuresSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  slide: AiFailuresSlideType;
}

export function AiFailuresSlide({ slide }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);
  const maxSteps = slide.reasons.length + 1; // +1 for conclusion

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault();
        setVisibleCount((prev) => Math.min(maxSteps, prev + 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setVisibleCount((prev) => Math.max(0, prev - 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [maxSteps]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-60"
        color="rgba(251, 146, 60, 0.15)"
        blur={50}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        {/* Header */}
        <div className="pt-14 sm:pt-8 md:pt-12 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
              <AlertTriangle className="h-5 w-5 sm:h-7 sm:w-7 md:h-9 md:w-9 text-orange-400 flex-shrink-0" />
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white">
                {slide.headline}
              </h1>
            </div>
          </BlurFade>
        </div>

        {/* Content */}
        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 overflow-y-auto">
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full max-w-4xl">
            {/* Intro */}
            <BlurFade delay={0.2} duration={0.5}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 text-center">
                {slide.intro}
              </p>
            </BlurFade>

            {/* Percentage Bars */}
            <BlurFade delay={0.3} duration={0.5}>
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 mt-2 sm:mt-3 md:mt-4">
                {slide.reasons.map((reason, index) => {
                  const isVisible = index < visibleCount;
                  const isLarge = reason.percentage > 50;

                  return (
                    <div
                      key={index}
                      className={cn(
                        'transition-all duration-500',
                        isVisible
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 -translate-x-8'
                      )}
                    >
                      <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mb-1.5 sm:mb-2">
                        <span
                          className={cn(
                            'text-2xl sm:text-3xl md:text-4xl font-bold',
                            isLarge ? 'text-orange-400' : 'text-amber-500'
                          )}
                        >
                          {reason.percentage}%
                        </span>
                        <span className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200">
                          {reason.label}
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="h-3 sm:h-4 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={cn(
                            'h-full rounded-full transition-all duration-700',
                            isLarge
                              ? 'bg-gradient-to-r from-orange-500 to-amber-400'
                              : 'bg-gradient-to-r from-amber-600 to-yellow-500'
                          )}
                          style={{
                            width: isVisible ? `${reason.percentage}%` : '0%',
                            transitionDelay: isVisible ? '200ms' : '0ms',
                          }}
                        />
                      </div>
                      {reason.description && (
                        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-400 italic">
                          {reason.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </BlurFade>

            {/* Conclusion */}
            <div
              className={cn(
                'mt-4 sm:mt-6 md:mt-8 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border transition-all duration-500',
                visibleCount > slide.reasons.length
                  ? 'opacity-100 translate-y-0 border-amber-500/40 bg-gradient-to-br from-amber-950/30 to-slate-900/60'
                  : 'opacity-0 translate-y-4 pointer-events-none border-transparent'
              )}
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-amber-300 text-center">
                {slide.conclusion}
              </p>
            </div>
          </div>
        </div>

        {/* Footnote */}
        {slide.footnote && (
          <BlurFade delay={0.4} duration={0.5}>
            <div className="pb-4 sm:pb-6 md:pb-8 text-center px-4">
              <p className="text-xs sm:text-sm text-slate-500">
                * {slide.footnote}
              </p>
            </div>
          </BlurFade>
        )}
      </div>
    </div>
  );
}
