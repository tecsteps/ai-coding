'use client';

import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

export function K01_Title({ index, total }: Props) {
  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total} align="center">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start px-6 sm:px-10 md:px-12">
        <BlurFade delay={0.1} duration={0.7}>
          <p className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-emerald-600">
            <span className="h-px w-8 bg-emerald-600" />
            Opening Keynote · Day 1
          </p>
        </BlurFade>
        <BlurFade delay={0.25} duration={0.8}>
          <h1 className="text-3xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl md:text-7xl lg:text-[5.15rem]">
            The Organizational Impact of
            <br />
            <span className="text-rose-600">Agentic Engineering</span>
          </h1>
        </BlurFade>
        <BlurFade delay={0.8} duration={0.6}>
          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 sm:mt-16 sm:text-sm">
            <span className="text-slate-800">Fabian Wesner</span>
            <span>·</span>
            <span>alphalist CTO Bootcamp</span>
            <span>·</span>
            <span>Berlin 2026</span>
          </div>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}
