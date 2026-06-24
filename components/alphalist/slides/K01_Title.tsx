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
        <BlurFade delay={0.25} duration={0.8}>
          <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight text-slate-900 sm:text-7xl md:text-8xl lg:text-[7.25rem]">
            Welcome to the
            <br />
            <span className="text-rose-600">alphalist CTO Bootcamp!</span>
          </h1>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}
