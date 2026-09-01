'use client';

import { useState, useEffect } from 'react';
import { TermDemystifySlide as TermDemystifySlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { Equal } from 'lucide-react';

interface Props {
  slide: TermDemystifySlideType;
}

export function TermDemystifySlide({ slide }: Props) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown' && !revealed) {
        event.preventDefault();
        setRevealed(true);
      } else if (event.key === 'ArrowUp' && revealed) {
        event.preventDefault();
        setRevealed(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [revealed]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-50"
        color="rgba(148, 163, 184, 0.15)"
        blur={50}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        {/* Header */}
        <div className="pt-6 sm:pt-8 md:pt-10 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6">
          <BlurFade delay={0.25} duration={0.5}>
            <span className="inline-block rounded-full border border-purple-500/40 bg-purple-950/30 px-4 sm:px-5 py-1.5 sm:py-2 font-mono text-sm sm:text-base md:text-lg text-purple-300">
              {slide.term}
            </span>
          </BlurFade>

          <div
            className={`flex flex-col items-center transition-all duration-500 ${
              revealed ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            <div className="my-4 sm:my-6 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800/80 border border-slate-600/50">
              <Equal className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />
            </div>

            <div className="w-fit max-w-full whitespace-nowrap rounded-lg sm:rounded-xl bg-emerald-950/40 border border-emerald-500/30 px-4 sm:px-6 py-3 sm:py-4 font-mono text-xs sm:text-sm md:text-base">
              <span className="text-emerald-400/60 select-none">$ </span>
              <span className="text-emerald-300/90">&ldquo;{slide.prompt}&rdquo;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
