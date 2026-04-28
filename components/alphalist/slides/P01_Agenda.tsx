'use client';

import { AlphalistFrame } from '../AlphalistFrame';
import { useReveal } from '../useReveal';

interface Props {
  index: number;
  total: number;
}

type Row = { time: string; title: string; skip?: boolean };

const day1: Row[] = [
  { time: '09:00', title: 'Arrival & Coffee', skip: true },
  { time: '09:30', title: 'Opening Keynote: The Impact of Agentic Engineering' },
  { time: '10:15', title: 'Participant Round' },
  { time: '11:00', title: 'Live Demo: Agentic Engineering in Action' },
  { time: '12:00', title: 'Lunch Break', skip: true },
  { time: '13:00', title: 'War Stories from CTOs' },
  { time: '14:30', title: 'Arthur Viegers @ Cursor' },
  { time: '15:30', title: 'Breakout Sessions' },
  { time: '19:00', title: 'Dinner & Networking' },
];

const day2: Row[] = [
  { time: '08:00', title: 'Breakfast', skip: true },
  { time: '09:00', title: 'Solutions Workshop' },
  { time: '12:00', title: 'Lunch Break', skip: true },
  { time: '13:00', title: 'Fireside Chat: Ernst-Cornelius Koch (Google) + Q&A' },
  { time: '14:00', title: 'Peer Rotations' },
  { time: '15:00', title: 'Panel: The Future IT Organization' },
  { time: '16:00', title: 'Software Factory' },
  { time: '16:45', title: 'Closing' },
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
      eyebrow="Two days"
      title="This is how we work the challenges you just saw."
    >
      <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
        <DayColumn
          title="// Day 01"
          subtitle="Understanding the shift"
          rows={day1}
          activeRow={active.day === 1 ? active.row : -1}
        />
        <DayColumn
          title="// Day 02"
          subtitle="Designing the future org"
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
    <div>
      <div className="mb-4 flex items-baseline gap-3">
        <span className="font-mono text-sm text-emerald-600">{title}</span>
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
          {subtitle}
        </span>
      </div>
      <div className="space-y-1.5">
        {rows.map((r, i) => {
          const isActive = i === activeRow;
          return (
            <div
              key={r.time + r.title}
              className={`flex items-baseline gap-5 rounded-md px-3 py-2 transition-all duration-300 ${
                isActive
                  ? 'bg-emerald-600/10 opacity-100 ring-1 ring-emerald-400/50'
                  : 'opacity-30'
              }`}
            >
              <span
                className={`font-mono text-sm tabular-nums ${
                  isActive ? 'text-emerald-700' : 'text-slate-500'
                }`}
              >
                {r.time}
              </span>
              <span
                className={`text-base ${
                  isActive ? 'font-semibold text-emerald-900' : 'text-slate-900'
                }`}
              >
                {r.title}
              </span>
              {isActive && (
                <span className="ml-auto text-[10px] uppercase tracking-[0.3em] text-emerald-600">
                  ◄ now
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
