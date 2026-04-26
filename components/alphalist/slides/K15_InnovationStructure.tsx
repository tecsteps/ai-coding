'use client';

import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

export function K15_InnovationStructure({ index, total }: Props) {
  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total} align="center">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 md:px-12">
        <BlurFade delay={0.1} duration={0.7}>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-7xl">
            Change of innovation
            <br />
            <span className="text-rose-600">outperforms</span>
            <br />
            structural changes.
          </h1>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}
