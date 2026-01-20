'use client';

import { ImageSlide as ImageSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';

interface Props {
  slide: ImageSlideType;
}

export function ImageSlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-70"
        color="rgba(34, 211, 238, 0.2)"
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
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-4 sm:py-6 md:py-8">
          <BlurFade delay={0.2} duration={0.6}>
            <div className="rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl">
              <img
                src={slide.imageSrc}
                alt={slide.headline}
                className="max-h-[50vh] w-auto object-contain"
              />
            </div>
          </BlurFade>

          {slide.caption && (
            <BlurFade delay={0.4} duration={0.5}>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-400 text-center max-w-3xl">
                {slide.caption}
              </p>
            </BlurFade>
          )}

          {slide.insight && (
            <BlurFade delay={0.5} duration={0.5}>
              <div className="mt-4 sm:mt-6 px-4 sm:px-6 py-3 sm:py-4 rounded-lg bg-cyan-950/40 border border-cyan-500/30">
                <p className="text-lg sm:text-xl md:text-2xl text-cyan-300 font-medium text-center">
                  {slide.insight}
                </p>
              </div>
            </BlurFade>
          )}
        </div>
      </div>
    </div>
  );
}
