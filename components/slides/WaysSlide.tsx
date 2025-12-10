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
        <div className="pt-12 text-center">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-6xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Ways grid */}
        <div className="flex flex-1 items-center justify-center px-16 py-8">
          <div className="grid grid-cols-2 gap-8 w-full max-w-6xl">
            {slide.ways.map((way, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.15} duration={0.5}>
                <div
                  className={`relative min-h-[520px] flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                    activeIndex === index
                      ? 'border-indigo-400/60 bg-gradient-to-br from-indigo-950/60 to-slate-900/60 scale-105'
                      : 'border-slate-700/40 bg-slate-900/40 hover:border-indigo-500/40 hover:bg-slate-900/60'
                  }`}
                >
                  {/* Badge in top right */}
                  {way.badge && (
                    <span
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
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
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full text-2xl font-bold ${
                      activeIndex === index
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {index + 1}
                  </div>

                  {/* Title - fixed height */}
                  <h2
                    className={`text-2xl font-bold mt-4 h-8 ${
                      activeIndex === index ? 'text-white' : 'text-slate-300'
                    }`}
                  >
                    {way.title}
                  </h2>

                  {/* Description - fixed height */}
                  <div className="h-16 mt-3">
                    {way.description && (
                      <p
                        className={`text-lg ${
                          activeIndex === index ? 'text-slate-300' : 'text-slate-500'
                        }`}
                      >
                        {way.description}
                      </p>
                    )}
                  </div>

                  {/* Prompt - fixed height */}
                  <div className="h-14 mt-2">
                    {way.prompt && (
                      <div
                        className={`rounded-lg border p-3 font-mono text-base ${
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
                  <div className="flex-1 flex flex-col justify-end mt-6">
                    {/* Pros */}
                    {way.pros && way.pros.length > 0 && (
                      <div className="space-y-2 mb-4">
                        {way.pros.map((pro, proIndex) => (
                          <div
                            key={proIndex}
                            className={`flex items-start gap-2 ${
                              activeIndex === index ? 'text-green-400' : 'text-slate-600'
                            }`}
                          >
                            <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span className={activeIndex === index ? 'text-slate-300' : 'text-slate-500'}>
                              {pro}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Cons */}
                    {way.cons && way.cons.length > 0 && (
                      <div className="space-y-2">
                        {way.cons.map((con, conIndex) => (
                          <div
                            key={conIndex}
                            className={`flex items-start gap-2 ${
                              activeIndex === index ? 'text-red-400' : 'text-slate-600'
                            }`}
                          >
                            <X className="h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span className={activeIndex === index ? 'text-slate-300' : 'text-slate-500'}>
                              {con}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Highlight */}
                    {way.highlight && (
                      <div
                        className={`mt-4 pt-4 border-t text-center font-medium ${
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
            <div className="pb-8 text-center">
              <p className="text-sm text-slate-500">
                {slide.footer}
              </p>
            </div>
          </BlurFade>
        )}
      </div>
    </div>
  );
}
