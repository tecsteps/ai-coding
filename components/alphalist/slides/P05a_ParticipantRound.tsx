'use client';

import { User, Sparkles, HelpCircle, Megaphone, Pin, type LucideIcon } from 'lucide-react';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const personalQuestions: { number: string; icon: LucideIcon; q: string; sub: string }[] = [
  {
    number: '01',
    icon: User,
    q: 'Who are you?',
    sub: 'Name · company · team size · your role.',
  },
  {
    number: '02',
    icon: Sparkles,
    q: 'Where are you with agentic engineering?',
    sub: 'In your org, today. Be honest about the level.',
  },
  {
    number: '03',
    icon: HelpCircle,
    q: 'What is your biggest open question this week?',
    sub: 'The one you actually want help with.',
  },
];

const tableTakeaways: { icon: LucideIcon; label: string; title: string; sub: string }[] = [
  {
    icon: Megaphone,
    label: 'One headline',
    title: 'One sentence the whole table agrees on.',
    sub: 'Your most important shared insight. Concrete and specific, not a platitude.',
  },
  {
    icon: Pin,
    label: 'One open question',
    title: 'The one nobody at this table can answer.',
    sub: 'Goes on the wall board for the rest of the day.',
  },
];

export function P05a_ParticipantRound({ index, total }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="45 min · 10:15"
      title="Participant Round."
    >
      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
        {/* Personal section */}
        <section>
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-700">
              At your table · everyone answers
            </span>
            <span className="h-px flex-1 bg-emerald-600/20" />
          </div>
          <div className="space-y-3">
            {personalQuestions.map(({ number, icon: Icon, q, sub }) => (
              <div
                key={number}
                className="relative overflow-hidden rounded-2xl border border-emerald-600/15 bg-gradient-to-br from-emerald-50/70 via-white to-white p-5 shadow-[0_6px_20px_-12px_rgba(16,185,129,0.3)]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-500/30">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-xs text-emerald-700">Q{number}</span>
                    </div>
                    <p className="text-lg font-semibold leading-snug text-slate-900 md:text-xl">
                      {q}
                    </p>
                    <p className="mt-1 text-sm text-slate-500 md:text-base">{sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Table outcome */}
        <section>
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-rose-600">
              Then the table agrees
            </span>
            <span className="h-px flex-1 bg-rose-500/20" />
          </div>
          <div className="space-y-3">
            {tableTakeaways.map(({ icon: Icon, label, title, sub }) => (
              <div
                key={label}
                className="relative overflow-hidden rounded-2xl border border-rose-500/20 bg-gradient-to-br from-rose-50/70 via-white to-white p-5 shadow-[0_6px_20px_-12px_rgba(244,63,94,0.3)]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white shadow-md shadow-rose-500/30">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-600">
                      {label}
                    </p>
                    <p className="mt-1 text-lg font-semibold leading-snug text-slate-900 md:text-xl">
                      {title}
                    </p>
                    <p className="mt-1 text-sm text-slate-500 md:text-base">{sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-3">
            <div className="rounded-xl border border-amber-300/60 bg-amber-50/70 p-4 text-sm text-slate-700 md:text-base">
              <span className="font-semibold text-amber-700">Write it down:</span> put both
              the headline and the open question on a card and pin it to the pin board.
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm text-slate-600 md:text-base">
              <span className="font-semibold text-slate-900">Nominee on the mic:</span> one
              person per table reads the headline + the open question. ~40 seconds, no
              elaboration.
            </div>
          </div>
        </section>
      </div>
    </AlphalistFrame>
  );
}
