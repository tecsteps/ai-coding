'use client';

import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const segments = [
  { label: 'Too early to tell', value: 14, verification: false, note: "haven't seen it yet" },
  { label: 'Code review', value: 11, verification: true },
  { label: 'Testing and QA', value: 11, verification: true },
  { label: 'Spec writing and decomposition', value: 11, verification: true },
  { label: 'Integration and deployment', value: 2, verification: false },
  { label: 'Still code generation', value: 2, verification: false },
];

const total = segments.reduce((s, x) => s + x.value, 0);

export function S03_NewBottleneck({ index, total: totalSlides }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={totalSlides}
      eyebrow="Pre-survey · the new bottleneck"
      title="Where is your biggest bottleneck today?"
    >
      <div className="w-full space-y-5 md:space-y-6">
          {segments.map((s, i) => {
            const pct = (s.value / total) * 100;
            return (
              <BlurFade key={s.label} delay={0.3 + i * 0.07} duration={0.5}>
                <div className="flex items-center gap-6">
                  <span className="w-72 text-lg font-medium text-slate-800 md:text-xl">{s.label}</span>
                  <div className="relative h-12 flex-1 overflow-hidden rounded-lg bg-slate-50 md:h-14">
                    <div
                      className={`h-full rounded-lg ${
                        s.verification
                          ? 'bg-gradient-to-r from-rose-400 to-rose-300'
                          : 'bg-gradient-to-r from-slate-400 to-slate-300'
                      }`}
                      style={{ width: `${pct * 3}%` }}
                    />
                  </div>
                  <span className="w-14 text-right font-mono text-2xl font-semibold text-slate-900 md:text-3xl">
                    {s.value}
                  </span>
                  <span
                    className={`w-56 text-sm md:text-base ${
                      s.verification ? 'text-rose-600' : 'text-slate-400'
                    }`}
                  >
                    {s.verification ? '◄ verification' : s.note ? s.note : ''}
                  </span>
                </div>
              </BlurFade>
            );
          })}
      </div>
    </AlphalistFrame>
  );
}
