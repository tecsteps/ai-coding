'use client';

import { PenLine } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const slots = ['01', '02', '03'];

export function P05aa_EmotionCheck({ index, total }: Props) {
  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total} align="center">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 sm:px-10 md:grid-cols-[0.95fr_1.05fr] md:px-12">
        <BlurFade delay={0.1} duration={0.7}>
          <section>
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
              <PenLine className="h-8 w-8" strokeWidth={1.8} />
            </div>
            <h1 className="text-5xl font-semibold leading-[1.03] tracking-tight text-slate-900 md:text-[4.7rem]">
              Write down
              <br />
              three words
              <br />
              <span className="text-emerald-600">(emotions)</span>.
            </h1>
          </section>
        </BlurFade>

        <BlurFade delay={0.25} duration={0.7}>
          <section className="rounded-3xl border border-emerald-600/15 bg-gradient-to-br from-emerald-50/80 via-white to-white p-8 shadow-[0_18px_60px_-42px_rgba(16,185,129,0.45)] md:p-10">
            <p className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl">
              How do you feel about introducing AI into your IT organisation?
            </p>
            <div className="mt-10 grid gap-4">
              {slots.map((slot) => (
                <div
                  key={slot}
                  className="flex min-h-[4.9rem] items-center gap-5 rounded-2xl border border-slate-200 bg-white px-6"
                >
                  <span className="font-mono text-lg font-semibold tracking-[0.14em] text-emerald-600">
                    {slot}
                  </span>
                  <span className="h-px flex-1 bg-slate-200" />
                </div>
              ))}
            </div>
          </section>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}
