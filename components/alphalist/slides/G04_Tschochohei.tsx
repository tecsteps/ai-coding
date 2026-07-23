'use client';

import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

export function G04_Tschochohei({ index, total }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="Day 2 · 09:00 · Fireside Chat"
      title={
        <>
          Fireside Chat:{' '}
          <span className="text-emerald-600">Max Tschochohei (Google Cloud)</span> + Q&amp;A
        </>
      }
    >
      <div className="grid w-full grid-cols-1 gap-7 md:grid-cols-[21rem_1fr] md:gap-9 md:pl-12">
        <BlurFade delay={0.15} duration={0.6}>
          <aside className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_24px_70px_-46px_rgba(15,23,42,0.65)]">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/alphalist/guests/max-tschochohei.jpg"
                alt="Max Tschochohei"
                fill
                sizes="(min-width: 768px) 21rem, 18rem"
                className="object-cover"
              />
            </div>
            <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-4">
              <p className="text-2xl font-semibold text-slate-900">Max Tschochohei</p>
              <p className="mt-1 text-base text-slate-500">Director, AI Practice EMEA</p>
              <p className="mt-1 text-base font-semibold text-emerald-600">Google Cloud</p>
              <a
                href="https://www.linkedin.com/in/maxtsc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex max-w-full items-center gap-1.5 text-sm font-medium text-[#0A66C2] hover:underline"
              >
                <Linkedin className="h-4 w-4" strokeWidth={2} />
                <span className="truncate">linkedin.com/in/maxtsc</span>
              </a>
            </div>
          </aside>
        </BlurFade>

        <BlurFade delay={0.3} duration={0.6}>
          <section className="flex h-full flex-col justify-center rounded-[1.75rem] border border-emerald-600/15 bg-gradient-to-br from-emerald-50/80 via-white to-white p-8 shadow-[0_24px_80px_-56px_rgba(16,185,129,0.55)]">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.34em] text-emerald-600">
              Speaker Bio
            </p>
            <p className="mt-5 max-w-4xl text-2xl leading-snug text-slate-700">
              Max leads the AI Practice for EMEA at Google Cloud, helping customers adopt
              AI infrastructure and Cloud AI across the region.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Stat label="Company" value="Google Cloud" />
              <Stat label="Role" value="Director, AI Practice EMEA" />
              <Stat label="Focus" value="AI Infrastructure · Cloud AI" />
            </div>
          </section>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-emerald-600/10 bg-white/80 px-4 py-4 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.5)]">
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-600">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-slate-800">{value}</p>
    </div>
  );
}
