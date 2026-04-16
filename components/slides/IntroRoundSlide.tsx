'use client';

import { useState, useEffect } from 'react';
import { IntroRoundSlide as IntroRoundSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';

interface Props {
  slide: IntroRoundSlideType;
}

export function IntroRoundSlide({ slide }: Props) {
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setRevealed((prev) => Math.min(slide.bullets.length, prev + 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setRevealed((prev) => Math.max(0, prev - 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slide.bullets.length]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-50"
        color="rgba(168, 85, 247, 0.15)"
        blur={50}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        <div className="pt-6 sm:pt-8 md:pt-12 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 overflow-y-auto">
          <div className="w-full max-w-3xl space-y-4 sm:space-y-5 md:space-y-6">
            {slide.bullets.map((bullet, index) => {
              const isActive = index < revealed;
              return (
                <BlurFade key={index} delay={0.25 + index * 0.15} duration={0.5}>
                  <div
                    className={`flex items-center gap-4 sm:gap-5 md:gap-6 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border transition-all duration-500 ${
                      isActive
                        ? 'border-purple-400/60 bg-gradient-to-br from-purple-950/40 to-slate-900/60'
                        : 'border-slate-700/40 bg-slate-900/30 opacity-60'
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full text-lg sm:text-xl md:text-2xl font-bold transition-all duration-500 ${
                        isActive
                          ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white'
                          : 'bg-slate-800 text-slate-500'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <p
                      className={`text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed transition-colors duration-500 ${
                        isActive ? 'text-slate-100' : 'text-slate-400'
                      }`}
                    >
                      {bullet}
                    </p>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>

        {slide.footer && (
          <BlurFade delay={0.5} duration={0.5}>
            <div className="pb-4 sm:pb-6 md:pb-8 text-center px-4">
              <p className="text-sm sm:text-base text-slate-500">{slide.footer}</p>
            </div>
          </BlurFade>
        )}
      </div>
    </div>
  );
}
