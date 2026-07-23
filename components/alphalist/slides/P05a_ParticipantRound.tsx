'use client';

import { Building2, CircleHelp, UserRound, Workflow, type LucideIcon } from 'lucide-react';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const steps: { number: string; icon: LucideIcon; title: string; sub: string }[] = [
  {
    number: '01',
    icon: UserRound,
    title: 'Who you are',
    sub: 'Name, role, and what you are responsible for.',
  },
  {
    number: '02',
    icon: Building2,
    title: 'Your company context',
    sub: 'Team size, setup, and where engineering sits in the business.',
  },
  {
    number: '03',
    icon: Workflow,
    title: 'Your current reality',
    sub: 'Where Agentic Engineering stands in your organization today.',
  },
  {
    number: '04',
    icon: CircleHelp,
    title: 'One open question',
    sub: 'What you want to better understand during the bootcamp.',
  },
];

export function P05a_ParticipantRound({ index, total }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="Introduction Round"
      title="Who is at your table?"
    >
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
        <section className="flex flex-col justify-center">
          <p className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
            Start with context.
            <br />
            Not pitches.
          </p>
          <p className="mt-6 max-w-lg border-l-2 border-emerald-500 pl-5 text-xl leading-snug text-slate-600">
            Share enough of your current situation so the table can connect the
            discussion to real organizations.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          {steps.map(({ number, icon: Icon, title, sub }) => (
            <div
              key={number}
              className="relative min-h-[12rem] overflow-hidden rounded-2xl border border-emerald-600/15 bg-gradient-to-br from-emerald-50/80 via-white to-white p-6 shadow-[0_12px_34px_-24px_rgba(16,185,129,0.45)]"
            >
              <span className="absolute right-5 top-5 font-mono text-xl font-semibold tracking-[0.16em] text-emerald-600/70">
                {number}
              </span>
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Icon className="h-6 w-6" strokeWidth={1.9} />
              </span>
              <p className="text-xl font-semibold leading-tight tracking-tight text-slate-900">
                {title}
              </p>
              <p className="mt-3 text-base leading-snug text-slate-600">{sub}</p>
            </div>
          ))}
        </section>
      </div>
    </AlphalistFrame>
  );
}
