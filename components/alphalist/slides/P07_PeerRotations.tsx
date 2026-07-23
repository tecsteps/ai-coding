'use client';

import { Binary, ArrowRightCircle, MessageCircle, type LucideIcon } from 'lucide-react';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const steps: { number: string; icon: LucideIcon; title: string }[] = [
  {
    number: '01',
    icon: Binary,
    title: 'Count 0 - 1 around the table.',
  },
  {
    number: '02',
    icon: ArrowRightCircle,
    title: 'On the call, every "1" moves.',
  },
  {
    number: '03',
    icon: MessageCircle,
    title: 'Talk to the person on your right.',
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
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
        {steps.map(({ number, icon: Icon, title }) => (
          <div
            key={number}
            className="relative min-h-[19rem] overflow-hidden rounded-[1.75rem] border border-amber-500/20 bg-gradient-to-br from-amber-50/85 via-white to-white p-8 shadow-[0_18px_60px_-44px_rgba(245,158,11,0.65)]"
          >
            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-amber-400/15 blur-2xl" />
            <div className="relative flex h-full flex-col justify-between gap-10">
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30">
                  <Icon className="h-7 w-7" strokeWidth={2.2} />
                </span>
                <span className="font-mono text-sm font-semibold uppercase tracking-[0.32em] text-amber-700">
                  Step {number}
                </span>
              </div>
              <p className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl">
                {title}
              </p>
            </div>
          </div>
        ))}
      </div>

    </AlphalistFrame>
  );
}
