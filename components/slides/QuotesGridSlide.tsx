'use client';

import { QuotesGridSlide as QuotesGridSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';

interface Props {
  slide: QuotesGridSlideType;
}

export function QuotesGridSlide({ slide }: Props) {
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
              <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl text-slate-400">
                {slide.intro}
              </p>
            </BlurFade>
          )}
        </div>

        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-4 sm:py-6 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl">
            {slide.quotes.map((quote, index) => (
              <BlurFade key={index} delay={0.3 + index * 0.15} duration={0.5}>
                <div className="flex flex-col items-center rounded-xl border border-slate-700/40 bg-slate-900/40 p-4 sm:p-6 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
                  <div className="rounded-xl overflow-hidden border-2 border-slate-600/50 shadow-lg mb-4">
                    <img
                      src={quote.imageSrc}
                      alt={quote.name}
                      className="w-full max-w-[300px] h-auto object-contain"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center">
                    {quote.name}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-cyan-400 text-center mt-1">
                    {quote.title}
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
