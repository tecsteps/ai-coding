'use client';

import { BigQuoteSlide as BigQuoteSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';

interface Props {
  slide: BigQuoteSlideType;
}

export function BigQuoteSlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-60"
        color="rgba(217, 119, 6, 0.15)"
        blur={60}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 text-center">
        {slide.kicker && (
          <BlurFade delay={0.1} duration={0.6}>
            <p className="mb-4 sm:mb-6 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-amber-400/80">
              {slide.kicker}
            </p>
          </BlurFade>
        )}

        <BlurFade delay={0.25} duration={0.6}>
          <p className="max-w-4xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
            &ldquo;{slide.quote}&rdquo;
          </p>
        </BlurFade>
      </div>
    </div>
  );
}
