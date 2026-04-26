'use client';

import {
  Lock,
  VideoOff,
  MicOff,
  Handshake,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const rules: Array<{
  icon: LucideIcon;
  num: string;
  title: string;
}> = [
  {
    icon: VideoOff,
    num: '01',
    title: 'No video.',
  },
  {
    icon: MicOff,
    num: '02',
    title: 'No audio recording.',
  },
  {
    icon: Lock,
    num: '03',
    title: 'What is said here, stays here.',
  },
];

export function P03_HouseRules({ index, total }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="House rules"
      title={
        <>
          <span className="text-emerald-600">Chatham House</span> rule.
        </>
      }
    >
      <div className="w-full">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
          {rules.map((r, i) => (
            <BlurFade key={r.num} delay={0.35 + i * 0.12} duration={0.6}>
              <RuleCard {...r} />
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.85} duration={0.7}>
          <div className="mt-10 flex items-center gap-4 rounded-2xl border border-emerald-600/25 bg-emerald-50/60 px-5 py-4 md:mt-14 md:px-6 md:py-5">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600/15 text-emerald-700">
              <Handshake className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <p className="text-sm text-slate-700 sm:text-base">
              <span className="font-semibold text-emerald-800">Write about it:</span>{' '}
              you are welcome to share publicly what the event was like, what you liked,
              and what you learned. Just keep other companies' details out of it - no
              names, no numbers, no sensitive specifics.
            </p>
          </div>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}

function RuleCard({
  icon: Icon,
  num,
  title,
}: {
  icon: LucideIcon;
  num: string;
  title: string;
}) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7">
      {/* Subtle decorative ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-emerald-600/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-emerald-600/5"
      />

      <div className="flex items-center justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-700">
          <Icon className="h-6 w-6" strokeWidth={1.7} />
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-slate-300">
          {num}
        </span>
      </div>

      <p className="mt-6 text-xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-2xl">
        {title}
      </p>
    </div>
  );
}
