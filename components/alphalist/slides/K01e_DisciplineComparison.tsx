'use client';

import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const modes = [
  {
    name: 'Tab completions / in-context editing',
    productivity: 28,
    comprehension: 100,
  },
  {
    name: 'Vibe coding',
    productivity: 58,
    comprehension: 28,
  },
  {
    name: 'Agentic Engineering',
    productivity: 88,
    comprehension: 78,
    highlight: true,
  },
];

export function K01e_DisciplineComparison({ index, total }: Props) {
  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total}>
      <div className="grid w-full items-center gap-12 md:grid-cols-[0.86fr_1.14fr]">
        <BlurFade delay={0.1} duration={0.7}>
          <div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.96] tracking-tight text-slate-900 md:text-[3.85rem]">
              <span className="block text-emerald-600">Agentic Engineering</span>
              <span className="block">works best.</span>
            </h1>
            <div className="mt-7 max-w-xl rounded-2xl border border-slate-500 bg-slate-950 px-6 py-5 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.7)]">
              <p className="font-mono text-lg font-medium leading-relaxed text-white md:text-[1.35rem]">
                Agentic Engineering means turning{' '}
                <span className="rounded bg-amber-300 px-1.5 text-slate-950">intent</span>{' '}
                into software while keeping{' '}
                <span className="rounded bg-amber-300 px-1.5 text-slate-950">
                  full control
                </span>{' '}
                over functionality, code quality and correctness, and staying{' '}
                <span className="rounded bg-amber-300 px-1.5 text-slate-950">
                  accountable
                </span>{' '}
                for the result.
              </p>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.25} duration={0.7}>
          <div className="space-y-5">
            <div className="grid grid-cols-[1fr_9rem_9rem] gap-4 px-5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              <span>Mode</span>
              <span>Productivity</span>
              <span>Comprehension</span>
            </div>

            {modes.map((mode) => (
              <div
                key={mode.name}
                className={`rounded-xl border px-5 py-5 ${
                  mode.highlight
                    ? 'border-emerald-300 bg-emerald-50/70 shadow-[0_16px_46px_-28px_rgba(5,150,105,0.55)]'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className="grid items-center gap-4 md:grid-cols-[1fr_9rem_9rem]">
                  <p
                    className={`text-xl font-semibold leading-tight ${
                      mode.highlight ? 'text-emerald-800' : 'text-slate-900'
                    }`}
                  >
                    {mode.name}
                  </p>
                  <MetricBar value={mode.productivity} tone="emerald" />
                  <MetricBar value={mode.comprehension} tone="slate" />
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}

function MetricBar({
  value,
  tone,
}: {
  value: number;
  tone: 'emerald' | 'slate';
}) {
  return (
    <div className="h-3 overflow-hidden rounded-full bg-slate-100">
      <div
        className={`h-full rounded-full ${
          tone === 'emerald' ? 'bg-emerald-600' : 'bg-slate-500'
        }`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
