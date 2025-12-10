'use client';

import { PillarsSlide as PillarsSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { Brain, Wrench, Shield } from 'lucide-react';

interface Props {
  slide: PillarsSlideType;
}

const pillarIcons = [Brain, Wrench, Shield];

export function PillarsSlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-60"
        color="rgba(234, 179, 8, 0.15)"
        blur={50}
        length="90vh"
      />

      <div className="relative z-10 flex flex-1 flex-col">
        {/* Header */}
        <div className="pt-16 text-center">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Pillars */}
        <div className="flex flex-1 items-center justify-center px-16 py-8">
          <div className="flex gap-8 w-full max-w-5xl justify-center items-stretch">
            {slide.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index] || Brain;
              const isFocused = slide.focusIndex === index;

              return (
                <BlurFade key={index} delay={0.2 + index * 0.15} duration={0.5} className="flex">
                  <div
                    className={`relative flex flex-col items-center text-center w-64 p-8 rounded-2xl border transition-all duration-300 ${
                      isFocused
                        ? 'border-amber-400/60 bg-gradient-to-br from-amber-950/40 to-slate-900/60 scale-105'
                        : 'border-slate-700/40 bg-slate-900/40 hover:border-amber-500/40 hover:bg-slate-900/60'
                    }`}
                  >
                    {/* Focus indicator */}
                    {isFocused && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-slate-900 text-xs font-bold rounded-full">
                        UP NEXT
                      </div>
                    )}

                    {/* Number */}
                    <div
                      className={`flex items-center justify-center w-16 h-16 rounded-full text-3xl font-bold mb-4 ${
                        isFocused
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <Icon
                      className={`h-10 w-10 mb-4 ${
                        isFocused ? 'text-amber-400' : 'text-slate-500'
                      }`}
                    />

                    {/* Title */}
                    <h2
                      className={`text-xl font-bold ${
                        isFocused ? 'text-white' : 'text-slate-400'
                      }`}
                    >
                      {pillar.title}
                    </h2>

                    {/* Description */}
                    {pillar.description && (
                      <p
                        className={`mt-2 text-base ${
                          isFocused ? 'text-slate-300' : 'text-slate-500'
                        }`}
                      >
                        {pillar.description}
                      </p>
                    )}
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
