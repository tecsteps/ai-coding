'use client';

import { Sparkles, TrendingUp, Workflow } from 'lucide-react';
import { AlphalistFrame } from '../AlphalistFrame';
import { useReveal } from '../useReveal';

interface Props {
  index: number;
  total: number;
}

const departments = ['Marketing', 'Sales', 'HR', 'PR', 'Finance'];

const thoughts = [
  {
    icon: Workflow,
    title: 'Automate their work',
    body: "Don't slow them down. Let them hand the repetitive work to agents.",
  },
  {
    icon: Sparkles,
    title: 'Spark their creativity',
    body: 'Free their best people to invent things they never had time for.',
  },
  {
    icon: TrendingUp,
    title: 'Good for the business',
    body: 'More output, faster decisions, leaner teams across every function.',
  },
];

export function K10_BeyondIT({ index, total }: Props) {
  const step = useReveal(departments.length + 1 + thoughts.length);
  const departmentsDone = step >= departments.length;
  const buildNowDone = step >= departments.length + 1;

  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="Beyond engineering"
      title="And it doesn&apos;t stop at engineering..."
    >
      <div className="w-full">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-3 md:gap-x-6">
          {departments.map((d, i) => (
            <span
              key={d}
              className={`text-3xl font-semibold transition-all duration-500 sm:text-4xl md:text-6xl ${
                step > i ? 'text-slate-900 opacity-100 translate-y-0' : 'text-slate-900 opacity-0 translate-y-3'
              }`}
            >
              {d}
              {i < departments.length - 1 && (
                <span className="mx-2 text-slate-400">·</span>
              )}
            </span>
          ))}
        </div>

        <p
          className={`mt-10 text-2xl font-semibold tracking-tight text-emerald-600 transition-opacity duration-500 sm:text-3xl md:mt-12 md:text-5xl ${
            departmentsDone ? 'opacity-100' : 'opacity-0'
          }`}
        >
          They all build now.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3 sm:gap-6 md:mt-14">
          {thoughts.map((t, i) => {
            const visible = buildNowDone && step >= departments.length + 1 + (i + 1);
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className={`rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-500 ${
                  visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-3'
                }`}
              >
                <Icon className="h-5 w-5 text-emerald-600" strokeWidth={1.8} />
                <p className="mt-3 text-sm font-semibold text-slate-900 sm:text-base">
                  {t.title}
                </p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  {t.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </AlphalistFrame>
  );
}
