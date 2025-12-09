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
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault();
        setActiveIndex((prev) => Math.max(0, prev - 1));
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault();
        setActiveIndex((prev) => Math.min(slide.stages.length - 1, prev + 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slide.stages.length]);

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-70"
        color="rgba(34, 211, 238, 0.2)"
        blur={50}
        length="90vh"
      />

      <div className="relative z-10 flex flex-1 flex-col">
        {/* Header with headline */}
        <div className="pt-16 text-center">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-6xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Evolution stages */}
        <div className="flex flex-1 items-center justify-center px-16 py-8">
          <div className="flex items-center gap-6">
            {slide.stages.map((stage, index) => (
              <div key={index} className="flex items-center">
                <BlurFade delay={0.2 + index * 0.2} duration={0.5}>
                  <div
                    className={`relative flex h-72 w-80 flex-col rounded-2xl border p-8 backdrop-blur-sm transition-all ${
                      activeIndex === index
                        ? 'border-cyan-400/60 bg-gradient-to-br from-cyan-950/60 to-slate-900/60'
                        : 'border-slate-700/40 bg-slate-900/40'
                    }`}
                  >
                    {/* Multiplier badge */}
                    <div
                      className={`absolute -top-5 left-1/2 -translate-x-1/2 rounded-full px-6 py-2 text-2xl font-bold ${
                        activeIndex === index
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {stage.multiplier}
                    </div>

                    <div className="mt-6 flex flex-1 flex-col items-center justify-center text-center">
                      <h2
                        className={`text-2xl font-bold leading-tight ${
                          activeIndex === index ? 'text-white' : 'text-slate-300'
                        }`}
                      >
                        {stage.title}
                      </h2>
                      <p
                        className={`mt-3 text-xl font-medium ${
                          activeIndex === index ? 'text-cyan-400' : 'text-slate-500'
                        }`}
                      >
                        {stage.subtitle}
                      </p>
                      <p
                        className={`mt-4 text-lg leading-relaxed ${
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
                    <div className="mx-4 flex items-center">
                      <ArrowRight className="h-10 w-10 text-slate-600" />
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
