'use client';

import { PrimeDirectiveSlide as PrimeDirectiveSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';

interface Props {
  slide: PrimeDirectiveSlideType;
}

export function PrimeDirectiveSlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-60"
        color="rgba(59, 130, 246, 0.15)"
        blur={50}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        {/* Header */}
        <div className="pt-12 text-center">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Directives */}
        <div className="flex flex-1 items-center justify-center px-16 py-8">
          <div className="w-full max-w-5xl space-y-6">
          {slide.directives.map((directive, index) => (
            <BlurFade key={index} delay={0.3 + index * 0.15} duration={0.5}>
              <div className="flex items-center gap-6 p-6 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/20 to-slate-900/60 transition-all duration-300 hover:border-blue-400/50 hover:bg-gradient-to-br hover:from-blue-950/40 hover:to-slate-900/80 hover:scale-[1.02] cursor-default">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xl">
                  {index + 1}
                </div>
                <p className="text-2xl text-slate-200 leading-relaxed">
                  {directive}
                </p>
              </div>
            </BlurFade>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
