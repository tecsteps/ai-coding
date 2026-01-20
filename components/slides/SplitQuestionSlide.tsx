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

        {/* Open Question */}
        <div className="mt-6 sm:mt-8 md:mt-10 text-center px-4">
          <BlurFade delay={0.2} duration={0.6}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-300/90 font-medium italic">
              "How can I use AI agents to my own advantage?"
            </p>
          </BlurFade>
        </div>

        {/* Content */}
        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6">
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              {/* Individual */}
              <BlurFade delay={0.3} duration={0.5}>
                <div className="relative h-full">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 blur-xl" />
                  <div className="relative h-full p-5 sm:p-6 md:p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/80 to-slate-950/80">
                    {/* Header with icon */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                        <User className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold">
                          {slide.leftLabel}
                        </p>
                      </div>
                    </div>

                    {/* Bullets as inline text */}
                    {slide.leftBullets && (
                      <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
                        {slide.leftBullets.join(' · ')}
                      </p>
                    )}
                  </div>
                </div>
              </BlurFade>

              {/* Company */}
              <BlurFade delay={0.4} duration={0.5}>
                <div className="relative h-full">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 blur-xl" />
                  <div className="relative h-full p-5 sm:p-6 md:p-8 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-slate-900/80 to-slate-950/80">
                    {/* Header with icon */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-amber-500/20 border border-amber-500/30">
                        <Building2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold">
                          {slide.rightLabel}
                        </p>
                      </div>
                    </div>

                    {/* Bullets as inline text */}
                    {slide.rightBullets && (
                      <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
                        {slide.rightBullets.join(' · ')}
                      </p>
                    )}
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
