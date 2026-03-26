'use client';

import { ImplementationDetailSlide as ImplementationDetailSlideType } from '@/types/slide';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { useState, useEffect } from 'react';

interface Props {
  slide: ImplementationDetailSlideType;
}

export function ImplementationDetailSlide({ slide }: Props) {
  const [phase, setPhase] = useState(0);
  const totalPhases = slide.matters.length;

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

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-50"
        color="rgba(168, 85, 247, 0.15)"
        blur={55}
        length="90vh"
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
          <div className="w-full max-w-6xl">
            {/* What Matters sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {slide.matters.map((section, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    phase > index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  <div className="p-6 sm:p-7 md:p-8 lg:p-10 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-950/20 to-slate-900/60 h-full">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-violet-300 mb-4 sm:mb-5 md:mb-6">
                      {section.title}
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      {section.bullets.map((bullet, bIndex) => (
                        <div key={bIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-violet-400 mt-2.5 flex-shrink-0" />
                          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
