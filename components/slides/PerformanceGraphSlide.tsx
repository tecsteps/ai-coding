'use client';

import { PerformanceGraphSlide as PerformanceGraphSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';

interface Props {
  slide: PerformanceGraphSlideType;
}

export function PerformanceGraphSlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-50"
        color="rgba(59, 130, 246, 0.12)"
        blur={60}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="pt-4 sm:pt-6 md:pt-8 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Graph */}
        <div className="flex flex-1 items-center justify-center w-full px-8 sm:px-12 md:px-16 lg:px-24 py-6 sm:py-8">
          <BlurFade delay={0.3} duration={0.6}>
            <div className="relative" style={{ width: '80vw', maxWidth: '1100px', height: '60vh', maxHeight: '600px' }}>
              {/* Y-axis label */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2">
                <span
                  className="text-sm sm:text-base md:text-lg text-slate-400 font-medium whitespace-nowrap block"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  {slide.yLabel}
                </span>
              </div>

              {/* Main graph area */}
              <div className="relative w-full h-full ml-8">
                {/* Grid lines */}
                <div className="absolute inset-0">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={`h-${i}`}
                      className="absolute w-full border-t border-slate-700/40"
                      style={{ top: `${i * 25}%` }}
                    />
                  ))}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={`v-${i}`}
                      className="absolute h-full border-l border-slate-700/40"
                      style={{ left: `${i * 25}%` }}
                    />
                  ))}
                </div>

                {/* Axes */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-500" />
                <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-slate-500" />

                {/* Exponential curve */}
                <svg
                  className="absolute inset-0 w-full h-full overflow-visible"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  {/* Gradient for the curve */}
                  <defs>
                    <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(34, 197, 94, 1)" />
                      <stop offset="40%" stopColor="rgba(59, 130, 246, 1)" />
                      <stop offset="100%" stopColor="rgba(168, 85, 247, 1)" />
                    </linearGradient>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
                      <stop offset="100%" stopColor="rgba(59, 130, 246, 0.02)" />
                    </linearGradient>
                  </defs>

                  {/* Area under curve */}
                  <path
                    d="M 0 100 C 5 99, 10 98, 15 96 C 20 94, 25 90, 30 84 C 40 70, 50 50, 60 30 C 70 15, 80 5, 90 1 L 90 1 L 100 0 L 100 100 Z"
                    fill="url(#areaGradient)"
                  />

                  {/* The curve itself */}
                  <path
                    d="M 0 100 C 5 99, 10 98, 15 96 C 20 94, 25 90, 30 84 C 40 70, 50 50, 60 30 C 70 15, 80 5, 90 1 L 100 0"
                    fill="none"
                    stroke="url(#curveGradient)"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                {/* Current position marker - early on the curve */}
                <div
                  className="absolute z-10"
                  style={{ left: '15%', bottom: '4%' }}
                >
                  {/* Pulsing dot */}
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-full bg-green-500/30 animate-ping" />
                    <div className="absolute -inset-3 rounded-full bg-green-500/20" />
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500 border-2 border-white shadow-lg shadow-green-500/50" />
                  </div>

                  {/* Label */}
                  <div className="absolute left-8 sm:left-10 top-1/2 -translate-y-1/2 whitespace-nowrap">
                    <div className="px-4 py-2 rounded-xl bg-green-500/20 border border-green-500/50 backdrop-blur-sm">
                      <span className="text-sm sm:text-base md:text-lg font-bold text-green-400">
                        {slide.currentMarker}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Future note - at the steep part */}
                <div
                  className="absolute z-10"
                  style={{ right: '8%', top: '8%' }}
                >
                  <div className="px-4 py-3 rounded-xl bg-violet-500/20 border border-violet-500/50 backdrop-blur-sm">
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-violet-300">
                      {slide.futureNote}
                    </span>
                  </div>
                </div>

                {/* X-axis label */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                  <span className="text-sm sm:text-base md:text-lg text-slate-400 font-medium">
                    {slide.xLabel}
                  </span>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
