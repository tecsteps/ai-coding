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
      'How do you make sure everyone is actually using it?',
      'How do you turn a skeptic into a believer?',
      'What part of the rollout do you still not have a recipe for?',
    ],
  },
  {
    number: '02',
    icon: Scale,
    title: 'Governance, compliance and procurement',
    questions: [
      'Where does your code and your data actually go?',
      'Who approves what, and how long does it take?',
      'Which "no" from legal or security do you still not have a clean answer to?',
    ],
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Proof of value, metrics and budget',
    questions: [
      'How do you know you are successful?',
      'How do you justify the costs?',
      'What number would you put in front of your board?',
    ],
  },
  {
    number: '04',
    icon: Building2,
    title: 'Org design, talent and management for 2027',
    questions: [
      'What does your IT org chart look like in 2027?',
      'If juniors do not ship code anymore, where do future seniors come from?',
      'Which roles do you hire more of, fewer of, or not at all?',
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
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {topics.map(({ number, icon: Icon, title, questions }) => (
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
                      className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                    />
                    <span className="leading-snug">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </AlphalistFrame>
  );
}
