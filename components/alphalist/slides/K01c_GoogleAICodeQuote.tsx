'use client';

import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';
import { useReveal } from '../useReveal';

interface Props {
  index: number;
  total: number;
}

const sourceUrl =
  'https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/cloud-next-2026-sundar-pichai/';

export function K01c_GoogleAICodeQuote({ index, total }: Props) {
  const step = useReveal(1);

  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total} align="center">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 sm:px-10 md:grid-cols-2 md:px-12">
        <div>
          <BlurFade delay={0.1} duration={0.6}>
            <p className="mb-7 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              AI Coding is here to stay.
            </p>
          </BlurFade>

          <BlurFade delay={0.25} duration={0.7}>
            <div className="border-y border-emerald-200 py-8">
              <p className="text-xs font-medium uppercase tracking-[0.36em] text-emerald-600">
                Google, 2026
              </p>
              <div className="mt-8 flex items-start text-emerald-600">
                <span className="text-[8rem] font-semibold leading-[0.78] tracking-tight sm:text-[10rem] md:text-[11.25rem]">
                  75
                </span>
                <span className="ml-2 text-6xl font-semibold leading-none sm:text-7xl">
                  %
                </span>
              </div>
              <p className="mt-5 text-2xl font-medium leading-tight tracking-tight text-slate-900 sm:text-3xl">
                of all new code at Google is now AI-generated.
              </p>
              <div className="mt-16 border-l-2 border-slate-200 pl-6">
                <p className="text-xl font-semibold text-slate-900">
                  Sundar Pichai
                </p>
                <p className="mt-1 text-base text-slate-500">
                  CEO of Google and Alphabet
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.6} duration={0.5}>
            <p className="mt-6 text-[0.7rem] leading-snug text-slate-400">
              Source:{' '}
              <span className="text-slate-500">Google Cloud Next 2026</span>{' '}
              <span className="break-all">{sourceUrl}</span>
            </p>
          </BlurFade>
        </div>

        <div
          className={`transition-all duration-500 ${
            step >= 1
              ? 'translate-y-0 opacity-100'
              : 'translate-y-4 opacity-0'
          }`}
        >
          <h2 className="text-5xl font-semibold italic leading-[1.02] tracking-tight text-slate-700 md:text-6xl">
            What’s your company’s AI-generated code share?
          </h2>
        </div>
      </div>
    </AlphalistFrame>
  );
}
