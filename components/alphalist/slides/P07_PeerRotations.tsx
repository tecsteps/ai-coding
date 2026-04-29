'use client';

import { Binary, ArrowRightCircle, MessageCircle, type LucideIcon } from 'lucide-react';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const steps: { number: string; icon: LucideIcon; title: string; sub: string }[] = [
  {
    number: '01',
    icon: Binary,
    title: 'Count 0 - 1 around the table.',
    sub: 'Everyone is either a 0 or a 1. No ties, no thirds.',
  },
  {
    number: '02',
    icon: ArrowRightCircle,
    title: 'On the call, every "1" moves.',
    sub: 'When Fabian says so, all the 1s walk clockwise to the next table.',
  },
  {
    number: '03',
    icon: MessageCircle,
    title: 'Talk to the person on your right.',
    sub: 'New table, new partner. Share what you just discussed.',
  },
];

export function P07_PeerRotations({ index, total }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="Mechanic"
      title="Peer Rotations."
    >
      <p className="mb-8 text-center text-base font-medium leading-snug text-slate-700 md:text-lg">
        A simple rotation so you meet new people without breaking the round.
      </p>

      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
        {steps.map(({ number, icon: Icon, title, sub }) => (
          <div
            key={number}
            className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-50/80 via-white to-white p-6 shadow-[0_6px_24px_-12px_rgba(245,158,11,0.4)]"
          >
            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-amber-400/15 blur-2xl" />
            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-md shadow-amber-500/30">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-700">
                  Step {number}
                </span>
              </div>
              <p className="text-lg font-semibold leading-tight tracking-tight text-slate-900 md:text-xl">
                {title}
              </p>
              <p className="mt-2 text-sm text-slate-600 md:text-base">{sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 px-5 py-3 text-sm text-slate-600 md:text-base">
          <span className="font-semibold text-slate-900">0s stay,</span>{' '}
          <span className="font-semibold text-amber-700">1s rotate.</span>
        </div>
      </div>
    </AlphalistFrame>
  );
}
