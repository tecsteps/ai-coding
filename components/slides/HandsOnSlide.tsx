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
        <div className="pt-12 text-center">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Content */}
        <div className="flex flex-1 items-center justify-center px-16 py-8">
          <div className="flex w-full max-w-4xl flex-col gap-6">
          {/* What We're Building */}
          <BlurFade delay={0.3} duration={0.5}>
            <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-950/40 to-slate-900/60 p-8">
              <div className="flex items-center gap-3 text-orange-400">
                <PackageX className="h-6 w-6" />
                <h2 className="text-2xl font-semibold">What We&apos;re Building</h2>
              </div>
              <p className="mt-6 text-xl leading-relaxed text-slate-300">
                {slide.projectDescription}
              </p>
            </div>
          </BlurFade>

          {/* Procedure */}
          <BlurFade delay={0.5} duration={0.5}>
            <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-8">
              <div className="flex items-center gap-3 text-cyan-400">
                <Users className="h-6 w-6" />
                <h2 className="text-2xl font-semibold">Procedure</h2>
              </div>
              <ul className="mt-6 space-y-4">
                {slide.procedureItems.map((item, index) => {
                  const isLast = index === slide.procedureItems.length - 1;
                  return (
                    <BlurFade key={index} delay={0.6 + index * 0.15} duration={0.4}>
                      <li className="flex items-start gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-sm font-bold text-cyan-400">
                          {index + 1}
                        </span>
                        <div className="flex flex-1 items-center gap-4 pt-1">
                          <span className="text-lg text-slate-300">{item}</span>
                          {isLast && slide.techNote && (
                            <span className="rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-2 text-sm text-slate-400">
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
