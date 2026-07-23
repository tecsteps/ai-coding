'use client';

import { BigStatementSlide as BigStatementSlideType } from '@/types/slide';
import { Particles } from '@/components/ui/particles';
import { BlurFade } from '@/components/ui/blur-fade';

interface Props {
  slide: BigStatementSlideType;
}

export function BigStatementSlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950">
      <Particles
        className="absolute inset-0"
        quantity={60}
        color="#ffffff"
        size={0.5}
        staticity={40}
      />
      <div className="slide-content relative z-10 flex flex-col items-center justify-center px-4 text-center">
        {slide.lines.map((line, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.15} duration={0.6}>
            <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
              {line}
            </p>
          </BlurFade>
        ))}

        {slide.crossedOut && (
          <BlurFade delay={0.5 + slide.lines.length * 0.15} duration={0.5}>
            <p className="mt-8 text-xl sm:text-2xl md:text-3xl text-slate-500 line-through decoration-red-500/70 decoration-2">
              {slide.crossedOut}
            </p>
          </BlurFade>
        )}

        {slide.highlighted && (
          <BlurFade delay={0.7 + slide.lines.length * 0.15} duration={0.5}>
            <p className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400">
              {slide.highlighted}
            </p>
          </BlurFade>
        )}

        {slide.subtitle && (
          <BlurFade delay={0.6 + slide.lines.length * 0.15} duration={0.5}>
            <p className="mt-6 sm:mt-8 md:mt-12 text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-3xl">
              {slide.subtitle}
            </p>
          </BlurFade>
        )}
      </div>
    </div>
  );
}
