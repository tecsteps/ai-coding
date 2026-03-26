'use client';

import { ValueComparisonSlide as ValueComparisonSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { XCircle, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Props {
  slide: ValueComparisonSlideType;
}

export function ValueComparisonSlide({ slide }: Props) {
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
        className="opacity-50"
        color="rgba(251, 191, 36, 0.12)"
        blur={60}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              {/* Zero Value Column */}
              <BlurFade delay={0.3} duration={0.5}>
                <div className="p-5 sm:p-6 md:p-8 rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-950/20 to-slate-900/60">
                  <div className="flex items-center gap-3 mb-4 sm:mb-5 md:mb-6">
                    <XCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-400" />
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-400 uppercase tracking-wider">
                      {slide.zeroValue.label}
                    </h2>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {slide.zeroValue.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-2.5 sm:p-3 md:p-4 rounded-lg bg-slate-800/40"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-400" />
                        <span className="text-sm sm:text-base md:text-lg text-slate-300 line-through decoration-red-400/50">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </BlurFade>

              {/* High Value Column */}
              <div
                className={`transition-all duration-500 ${
                  phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                <div className="p-5 sm:p-6 md:p-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 to-slate-900/60">
                  <div className="flex items-center gap-3 mb-4 sm:mb-5 md:mb-6">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-emerald-400" />
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-emerald-400 uppercase tracking-wider">
                      {slide.highValue.label}
                    </h2>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {slide.highValue.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-2.5 sm:p-3 md:p-4 rounded-lg bg-slate-800/40"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400" />
                        <span className="text-sm sm:text-base md:text-lg text-slate-200">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
