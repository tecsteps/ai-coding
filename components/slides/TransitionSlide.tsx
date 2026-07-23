'use client';

import { TransitionSlide as TransitionSlideType } from '@/types/slide';
import { Particles } from '@/components/ui/particles';
import { BlurFade } from '@/components/ui/blur-fade';

interface Props {
  slide: TransitionSlideType;
}

export function TransitionSlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950">
      <Particles
        className="absolute inset-0"
        quantity={40}
        color="#22d3ee"
        size={0.6}
        staticity={30}
      />
      <div className="slide-content relative z-10 flex flex-col items-center justify-center px-4 text-center">
        {slide.preText && (
          <BlurFade delay={0.1} duration={0.5}>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-4 sm:mb-6">
              {slide.preText}
            </p>
          </BlurFade>
        )}

        <BlurFade delay={0.3} duration={0.7}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-cyan-400">
            {slide.headline}
          </h1>
        </BlurFade>

        {slide.subtitle && (
          <BlurFade delay={0.5} duration={0.5}>
            <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-2xl">
              {slide.subtitle}
            </p>
          </BlurFade>
        )}
      </div>
    </div>
  );
}
