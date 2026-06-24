'use client';

import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

export function K01b_OrganizationalImpact({ index, total }: Props) {
  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total} align="center">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start px-6 sm:px-10 md:px-12">
        <BlurFade delay={0.25} duration={0.8}>
          <h1 className="text-4xl font-semibold leading-[0.98] tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-[5.8rem]">
            The Challenges of
            <br />
            <span className="text-rose-600">Agentic Engineering</span>
            <br />
            Adoption
          </h1>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}
