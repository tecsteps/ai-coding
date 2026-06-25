'use client';

import { Target, Building2, Users, Compass, type LucideIcon } from 'lucide-react';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const steps: { number: string; icon: LucideIcon; title: string }[] = [
  {
    number: '01',
    icon: Target,
    title: 'One participant brings a real challenge.',
  },
  {
    number: '02',
    icon: Building2,
    title: 'Frame it with company context.',
  },
  {
    number: '03',
    icon: Users,
    title: 'The table discusses.',
  },
  {
    number: '04',
    icon: Compass,
    title: 'As many topics as you like.',
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
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
        {steps.map(({ number, icon: Icon, title }) => (
          <div
            key={number}
            className="relative min-h-[13.5rem] overflow-hidden rounded-[1.75rem] border border-emerald-600/15 bg-gradient-to-br from-emerald-50/80 via-white to-white p-8 shadow-[0_18px_60px_-44px_rgba(16,185,129,0.6)]"
          >
            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-emerald-500/10 blur-2xl" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/30">
                  <Icon className="h-7 w-7" strokeWidth={2.2} />
                </span>
                <span className="font-mono text-sm font-semibold uppercase tracking-[0.32em] text-emerald-700">
                  Step {number}
                </span>
              </div>
              <p className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl">
                {title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </AlphalistFrame>
  );
}
