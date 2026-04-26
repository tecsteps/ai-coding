'use client';

import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

export function S03a_BottleneckConclusion({ index, total }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="What we see"
      title={
        <>
          Code creation is solved. <span className="text-rose-600">Verification</span> is not.
        </>
      }
    >
      <div />
    </AlphalistFrame>
  );
}
