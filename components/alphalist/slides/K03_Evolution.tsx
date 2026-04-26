'use client';

import { ArrowRight } from 'lucide-react';
import { AlphalistFrame } from '../AlphalistFrame';
import { useReveal } from '../useReveal';

interface Props {
  index: number;
  total: number;
}

const stages = [
  {
    n: '01',
    title: 'Developer writes code.',
    sub: 'IDE',
    accent: 'text-slate-800',
  },
  {
    n: '02',
    title: 'Developer writes code with AI.',
    sub: 'Tab completion · in-context editing',
    accent: 'text-emerald-600',
  },
  {
    n: '03',
    title: 'AI writes code with the developer.',
    sub: 'Agentic Engineering',
    accent: 'text-rose-600',
  },
];

export function K03_Evolution({ index, total }: Props) {
  const step = useReveal(stages.length - 1);

  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="Evolution of coding"
      title="Three stages, one direction."
    >
      <div className="grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {stages.flatMap((stage, i) => {
            const stageEl = (
              <Stage key={stage.n} stage={stage} active={step >= i} />
            );
            if (i === stages.length - 1) return [stageEl];
            const arrowEl = (
              <div
                key={`arrow-${i}`}
                className={`flex items-center justify-center transition-opacity duration-500 ${
                  step > i ? 'opacity-100' : 'opacity-20'
                }`}
              >
                <ArrowRight className="h-8 w-8 text-slate-400" />
              </div>
            );
            return [stageEl, arrowEl];
          })}
      </div>
    </AlphalistFrame>
  );
}

function Stage({
  stage,
  active,
}: {
  stage: (typeof stages)[number];
  active: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border px-6 py-8 transition-all duration-500 ${
        active
          ? 'border-slate-300 bg-white shadow-[0_8px_24px_-12px_rgba(15,23,42,0.15)]'
          : 'border-slate-200 bg-white opacity-50'
      }`}
    >
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-slate-400">
        Stage {stage.n}
      </span>
      <h3 className={`mt-4 text-2xl font-semibold leading-snug ${stage.accent}`}>
        {stage.title}
      </h3>
      <p className="mt-3 text-sm text-slate-500">{stage.sub}</p>
    </div>
  );
}
