'use client';

import { ClosingSlide as ClosingSlideType } from '@/types/slide';
import { Particles } from '@/components/ui/particles';
import { BlurFade } from '@/components/ui/blur-fade';

interface Props {
  slide: ClosingSlideType;
}

export function ClosingSlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950">
      <Particles
        className="absolute inset-0"
        quantity={80}
        color="#ffffff"
        size={0.6}
        staticity={30}
      />
      <div className="slide-content relative z-10 flex flex-col items-center justify-center px-4 text-center space-y-6 sm:space-y-8 md:space-y-10">
        <BlurFade delay={0.2} duration={0.7}>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-slate-400">
            {slide.line1}
          </p>
        </BlurFade>

        <BlurFade delay={0.6} duration={0.7}>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-cyan-400">
            {slide.line2}
          </p>
        </BlurFade>
      </div>
    </div>
  );
}
