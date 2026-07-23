'use client';

import { useState, useEffect } from 'react';
import { EvolutionSlide as EvolutionSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { ArrowRight } from 'lucide-react';

interface Props {
  slide: EvolutionSlideType;
}

export function EvolutionSlide({ slide }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setActiveIndex((prev) => Math.max(0, prev - 1));
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        setActiveIndex((prev) => Math.min(slide.stages.length - 1, prev + 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slide.stages.length]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-70"
        color="rgba(34, 211, 238, 0.2)"
        blur={50}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        {/* Header with headline */}
        <div className="pt-6 sm:pt-8 md:pt-12 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Evolution stages */}
        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 overflow-y-auto">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            {slide.stages.map((stage, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center">
                <BlurFade delay={0.2 + index * 0.2} duration={0.5}>
                  <div
                    className={`relative flex h-auto w-full max-w-[280px] sm:max-w-[320px] sm:w-64 md:w-72 lg:w-80 flex-col rounded-xl sm:rounded-2xl border p-3 sm:p-6 md:p-8 backdrop-blur-sm transition-all duration-300 ${
                      activeIndex === index
                        ? 'border-cyan-400/60 bg-gradient-to-br from-cyan-950/60 to-slate-900/60'
                        : 'border-slate-700/40 bg-slate-900/40 hover:border-cyan-500/40 hover:bg-slate-900/60'
                    }`}
                  >
                    {/* Multiplier badge */}
                    <div
                      className={`absolute -top-3 sm:-top-4 md:-top-5 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 text-sm sm:text-lg md:text-xl lg:text-2xl font-bold ${
                        activeIndex === index
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {stage.multiplier}
                    </div>

                    <div className="mt-3 sm:mt-5 md:mt-6 flex flex-1 flex-col items-center justify-center text-center">
                      <h2
                        className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight ${
                          activeIndex === index ? 'text-white' : 'text-slate-300'
                        }`}
                      >
                        {stage.title}
                      </h2>
                      <p
                        className={`mt-1.5 sm:mt-2 md:mt-3 text-sm sm:text-base md:text-lg lg:text-xl font-medium ${
                          activeIndex === index ? 'text-cyan-400' : 'text-slate-500'
                        }`}
                      >
                        {stage.subtitle}
                      </p>
                      <p
                        className={`mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed ${
                          activeIndex === index ? 'text-slate-300' : 'text-slate-500'
                        }`}
                      >
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </BlurFade>

                {/* Arrow between stages */}
                {index < slide.stages.length - 1 && (
                  <BlurFade delay={0.3 + index * 0.2} duration={0.5}>
                    <div className="my-2 lg:my-0 lg:mx-2 xl:mx-4 flex items-center">
                      <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-slate-600 rotate-90 lg:rotate-0" />
                    </div>
                  </BlurFade>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
