'use client';

import Image from 'next/image';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

export function K01o_MovingTarget({ index, total }: Props) {
  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total} align="center">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-6 sm:px-10 md:grid-cols-[0.52fr_1.08fr] md:px-12">
        <BlurFade delay={0.1} duration={0.7}>
          <div>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-slate-900 md:text-[4.2rem]">
              Moving Target
            </h1>
            <p className="mt-6 max-w-lg border-l-2 border-rose-600 pl-5 text-xl leading-snug text-slate-700">
              You have to redesign the organization while new agents, models,
              and workflows keep arriving.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} duration={0.7}>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_60px_-36px_rgba(15,23,42,0.45)]">
            <Image
              src="/alphalist/moving-target-org-change.png"
              alt="CTO building an organizational change bridge while innovation keeps flowing underneath"
              width={1536}
              height={1024}
              className="h-auto max-h-[68vh] w-full object-contain"
              priority
            />
          </div>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}
