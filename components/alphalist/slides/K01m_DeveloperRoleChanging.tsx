'use client';

import Image from 'next/image';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

export function K01m_DeveloperRoleChanging({ index, total }: Props) {
  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total} align="center">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-7 px-6 sm:px-10 md:grid-cols-[0.72fr_1.28fr] md:px-12">
        <BlurFade delay={0.1} duration={0.7}>
          <div>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-slate-900 md:text-[4.4rem]">
              Developers are becoming{' '}
              <span className="text-rose-600">conductors</span>.
            </h1>
            <p className="mt-7 max-w-lg text-2xl leading-snug text-slate-600">
              That requires different skills than the ones most companies hired for.
            </p>
            <p className="mt-6 max-w-lg border-l-2 border-rose-600 pl-5 text-xl leading-snug text-slate-700">
              Not everyone is willing or able to make that shift.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} duration={0.7}>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_60px_-36px_rgba(15,23,42,0.45)]">
            <Image
              src="/alphalist/developer-player-conductor.png"
              alt="Developer role changing from player writing code to conductor orchestrating AI agents"
              width={1523}
              height={908}
              className="h-auto max-h-[68vh] w-full object-contain"
              priority
            />
          </div>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}
