'use client';

import { useState, useEffect } from 'react';
import { GuidanceSlide as GuidanceSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { cn } from '@/lib/utils';
import { BookOpen, Check, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  slide: GuidanceSlideType;
}

export function GuidanceSlide({ slide }: Props) {
  const [currentExample, setCurrentExample] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault();
        setCurrentExample((prev) => (prev + 1) % slide.examples.length);
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        setCurrentExample((prev) => (prev - 1 + slide.examples.length) % slide.examples.length);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slide.examples.length]);

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
        <div className="pt-12 text-center">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col items-center justify-center px-16 py-8">
          <div className="w-full max-w-6xl">
            {/* Intro */}
            <BlurFade delay={0.2} duration={0.5}>
              <div className="mb-10 p-6 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/30 to-slate-900/60">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20">
                    <BookOpen className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-400 uppercase tracking-wider mb-1">Knowledge</p>
                    <p className="text-xl text-slate-200 leading-relaxed">
                      {slide.intro}
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Points */}
            <BlurFade delay={0.3} duration={0.5}>
              <ul className="mb-10 space-y-4">
                {slide.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-xl text-slate-300">
                    <span className="flex-shrink-0 w-2.5 h-2.5 mt-2.5 rounded-full bg-blue-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </BlurFade>

            {/* Code Examples Carousel */}
            <BlurFade delay={0.4} duration={0.5}>
              <div className="rounded-2xl border border-blue-500/30 bg-slate-900/60 p-6">
                {/* Carousel Header */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm text-slate-500 uppercase tracking-wider">
                    Code Convention Examples
                  </p>
                  <div className="flex items-center gap-4">
                    {/* Navigation Dots */}
                    <div className="flex items-center gap-2">
                      {slide.examples.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentExample(index)}
                          className={cn(
                            'w-2.5 h-2.5 rounded-full transition-all duration-300',
                            index === currentExample
                              ? 'bg-blue-400 scale-110'
                              : 'bg-slate-600 hover:bg-slate-500'
                          )}
                        />
                      ))}
                    </div>
                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setCurrentExample((prev) => (prev - 1 + slide.examples.length) % slide.examples.length)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => setCurrentExample((prev) => (prev + 1) % slide.examples.length)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Current Example */}
                <div className="relative overflow-hidden">
                  {slide.examples.map((example, index) => (
                    <div
                      key={index}
                      className={cn(
                        'transition-all duration-300',
                        index === currentExample
                          ? 'opacity-100'
                          : 'opacity-0 absolute inset-0 pointer-events-none'
                      )}
                    >
                      {/* Example Title */}
                      <h3 className="text-xl font-semibold text-blue-400 mb-5">
                        {example.title}
                      </h3>

                      {/* Bad vs Good */}
                      <div className="grid grid-cols-2 gap-6 items-stretch">
                        {/* Bad Example */}
                        <div className="flex flex-col gap-3 h-full">
                          <div className="flex items-center gap-2 text-red-400">
                            <X className="h-5 w-5" />
                            <span className="text-base font-medium">BAD</span>
                          </div>
                          <pre className="flex-1 p-4 rounded-lg bg-red-950/30 border border-red-500/20 text-base text-slate-300 whitespace-pre-wrap break-all min-h-[60px]">
                            <code>{example.bad}</code>
                          </pre>
                        </div>

                        {/* Good Example */}
                        <div className="flex flex-col gap-3 h-full">
                          <div className="flex items-center gap-2 text-green-400">
                            <Check className="h-5 w-5" />
                            <span className="text-base font-medium">GOOD</span>
                          </div>
                          <pre className="flex-1 p-4 rounded-lg bg-green-950/30 border border-green-500/20 text-base text-slate-300 whitespace-pre-wrap break-all min-h-[60px]">
                            <code>{example.good}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
}
