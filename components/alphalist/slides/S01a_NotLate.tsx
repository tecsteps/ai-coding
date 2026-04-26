'use client';

import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

export function S01a_NotLate({ index, total }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="You are not late"
      title={
        <>
          Most of the curve is{' '}
          <span className="text-emerald-600">still ahead.</span>
        </>
      }
    >
      <div className="w-full">
        <BlurFade delay={0.3} duration={0.6}>
          <div
            className="relative mx-auto w-full"
            style={{ maxWidth: '1100px', height: 'min(60vh, 540px)' }}
          >
            {/* Y-axis label */}
            <div className="absolute -left-2 top-1/2 -translate-y-1/2">
              <span
                className="block whitespace-nowrap text-sm font-medium text-slate-400 md:text-base"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                Capability
              </span>
            </div>

            <div className="relative ml-10 h-full w-[calc(100%-2.5rem)]">
              {/* Grid */}
              <div className="absolute inset-0">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={`h-${i}`}
                    className="absolute w-full border-t border-slate-200/80"
                    style={{ top: `${i * 25}%` }}
                  />
                ))}
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={`v-${i}`}
                    className="absolute h-full border-l border-slate-200/80"
                    style={{ left: `${i * 25}%` }}
                  />
                ))}
              </div>

              {/* Axes */}
              <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-slate-300" />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-300" />

              <svg
                className="absolute inset-0 h-full w-full overflow-visible"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="alpa-curve" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(16,185,129)" />
                    <stop offset="60%" stopColor="rgb(20,184,166)" />
                    <stop offset="100%" stopColor="rgb(244,63,94)" />
                  </linearGradient>
                  <linearGradient id="alpa-area" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(16,185,129,0.30)" />
                    <stop offset="100%" stopColor="rgba(16,185,129,0.02)" />
                  </linearGradient>
                </defs>

                <path
                  d="M 0 100 C 5 99, 10 98, 15 96 C 20 94, 25 90, 30 84 C 40 70, 50 50, 60 30 C 70 15, 80 5, 90 1 L 90 1 L 100 0 L 100 100 Z"
                  fill="url(#alpa-area)"
                />
                <path
                  d="M 0 100 C 5 99, 10 98, 15 96 C 20 94, 25 90, 30 84 C 40 70, 50 50, 60 30 C 70 15, 80 5, 90 1 L 100 0"
                  fill="none"
                  stroke="url(#alpa-curve)"
                  strokeWidth="3"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* "We are here" pulse */}
              <div className="absolute z-10" style={{ left: '15%', bottom: '4%' }}>
                <div className="relative">
                  <div className="absolute -inset-4 animate-ping rounded-full bg-emerald-500/30" />
                  <div className="absolute -inset-3 rounded-full bg-emerald-500/20" />
                  <div className="relative h-5 w-5 rounded-full border-2 border-white bg-emerald-600 shadow-lg shadow-emerald-500/40 md:h-6 md:w-6" />
                </div>
                <div className="absolute left-9 top-1/2 -translate-y-1/2 whitespace-nowrap">
                  <div className="rounded-xl border border-emerald-600/30 bg-white/95 px-4 py-2 shadow-md backdrop-blur">
                    <span className="text-sm font-bold text-emerald-700 md:text-base">
                      We are here
                    </span>
                  </div>
                </div>
              </div>

              {/* Future note */}
              <div className="absolute z-10" style={{ right: '6%', top: '8%' }}>
                <div className="rounded-xl border border-rose-500/30 bg-white/95 px-4 py-3 shadow-md backdrop-blur">
                  <span className="text-sm font-semibold text-rose-600 md:text-base">
                    Most is yet to come
                  </span>
                </div>
              </div>

              {/* X-axis label */}
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2">
                <span className="text-sm font-medium text-slate-400 md:text-base">Time</span>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}
