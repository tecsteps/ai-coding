'use client';

import { useState, useEffect } from 'react';
import { AgentCapabilitiesSlide as AgentCapabilitiesSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  slide: AgentCapabilitiesSlideType;
}

export function AgentCapabilitiesSlide({ slide }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);
  const totalItems = slide.capabilities.length + 1; // +1 for footer

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
        className="opacity-60"
        color="rgba(139, 92, 246, 0.15)"
        blur={50}
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
          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              {slide.capabilities.map((capability, index) => {
                const isVisible = index < visibleCount;
                return (
                  <div
                    key={index}
                    className={cn(
                      "flex items-center gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 rounded-xl border transition-all duration-300",
                      isVisible
                        ? "border-violet-500/30 bg-gradient-to-br from-violet-950/20 to-slate-900/60"
                        : "border-slate-700/20 bg-slate-900/20 opacity-20"
                    )}
                  >
                    <div className={cn(
                      "flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg",
                      isVisible ? "bg-violet-500/20" : "bg-slate-800/30"
                    )}>
                      <Zap className={cn(
                        "w-4 h-4 sm:w-5 sm:h-5",
                        isVisible ? "text-violet-400" : "text-slate-600"
                      )} />
                    </div>
                    <span className={cn(
                      "text-sm sm:text-base md:text-lg lg:text-xl",
                      isVisible ? "text-slate-200" : "text-slate-600"
                    )}>
                      {capability}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className={cn(
              "mt-8 sm:mt-10 md:mt-12 text-center transition-all duration-500",
              visibleCount > slide.capabilities.length
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400">
                {slide.footer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
