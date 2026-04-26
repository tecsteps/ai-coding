'use client';

import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { BlurFade } from '@/components/ui/blur-fade';
import { MessageSquareText, Gauge, ShieldCheck } from 'lucide-react';
import { AlphalistFrame } from '../AlphalistFrame';

const FEEDBACK_URL = 'https://alphalist-cto-bootcamp.agentic-engineers.dev';

interface Props {
  index: number;
  total: number;
}

const features = [
  {
    icon: MessageSquareText,
    title: 'Anonymous feedback',
    description: '1–5 rating plus a comment, per session.',
  },
  {
    icon: ShieldCheck,
    title: 'Overall takeaways',
    description: 'Optional summary input at the end of Day 2.',
  },
  {
    icon: Gauge,
    title: 'Organizer dashboard',
    description: 'Private view, live results, no fluff.',
  },
];

export function D01_DemoWhat({ index, total }: Props) {
  const [qrSvg, setQrSvg] = useState<string>('');

  useEffect(() => {
    QRCode.toString(FEEDBACK_URL, {
      type: 'svg',
      errorCorrectionLevel: 'M',
      margin: 1,
      color: { dark: '#047857', light: '#0000' },
    }).then(setQrSvg);
  }, []);

  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="60 min · 11:00"
      title="Live Coding: Bootcamp Feedback Tool."
    >
      <div className="grid w-full grid-cols-1 items-stretch gap-10 md:grid-cols-[1.5fr_1fr]">
        <div className="flex flex-col gap-8">
          <BlurFade delay={0.35} duration={0.6}>
            <div className="inline-flex items-center gap-3 self-start rounded-full border border-emerald-600/30 bg-emerald-50 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-700">
                Deployed today · live in 60 min
              </span>
            </div>
          </BlurFade>

          <BlurFade delay={0.5} duration={0.6}>
            <p className="text-xl leading-snug text-slate-700 md:text-2xl">
              Built and shipped during this session.{' '}
              <span className="text-slate-900">You scan it the moment we&apos;re done.</span>
            </p>
          </BlurFade>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <BlurFade key={f.title} delay={0.7 + i * 0.1} duration={0.5}>
                  <div className="flex h-full flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
                      <Icon className="h-4 w-4 text-emerald-600" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{f.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {f.description}
                      </p>
                    </div>
                  </div>
                </BlurFade>
              );
            })}
          </div>

          <BlurFade delay={1.05} duration={0.6}>
            <div className="mt-auto flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-slate-200 pt-5">
              <Meta label="Stack" value="Laravel · React · Postgres" />
              <Meta label="Deploy" value="alphalist-cto-bootcamp.agentic-engineers.dev" mono />
            </div>
          </BlurFade>
        </div>

        <div className="flex flex-col items-center justify-center">
          <BlurFade delay={0.6} duration={0.7}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-emerald-200/60 via-emerald-100/40 to-transparent blur-xl" />
              <div className="relative flex h-72 w-72 items-center justify-center rounded-3xl border border-emerald-600/20 bg-white p-5 shadow-[0_20px_60px_-30px_rgba(5,150,105,0.45)]">
                {qrSvg ? (
                  <div
                    className="h-full w-full [&_svg]:h-full [&_svg]:w-full"
                    aria-label="QR code linking to the bootcamp feedback tool"
                    dangerouslySetInnerHTML={{ __html: qrSvg }}
                  />
                ) : (
                  <div className="h-full w-full animate-pulse rounded-lg bg-slate-100" />
                )}
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={0.85} duration={0.5}>
            <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.35em] text-emerald-700">
              Scan after the demo
            </p>
          </BlurFade>
          <BlurFade delay={1} duration={0.5}>
            <p className="mt-2 text-xs text-slate-400">
              alphalist-cto-bootcamp.agentic-engineers.dev
            </p>
          </BlurFade>
        </div>
      </div>
    </AlphalistFrame>
  );
}

function Meta({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">
        {label}
      </span>
      <span
        className={`mt-1 text-sm text-slate-800 ${mono ? 'font-mono text-[13px]' : ''}`}
      >
        {value}
      </span>
    </div>
  );
}
