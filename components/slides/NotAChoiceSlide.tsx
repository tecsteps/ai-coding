'use client';

import { useState, useEffect } from 'react';
import { NotAChoiceSlide as NotAChoiceSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { ArrowRight } from 'lucide-react';

interface Props {
  slide: NotAChoiceSlideType;
}

export function NotAChoiceSlide({ slide }: Props) {
  const maxStep = slide.points.length + (slide.punchline ? 1 : 0);
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
        className="opacity-50"
        color="rgba(244, 63, 94, 0.15)"
        blur={60}
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
          <div className="w-full max-w-4xl">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {slide.points.map((point, index) => {
                const visible = index < step;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 md:p-6 rounded-xl border transition-all duration-500 ${
                      visible
                        ? 'border-rose-400/50 bg-gradient-to-br from-rose-950/30 to-slate-900/60 opacity-100 translate-x-0'
                        : 'border-slate-800 bg-slate-900/20 opacity-0 -translate-x-4'
                    }`}
                  >
                    <ArrowRight
                      className={`h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 flex-shrink-0 ${
                        visible ? 'text-rose-400' : 'text-slate-600'
                      }`}
                    />
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 leading-relaxed">
                      {point}
                    </p>
                  </div>
                );
              })}
            </div>

            {slide.punchline && (
              <div
                className={`mt-8 sm:mt-10 md:mt-14 text-center transition-all duration-700 ${
                  step > slide.points.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {slide.punchline}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
