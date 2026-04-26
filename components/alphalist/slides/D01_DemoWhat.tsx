'use client';

import { BlurFade } from '@/components/ui/blur-fade';
import { QrCode } from 'lucide-react';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const features = [
  'Anonymous per-session feedback (1–5 + comment).',
  'Optional overall feedback at the end.',
  'Private organizer dashboard.',
];

export function D01_DemoWhat({ index, total }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="Live demo · what we build"
      title="Bootcamp Feedback Tool."
    >
      <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <BlurFade delay={0.4} duration={0.6}>
            <p className="text-lg text-slate-600">
              Deployed today. You use it right after this session.
            </p>
          </BlurFade>

          <div className="mt-10 space-y-3">
            {features.map((f, i) => (
              <BlurFade key={f} delay={0.55 + i * 0.1} duration={0.5}>
                <div className="flex items-baseline gap-4">
                  <span className="text-emerald-600">▸</span>
                  <span className="text-lg text-slate-900">{f}</span>
                </div>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={1} duration={0.6}>
            <div className="mt-10 grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
              <div>
                <p className="text-[10px] text-slate-400">Stack</p>
                <p className="mt-1 text-slate-800">Laravel · Hetzner · Forge</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400">Deploy target</p>
                <p className="mt-1 break-all text-slate-800 normal-case tracking-normal">
                  alphalist-cto-bootcamp.agentic-engineers.dev
                </p>
              </div>
            </div>
          </BlurFade>
        </div>

        <div className="flex flex-col items-center justify-center">
          <BlurFade delay={0.6} duration={0.7}>
            <div className="flex h-56 w-56 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
              <QrCode className="h-32 w-32 text-emerald-600" />
            </div>
          </BlurFade>
          <BlurFade delay={0.8} duration={0.5}>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-400">
              Scan after the demo
            </p>
          </BlurFade>
        </div>
      </div>
    </AlphalistFrame>
  );
}
