'use client';

import { AlphalistFrame } from '../AlphalistFrame';
import { useReveal } from '../useReveal';

interface Props {
  index: number;
  total: number;
}

type Tone = 'amber' | 'emerald' | 'slate';

const tiers: { label: string; value: string; tone: Tone }[] = [
  { label: 'License only', value: '+30%', tone: 'amber' },
  { label: 'Agentic Engineering', value: '3 – 10×', tone: 'emerald' },
  { label: 'Technically possible', value: '∞', tone: 'slate' },
];

const valueColor: Record<Tone, string> = {
  amber: 'text-amber-600',
  emerald: 'text-emerald-600',
  slate: 'text-slate-900',
};

export function K12_ProductivityRange({ index, total }: Props) {
  const step = useReveal(tiers.length);

  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="Is it worth the effort?"
      title="What is the impact of AI in IT?"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col">
        {tiers.map((tier, i) => {
          const open = step > i;
          return (
            <div
              key={tier.label}
              className={`flex items-baseline justify-between gap-8 border-b border-slate-200 py-8 transition-all duration-500 ${
                open ? 'opacity-100' : 'opacity-15'
              }`}
            >
              <span
                className={`font-semibold tracking-tight ${valueColor[tier.tone]}`}
                style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)', lineHeight: 1 }}
              >
                {tier.value}
              </span>
              <span className="text-right text-base font-medium uppercase tracking-[0.25em] text-slate-500 md:text-lg">
                {tier.label}
              </span>
            </div>
          );
        })}
      </div>
    </AlphalistFrame>
  );
}
