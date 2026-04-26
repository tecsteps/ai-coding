'use client';

import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const departments = [
  { label: 'Marketing', value: 16 },
  { label: 'Executive', value: 15 },
  { label: 'Customer Support', value: 12 },
  { label: 'Operations', value: 11 },
  { label: 'HR', value: 10 },
  { label: 'Finance', value: 9 },
  { label: 'Sales', value: 8 },
  { label: 'Legal', value: 5 },
];

const max = Math.max(...departments.map((d) => d.value));

export function S02_BeyondIT({ index, total }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="Pre-survey · who builds with agents"
      title="Which non-technical departments build with agents?"
    >
      <div className="w-full space-y-5 md:space-y-6">
          {departments.map((d, i) => {
            const pct = (d.value / max) * 100;
            const isTop = i < 3;
            return (
              <BlurFade key={d.label} delay={0.3 + i * 0.06} duration={0.5}>
                <div className="flex items-center gap-6">
                  <span className="w-56 text-xl font-medium text-slate-800 md:text-2xl">{d.label}</span>
                  <div className="relative h-12 flex-1 overflow-hidden rounded-lg bg-slate-50 md:h-14">
                    <div
                      className={`h-full rounded-lg ${
                        isTop
                          ? 'bg-gradient-to-r from-emerald-400 to-emerald-300'
                          : 'bg-gradient-to-r from-slate-400 to-slate-300'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-14 text-right font-mono text-2xl font-semibold text-slate-900 md:text-3xl">
                    {d.value}
                  </span>
                </div>
              </BlurFade>
            );
          })}
      </div>
    </AlphalistFrame>
  );
}
