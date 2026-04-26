'use client';

import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';
import { useReveal } from '../useReveal';

interface Props {
  index: number;
  total: number;
}

export function K13_VerificationCost({ index, total }: Props) {
  const step = useReveal(2);

  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="The bottleneck moved"
      title={
        <>
          <span className="text-emerald-600">Code creation</span>
          <br />
          is free.
        </>
      }
    >
      <div className="w-full">
        {step >= 1 && (
          <BlurFade duration={0.7}>
            <h2 className="mt-12 text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 md:text-7xl">
              <span className="text-rose-600">Verification</span>
              <br />
              is the new cost center.
            </h2>
          </BlurFade>
        )}

        {step >= 2 && (
          <BlurFade duration={0.6}>
            <p className="mt-14 max-w-2xl text-base text-slate-500">
              If you spent the last decade optimizing dev capacity, you optimized the wrong constraint. Plan accordingly.
            </p>
          </BlurFade>
        )}
      </div>
    </AlphalistFrame>
  );
}
