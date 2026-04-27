'use client';

import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

export function K00_AboutMe({ index, total }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="About me"
      title={
        <>
          <span className="text-emerald-600">Fabian Wesner</span>
        </>
      }
    >
      <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-[18rem_1fr] md:gap-12">
        <BlurFade delay={0.15} duration={0.6}>
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="relative aspect-square w-56 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm md:w-72">
              <Image
                src="/alphalist/hosts/fabian-wesner.jpg"
                alt="Fabian Wesner"
                fill
                sizes="(min-width: 768px) 18rem, 14rem"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-center gap-1 md:items-start">
              <p className="text-2xl font-semibold text-slate-900">Fabian Wesner</p>
              <p className="text-base text-slate-500">CTO &amp; Entrepreneur</p>
              <p className="text-base font-semibold text-emerald-600">
                Agentic Engineering Coach
              </p>
              <a
                href="https://www.linkedin.com/in/fabian-wesner/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-[#0A66C2] hover:underline"
              >
                <Linkedin className="h-4 w-4" strokeWidth={2} />
                linkedin.com/in/fabian-wesner
              </a>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.3} duration={0.6}>
          <div className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
              Solopreneur and Agentic Engineering coach. I help engineering leaders
              and teams shift from writing code by hand to orchestrating agents that
              build, test and ship software.
            </p>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              Two decades on the builder side of the table: scaling products,
              architecting platforms, and growing engineering organizations.
            </p>

            <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Stat label="Career" value="Tech Co-Founder Spryker & ROQ" />
              <Stat label="Past" value="CTO Rocket Internet · Project A" />
              <Stat label="Now" value="Agentic Engineering Coach" />
            </div>
          </div>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3">
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-slate-800">{value}</p>
    </div>
  );
}
