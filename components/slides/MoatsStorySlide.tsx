'use client';

import { MoatsStorySlide as MoatsStorySlideType } from '@/types/slide';
import { Particles } from '@/components/ui/particles';
import { Shield } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Props {
  slide: MoatsStorySlideType;
}

export function MoatsStorySlide({ slide }: Props) {
  // Total phases: headline (always visible) + each story line + moats box + punchline
  const totalPhases = slide.story.length + 2;
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown' && phase < totalPhases) {
        event.preventDefault();
        setPhase((p) => p + 1);
      } else if (event.key === 'ArrowUp' && phase > 0) {
        event.preventDefault();
        setPhase((p) => p - 1);
      }
    }

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [phase, totalPhases]);

  const moatsPhase = slide.story.length;
  const punchlinePhase = slide.story.length + 1;

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <Particles
        className="absolute inset-0"
        quantity={40}
        color="#ffffff"
        size={0.4}
        staticity={50}
      />

      <div className="slide-content relative z-10 flex flex-col">
        {/* Header */}
        <div className="pt-6 sm:pt-8 md:pt-12 text-center px-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white">
            {slide.headline}
          </h1>
        </div>

        {/* Content */}
        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8">
          <div className="w-full max-w-4xl">
            {/* Story */}
            <div className="mb-8 sm:mb-10 md:mb-12 space-y-2 sm:space-y-3 text-center">
              {slide.story.map((line, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    phase > index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
                  }`}
                >
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 font-medium">
                    {line}
                  </p>
                </div>
              ))}
            </div>

            {/* Moats */}
            <div
              className={`transition-all duration-500 ${
                phase > moatsPhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
            >
              <div className="p-5 sm:p-6 md:p-8 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-950/20 to-slate-900/60">
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400" />
                  <h2 className="text-base sm:text-lg md:text-xl font-semibold text-amber-400 uppercase tracking-wider">
                    What AI can&apos;t replicate
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {slide.moats.map((moat, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-amber-500/15 border border-amber-500/25 text-sm sm:text-base md:text-lg text-amber-200 font-medium"
                    >
                      {moat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Punchline */}
            <div
              className={`transition-all duration-500 ${
                phase > punchlinePhase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
            >
              <p className="mt-8 sm:mt-10 md:mt-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
                {slide.punchline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
