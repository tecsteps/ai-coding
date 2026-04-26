'use client';

import { Building2, Route } from 'lucide-react';
import { AlphalistFrame } from '../AlphalistFrame';
import { useReveal } from '../useReveal';

interface Props {
  index: number;
  total: number;
}

const takeaways = [
  {
    icon: Building2,
    kicker: 'The destination',
    label: (
      <>
        What your future
        <br />
        IT org looks like.
      </>
    ),
  },
  {
    icon: Route,
    kicker: 'The path',
    label: (
      <>
        How to transition
        <br />
        into that new state.
      </>
    ),
  },
];

export function P05_TakeAways({ index, total }: Props) {
  const step = useReveal(takeaways.length);

  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="What you take with you"
      title="What we want you to take home."
    >
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {takeaways.map((t, i) => {
          const Icon = t.icon;
          const active = step >= i;
          return (
            <div
              key={t.kicker}
              className={`relative flex flex-col gap-10 overflow-hidden rounded-2xl border p-10 transition-all duration-500 md:p-14 ${
                active
                  ? 'border-emerald-600/30 bg-white shadow-[0_12px_32px_-16px_rgba(5,150,105,0.3)]'
                  : 'border-slate-200 bg-white opacity-40'
              }`}
            >
              <span
                aria-hidden
                className="absolute right-6 top-6 font-mono text-[11px] uppercase tracking-[0.35em] text-emerald-600/70"
              >
                0{i + 1}
              </span>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50">
                <Icon className="h-8 w-8 text-emerald-600" strokeWidth={1.6} />
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-slate-400">
                  {t.kicker}
                </span>
                <h3 className="text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 md:text-[2.5rem]">
                  {t.label}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </AlphalistFrame>
  );
}
