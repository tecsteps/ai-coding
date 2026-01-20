'use client';

import { useState, useEffect } from 'react';
import { SafetyChecklistSlide as SafetyChecklistSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { Briefcase, TrendingUp, Calendar, FileText, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  slide: SafetyChecklistSlideType;
}

const iconMap = {
  briefcase: Briefcase,
  graph: TrendingUp,
  calendar: Calendar,
  document: FileText,
};

export function SafetyChecklistSlide({ slide }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault();
        setVisibleCount((prev) => Math.min(slide.items.length, prev + 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setVisibleCount((prev) => Math.max(0, prev - 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slide.items.length]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-50"
        color="rgba(34, 197, 94, 0.12)"
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
          <div className="w-full max-w-3xl space-y-3 sm:space-y-4 md:space-y-5">
            {slide.items.map((item, index) => {
              const Icon = iconMap[item.icon];
              const isVisible = index < visibleCount;
              return (
                <div
                  key={index}
                  className={cn(
                    "flex items-center gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-5 rounded-xl border backdrop-blur-sm transition-all duration-300",
                    isVisible
                      ? "border-slate-700/40 bg-slate-900/50"
                      : "border-slate-700/20 bg-slate-900/20 opacity-20"
                  )}
                >
                  <div className={cn(
                    "flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg",
                    isVisible ? "bg-green-500/10" : "bg-slate-800/30"
                  )}>
                    <Icon className={cn(
                      "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7",
                      isVisible ? "text-green-400/70" : "text-slate-600"
                    )} />
                  </div>
                  <span className={cn(
                    "text-base sm:text-lg md:text-xl lg:text-2xl",
                    isVisible ? "text-slate-300" : "text-slate-600"
                  )}>
                    {item.text}
                  </span>
                  <div className={cn(
                    "ml-auto flex-shrink-0 transition-opacity duration-300",
                    isVisible ? "opacity-100" : "opacity-0"
                  )}>
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-500/60" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
