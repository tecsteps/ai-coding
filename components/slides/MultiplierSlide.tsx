'use client';

import { MultiplierSlide as MultiplierSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { ArrowRight } from 'lucide-react';

interface Props {
  slide: MultiplierSlideType;
}

export function MultiplierSlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-70"
        color="rgba(34, 211, 238, 0.2)"
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
        <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8">
          {/* Multiplier visualization */}
          <BlurFade delay={0.3} duration={0.6}>
            <div className="flex items-center gap-4 sm:gap-6 md:gap-10 mb-8 sm:mb-10 md:mb-14">
              <div className="flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-2 border-slate-600 bg-slate-900/60">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-400">
                  {slide.from}
                </span>
              </div>
              <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-cyan-400" />
              <div className="flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-2 border-cyan-500 bg-gradient-to-br from-cyan-950/60 to-slate-900/60">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400">
                  {slide.to}
                </span>
              </div>
            </div>
          </BlurFade>

          {/* Statement */}
          <BlurFade delay={0.5} duration={0.5}>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center max-w-3xl">
              {slide.statement}
            </p>
          </BlurFade>

          {/* Sub-statement */}
          <BlurFade delay={0.7} duration={0.5}>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 text-center">
              {slide.subStatement}
            </p>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
