'use client';

import { useState, useEffect } from 'react';
import { StatsChartSlide as StatsChartSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';

interface Props {
  slide: StatsChartSlideType;
}

// StackOverflow monthly questions data (simplified for visualization)
const stackOverflowData = [
  { year: '2017', value: 300000 },
  { year: '2018', value: 280000 },
  { year: '2019', value: 260000 },
  { year: '2020', value: 240000 },
  { year: '2021', value: 180000 },
  { year: '2022', value: 120000 },
  { year: '2023', value: 60000 },
  { year: '2024', value: 20000 },
  { year: '2025', value: 8000 },
  { year: '2026', value: 3500 },
];

export function StatsChartSlide({ slide }: Props) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const maxValue = Math.max(...stackOverflowData.map(d => d.value));

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-70"
        color="rgba(34, 211, 238, 0.2)"
        blur={50}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        <div className="pt-6 sm:pt-8 md:pt-12 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-4 sm:py-6 md:py-8">
          <BlurFade delay={0.2} duration={0.6}>
            <div className="w-full max-w-4xl">
              {/* Chart container */}
              <div className="relative h-64 sm:h-80 md:h-96 flex items-end justify-between gap-2 sm:gap-3 md:gap-4 px-2">
                {stackOverflowData.map((data, index) => {
                  const height = animated ? (data.value / maxValue) * 100 : 0;
                  const isRecent = index >= stackOverflowData.length - 3;

                  return (
                    <div key={data.year} className="flex flex-col items-center flex-1">
                      <div className="relative w-full h-full flex items-end justify-center">
                        <div
                          className={`w-full max-w-12 rounded-t-lg transition-all duration-1000 ease-out ${
                            isRecent
                              ? 'bg-gradient-to-t from-red-600 to-red-400'
                              : 'bg-gradient-to-t from-cyan-600 to-cyan-400'
                          }`}
                          style={{
                            height: `${height}%`,
                            transitionDelay: `${index * 100}ms`
                          }}
                        />
                      </div>
                      <span className="mt-2 text-xs sm:text-sm text-slate-400">{data.year}</span>
                    </div>
                  );
                })}
              </div>

              {/* Stats badges */}
              <div className="flex justify-center gap-4 sm:gap-8 mt-6 sm:mt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400">300k</div>
                  <div className="text-sm sm:text-base text-slate-400">Peak (2017)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-400">3.5k</div>
                  <div className="text-sm sm:text-base text-slate-400">Now (2026)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500">-99%</div>
                  <div className="text-sm sm:text-base text-slate-400">Decline</div>
                </div>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.6} duration={0.5}>
            <div className="mt-6 sm:mt-8 px-4 sm:px-6 py-3 sm:py-4 rounded-lg bg-cyan-950/40 border border-cyan-500/30">
              <p className="text-lg sm:text-xl md:text-2xl text-cyan-300 font-medium text-center">
                {slide.insight}
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
