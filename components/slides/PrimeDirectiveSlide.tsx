'use client';

import { PrimeDirectiveSlide as PrimeDirectiveSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';

interface Props {
  slide: PrimeDirectiveSlideType;
}

export function PrimeDirectiveSlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-60"
        color="rgba(59, 130, 246, 0.15)"
        blur={50}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        {/* Header */}
        <div className="pt-6 sm:pt-8 md:pt-12 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Directives */}
        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 overflow-y-auto">
          <div className="w-full max-w-5xl space-y-3 sm:space-y-4 md:space-y-6">
          {slide.directives.map((directive, index) => (
            <BlurFade key={index} delay={0.3 + index * 0.15} duration={0.5}>
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/20 to-slate-900/60 transition-all duration-300 hover:border-blue-400/50 hover:bg-gradient-to-br hover:from-blue-950/40 hover:to-slate-900/80 hover:scale-[1.02] cursor-default">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-blue-500/20 text-blue-400 font-bold text-base sm:text-lg md:text-xl">
                  {index + 1}
                </div>
                <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-slate-200 leading-relaxed">
                  {directive}
                </p>
              </div>
            </BlurFade>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
