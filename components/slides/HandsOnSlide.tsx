'use client';

import { HandsOnSlide as HandsOnSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { Users, PackageX } from 'lucide-react';

interface Props {
  slide: HandsOnSlideType;
}

export function HandsOnSlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="slide-content relative z-10 flex flex-col">
        {/* Header */}
        <div className="pt-6 sm:pt-8 md:pt-12 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Content */}
        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 overflow-y-auto">
          <div className="flex w-full max-w-4xl flex-col gap-4 sm:gap-5 md:gap-6">
          {/* What We're Building */}
          <BlurFade delay={0.3} duration={0.5}>
            <div className="rounded-xl sm:rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-950/40 to-slate-900/60 p-4 sm:p-6 md:p-8">
              <div className="flex items-center gap-2 sm:gap-3 text-orange-400">
                <PackageX className="h-5 w-5 sm:h-6 sm:w-6" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">What We&apos;re Building</h2>
              </div>
              <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-300">
                {slide.projectDescription}
              </p>
            </div>
          </BlurFade>

          {/* Procedure */}
          <BlurFade delay={0.5} duration={0.5}>
            <div className="rounded-xl sm:rounded-2xl border border-slate-700/50 bg-slate-900/50 p-4 sm:p-6 md:p-8">
              <div className="flex items-center gap-2 sm:gap-3 text-cyan-400">
                <Users className="h-5 w-5 sm:h-6 sm:w-6" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Procedure</h2>
              </div>
              <ul className="mt-3 sm:mt-4 md:mt-6 space-y-3 sm:space-y-4">
                {slide.procedureItems.map((item, index) => {
                  const isLast = index === slide.procedureItems.length - 1;
                  return (
                    <BlurFade key={index} delay={0.6 + index * 0.15} duration={0.4}>
                      <li className="flex items-start gap-3 sm:gap-4">
                        <span className="flex h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-xs sm:text-sm font-bold text-cyan-400">
                          {index + 1}
                        </span>
                        <div className="flex flex-1 flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pt-0.5 sm:pt-1">
                          <span className="text-sm sm:text-base md:text-lg text-slate-300">{item}</span>
                          {isLast && slide.techNote && (
                            <span className="rounded-md sm:rounded-lg border border-slate-700/50 bg-slate-800/50 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm text-slate-400">
                              {slide.techNote}
                            </span>
                          )}
                        </div>
                      </li>
                    </BlurFade>
                  );
                })}
              </ul>
            </div>
          </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
}
