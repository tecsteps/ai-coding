'use client';

import Image from 'next/image';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

export function K01p_TheDifferenceChoice({ index, total }: Props) {
  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total} align="center">
      <div className="mx-auto grid w-full max-w-[88rem] items-center gap-5 px-6 sm:px-10 md:grid-cols-[0.68fr_1fr] md:px-12">
        <BlurFade delay={0.1} duration={0.7}>
          <div>
            <h1 className="text-5xl font-semibold leading-[1.03] tracking-tight text-slate-900 md:text-[4rem]">
              The difference?
              <br />
              <span className="text-emerald-600">Who starts now.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.65rem] leading-snug text-slate-600">
              Not talent. Not seniority. The people who lean in turn the{' '}
              <span className="font-semibold text-rose-600">threat</span> into their{' '}
              <span className="font-semibold text-emerald-600">advantage</span>.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} duration={0.7}>
          <div className="-ml-16 flex min-h-[58vh] items-center justify-end overflow-visible">
            <Image
              src="/alphalist/difference-choice-path.png"
              alt="Decision path: lean in creates opportunity, wait and see becomes a threat"
              width={1448}
              height={1086}
              className="h-[66vh] max-h-[32rem] w-auto max-w-none object-contain"
              priority
            />
          </div>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}
