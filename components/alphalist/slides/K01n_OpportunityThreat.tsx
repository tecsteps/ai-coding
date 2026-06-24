'use client';

import Image from 'next/image';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

export function K01n_OpportunityThreat({ index, total }: Props) {
  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total} align="center">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-6 sm:px-10 md:grid-cols-[0.48fr_1fr] md:px-12">
        <BlurFade delay={0.1} duration={0.7}>
          <div>
            <h1 className="text-5xl font-semibold leading-[1.03] tracking-tight text-slate-900 md:text-[4rem]">
              Opportunity for some.
              <br />
              <span className="text-rose-600">Threat for others.</span>
            </h1>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} duration={0.7}>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_60px_-36px_rgba(15,23,42,0.45)]">
            <Image
              src="/alphalist/opportunity-threat-split.png"
              alt="AI transformation seen as opportunity by leaders and as threat by concerned team members"
              width={1672}
              height={941}
              className="h-auto max-h-[58vh] w-full object-contain"
              priority
            />
          </div>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}
