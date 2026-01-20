'use client';

import { PracticeImplicationSlide as PracticeImplicationSlideType } from '@/types/slide';
import { Particles } from '@/components/ui/particles';
import { BlurFade } from '@/components/ui/blur-fade';

interface Props {
  slide: PracticeImplicationSlideType;
}

export function PracticeImplicationSlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950">
      <Particles
        className="absolute inset-0"
        quantity={50}
        color="#ffffff"
        size={0.5}
        staticity={50}
      />
      <div className="slide-content relative z-10 flex flex-col items-center justify-center px-4 text-center">
        {slide.lines.map((line, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} duration={0.6}>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white leading-relaxed">
              {line}
            </p>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
