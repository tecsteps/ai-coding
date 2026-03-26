'use client';

import { AgencyOpportunitySlide as AgencyOpportunitySlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';

interface Props {
  slide: AgencyOpportunitySlideType;
}

export function AgencyOpportunitySlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-60"
        color="rgba(34, 211, 238, 0.15)"
        blur={50}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        {/* Content */}
        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8">
          <div className="w-full max-w-4xl">
            {/* Subtitle - main content, highlighted */}
            <BlurFade delay={0.1} duration={0.5}>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 sm:mb-12 md:mb-16 text-center leading-tight">
                {slide.subtitle}
              </p>
            </BlurFade>

            {/* Points - supporting comments */}
            <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto">
              {slide.points.map((point, index) => (
                <BlurFade key={index} delay={0.3 + index * 0.15} duration={0.5}>
                  <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 md:px-6 py-2 sm:py-3">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400/60 flex-shrink-0" />
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-500">
                      {point}
                    </p>
                  </div>
                </BlurFade>
              ))}
            </div>

            {/* Footer */}
            {slide.footer && (
              <BlurFade delay={0.3 + slide.points.length * 0.15 + 0.2} duration={0.5}>
                <p className="mt-8 sm:mt-10 md:mt-12 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center text-amber-300/90 italic">
                  {slide.footer}
                </p>
              </BlurFade>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
