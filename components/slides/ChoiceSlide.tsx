'use client';

import { ChoiceSlide as ChoiceSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { X, Check } from 'lucide-react';

interface Props {
  slide: ChoiceSlideType;
}

export function ChoiceSlide({ slide }: Props) {
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
          {slide.intro && (
            <BlurFade delay={0.2} duration={0.5}>
              <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto">
                {slide.intro}
              </p>
            </BlurFade>
          )}
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-4 sm:py-6 md:py-8">
          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl w-full">
            {slide.options.map((option, index) => (
              <BlurFade key={index} delay={0.3 + index * 0.2} duration={0.5}>
                <div
                  className={`relative rounded-xl border p-6 sm:p-8 md:p-10 backdrop-blur-sm transition-all ${
                    option.dismissed
                      ? 'border-red-500/30 bg-red-950/20 opacity-60'
                      : 'border-cyan-500/50 bg-gradient-to-br from-cyan-950/50 to-slate-900/50'
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center ${
                      option.dismissed
                        ? 'bg-red-500/80'
                        : 'bg-cyan-500/80'
                    }`}
                  >
                    {option.dismissed ? (
                      <X className="w-6 h-6 text-white" />
                    ) : (
                      <Check className="w-6 h-6 text-white" />
                    )}
                  </div>

                  <h2
                    className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 ${
                      option.dismissed
                        ? 'text-slate-500 line-through'
                        : 'text-cyan-300'
                    }`}
                  >
                    {option.label}
                  </h2>

                  {option.description && (
                    <p
                      className={`text-base sm:text-lg md:text-xl ${
                        option.dismissed ? 'text-slate-600' : 'text-slate-300'
                      }`}
                    >
                      {option.description}
                    </p>
                  )}
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Conclusion */}
          {slide.conclusion && (
            <BlurFade delay={0.7} duration={0.5}>
              <div className="mt-6 sm:mt-8 px-4 sm:px-6 py-3 sm:py-4 rounded-lg bg-slate-800/60 border border-slate-700/50 max-w-3xl">
                <p className="text-base sm:text-lg md:text-xl text-slate-300 text-center">
                  {slide.conclusion}
                </p>
              </div>
            </BlurFade>
          )}
        </div>
      </div>
    </div>
  );
}
