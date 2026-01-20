'use client';

import { TimelineSlide as TimelineSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';

interface Props {
  slide: TimelineSlideType;
}

export function TimelineSlide({ slide }: Props) {
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

        <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-4 sm:py-6 md:py-8 gap-6 sm:gap-8">
          {/* Timeline */}
          <BlurFade delay={0.2} duration={0.6}>
            <div className="relative flex items-center gap-4 sm:gap-6 md:gap-8">
              {/* Connecting line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600 -translate-y-1/2 -z-10" />

              {slide.milestones.map((milestone, index) => (
                <BlurFade key={index} delay={0.3 + index * 0.15} duration={0.5}>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center border-4 border-slate-950 shadow-lg shadow-cyan-500/30">
                      <span className="text-xs sm:text-sm md:text-base font-bold text-white text-center px-1">
                        {milestone.date}
                      </span>
                    </div>
                    <span className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-slate-300 text-center max-w-24 sm:max-w-28 md:max-w-32">
                      {milestone.label}
                    </span>
                  </div>
                </BlurFade>
              ))}
            </div>
          </BlurFade>

          {/* Quote image if provided */}
          {slide.quoteSrc && (
            <BlurFade delay={0.6} duration={0.5}>
              <div className="rounded-xl overflow-hidden border border-slate-700/50 shadow-xl max-w-2xl">
                <img
                  src={slide.quoteSrc}
                  alt="Quote"
                  className="w-full h-auto object-contain"
                />
              </div>
            </BlurFade>
          )}

          {/* Text quote if provided */}
          {slide.quoteText && !slide.quoteSrc && (
            <BlurFade delay={0.6} duration={0.5}>
              <blockquote className="max-w-3xl text-center">
                <p className="text-xl sm:text-2xl md:text-3xl italic text-slate-300">
                  &ldquo;{slide.quoteText}&rdquo;
                </p>
              </blockquote>
            </BlurFade>
          )}

          {/* Insight */}
          {slide.insight && (
            <BlurFade delay={0.8} duration={0.5}>
              <div className="px-4 sm:px-6 py-3 sm:py-4 rounded-lg bg-cyan-950/40 border border-cyan-500/30">
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
