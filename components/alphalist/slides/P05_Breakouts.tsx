'use client';

import { ClipboardCheck, MessageSquareText, NotebookPen, Presentation, type LucideIcon } from 'lucide-react';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const phases: {
  number: string;
  icon: LucideIcon;
  title: string;
  sub: string;
  timebox: string;
}[] = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Self-assessment',
    sub: 'Each participant assesses themselves on the presented maturity ladder.',
    timebox: '10 min',
  },
  {
    number: '02',
    icon: MessageSquareText,
    title: 'Present results & challenges',
    sub: 'Each person shares their assessment. The table can discuss.',
    timebox: '5–15 min each',
  },
  {
    number: '03',
    icon: NotebookPen,
    title: 'Surface recurring patterns',
    sub: 'Look for shared problems, concrete blockers, and open tensions.',
    timebox: 'throughout',
  },
  {
    number: '04',
    icon: Presentation,
    title: 'Table shares top challenges',
    sub: 'At the end, every table presents the main challenges they found.',
    timebox: '~17:30',
  },
];

export function P05_Breakouts({ index, total }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="2.5h · Day 1"
      title="Breakout 1: Experience & Problem Space."
    >
      <div className="grid w-full grid-cols-1 gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
        <section className="flex flex-col justify-center">
          <p className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
            Collect and discuss challenges.
            <br />
            <span className="text-rose-600">Do not solve them yet.</span>
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          {phases.map(({ number, icon: Icon, title, sub, timebox }) => (
            <div
              key={number}
              className="relative overflow-hidden rounded-2xl border border-rose-600/15 bg-gradient-to-br from-rose-50/70 via-white to-white p-5 shadow-[0_10px_32px_-24px_rgba(225,29,72,0.45)]"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
                  <Icon className="h-6 w-6" strokeWidth={1.9} />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.28em] text-rose-700">
                  Phase {number}
                </span>
                <span className="ml-auto rounded-full bg-rose-500/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-rose-700">
                  {timebox}
                </span>
              </div>
              <p className="text-xl font-semibold leading-tight tracking-tight text-slate-900">
                {title}
              </p>
              <p className="mt-2 text-base leading-snug text-slate-600">{sub}</p>
            </div>
          ))}
        </section>
      </div>
    </AlphalistFrame>
  );
}
