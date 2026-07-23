'use client';

import Image from 'next/image';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

export function K01oa_DeprecatedITOrg({ index, total }: Props) {
  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total} align="center">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 sm:px-10 md:grid-cols-[0.48fr_1fr] md:px-12">
        <BlurFade delay={0.1} duration={0.7}>
          <section>
            <h1 className="text-5xl font-semibold leading-[1.03] tracking-tight text-slate-900 md:text-[4.4rem]">
              The IT boundary
              <br />
              is <span className="text-rose-600">changing</span>.
            </h1>
            <p className="mt-7 max-w-lg border-l-2 border-emerald-500 pl-5 text-2xl leading-snug text-slate-700">
              When everyone can build with AI, IT cannot stay a separated
              ticket queue.
            </p>
          </section>
        </BlurFade>

        <BlurFade delay={0.2} duration={0.7}>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_60px_-36px_rgba(15,23,42,0.45)]">
            <Image
              src="/alphalist/deprecated-it-org.png"
              alt="Separated IT department contrasted with collaborative software building"
              width={1248}
              height={709}
              className="h-auto max-h-[68vh] w-full object-contain"
              priority
            />
          </div>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}
