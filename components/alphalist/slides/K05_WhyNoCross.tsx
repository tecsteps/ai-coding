'use client';

import { AlphalistFrame } from '../AlphalistFrame';
import { useReveal } from '../useReveal';

interface Props {
  index: number;
  total: number;
}

const reasons = [
  'They do not want to substitute themselves.',
  'They are afraid.',
  'They have to leave their comfort zone.',
  'They do not trust AI.',
  'Some are simply skeptical.',
];

export function K05_WhyNoCross({ index, total }: Props) {
  const step = useReveal(reasons.length);

  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="Why developers don't cross the gap"
      title={
        <>
          This is not a tooling problem.
          <br />
          <span className="text-rose-600">It is a mindset problem.</span>
        </>
      }
    >
      <div className="w-full">
        <ol className="space-y-5">
          {reasons.map((r, i) => (
            <li
              key={i}
              className={`flex items-baseline gap-6 transition-all duration-500 ${
                step > i ? 'opacity-100 translate-x-0' : 'opacity-20 -translate-x-2'
              }`}
            >
              <span className="font-mono text-sm tabular-nums text-emerald-600">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-2xl font-light text-slate-900 md:text-3xl">{r}</span>
            </li>
          ))}
        </ol>
      </div>
    </AlphalistFrame>
  );
}
