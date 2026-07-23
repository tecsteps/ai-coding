'use client';

import Image from 'next/image';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

export function K01k_ExpectationsAndEmotions({ index, total }: Props) {
  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total} align="center">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 sm:px-10 md:px-12">
        <BlurFade delay={0.1} duration={0.7}>
          <div className="mb-4">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-[2.9rem]">
              Management is <span className="text-emerald-600">excited</span>.
              <br />
              Teams are <span className="text-rose-600">concerned</span>.
            </h1>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} duration={0.7}>
          <div className="grid items-stretch gap-6 md:grid-cols-[1fr_19rem]">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_60px_-36px_rgba(15,23,42,0.45)]">
              <Image
                src="/alphalist/excitement-vs-concern.png"
                alt="Management presents AI-native transformation while team members privately worry about skills, seniority, and future roles"
                width={1400}
                height={900}
                className="h-auto max-h-[55vh] w-full object-contain"
                priority
              />
            </div>

            <div className="flex items-center border-l-4 border-rose-600 pl-6">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-rose-600">
                  Challenge
                </p>
                <p className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 md:text-[1.7rem]">
                  This change is as much about managing{' '}
                  <span className="text-rose-600">expectations and emotions</span>{' '}
                  as it is about tools.
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}
