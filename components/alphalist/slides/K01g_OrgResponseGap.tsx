'use client';

import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const priorities = [
  { label: 'Evaluating & verifying AI-generated code', value: 41 },
  { label: 'Orchestrating and directing agents', value: 35 },
  { label: 'Traditional systems skills', value: 34 },
  { label: 'Product judgment', value: 34 },
  { label: 'Traditional coding', value: 31 },
  { label: 'Cross-functional communication', value: 22 },
  { label: 'Writing specs', value: 14 },
];

export function K01g_OrgResponseGap({ index, total }: Props) {
  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total}>
      <div className="grid w-full items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <BlurFade delay={0.1} duration={0.7}>
          <div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-slate-900 md:text-[4.25rem]">
              Orgs know the role is changing.
              <br />
              <span className="text-rose-600">Almost none changed the org.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-2xl leading-snug text-slate-600">
              Leaders are hiring for judgment, orchestration, and verification.
              But only 19 respondents changed role definitions and only 15
              changed onboarding.
            </p>
            <p className="mt-10 max-w-xl text-sm leading-relaxed text-slate-400">
              Source: Augment Code, <span className="italic">The State of AI-Native Engineering in 2026</span>,
              p. 13.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.25} duration={0.7}>
          <div className="rounded-2xl border border-slate-200 bg-white px-7 py-6 shadow-[0_18px_54px_-34px_rgba(15,23,42,0.35)]">
            <div className="mb-6 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                  Hiring priorities
                </p>
                <p className="mt-2 text-lg text-slate-500">
                  What leaders now value most
                </p>
              </div>
              <p className="font-mono text-sm text-slate-400">respondents</p>
            </div>

            <div className="space-y-3">
              {priorities.map((priority) => (
                <PriorityRow key={priority.label} {...priority} />
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}

function PriorityRow({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  const max = priorities[0].value;
  const width = Math.max(8, Math.round((value / max) * 100));

  return (
    <div className="grid grid-cols-[15.5rem_1fr_2.5rem] items-center gap-4">
      <p className="text-sm font-medium leading-tight text-slate-700">
        {label}
      </p>
      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-emerald-600"
          style={{ width: `${width}%` }}
        />
      </div>
      <p className="text-right font-mono text-sm font-semibold text-slate-900">
        {value}
      </p>
    </div>
  );
}
