'use client';

import { GlossarySlide as GlossarySlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';

interface Props {
  slide: GlossarySlideType;
}

export function GlossarySlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-60"
        color="rgba(168, 85, 247, 0.15)"
        blur={50}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        {/* Header */}
        <div className="pt-6 sm:pt-8 md:pt-10 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
          {slide.intro && (
            <BlurFade delay={0.2} duration={0.5}>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-slate-400">
                {slide.intro}
              </p>
            </BlurFade>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 overflow-y-auto">
          <BlurFade delay={0.3} duration={0.5}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 w-full max-w-6xl">
              {slide.terms.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg sm:rounded-xl border border-slate-700/40 bg-slate-900/50 px-3.5 sm:px-4 py-2.5 sm:py-3"
                >
                  <span className="font-mono text-sm sm:text-base md:text-lg font-bold text-purple-400">
                    {item.term}
                  </span>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-snug">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>

        {/* Footer */}
        {slide.footer && (
          <BlurFade delay={0.5} duration={0.5}>
            <div className="pb-4 sm:pb-6 md:pb-8 text-center px-4">
              <p className="text-xs sm:text-sm text-slate-500">{slide.footer}</p>
            </div>
          </BlurFade>
        )}
      </div>
    </div>
  );
}
