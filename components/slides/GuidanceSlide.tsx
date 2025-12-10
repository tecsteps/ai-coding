'use client';

import { useState, useEffect } from 'react';
import { GuidanceSlide as GuidanceSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { cn } from '@/lib/utils';
import { BookOpen, Check, X, ChevronDown } from 'lucide-react';

interface Props {
  slide: GuidanceSlideType;
}

export function GuidanceSlide({ slide }: Props) {
  const [expandedExample, setExpandedExample] = useState(-1);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault();
        setExpandedExample((prev) => Math.min(slide.examples.length - 1, prev + 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setExpandedExample((prev) => Math.max(-1, prev - 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slide.examples.length]);

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-50"
        color="rgba(59, 130, 246, 0.12)"
        blur={60}
        length="90vh"
      />

      <div className="relative z-10 flex flex-1 flex-col">
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
          <div className="w-full max-w-5xl">
            {/* Intro */}
            <BlurFade delay={0.2} duration={0.5}>
              <div className="mb-10 p-6 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/30 to-slate-900/60">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-blue-500/20">
                    <BookOpen className="h-7 w-7 text-blue-400" />
                  </div>
                  <div className="flex items-center min-h-14">
                    <p className="text-2xl text-slate-200 leading-relaxed">
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

            {/* Code Examples */}
            <BlurFade delay={0.4} duration={0.5}>
              <div className="space-y-4">
                <p className="text-base text-slate-500 uppercase tracking-wider mb-4">
                  Code Convention Examples
                </p>
                {slide.examples.map((example, index) => {
                  const isExpanded = index === expandedExample;

                  return (
                    <div
                      key={index}
                      className={cn(
                        'rounded-xl border transition-all duration-300 overflow-hidden',
                        isExpanded
                          ? 'border-blue-500/40 bg-slate-900/80'
                          : 'border-slate-700/30 bg-slate-900/30'
                      )}
                    >
                      <div
                        className={cn(
                          'flex items-center justify-between p-5 cursor-pointer',
                          isExpanded ? 'border-b border-slate-700/50' : ''
                        )}
                      >
                        <span className={cn(
                          'font-semibold text-lg',
                          isExpanded ? 'text-blue-400' : 'text-slate-400'
                        )}>
                          {example.title}
                        </span>
                        <ChevronDown
                          className={cn(
                            'h-6 w-6 transition-transform duration-300',
                            isExpanded ? 'rotate-180 text-blue-400' : 'text-slate-500'
                          )}
                        />
                      </div>

                      <div
                        className={cn(
                          'transition-all duration-300 overflow-hidden',
                          isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        )}
                      >
                        <div className="p-5 grid grid-cols-2 gap-6">
                          {/* Bad Example */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-red-400">
                              <X className="h-5 w-5" />
                              <span className="text-base font-medium">BAD</span>
                            </div>
                            <pre className="p-4 rounded-lg bg-red-950/30 border border-red-500/20 text-base text-slate-300 overflow-x-auto">
                              <code>{example.bad}</code>
                            </pre>
                          </div>

                          {/* Good Example */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-green-400">
                              <Check className="h-5 w-5" />
                              <span className="text-base font-medium">GOOD</span>
                            </div>
                            <pre className="p-4 rounded-lg bg-green-950/30 border border-green-500/20 text-base text-slate-300 overflow-x-auto">
                              <code>{example.good}</code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
}
