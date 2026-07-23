'use client';

import { CostComparisonSlide as CostComparisonSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Props {
  slide: CostComparisonSlideType;
}

export function CostComparisonSlide({ slide }: Props) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown' && phase === 0) {
        event.preventDefault();
        setPhase(1);
      } else if (event.key === 'ArrowUp' && phase === 1) {
        event.preventDefault();
        setPhase(0);
      }
    }

    // Use capture phase to intercept before SlideNavigation
    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [phase]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-60"
        color="rgba(239, 68, 68, 0.15)"
        blur={50}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        {/* Header */}
        <div className="pt-6 sm:pt-8 md:pt-12 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Content */}
        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8">
          <div className="w-full max-w-5xl">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-6 md:gap-8">
              {/* Old Model */}
              <BlurFade delay={0.3} duration={0.5}>
                <div className="p-5 sm:p-6 md:p-8 rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-950/20 to-slate-900/60">
                  <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-400 uppercase tracking-wider mb-4 sm:mb-5 md:mb-6">
                    {slide.oldModel.label}
                  </h2>
                  <div className="space-y-2 sm:space-y-3">
                    {slide.oldModel.items.map((item, index) => (
                      <p key={index} className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-200">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </BlurFade>

              {/* Arrow */}
              <div
                className={`transition-all duration-500 ${
                  phase >= 1 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-slate-500" />
              </div>

              {/* New Model */}
              <div
                className={`transition-all duration-500 ${
                  phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                <div className="p-5 sm:p-6 md:p-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 to-slate-900/60">
                  <h2 className="text-base sm:text-lg md:text-xl font-semibold text-emerald-400 uppercase tracking-wider mb-4 sm:mb-5 md:mb-6">
                    {slide.newModel.label}
                  </h2>
                  <div className="space-y-2 sm:space-y-3">
                    {slide.newModel.items.map((item, index) => (
                      <p key={index} className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-200">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Punchline */}
            <div
              className={`transition-all duration-500 ${
                phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="mt-8 sm:mt-10 md:mt-14 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
                {slide.punchline}
              </p>
              {slide.subPunchline && (
                <p className="mt-2 sm:mt-3 md:mt-4 text-lg sm:text-xl md:text-2xl text-center text-slate-400">
                  {slide.subPunchline}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
