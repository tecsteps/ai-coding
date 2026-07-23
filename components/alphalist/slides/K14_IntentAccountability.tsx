'use client';

import { Infinity as InfinityIcon } from 'lucide-react';
import { AlphalistFrame } from '../AlphalistFrame';
import { useReveal } from '../useReveal';

interface Props {
  index: number;
  total: number;
}

export function K14_IntentAccountability({ index, total }: Props) {
  const step = useReveal(4);

  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow={
        <span className="inline-flex items-center gap-2">
          If development is
          <InfinityIcon
            className="h-5 w-auto text-emerald-600"
            strokeWidth={2.4}
            aria-label="infinite"
          />
        </span>
      }
      title={
        <span className="inline-flex flex-wrap items-center gap-x-5 gap-y-2">
          <InfinityIcon
            className="h-16 w-auto text-emerald-600 md:h-24"
            strokeWidth={2}
            aria-hidden
          />
          What is left for humans?
        </span>
      }
    >
      <div className="flex w-full flex-col gap-4">
        <p
          className={`text-6xl font-semibold tracking-tight text-emerald-600 transition-opacity duration-700 md:text-9xl ${
            step >= 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Intent.
        </p>
        <p
          className={`text-4xl font-semibold tracking-tight text-slate-300 transition-opacity duration-700 md:text-6xl ${
            step >= 2 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Steering.
        </p>
        <p
          className={`text-4xl font-semibold tracking-tight text-slate-300 transition-opacity duration-700 md:text-6xl ${
            step >= 3 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Verification.
        </p>
        <p
          className={`text-6xl font-semibold tracking-tight text-emerald-600 transition-opacity duration-700 md:text-9xl ${
            step >= 4 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Accountability.
        </p>
      </div>
    </AlphalistFrame>
  );
}
