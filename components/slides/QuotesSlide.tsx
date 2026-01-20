'use client';

import { QuotesSlide as QuotesSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import Image from 'next/image';

interface Props {
  slide: QuotesSlideType;
}

export function QuotesSlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-50"
        color="rgba(59, 130, 246, 0.12)"
        blur={60}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        {/* Header */}
        <div className="pt-6 sm:pt-8 md:pt-12 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Content */}
        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 overflow-y-auto">
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {slide.quotes.map((quote, index) => (
                <BlurFade key={index} delay={0.2 + index * 0.15} duration={0.5}>
                  <div className="flex flex-col rounded-xl sm:rounded-2xl border border-slate-700/50 bg-slate-900/60 overflow-hidden h-full">
                    {/* Image */}
                    <div className="relative w-full aspect-[4/3] bg-slate-800">
                      <Image
                        src={quote.imageSrc}
                        alt={quote.author}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    {/* Quote content */}
                    <div className="p-3 sm:p-4 md:p-5 flex-1 flex flex-col">
                      <p className="text-sm sm:text-base md:text-lg text-slate-200 italic flex-1">
                        &ldquo;{quote.text}&rdquo;
                      </p>
                      <p className="mt-3 text-xs sm:text-sm text-slate-500 font-medium">
                        - {quote.author}
                      </p>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
