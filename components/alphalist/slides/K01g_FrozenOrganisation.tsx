'use client';

import Image from 'next/image';
import {
  BarChart3,
  Bot,
  Eye,
  FastForward,
  MessageSquare,
  Network,
  UserRound,
  Wrench,
} from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';
import { useReveal } from '../useReveal';

interface Props {
  index: number;
  total: number;
}

const moving = [
  { icon: Bot, label: 'AI-generated code' },
  { icon: BarChart3, label: 'Speed & output' },
];

const frozen = [
  'Org structure & roles',
  'Onboarding',
  'Code review & specs',
  'Hiring & career ladders',
  'Productivity measures',
];

const blockers = [
  {
    icon: Wrench,
    title: 'They treat AI as a tool, not an operating model change',
  },
  {
    icon: Eye,
    title: 'They see the risk, but only adjust code review',
  },
  {
    icon: UserRound,
    title: 'Role definitions are outdated',
  },
  {
    icon: MessageSquare,
    title: 'They avoid the people conversation',
  },
  {
    icon: FastForward,
    title: 'They move too fast to pause',
  },
  {
    icon: Network,
    title: 'No shared definition of “AI-native”',
  },
];

export function K01g_FrozenOrganisation({ index, total }: Props) {
  const step = useReveal(1);

  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total} align="center">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 sm:px-10 md:px-12">
        <BlurFade delay={0.15} duration={0.8}>
          <div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              The <span className="text-sky-600">Frozen</span> Org
            </h1>
          </div>
        </BlurFade>

        <BlurFade delay={0.25} duration={0.7}>
          <div className="mt-6 grid gap-9 md:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[28rem] overflow-hidden rounded-2xl bg-slate-950 shadow-[0_18px_60px_-32px_rgba(15,23,42,0.65)]">
              <Image
                src="/alphalist/frozen-org-iceberg.png"
                alt="Iceberg showing visible AI speed above the surface and frozen organizational structures below"
                fill
                sizes="45vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/76 via-slate-950/18 to-transparent" />

              <div className="absolute left-7 top-7 text-white">
                <p className="font-semibold uppercase tracking-[0.14em] text-emerald-300">
                  What&apos;s moving
                </p>
                <div className="mt-4 space-y-3">
                  {moving.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3 text-lg">
                      <Icon className="h-5 w-5 text-emerald-300" strokeWidth={1.8} />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-7 left-7 text-white">
                <p className="font-semibold uppercase tracking-[0.14em] text-amber-400">
                  What&apos;s frozen
                </p>
                <div className="mt-4 space-y-2.5">
                  {frozen.map((label) => (
                    <div key={label} className="flex items-center gap-3 text-base">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-500 ${
                step >= 1
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
            >
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                What holds leaders back
              </h2>
              <div className="mt-4 divide-y divide-slate-200">
                {blockers.map(({ icon: Icon, title }, i) => (
                  <div
                    key={title}
                    className="grid min-h-[4.8rem] grid-cols-[2.75rem_3.25rem_1fr] items-center gap-4 py-2"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 font-mono text-sm font-semibold text-emerald-700">
                      {i + 1}
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center">
                      <Icon className="h-8 w-8 text-emerald-600" strokeWidth={1.7} />
                    </div>
                    <div>
                      <p className="text-base font-semibold leading-snug text-slate-900">
                        {title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>

      </div>
    </AlphalistFrame>
  );
}
