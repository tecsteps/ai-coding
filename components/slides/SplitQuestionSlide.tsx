'use client';

import { SplitQuestionSlide as SplitQuestionSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { User, Building2 } from 'lucide-react';

interface Props {
  slide: SplitQuestionSlideType;
}

export function SplitQuestionSlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-60"
        color="rgba(251, 191, 36, 0.15)"
        blur={50}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        {/* Header */}
        <div className="pt-4 sm:pt-6 md:pt-8 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Content */}
        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-2 sm:py-4">
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-2 gap-6 sm:gap-10 md:gap-16">
              {/* Individual */}
              <BlurFade delay={0.3} duration={0.5}>
                <div className="flex flex-col h-full">
                  {/* Header with icon */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/30 to-violet-500/30 blur-lg scale-125" />
                      <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-cyan-500/30">
                        <User className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-cyan-400" />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold">
                        {slide.leftLabel}
                      </p>
                    </div>
                  </div>

                  {/* Bullets */}
                  {slide.leftBullets && (
                    <div className="space-y-2 sm:space-y-3 pl-2">
                      {slide.leftBullets.map((bullet, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400/60 flex-shrink-0" />
                          <span className="text-sm sm:text-base md:text-lg text-slate-300">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </BlurFade>

              {/* Company */}
              <BlurFade delay={0.4} duration={0.5}>
                <div className="flex flex-col h-full">
                  {/* Header with icon */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500/30 to-orange-500/30 blur-lg scale-125" />
                      <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-amber-500/30">
                        <Building2 className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-amber-400" />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold">
                        {slide.rightLabel}
                      </p>
                    </div>
                  </div>

                  {/* Bullets */}
                  {slide.rightBullets && (
                    <div className="space-y-2 sm:space-y-3 pl-2">
                      {slide.rightBullets.map((bullet, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400/60 flex-shrink-0" />
                          <span className="text-sm sm:text-base md:text-lg text-slate-300">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
