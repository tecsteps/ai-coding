'use client';

import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

type Tone = 'emerald' | 'muted' | 'default';

const buckets: Array<{
  label: string;
  title: string;
  desc: string;
  value: number;
  note?: string;
  tone?: Tone;
}> = [
  {
    label: 'L0',
    title: 'Not started',
    desc: 'Tab-completion or in-context editing only. The way of working has not changed.',
    value: 3,
  },
  {
    label: 'L1',
    title: 'First teams all-in',
    desc: 'A few teams went all-in on agentic engineering (e.g. spec-driven development).',
    value: 15,
    note: 'majority',
    tone: 'muted',
  },
  {
    label: 'L2',
    title: 'Multiple teams rebuilt',
    desc: 'Day-to-day work is being rebuilt around agents. No longer an early-adopter thing.',
    value: 7,
  },
  {
    label: 'L3',
    title: 'Most of IT uses it',
    desc: 'Engineers, PMs, testers, designers, devops. Almost nobody types code anymore.',
    value: 3,
    note: 'click moment lives here',
    tone: 'emerald',
  },
  {
    label: 'L4',
    title: 'Beyond IT',
    desc: 'Marketing, sales, HR, finance build with agents too.',
    value: 0,
  },
];

const total = buckets.reduce((s, b) => s + b.value, 0);
const max = Math.max(...buckets.map((b) => b.value));

export function S01_Maturity({ index, total: totalSlides }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={totalSlides}
      eyebrow={`Pre-survey · N=${total}`}
      title="Where is your team on the maturity ladder?"
    >
      <div className="w-full space-y-6 md:space-y-8">
          {buckets.map((b, i) => {
            const pct = max ? (b.value / max) * 100 : 0;
            const isEmerald = b.tone === 'emerald';
            const isMuted = b.tone === 'muted';
            const fillClass = isEmerald
              ? 'bg-gradient-to-r from-emerald-500 to-emerald-400'
              : isMuted
              ? 'bg-gradient-to-r from-slate-400 to-slate-300'
              : 'bg-gradient-to-r from-slate-300 to-slate-200';
            const noteClass = isEmerald
              ? 'text-emerald-600'
              : 'text-slate-400';

            return (
              <BlurFade key={b.label} delay={0.3 + i * 0.08} duration={0.55}>
                <div className="grid grid-cols-[4rem_1fr_3rem] items-center gap-4 sm:grid-cols-[5rem_minmax(14rem,22rem)_1fr_3rem] sm:gap-6">
                  {/* Level chip */}
                  <span className="font-mono text-2xl font-semibold text-slate-700 md:text-3xl">
                    {b.label}
                  </span>

                  {/* Title + description */}
                  <div className="col-span-2 min-w-0 sm:col-span-1">
                    <p className={`text-lg font-semibold leading-tight md:text-xl ${
                      isEmerald ? 'text-emerald-700' : 'text-slate-900'
                    }`}>
                      {b.title}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-slate-500 md:text-base">
                      {b.desc}
                    </p>
                  </div>

                  {/* Bar (full row on mobile) */}
                  <div className="col-span-3 sm:col-span-1">
                    <div className="relative h-10 w-full overflow-hidden rounded-lg bg-slate-100 md:h-12">
                      <div
                        className={`h-full rounded-lg ${fillClass} transition-all duration-700`}
                        style={{ width: `${Math.max(pct, b.value > 0 ? 4 : 0)}%` }}
                      />
                    </div>
                  </div>

                  {/* Count */}
                  <span className="hidden text-right font-mono text-2xl font-semibold text-slate-900 sm:block md:text-3xl">
                    {b.value}
                  </span>

                  {/* Mobile inline value */}
                  <div className="col-span-3 -mt-1 flex items-center justify-end text-sm sm:hidden">
                    <span className="font-mono text-slate-900">{b.value}</span>
                  </div>
                </div>
              </BlurFade>
            );
          })}
      </div>
    </AlphalistFrame>
  );
}
