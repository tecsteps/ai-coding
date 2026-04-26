'use client';

import { Users2, Scale, BarChart3, Building2, type LucideIcon } from 'lucide-react';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const topics: { number: string; icon: LucideIcon; title: string; questions: string[] }[] = [
  {
    number: '01',
    icon: Users2,
    title: 'Rollout and resistance',
    questions: [
      'Where is adoption stalling, and why?',
      'Who is pushing back, and what is really behind it?',
      'Which part of the rollout keeps surprising you?',
    ],
  },
  {
    number: '02',
    icon: Scale,
    title: 'Governance, compliance and procurement',
    questions: [
      'Which legal or security concerns are blocking you today?',
      'Where do your current code and data flows feel risky?',
      'Which approvals or vendor processes are slowing you down most?',
    ],
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Proof of value, metrics and budget',
    questions: [
      'Why is the impact so hard to measure?',
      'Where does your cost and value story break down with the board or CFO?',
      'Which numbers do you wish you had, but cannot get?',
    ],
  },
  {
    number: '04',
    icon: Building2,
    title: 'Org design, talent and management for 2027',
    questions: [
      'Which roles feel broken or unclear right now?',
      'Where is your junior-to-senior pipeline at risk?',
      'Which assumptions about your org no longer hold?',
    ],
  },
];

export function P05_Breakouts({ index, total }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="120 min · 15:30"
      title="Breakout Sessions."
    >
      <p className="mb-5 text-center text-base font-medium leading-snug text-slate-700 md:text-lg">
        Today we map the <span className="text-rose-600">challenges</span>.
        Solutions come tomorrow in the workshop.
      </p>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {topics.map(({ number, icon: Icon, title, questions }) => (
          <div
            key={number}
            className="relative overflow-hidden rounded-2xl border border-rose-600/15 bg-gradient-to-br from-rose-50/70 via-white to-white p-6 shadow-[0_6px_24px_-12px_rgba(225,29,72,0.35)]"
          >
            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-rose-500/10 blur-2xl" />
            <div className="relative">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white shadow-md shadow-rose-500/30">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-rose-700">
                  Topic {number}
                </span>
              </div>
              <p className="text-xl font-semibold leading-tight tracking-tight text-slate-900 md:text-2xl">
                {title}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-600 md:text-base">
                {questions.map((q) => (
                  <li key={q} className="flex items-start gap-2.5">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500"
                    />
                    <span className="leading-snug">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-slate-500 md:text-base">
          Bring your own challenge, or pick one from the{' '}
          <span className="font-semibold text-slate-700">pin board</span>.
        </p>
      </div>
    </AlphalistFrame>
  );
}
