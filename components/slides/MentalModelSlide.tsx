'use client';

import { useState, useEffect } from 'react';
import { MentalModelSlide as MentalModelSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { Brain, AlertTriangle, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  slide: MentalModelSlideType;
}

export function MentalModelSlide({ slide }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault();
        setVisibleCount((prev) => Math.min(slide.tips.length, prev + 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setVisibleCount((prev) => Math.max(0, prev - 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slide.tips.length]);

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
              <div className="mb-8 p-6 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/30 to-slate-900/60">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-blue-500/20">
                    <Brain className="h-7 w-7 text-blue-400" />
                  </div>
                  <div className="flex items-center min-h-14">
                    <p className="text-xl text-slate-200 leading-relaxed">
                      {slide.intro}
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Warning */}
            <BlurFade delay={0.3} duration={0.5}>
              <div className="mb-10 p-5 rounded-xl border border-amber-500/40 bg-gradient-to-br from-amber-950/30 to-slate-900/60">
                <div className="flex items-center gap-4">
                  <AlertTriangle className="h-6 w-6 text-amber-400 flex-shrink-0" />
                  <p className="text-xl text-amber-200 font-medium">
                    {slide.warning}
                  </p>
                </div>
              </div>
            </BlurFade>

            {/* Tips */}
            <BlurFade delay={0.4} duration={0.5}>
              <div>
                <p
                  className={cn(
                    'text-base text-slate-500 uppercase tracking-wider mb-4 transition-opacity duration-300',
                    visibleCount > 0 ? 'opacity-100' : 'opacity-0'
                  )}
                >
                  To preserve your mental model
                </p>
                <div className="space-y-4">
                  {slide.tips.map((tip, index) => {
                    const isActive = index < visibleCount;

                    return (
                      <div
                        key={index}
                        className={cn(
                          'flex items-center gap-4 p-5 rounded-xl border transition-all duration-300',
                          isActive
                            ? 'border-blue-500/30 bg-slate-900/50'
                            : 'border-slate-700/30 bg-slate-900/30 opacity-30'
                        )}
                      >
                        <CheckCircle
                          className={cn(
                            'h-6 w-6 flex-shrink-0',
                            isActive ? 'text-blue-400' : 'text-slate-600'
                          )}
                        />
                        <span
                          className={cn(
                            'text-xl',
                            isActive ? 'text-slate-200' : 'text-slate-600'
                          )}
                        >
                          {tip}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
}
