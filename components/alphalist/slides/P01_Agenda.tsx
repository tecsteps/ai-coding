'use client';

import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const day1 = [
  { time: '09:00', title: 'Arrival & Coffee' },
  { time: '09:30', title: 'Opening Keynote: The Impact of Agentic Engineering', highlight: 'now' },
  { time: '10:15', title: 'Participant Round', highlight: 'next' },
  { time: '11:00', title: 'Live Demo: Agentic Engineering in Action' },
  { time: '12:00', title: 'Lunch Break' },
  { time: '13:00', title: 'War Stories from CTOs' },
  { time: '14:30', title: 'Arthur Viegers @ Cursor' },
  { time: '15:30', title: 'Breakout Sessions' },
  { time: '19:00', title: 'Dinner & Networking' },
];

const day2 = [
  { time: '08:00', title: 'Breakfast' },
  { time: '09:00', title: 'Solutions Workshop' },
  { time: '12:00', title: 'Lunch Break' },
  { time: '13:00', title: 'Fireside Chat: Ernst-Cornelius Koch (Google) + Q&A' },
  { time: '14:00', title: 'Peer Rotations' },
  { time: '15:00', title: 'Panel: The Future IT Organization' },
  { time: '16:00', title: 'Software Factory' },
  { time: '16:45', title: 'Closing' },
];

export function P01_Agenda({ index, total }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="Two days"
      title="This is how we work the challenges you just saw."
    >
      <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
        <DayColumn title="// Day 01" subtitle="Understanding the shift" rows={day1} />
        <DayColumn title="// Day 02" subtitle="Designing the future org" rows={day2} />
      </div>
    </AlphalistFrame>
  );
}

function DayColumn({
  title,
  subtitle,
  rows,
}: {
  title: string;
  subtitle: string;
  rows: Array<{ time: string; title: string; highlight?: string }>;
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
        {rows.map((r) => (
          <div
            key={r.time + r.title}
            className={`flex items-baseline gap-5 rounded-md px-3 py-2 transition-colors ${
              r.highlight === 'now'
                ? 'bg-emerald-600/10 ring-1 ring-emerald-400/40'
                : r.highlight === 'next'
                ? 'bg-amber-600/10 ring-1 ring-amber-400/40'
                : ''
            }`}
          >
            <span className="font-mono text-sm tabular-nums text-slate-500">
              {r.time}
            </span>
            <span className="text-base text-slate-900">{r.title}</span>
            {r.highlight === 'now' && (
              <span className="ml-auto text-[10px] uppercase tracking-[0.3em] text-emerald-600">
                ◄ now
              </span>
            )}
            {r.highlight === 'next' && (
              <span className="ml-auto text-[10px] uppercase tracking-[0.3em] text-amber-600">
                ◄ next
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
