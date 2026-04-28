'use client';

import { AlphalistFrame } from '../AlphalistFrame';
import { useReveal } from '../useReveal';

interface Props {
  index: number;
  total: number;
}

const guidelines = [
  {
    title: 'Share Intent, Not Instructions',
    bad: 'Do X',
    good: "I want X. Let's discuss how.",
  },
  {
    title: 'Let the Agent Validate Results',
    bad: 'Implement!',
    good: 'Implement, validate, and fix if needed',
  },
  {
    title: 'Guide Continuously',
    bad: 'Fix this!',
    good: 'Fix this, then update your skills so it never happens again',
  },
];

export function D00_PromptingGuidelines({ index, total }: Props) {
  const visibleCount = useReveal(guidelines.length);

  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="Live Coding"
      title="Prompting Guidelines"
    >
      <div className="mx-auto w-full max-w-4xl space-y-5">
        {guidelines.map((g, i) => {
          const isVisible = i < visibleCount;
          return (
            <div
              key={g.title}
              className={`rounded-2xl border bg-white px-6 py-5 transition-all duration-500 md:px-8 md:py-6 ${
                isVisible
                  ? 'border-slate-200 opacity-100 translate-y-0 shadow-[0_10px_40px_-30px_rgba(15,23,42,0.25)]'
                  : 'border-transparent opacity-0 translate-y-4 pointer-events-none'
              }`}
            >
              <div className="mb-4 flex items-center gap-4 md:gap-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-emerald-600/30 bg-emerald-50 font-mono text-base font-semibold text-emerald-700 md:h-11 md:w-11 md:text-lg">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  {g.title}
                </h2>
              </div>
              <div className="flex flex-col gap-2 pl-14 md:pl-16">
                <div className="rounded-lg border border-rose-200 bg-rose-50/70 px-4 py-2 font-mono text-sm md:text-base">
                  <span className="select-none text-rose-400">$ </span>
                  <span className="text-rose-700/80 line-through decoration-rose-400/60">
                    {g.bad}
                  </span>
                </div>
                <div className="rounded-lg border border-emerald-200 bg-emerald-50/70 px-4 py-2 font-mono text-sm md:text-base">
                  <span className="select-none text-emerald-500">$ </span>
                  <span className="text-emerald-800">{g.good}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AlphalistFrame>
  );
}
