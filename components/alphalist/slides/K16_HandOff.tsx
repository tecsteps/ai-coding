'use client';

import { BlurFade } from '@/components/ui/blur-fade';
import { ArrowDown } from 'lucide-react';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

export function K16_HandOff({ index, total }: Props) {
  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total} align="center">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center sm:px-10 md:px-12">
        <BlurFade delay={0.15} duration={0.7}>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
            We also don&#39;t have all the answers.
          </h1>
        </BlurFade>
        <BlurFade delay={0.5} duration={0.7}>
          <p className="mt-8 text-2xl font-light text-slate-700 md:text-3xl">
            We brought you here to share the questions and find answers together.
          </p>
        </BlurFade>

        <BlurFade delay={0.9} duration={0.6}>
          <div className="mt-20 flex flex-col items-center gap-3 text-emerald-600">
            <span className="text-xs uppercase tracking-[0.4em]">Let&apos;s look where we are</span>
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </div>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}
