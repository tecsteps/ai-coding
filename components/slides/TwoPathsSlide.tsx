'use client';

import { TwoPathsSlide as TwoPathsSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { Bot, Zap } from 'lucide-react';

interface Props {
  slide: TwoPathsSlideType;
}

export function TwoPathsSlide({ slide }: Props) {
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
              <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto">
                {slide.intro}
              </p>
            </BlurFade>
          )}
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-4 sm:py-6 md:py-8">
          {/* Examples if provided */}
          {slide.examples && slide.examples.length > 0 && (
            <BlurFade delay={0.25} duration={0.5}>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                {slide.examples.map((example, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-800/60 border border-slate-700/50 text-sm sm:text-base text-slate-300"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </BlurFade>
          )}

          {/* Two paths */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl w-full">
            {slide.paths.map((path, index) => {
              const isOpportunity = path.style === 'opportunity';
              const isWarning = path.style === 'warning';

              return (
                <BlurFade key={index} delay={0.3 + index * 0.2} duration={0.5}>
                  <div
                    className={`relative rounded-xl border p-4 sm:p-6 md:p-8 backdrop-blur-sm transition-all ${
                      isOpportunity
                        ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-950/50 to-slate-900/50'
                        : isWarning
                          ? 'border-amber-500/50 bg-gradient-to-br from-amber-950/30 to-slate-900/50'
                          : 'border-slate-600/50 bg-slate-900/40'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${
                          isOpportunity
                            ? 'bg-cyan-500/30 text-cyan-400'
                            : isWarning
                              ? 'bg-amber-500/30 text-amber-400'
                              : 'bg-slate-700/50 text-slate-400'
                        }`}
                      >
                        {isOpportunity ? (
                          <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                        ) : (
                          <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
                        )}
                      </div>
                      <h2
                        className={`text-xl sm:text-2xl md:text-3xl font-bold ${
                          isOpportunity
                            ? 'text-cyan-300'
                            : isWarning
                              ? 'text-amber-300'
                              : 'text-slate-300'
                        }`}
                      >
                        {path.title}
                      </h2>
                    </div>

                    <ul className="space-y-2 sm:space-y-3">
                      {path.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg md:text-xl"
                        >
                          <span
                            className={`mt-2 h-2 w-2 shrink-0 rounded-full ${
                              isOpportunity
                                ? 'bg-cyan-400'
                                : isWarning
                                  ? 'bg-amber-400'
                                  : 'bg-slate-500'
                            }`}
                          />
                          <span className={isOpportunity ? 'text-slate-200' : 'text-slate-400'}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
