'use client';

import { useState, useEffect } from 'react';
import { PromptingGuidelinesSlide as PromptingGuidelinesSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { cn } from '@/lib/utils';

interface Props {
  slide: PromptingGuidelinesSlideType;
}

export function PromptingGuidelinesSlide({ slide }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault();
        setVisibleCount((prev) => Math.min(slide.guidelines.length, prev + 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setVisibleCount((prev) => Math.max(0, prev - 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slide.guidelines.length]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="slide-content relative z-10 flex flex-col">
        <div className="pt-6 sm:pt-8 md:pt-10 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 overflow-y-auto">
          <div className="w-full max-w-5xl space-y-5 md:space-y-6">
            {slide.guidelines.map((guideline, index) => {
              const isVisible = index < visibleCount;

              return (
                <div
                  key={index}
                  className={cn(
                    'rounded-2xl border bg-gradient-to-br from-blue-950/30 to-slate-900/60 px-6 py-5 md:px-8 md:py-6 transition-all duration-500',
                    isVisible
                      ? 'border-blue-500/30 opacity-100 translate-y-0'
                      : 'border-transparent opacity-0 translate-y-4 pointer-events-none'
                  )}
                >
                  <div className="flex items-center gap-4 md:gap-5 mb-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xl md:text-2xl">
                      {index + 1}
                    </div>
                    <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-white">
                      {guideline.title}
                    </h2>
                  </div>
                  <div className="flex flex-col gap-2 pl-14 md:pl-17">
                    <div className="rounded-lg bg-red-950/40 border border-red-500/20 px-4 py-2 font-mono text-sm md:text-base">
                      <span className="text-red-400/60 select-none">$ </span>
                      <span className="text-red-300/90 line-through decoration-red-500/50">{guideline.bad}</span>
                    </div>
                    <div className="rounded-lg bg-emerald-950/40 border border-emerald-500/20 px-4 py-2 font-mono text-sm md:text-base">
                      <span className="text-emerald-400/60 select-none">$ </span>
                      <span className="text-emerald-300/90">{guideline.good}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
