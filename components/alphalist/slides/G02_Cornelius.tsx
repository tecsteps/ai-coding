'use client';

import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

export function G02_Cornelius({ index, total }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="Day 2 · 13:00 · Fireside Chat"
      title={
        <>
          Fireside Chat:{' '}
          <span className="text-emerald-600">Ernst-Cornelius Koch (Google)</span> + Q&amp;A
        </>
      }
    >
      <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-[18rem_1fr] md:gap-12">
        <BlurFade delay={0.15} duration={0.6}>
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="relative aspect-square w-56 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm md:w-72">
              <Image
                src="/alphalist/guests/cornelius.png"
                alt="Ernst-Cornelius Koch"
                fill
                sizes="(min-width: 768px) 18rem, 14rem"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-center gap-1 md:items-start">
              <p className="text-2xl font-semibold text-slate-900">Ernst-Cornelius Koch</p>
              <p className="text-base text-slate-500">Head of Generative AI</p>
              <p className="text-base font-semibold text-emerald-600">Google</p>
              <a
                href="https://www.linkedin.com/in/ernst-cornelius-koch"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-[#0A66C2] hover:underline"
              >
                <Linkedin className="h-4 w-4" strokeWidth={2} />
                linkedin.com/in/ernst-cornelius-koch
              </a>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.3} duration={0.6}>
          <div className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-slate-700 md:text-xl">
              An inside view from the person leading Google&apos;s Generative AI practice
              in EMEA. How a hyperscaler rolls out agentic engineering across IT, where
              agents are showing up beyond development, and what is actually working.
            </p>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              We will also zoom out to Cornelius&apos; perspective on where AI and agents
              are heading, and what this means for the future of work.
            </p>

            <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Stat label="Role" value="Head of Generative AI" />
              <Stat label="Based in" value="Berlin · Google" />
              <Stat label="Education" value="ETH Zürich" />
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