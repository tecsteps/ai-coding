'use client';

import { useState, useEffect } from 'react';
import { JobsSlide as JobsSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface Props {
  slide: JobsSlideType;
}

export function JobsSlide({ slide }: Props) {
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault();
        setShowAfter(true);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setShowAfter(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-50"
        color="rgba(139, 92, 246, 0.12)"
        blur={60}
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
          <div className="w-full max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
              {/* Before Column */}
              <BlurFade delay={0.2} duration={0.5} className="flex-1 w-full">
                <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-slate-600/40 bg-slate-900/50">
                  <h2 className="text-base sm:text-lg md:text-xl font-semibold text-slate-400 mb-3 sm:mb-4 md:mb-6 uppercase tracking-wider">
                    {slide.before.title}
                  </h2>
                  <div className="space-y-2 sm:space-y-3">
                    {slide.before.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 md:p-4 rounded-lg bg-slate-800/50"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-500" />
                        <span className="text-sm sm:text-base md:text-lg text-slate-300">{item.task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </BlurFade>

              {/* Arrow */}
              <BlurFade delay={0.3} duration={0.5}>
                <div className="flex-shrink-0 rotate-90 md:rotate-0">
                  <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-violet-400" />
                </div>
              </BlurFade>

              {/* After Column */}
              <div
                className={cn(
                  'flex-1 w-full transition-all duration-500',
                  showAfter ? 'opacity-100' : 'opacity-30'
                )}
              >
                <BlurFade delay={0.4} duration={0.5}>
                  <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-violet-500/40 bg-gradient-to-br from-violet-950/30 to-slate-900/60">
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold text-violet-400 mb-3 sm:mb-4 md:mb-6 uppercase tracking-wider">
                      {slide.after.title}
                    </h2>
                    <div className="space-y-2 sm:space-y-3">
                      {slide.after.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between gap-2 sm:gap-3 p-2.5 sm:p-3 md:p-4 rounded-lg bg-slate-800/30"
                        >
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-violet-400" />
                            <span className="text-sm sm:text-base md:text-lg text-slate-200">{item.task}</span>
                          </div>
                          {item.percentage !== undefined && (
                            <span className="text-lg sm:text-xl md:text-2xl font-bold text-violet-400">
                              {item.percentage}%
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </BlurFade>
              </div>
            </div>
          </div>
        </div>

        {/* Footnote */}
        {slide.footnote && (
          <BlurFade delay={0.5} duration={0.5}>
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
