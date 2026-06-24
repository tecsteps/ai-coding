'use client';

import Image from 'next/image';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

export function K01j_CodeReviewTradeoff({ index, total }: Props) {
  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total} align="center">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-9 px-6 sm:px-10 md:grid-cols-[0.78fr_1.22fr] md:px-12">
        <BlurFade delay={0.1} duration={0.7}>
          <div>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-slate-900 md:text-[4.6rem]">
              Code Review
              <br />
              <span className="text-rose-600">Bottleneck</span>
            </h1>
            <p className="mt-7 max-w-xl text-2xl leading-snug text-slate-600">
              Reading every line of generated code protects comprehension, but
              it destroys the speed agents create.
            </p>
            <p className="mt-7 max-w-xl border-l-2 border-emerald-500 pl-5 text-xl leading-snug text-slate-700">
              For developers, this is a target conflict: move fast and stay
              accountable.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} duration={0.7}>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_60px_-36px_rgba(15,23,42,0.45)]">
            <Image
              src="/alphalist/code-review-tradeoff.png"
              alt="Developer facing two paths: move fast with agents or review everything deeply"
              width={1254}
              height={1080}
              className="h-auto max-h-[68vh] w-full object-contain"
              priority
            />
          </div>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}
