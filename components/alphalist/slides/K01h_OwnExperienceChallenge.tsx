'use client';

import Image from 'next/image';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

export function K01h_OwnExperienceChallenge({ index, total }: Props) {
  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total} align="center">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 sm:px-10 md:px-12">
        <BlurFade delay={0.1} duration={0.7}>
          <div className="mb-5 flex items-end justify-between gap-8">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Often missing:{' '}
              <span className="text-rose-600">Own hands-on experience</span>.
            </h1>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} duration={0.7}>
          <div className="grid items-center gap-8 md:grid-cols-[1fr_21rem]">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_60px_-36px_rgba(15,23,42,0.45)]">
              <Image
                src="/alphalist/own-experience-ai-native-workflow.png"
                alt="Manager asks engineers to transition to an AI-native workflow while nobody can explain what it means"
                width={1600}
                height={900}
                className="h-auto max-h-[62vh] w-full object-contain"
                priority
              />
            </div>

            <div className="flex items-center">
              <div className="relative border-l-4 border-rose-600 pl-7">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-rose-600">
                  First-time challenge
                </p>
                <p className="text-3xl font-semibold leading-tight tracking-tight text-slate-900">
                  No leader has years of hands-on experience leading an{' '}
                  <span className="text-rose-600">Agentic Engineering</span>{' '}
                  transformation.
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}
