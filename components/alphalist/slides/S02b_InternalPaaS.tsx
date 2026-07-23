'use client';

import { BlurFade } from '@/components/ui/blur-fade';
import {
  Rocket,
  ShieldCheck,
  ScrollText,
  KeyRound,
  Activity,
  MoreHorizontal,
  type LucideIcon,
} from 'lucide-react';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const questions: { icon: LucideIcon; q: string; sub: string }[] = [
  {
    icon: Rocket,
    q: 'How do we deploy?',
    sub: 'From dev laptop to production, on demand.',
  },
  {
    icon: ShieldCheck,
    q: 'How do we keep data from leaking?',
    sub: 'Tenant isolation, PII boundaries, prompts.',
  },
  {
    icon: ScrollText,
    q: 'How do we stay compliant?',
    sub: 'Audit trails, model usage, residency.',
  },
  {
    icon: KeyRound,
    q: 'How do we manage access and secrets?',
    sub: 'Identities, scopes, rotation at scale.',
  },
  {
    icon: Activity,
    q: 'How do we monitor and pay for it?',
    sub: 'Tokens, latency, cost per feature.',
  },
  {
    icon: MoreHorizontal,
    q: 'And many more',
    sub: 'New questions every week.',
  },
];

export function S02b_InternalPaaS({ index, total }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="The question we now have"
      title={
        <>
          Where does all of this{' '}
          <span className="text-emerald-600">run</span>?
        </>
      }
    >
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {questions.map(({ icon: Icon, q, sub }, i) => (
          <BlurFade key={q} delay={0.4 + i * 0.08} duration={0.5}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-emerald-600/15 bg-gradient-to-br from-emerald-50/70 via-white to-white p-5 shadow-[0_6px_24px_-12px_rgba(16,185,129,0.35)] transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-[0_12px_36px_-12px_rgba(16,185,129,0.45)]">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-500/30">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <div className="min-w-0">
                  <p className="text-lg font-semibold leading-snug text-slate-900 md:text-xl">
                    {q}
                  </p>
                  <p className="mt-1 text-sm text-slate-500 md:text-base">{sub}</p>
                </div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </AlphalistFrame>
  );
}
