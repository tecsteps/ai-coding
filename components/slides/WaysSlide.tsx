'use client';

import { useState, useEffect } from 'react';
import { WaysSlide as WaysSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { Check, X } from 'lucide-react';

interface Props {
  slide: WaysSlideType;
}

export function WaysSlide({ slide }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setActiveIndex((prev) => Math.max(0, prev - 1));
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        setActiveIndex((prev) => Math.min(slide.ways.length - 1, prev + 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slide.ways.length]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-60"
        color="rgba(99, 102, 241, 0.2)"
        blur={50}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        {/* Header */}
        <div className="pt-6 sm:pt-8 md:pt-12 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Ways grid */}
        <div className="flex flex-1 items-start sm:items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-2 sm:py-6 md:py-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 md:gap-8 w-full max-w-6xl">
            {slide.ways.map((way, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.15} duration={0.5}>
                <div
                  className={`relative flex flex-col rounded-xl sm:rounded-2xl border p-3 sm:p-6 md:p-8 transition-all duration-300 ${
                    activeIndex === index
                      ? 'border-indigo-400/60 bg-gradient-to-br from-indigo-950/60 to-slate-900/60 md:scale-105'
                      : 'border-slate-700/40 bg-slate-900/40 hover:border-indigo-500/40 hover:bg-slate-900/60'
                  }`}
                >
                  {/* Badge in top right */}
                  {way.badge && (
                    <span
                      className={`absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${
                        activeIndex === index
                          ? 'bg-indigo-500/30 text-indigo-300 border border-indigo-400/50'
                          : 'bg-slate-800 text-slate-500 border border-slate-700'
                      }`}
                    >
                      {way.badge}
                    </span>
                  )}

                  {/* Number badge */}
                  <div
                    className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full text-lg sm:text-xl md:text-2xl font-bold ${
                      activeIndex === index
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {index + 1}
                  </div>

                  {/* Title */}
                  <h2
                    className={`text-lg sm:text-xl md:text-2xl font-bold mt-2 sm:mt-3 md:mt-4 ${
                      activeIndex === index ? 'text-white' : 'text-slate-300'
                    }`}
                  >
                    {way.title}
                  </h2>

                  {/* Description */}
                  <div className="mt-2 sm:mt-3">
                    {way.description && (
                      <p
                        className={`text-sm sm:text-base md:text-lg ${
                          activeIndex === index ? 'text-slate-300' : 'text-slate-500'
                        }`}
                      >
                        {way.description}
                      </p>
                    )}
                  </div>

                  {/* Prompt */}
                  <div className="mt-2">
                    {way.prompt && (
                      <div
                        className={`rounded-lg border p-2 sm:p-3 font-mono text-xs sm:text-sm md:text-base ${
                          activeIndex === index
                            ? 'border-slate-600 bg-slate-800/80 text-green-400'
                            : 'border-slate-700/50 bg-slate-900/50 text-slate-500'
                        }`}
                      >
                        <span className="opacity-60">&gt; </span>
                        {way.prompt}
                      </div>
                    )}
                  </div>

                  {/* Pros/Cons section - grows to fill remaining space */}
                  <div className="flex-1 flex flex-col justify-end mt-4 sm:mt-6">
                    {/* Pros */}
                    {way.pros && way.pros.length > 0 && (
                      <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                        {way.pros.map((pro, proIndex) => (
                          <div
                            key={proIndex}
                            className={`flex items-start gap-1.5 sm:gap-2 ${
                              activeIndex === index ? 'text-green-400' : 'text-slate-600'
                            }`}
                          >
                            <Check className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                            <span className={`text-sm sm:text-base ${activeIndex === index ? 'text-slate-300' : 'text-slate-500'}`}>
                              {pro}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Cons */}
                    {way.cons && way.cons.length > 0 && (
                      <div className="space-y-1.5 sm:space-y-2">
                        {way.cons.map((con, conIndex) => (
                          <div
                            key={conIndex}
                            className={`flex items-start gap-1.5 sm:gap-2 ${
                              activeIndex === index ? 'text-red-400' : 'text-slate-600'
                            }`}
                          >
                            <X className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                            <span className={`text-sm sm:text-base ${activeIndex === index ? 'text-slate-300' : 'text-slate-500'}`}>
                              {con}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Highlight */}
                    {way.highlight && (
                      <div
                        className={`mt-3 sm:mt-4 pt-3 sm:pt-4 border-t text-center font-medium text-sm sm:text-base ${
                          activeIndex === index
                            ? 'border-indigo-500/30 text-indigo-400'
                            : 'border-slate-700/30 text-slate-500'
                        }`}
                      >
                        {way.highlight}
                      </div>
                    )}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* Footer */}
        {slide.footer && (
          <BlurFade delay={0.5} duration={0.5}>
            <div className="pb-4 sm:pb-6 md:pb-8 text-center px-4">
              <p className="text-xs sm:text-sm text-slate-500">
                {slide.footer}
              </p>
            </div>
          </BlurFade>
        )}
      </div>
    </div>
  );
}
