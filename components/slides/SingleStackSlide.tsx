'use client';

import { useState, useEffect } from 'react';
import { SingleStackSlide as SingleStackSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { ArrowRight, Sparkles } from 'lucide-react';

interface Props {
  slide: SingleStackSlideType;
}

export function SingleStackSlide({ slide }: Props) {
  // step 0: stacks visible, step 1: stacks fading, step 2: new baseline visible
  const [step, setStep] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setStep((prev) => Math.min(2, prev + 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setStep((prev) => Math.max(0, prev - 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const stacksDim = step >= 1;
  const baselineVisible = step >= 2;

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-50"
        color="rgba(251, 146, 60, 0.15)"
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
          {slide.subtitle && (
            <BlurFade delay={0.3} duration={0.5}>
              <p className="mt-3 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-slate-400">
                {slide.subtitle}
              </p>
            </BlurFade>
          )}
        </div>

        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6 sm:gap-8 md:gap-12 w-full max-w-6xl">
            <div className="space-y-3 sm:space-y-4">
              {slide.stacks.map((stack, index) => (
                <BlurFade key={index} delay={0.25 + index * 0.1} duration={0.5}>
                  <div
                    className={`flex items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 rounded-xl border transition-all duration-700 ${
                      stacksDim
                        ? 'border-slate-800 bg-slate-900/20 opacity-40'
                        : 'border-slate-700/60 bg-slate-900/50 opacity-100'
                    }`}
                  >
                    <span
                      className={`text-base sm:text-lg md:text-xl font-semibold transition-all duration-700 ${
                        stacksDim ? 'text-slate-500 line-through decoration-red-500/60' : 'text-slate-200'
                      }`}
                    >
                      {stack.role}
                    </span>
                    <span
                      className={`text-xs sm:text-sm md:text-base font-mono px-2 py-1 rounded transition-all duration-700 ${
                        stacksDim ? 'bg-slate-800/40 text-slate-600' : 'bg-slate-800 text-amber-300'
                      }`}
                    >
                      {stack.example}
                    </span>
                  </div>
                </BlurFade>
              ))}
            </div>

            <div className="hidden lg:flex justify-center">
              <ArrowRight
                className={`h-12 w-12 transition-all duration-700 ${
                  baselineVisible ? 'text-amber-400 opacity-100' : 'text-slate-700 opacity-40'
                }`}
              />
            </div>

            <div
              className={`flex flex-col items-center text-center p-6 sm:p-8 md:p-10 rounded-2xl border transition-all duration-700 ${
                baselineVisible
                  ? 'border-amber-400/60 bg-gradient-to-br from-amber-950/40 to-slate-900/60 opacity-100 scale-100'
                  : 'border-slate-800 bg-slate-900/20 opacity-0 scale-95'
              }`}
            >
              <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-amber-400 mb-3 sm:mb-4" />
              <p className="text-sm sm:text-base text-amber-400 uppercase tracking-wider mb-2 sm:mb-3">
                New baseline
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {slide.newBaseline.map((item, index) => (
                  <li
                    key={index}
                    className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-tight"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
