'use client';

import { useState, useEffect } from 'react';
import { AdoptionWakeSlide as AdoptionWakeSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';

interface Props {
  slide: AdoptionWakeSlideType;
}

export function AdoptionWakeSlide({ slide }: Props) {
  const maxStep = slide.reveals.length + (slide.punchline ? 1 : 0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setStep((prev) => Math.min(maxStep, prev + 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setStep((prev) => Math.max(0, prev - 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [maxStep]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-40"
        color="rgba(56, 189, 248, 0.15)"
        blur={60}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        <div className="pt-6 sm:pt-8 md:pt-12 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 overflow-y-auto">
          <div className="w-full max-w-4xl space-y-6 sm:space-y-8 md:space-y-10 text-center">
            {slide.reveals.map((line, index) => {
              const visible = index < step;
              return (
                <p
                  key={index}
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug transition-all duration-700 ${
                    visible
                      ? 'text-slate-200 opacity-100 translate-y-0'
                      : 'text-slate-500 opacity-0 translate-y-4'
                  }`}
                >
                  {line}
                </p>
              );
            })}

            {slide.punchline && (
              <p
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight transition-all duration-700 ${
                  step > slide.reveals.length
                    ? 'text-cyan-400 opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                {slide.punchline}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
