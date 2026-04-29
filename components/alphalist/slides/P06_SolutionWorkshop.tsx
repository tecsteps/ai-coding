'use client';

import { Target, Building2, Users, Compass, type LucideIcon } from 'lucide-react';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const steps: { number: string; icon: LucideIcon; title: string; sub: string }[] = [
  {
    number: '01',
    icon: Target,
    title: 'One participant drops a real challenge.',
    sub: 'Something you actually care about. Not hypothetical, not sanitised.',
  },
  {
    number: '02',
    icon: Building2,
    title: 'Frame it with company context.',
    sub: 'Business model, team size, stack, constraints. Context bounds the solution space.',
  },
  {
    number: '03',
    icon: Users,
    title: 'The table discusses.',
    sub: 'Pull on the thread together. Challenge assumptions, share what worked, what did not.',
  },
  {
    number: '04',
    icon: Compass,
    title: 'As many topics as you like.',
    sub: 'Or go completely off rails if that is better for your table.',
  },
];

export function P06_SolutionWorkshop({ index, total }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="Briefing · Day 2"
      title="Solution Workshop."
    >
      <p className="mb-6 text-center text-base font-medium leading-snug text-slate-700 md:text-lg">
        Focused workshops at your table.{' '}
        <span className="text-emerald-600">A real challenge, a real round, real solutions.</span>
      </p>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {steps.map(({ number, icon: Icon, title, sub }) => (
          <div
            key={number}
            className="relative overflow-hidden rounded-2xl border border-emerald-600/15 bg-gradient-to-br from-emerald-50/70 via-white to-white p-6 shadow-[0_6px_24px_-12px_rgba(16,185,129,0.35)]"
          >
            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-emerald-500/10 blur-2xl" />
            <div className="relative">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-500/30">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-700">
                  Step {number}
                </span>
              </div>
              <p className="text-lg font-semibold leading-tight tracking-tight text-slate-900 md:text-xl">
                {title}
              </p>
              <p className="mt-2 text-sm text-slate-600 md:text-base">{sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-slate-500 md:text-base">
          Context is the constraint.{' '}
          <span className="font-semibold text-slate-700">
            Without it, every answer is generic.
          </span>
        </p>
      </div>
    </AlphalistFrame>
  );
}
