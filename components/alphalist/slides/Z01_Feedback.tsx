'use client';

import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

const FEEDBACK_URL = 'https://alphalist-cto-bootcamp.agentic-engineers.dev';

interface Props {
  index: number;
  total: number;
}

export function Z01_Feedback({ index, total }: Props) {
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
      align="center"
    >
      <div className="flex w-full flex-col items-center justify-center gap-4 px-6">
        <BlurFade delay={0.25} duration={0.7}>
          <h1 className="text-center text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-[2.8rem]">
            Tell us what worked.
          </h1>
        </BlurFade>

        <BlurFade delay={0.45} duration={0.7}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-emerald-200/60 via-emerald-100/40 to-transparent blur-2xl" />
            <div className="relative flex h-[19rem] w-[19rem] items-center justify-center rounded-[2rem] border border-emerald-600/20 bg-white p-6 shadow-[0_30px_80px_-30px_rgba(5,150,105,0.5)] md:h-[22rem] md:w-[22rem] md:p-7">
              {qrSvg ? (
                <div
                  className="h-full w-full [&_svg]:h-full [&_svg]:w-full"
                  aria-label="QR code linking to the bootcamp feedback tool"
                  dangerouslySetInnerHTML={{ __html: qrSvg }}
                />
              ) : (
                <div className="h-full w-full animate-pulse rounded-2xl bg-slate-100" />
              )}
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.7} duration={0.6}>
          <a
            href={FEEDBACK_URL}
            className="font-mono text-lg tracking-tight text-emerald-700 underline-offset-8 hover:underline md:text-xl"
          >
            alphalist-cto-bootcamp.agentic-engineers.dev
          </a>
        </BlurFade>

        <BlurFade delay={0.9} duration={0.5}>
          <p className="text-center text-sm text-slate-500 md:text-base">
            Anonymous · 30 seconds · per session and overall.
          </p>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}
