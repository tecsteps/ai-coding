'use client';

import Image from 'next/image';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

export function K01f_FuzzyPath({ index, total }: Props) {
  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total} align="center">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 sm:px-10 md:px-12">
        <BlurFade delay={0.1} duration={0.7}>
          <div className="mb-6 flex items-end justify-between gap-8">
            <div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
                Introducing Agentic Engineering{' '}
                <span className="text-rose-600">is hard.</span>
              </h1>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} duration={0.7}>
          <div className="flex w-full justify-center">
          <Image
            src="/alphalist/fuzzy-path-10x-v2.png"
            alt="A path from first workshop through fuzzy organizational changes to a high-performing IT organization at more than 10x speed"
            width={1050}
            height={690}
            className="h-auto max-h-[66vh] w-full object-contain"
            priority
          />
          </div>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}
