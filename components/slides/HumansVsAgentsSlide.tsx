'use client';

import { useState, useEffect } from 'react';
import { HumansVsAgentsSlide as HumansVsAgentsSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { cn } from '@/lib/utils';
import { Bot, User } from 'lucide-react';

interface Props {
  slide: HumansVsAgentsSlideType;
}

export function HumansVsAgentsSlide({ slide }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);
  const totalItems = slide.automated.length + slide.boosted.length;

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault();
        setVisibleCount((prev) => Math.min(totalItems, prev + 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setVisibleCount((prev) => Math.max(0, prev - 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalItems]);
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-50"
        color="rgba(251, 191, 36, 0.12)"
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
        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8">
          <div className="w-full max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              {/* Automated Column */}
              <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 to-slate-900/60">
                <div className="flex items-center gap-3 mb-4 sm:mb-5 md:mb-6">
                  <Bot className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cyan-400" />
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400 uppercase tracking-wider">
                    Agents Replace
                  </h2>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {slide.automated.map((item, index) => {
                    const isVisible = index < visibleCount;
                    return (
                      <div
                        key={index}
                        className={cn(
                          "flex items-center gap-3 p-2.5 sm:p-3 md:p-4 rounded-lg transition-all duration-300",
                          isVisible ? "bg-slate-800/40" : "bg-slate-800/20 opacity-20"
                        )}
                      >
                        <div className={cn(
                          "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-300",
                          isVisible ? "bg-cyan-400" : "bg-slate-600"
                        )} />
                        <span className={cn(
                          "text-sm sm:text-base md:text-lg transition-colors duration-300",
                          isVisible ? "text-slate-200" : "text-slate-600"
                        )}>{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Boosted Column */}
              <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-950/20 to-slate-900/60">
                <div className="flex items-center gap-3 mb-4 sm:mb-5 md:mb-6">
                  <User className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-amber-400" />
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-amber-400 uppercase tracking-wider">
                    Humans Boosted
                  </h2>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {slide.boosted.map((item, index) => {
                    const globalIndex = slide.automated.length + index;
                    const isVisible = globalIndex < visibleCount;
                    return (
                      <div
                        key={index}
                        className={cn(
                          "flex items-center gap-3 p-2.5 sm:p-3 md:p-4 rounded-lg transition-all duration-300",
                          isVisible ? "bg-slate-800/40" : "bg-slate-800/20 opacity-20"
                        )}
                      >
                        <div className={cn(
                          "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-300",
                          isVisible ? "bg-amber-400" : "bg-slate-600"
                        )} />
                        <span className={cn(
                          "text-sm sm:text-base md:text-lg transition-colors duration-300",
                          isVisible ? "text-slate-200" : "text-slate-600"
                        )}>{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
