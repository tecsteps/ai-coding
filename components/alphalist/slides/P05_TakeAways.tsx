'use client';

import Image from 'next/image';
import { Building2, Route } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const takeaways = [
  {
    icon: Building2,
    number: '01',
    kicker: 'The destination',
    label: (
      <>
        What your future
        <br />
        IT org looks like.
      </>
    ),
    image: '/alphalist/take-home-destination.png',
    imageAlt: 'Future IT organization illustrated as connected buildings',
    imageClass: 'bottom-8 right-7 w-[29%] max-w-[13rem]',
  },
  {
    icon: Route,
    number: '02',
    kicker: 'The path',
    label: (
      <>
        How to transition
        <br />
        into that new state.
      </>
    ),
    image: '/alphalist/take-home-path.png',
    imageAlt: 'Transition path with milestones and a flag',
    imageClass: 'bottom-0 right-0 w-[37%] max-w-[16rem]',
  },
];

export function P05_TakeAways({ index, total }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      title={
        <>
          What we want you to <span className="text-emerald-600">take home</span>.
        </>
      }
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col">
        <BlurFade delay={0.2} duration={0.7}>
          <div className="grid w-full grid-cols-1 gap-7 md:grid-cols-2">
            {takeaways.map((t) => {
              const Icon = t.icon;
              return (
                <section
                  key={t.kicker}
                  className="relative min-h-[20rem] overflow-hidden rounded-2xl border border-emerald-200 bg-white/86 p-8 shadow-[0_18px_60px_-42px_rgba(16,185,129,0.42)] backdrop-blur-sm md:min-h-[22.5rem] md:p-10"
                >
                  <span
                    aria-hidden
                    className="absolute right-8 top-8 font-mono text-2xl font-semibold tracking-[0.12em] text-emerald-600"
                  >
                    {t.number}
                  </span>
                  <span
                    aria-hidden
                    className="absolute right-8 top-[4.4rem] h-px w-7 bg-emerald-300"
                  />

                  <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-50">
                    <Icon className="h-10 w-10 text-emerald-600" strokeWidth={1.6} />
                  </div>

                  <div className="relative z-10 max-w-[21rem]">
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-slate-400">
                      {t.kicker}
                    </p>
                    <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-slate-900 md:text-[2.65rem]">
                      {t.label}
                    </h2>
                  </div>

                  <Image
                    src={t.image}
                    alt={t.imageAlt}
                    width={420}
                    height={320}
                    className={`pointer-events-none absolute z-0 h-auto object-contain ${t.imageClass}`}
                  />
                </section>
              );
            })}
          </div>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}
