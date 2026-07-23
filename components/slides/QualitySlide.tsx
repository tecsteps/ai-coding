'use client';

import { useState, useEffect } from 'react';
import { QualitySlide as QualitySlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { CheckCircle, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  slide: QualitySlideType;
}

export function QualitySlide({ slide }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault();
        setVisibleCount((prev) => Math.min(slide.checks.length + 1, prev + 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setVisibleCount((prev) => Math.max(0, prev - 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slide.checks.length]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-60"
        color="rgba(34, 197, 94, 0.15)"
        blur={50}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        {/* Header */}
        <div className="pt-6 sm:pt-8 md:pt-12 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Content */}
        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 overflow-y-auto">
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full max-w-4xl">
            {/* Goal Card */}
            <BlurFade delay={0.2} duration={0.5}>
              <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-950/40 to-slate-900/60">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-green-500">
                  <Target className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-white" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-emerald-400 uppercase tracking-wider mb-0.5 sm:mb-1">Goal</p>
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
                    {slide.goal}
                  </h2>
                </div>
              </div>
            </BlurFade>

            {/* Checklist */}
            <BlurFade delay={0.3} duration={0.5}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                {slide.checks.map((check, index) => {
                  const isActive = index < visibleCount;

                  return (
                    <div
                      key={index}
                      className={cn(
                        'flex items-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border transition-all duration-300',
                        isActive
                          ? 'border-emerald-500/40 bg-slate-900/60'
                          : 'border-slate-700/30 bg-slate-900/30 opacity-30'
                      )}
                    >
                      <CheckCircle
                        className={cn(
                          'flex-shrink-0 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6',
                          isActive ? 'text-emerald-400' : 'text-slate-600'
                        )}
                      />
                      <span
                        className={cn(
                          'text-sm sm:text-base md:text-lg',
                          isActive ? 'text-slate-200' : 'text-slate-600'
                        )}
                      >
                        {check}
                      </span>
                    </div>
                  );
                })}
              </div>
            </BlurFade>

            {/* How? CTA */}
            <div
              className={cn(
                'mt-6 sm:mt-8 md:mt-12 flex justify-center transition-all duration-500',
                visibleCount > slide.checks.length
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 pointer-events-none'
              )}
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-emerald-400">
                How?
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
