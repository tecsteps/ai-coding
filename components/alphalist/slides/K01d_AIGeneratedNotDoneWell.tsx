'use client';

import Image from 'next/image';
import { CircleHelp, ShieldAlert, TrendingUp } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const issues = [
  {
    icon: TrendingUp,
    title: 'Productivity plateau',
    body: 'Basic prompting patterns leave a lot of the potential untouched.',
  },
  {
    icon: CircleHelp,
    title: 'Low comprehension',
    body: 'Teams generate code faster than they can truly understand it.',
  },
  {
    icon: ShieldAlert,
    title: 'Vibe coding risk',
    body: 'Speed without structure creates rework, fragility, and hidden defects.',
  },
];

export function K01d_AIGeneratedNotDoneWell({ index, total }: Props) {
  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total}>
      <div className="grid w-full items-stretch gap-10 md:grid-cols-[0.96fr_1.04fr]">
        <BlurFade delay={0.1} duration={0.7}>
          <div className="flex h-full flex-col justify-center">
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-slate-900 md:text-[4rem]">
              An <span className="text-emerald-600">AI-generated</span> result
              doesn&apos;t mean done well.
            </h1>

            <div className="mt-9 w-full max-w-3xl">
              <Image
                src="/alphalist/ai-generated-pipeline.png"
                alt="Code moving through an AI generation pipeline into an approved output"
                width={760}
                height={240}
                className="h-auto max-h-44 w-full object-contain object-left"
                priority
              />
            </div>

            <div className="mt-4 flex justify-center">
              <Image
                src="/alphalist/more-output-note.png"
                alt="More output does not equal better engineering."
                width={470}
                height={60}
                className="h-auto max-h-12 w-[24rem] max-w-full object-contain"
              />
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.25} duration={0.7}>
          <div className="flex h-full flex-col justify-center border-l-2 border-slate-200 pl-9">
            <div className="space-y-3">
              {issues.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="grid grid-cols-[4.5rem_1fr] items-center gap-5 rounded-xl border border-slate-200 bg-white/85 px-5 py-4 shadow-[0_10px_32px_-22px_rgba(15,23,42,0.28)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                    <Icon className="h-8 w-8 text-emerald-600" strokeWidth={1.7} />
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-5">
                    <p className="text-xl font-semibold leading-tight text-slate-900">
                      {title}
                    </p>
                    <p className="mt-1 text-base leading-snug text-slate-600">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}
