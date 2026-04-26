'use client';

import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';
import { useReveal } from '../useReveal';

interface Props {
  index: number;
  total: number;
}

export function K02_TurningPoint({ index, total }: Props) {
  const step = useReveal(2);

  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total} align="center">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center sm:px-10 md:px-12">
        <BlurFade delay={0.1} duration={0.6}>
          <p className="mb-8 text-xs uppercase tracking-[0.4em] text-emerald-600">
            The Turning Point
          </p>
        </BlurFade>

        <BlurFade delay={0.3} duration={0.8}>
          <p className="font-mono text-3xl font-semibold tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
            November 24, 2025
          </p>
        </BlurFade>

        {step >= 1 && (
          <BlurFade delay={0.05} duration={0.6}>
            <p className="mt-4 text-xl font-light text-slate-600 md:text-3xl">
              Claude Opus 4.5
            </p>
          </BlurFade>
        )}

        {step >= 2 && (
          <BlurFade delay={0.1} duration={0.7}>
            <p className="mt-20 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-rose-600 md:text-5xl lg:text-6xl">
              &ldquo;There is no point in letting humans write code anymore.&rdquo;
            </p>
          </BlurFade>
        )}
      </div>
    </AlphalistFrame>
  );
}
