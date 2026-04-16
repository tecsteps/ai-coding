'use client';

import { useState, useEffect } from 'react';
import { WalkingDrivingSlide as WalkingDrivingSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { Footprints, Car } from 'lucide-react';

interface Props {
  slide: WalkingDrivingSlideType;
}

export function WalkingDrivingSlide({ slide }: Props) {
  // step 0: only walking visible dim, step 1: walking highlighted, step 2: driving visible, step 3: punchline
  const [step, setStep] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setStep((prev) => Math.min(3, prev + 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setStep((prev) => Math.max(0, prev - 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const walkingVisible = step >= 0;
  const drivingVisible = step >= 2;
  const punchlineVisible = step >= 3;

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-50"
        color="rgba(16, 185, 129, 0.15)"
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
          {slide.subtitle && (
            <BlurFade delay={0.3} duration={0.5}>
              <p className="mt-3 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-slate-400">
                {slide.subtitle}
              </p>
            </BlurFade>
          )}
        </div>

        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 overflow-y-auto">
          <div className="w-full max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-stretch">
              <div
                className={`flex flex-col items-center text-center p-6 sm:p-8 md:p-10 rounded-2xl border transition-all duration-700 ${
                  walkingVisible
                    ? 'border-slate-600/50 bg-slate-900/50 opacity-100'
                    : 'border-slate-800 bg-slate-900/20 opacity-0'
                }`}
              >
                <Footprints className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 text-slate-400 mb-4 sm:mb-6" />
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200 mb-2">
                  {slide.walking.label}
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-400">
                  {slide.walking.value}
                </p>
              </div>

              <div
                className={`flex flex-col items-center text-center p-6 sm:p-8 md:p-10 rounded-2xl border transition-all duration-700 ${
                  drivingVisible
                    ? 'border-emerald-400/60 bg-gradient-to-br from-emerald-950/40 to-slate-900/60 opacity-100 scale-100'
                    : 'border-slate-800 bg-slate-900/20 opacity-0 scale-95'
                }`}
              >
                <Car className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 text-emerald-400 mb-4 sm:mb-6" />
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2">
                  {slide.driving.label}
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-400">
                  {slide.driving.value}
                </p>
              </div>
            </div>

            <div
              className={`mt-8 sm:mt-10 md:mt-14 text-center transition-all duration-700 ${
                punchlineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-snug">
                {slide.punchline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
