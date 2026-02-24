'use client';

import { ExistingCodebaseStepSlide as SlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { Lightbulb } from 'lucide-react';

interface Props {
  slide: SlideType;
}

const colorMap = {
  search: { accent: 'text-cyan-400', border: 'border-cyan-500/40', bg: 'bg-cyan-500/15', dotBg: 'bg-cyan-400', glow: 'rgba(6, 182, 212, 0.12)' },
  book: { accent: 'text-blue-400', border: 'border-blue-500/40', bg: 'bg-blue-500/15', dotBg: 'bg-blue-400', glow: 'rgba(59, 130, 246, 0.12)' },
  code: { accent: 'text-violet-400', border: 'border-violet-500/40', bg: 'bg-violet-500/15', dotBg: 'bg-violet-400', glow: 'rgba(139, 92, 246, 0.12)' },
  test: { accent: 'text-emerald-400', border: 'border-emerald-500/40', bg: 'bg-emerald-500/15', dotBg: 'bg-emerald-400', glow: 'rgba(16, 185, 129, 0.12)' },
  play: { accent: 'text-amber-400', border: 'border-amber-500/40', bg: 'bg-amber-500/15', dotBg: 'bg-amber-400', glow: 'rgba(245, 158, 11, 0.12)' },
  key: { accent: 'text-rose-400', border: 'border-rose-500/40', bg: 'bg-rose-500/15', dotBg: 'bg-rose-400', glow: 'rgba(244, 63, 94, 0.12)' },
  wrench: { accent: 'text-orange-400', border: 'border-orange-500/40', bg: 'bg-orange-500/15', dotBg: 'bg-orange-400', glow: 'rgba(249, 115, 22, 0.12)' },
};

export function ExistingCodebaseStepSlide({ slide }: Props) {
  const colors = colorMap[slide.icon];

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-50"
        color={colors.glow}
        blur={60}
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

        {/* Content */}
        <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 overflow-y-auto">
          <div className="w-full max-w-4xl space-y-5 sm:space-y-7 md:space-y-9">
            {/* Description */}
            <BlurFade delay={0.2} duration={0.5}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed">
                {slide.description}
              </p>
            </BlurFade>

            {/* Points */}
            <BlurFade delay={0.3} duration={0.5}>
              <ul className="space-y-3 sm:space-y-4">
                {slide.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4 text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300">
                    <span className={`flex-shrink-0 w-2.5 h-2.5 sm:w-3 sm:h-3 mt-2 sm:mt-2.5 md:mt-3 rounded-full ${colors.dotBg}`} />
                    {point}
                  </li>
                ))}
              </ul>
            </BlurFade>

            {/* Prompt */}
            {slide.prompt && (
              <BlurFade delay={0.4} duration={0.5}>
                <div className={`rounded-xl border ${colors.border} bg-slate-900/70 overflow-hidden`}>
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-800/60 border-b border-slate-700/50">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/60" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/60" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-500 ml-2">Prompt</span>
                  </div>
                  {/* Terminal content */}
                  <div className="p-4 sm:p-5 md:p-6">
                    <pre className="font-mono text-sm sm:text-base md:text-lg text-green-400 whitespace-pre-wrap leading-relaxed">
                      <span className="text-slate-500">&gt; </span>{slide.prompt}
                    </pre>
                  </div>
                </div>
              </BlurFade>
            )}

            {/* Tip */}
            {slide.tip && (
              <BlurFade delay={0.5} duration={0.5}>
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 rounded-lg border border-amber-500/30 bg-amber-950/20">
                  <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base md:text-lg text-amber-200/80">
                    {slide.tip}
                  </p>
                </div>
              </BlurFade>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
