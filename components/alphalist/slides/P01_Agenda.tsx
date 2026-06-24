'use client';

import { useReveal } from '../useReveal';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

type Row = { time: string; title: string; description?: string; skip?: boolean };

const day1: Row[] = [
  {
    time: '09:00',
    title: 'Arrival & Coffee',
    description: 'Informal arrival, first conversations, no content yet.',
    skip: true,
  },
  {
    time: '09:30',
    title: 'Opening Keynote: The Challenges of Agentic Engineering Adoption',
    description:
      'Sets the ambition level: not an intro to AI coding tools, but how CTOs make agentic engineering work inside real engineering organizations.',
  },
  {
    time: '10:00',
    title: 'Introduction Round: CTO Reality Check',
    description:
      'Participants share their current maturity, what they already tried, what worked, what failed and where they are blocked internally.',
  },
  {
    time: '11:00',
    title: 'Maturity Ladder: From Individual Productivity to System Change',
    description:
      'Structured model for moving from isolated productivity gains to repeatable workflows, team standards, governance and measurable business impact.',
  },
  {
    time: '12:00',
    title: 'Lunch Break',
    description: 'Delicious meal, first debrief of the first round with the group.',
    skip: true,
  },
  {
    time: '13:00',
    title: 'War Stories: Brownfield Agentic Engineering',
    description:
      'Real CTO stories from existing engineering organizations: legacy systems, skeptical teams, quality concerns, failed rollouts, security constraints and leadership pressure.',
  },
  {
    time: '14:30',
    title: 'Fireside Chat: André Balleyguier, Anthropic',
  },
  {
    time: '15:30',
    title: 'Breakout 1: Experience & Problem Space',
    description:
      'Participants share concrete experiences and map their problem spaces. The goal is to identify the recurring hard problems across companies and surface candidates for Day 2.',
  },
  {
    time: '19:00',
    title: 'Dinner & Networking',
    description: 'Continued peer exchange in a more informal setting.',
  },
];

const day2: Row[] = [
  {
    time: '08:00',
    title: 'CTO-Breakfast',
    description: 'Good morning coffee, amazing starters and networking',
    skip: true,
  },
  {
    time: '09:00',
    title: 'Fireside Chat: Max Tschochohei, Google Cloud',
  },
  {
    time: '10:15',
    title: 'Breakout 2: Structured Solution Workshop',
    description:
      'Participants work on 2–3 selected hard cases from Day 1. Each group solves one concrete company challenge in context, so the discussion does not stay abstract or end in “it depends”.',
  },
  {
    time: '12:45',
    title: 'Lunch Break',
    description: 'Delicious meal, first debrief of the first round with the group.',
    skip: true,
  },
  {
    time: '13:45',
    title: 'Fireside Chat: Maximilian Hudlberger, OpenAI',
  },
  {
    time: '15:00',
    title: 'Peer Rotations',
    description: 'Participants rotate through small groups. Raw networking.',
  },
  {
    time: '16:45',
    title: '30/60/90-Day Plan',
  },
  {
    time: '17:30',
    title: 'Closing & Group Photo',
  },
];

type Pointer = { day: 1 | 2; row: number };

const highlightable: Pointer[] = [
  ...day1
    .map((r, i): Pointer | null => (r.skip ? null : { day: 1, row: i }))
    .filter((x): x is Pointer => x !== null),
  ...day2
    .map((r, i): Pointer | null => (r.skip ? null : { day: 2, row: i }))
    .filter((x): x is Pointer => x !== null),
];

export function P01_Agenda({ index, total }: Props) {
  const step = useReveal(highlightable.length - 1);
  const active = highlightable[step];

  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="Agenda"
    >
      <div className="grid w-full grid-cols-2 items-stretch gap-6">
        <DayColumn
          title="// DAY_01"
          subtitle="Understanding the shift"
          rows={day1}
          activeRow={active.day === 1 ? active.row : -1}
        />
        <DayColumn
          title="// DAY_02"
          subtitle="Tools, practice & outlook"
          rows={day2}
          activeRow={active.day === 2 ? active.row : -1}
        />
      </div>
    </AlphalistFrame>
  );
}

function DayColumn({
  title,
  subtitle,
  rows,
  activeRow,
}: {
  title: string;
  subtitle: string;
  rows: Row[];
  activeRow: number;
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
      <div className="bg-slate-950 px-7 py-5">
        <span className="block font-mono text-sm uppercase tracking-[0.22em] text-slate-500">
          {title}
        </span>
        <span className="mt-1 block font-mono text-xl font-semibold uppercase tracking-[0.12em] text-slate-200">
          {subtitle}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between px-5 py-5">
        {rows.map((r, i) => {
          const isActive = i === activeRow;
          return (
            <div
              key={r.time + r.title}
              className={`grid grid-cols-[3.75rem_1fr] gap-4 rounded-md px-3 py-2.5 transition-all duration-300 ${
                isActive
                  ? 'bg-emerald-600/10 opacity-100 ring-1 ring-emerald-400/50'
                  : 'opacity-75'
              }`}
            >
              <span
                className={`pt-0.5 font-mono text-sm tabular-nums ${
                  isActive ? 'text-emerald-700' : 'text-slate-500'
                }`}
              >
                {r.time}
              </span>
              <div className="min-w-0">
                <div className="flex items-baseline gap-3">
                  <span
                    className={`text-base font-semibold leading-tight ${
                      isActive ? 'text-emerald-950' : 'text-slate-950'
                    }`}
                  >
                    {r.title}
                  </span>
                  {isActive && (
                    <span className="ml-auto shrink-0 text-[9px] uppercase tracking-[0.25em] text-emerald-600">
                      now
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
