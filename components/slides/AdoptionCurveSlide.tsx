'use client';

import { useState, useEffect } from 'react';
import { AdoptionCurveSlide as AdoptionCurveSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';

interface Props {
  slide: AdoptionCurveSlideType;
}

const segments = [
  { name: 'Innovators', percentage: '2.5%', width: 8 },
  { name: 'Early Adopters', percentage: '13.5%', width: 16 },
  { name: 'Early Majority', percentage: '34%', width: 26 },
  { name: 'Late Majority', percentage: '34%', width: 26 },
  { name: 'Laggards', percentage: '16%', width: 24 },
];

export function AdoptionCurveSlide({ slide }: Props) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const currentIndex = segments.findIndex(s => s.name === slide.currentPosition);

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
            <div className="w-full max-w-5xl">
              {/* Bell curve visualization */}
              <div className="relative">
                <svg viewBox="0 0 400 160" className="w-full h-48 sm:h-56 md:h-64">
                  {/* Bell curve path */}
                  <path
                    d="M 20 140 Q 60 140 80 120 Q 100 100 120 60 Q 160 -20 200 -20 Q 240 -20 280 60 Q 300 100 320 120 Q 340 140 380 140"
                    fill="none"
                    stroke="url(#curveGradient)"
                    strokeWidth="4"
                    className={`transition-all duration-1000 ${animated ? 'opacity-100' : 'opacity-0'}`}
                  />
                  <defs>
                    <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="20%" stopColor="#22d3ee" />
                      <stop offset="50%" stopColor="#67e8f9" />
                      <stop offset="80%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>

                  {/* Current position marker */}
                  <circle
                    cx="95"
                    cy="85"
                    r="10"
                    className={`fill-cyan-400 transition-all duration-500 ${animated ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: '800ms' }}
                  />
                  <text
                    x="95"
                    y="65"
                    textAnchor="middle"
                    className="fill-cyan-300 text-xs font-semibold"
                  >
                    YOU ARE HERE
                  </text>
                </svg>
              </div>

              {/* Segment labels */}
              <div className="flex justify-between mt-2 sm:mt-4">
                {segments.map((segment, index) => (
                  <div
                    key={segment.name}
                    className={`flex flex-col items-center transition-all duration-500 ${
                      index === currentIndex
                        ? 'text-cyan-300'
                        : index < currentIndex
                          ? 'text-slate-500'
                          : 'text-slate-600'
                    }`}
                    style={{ width: `${segment.width}%` }}
                  >
                    <span className={`text-xs sm:text-sm md:text-base font-medium text-center ${
                      index === currentIndex ? 'text-cyan-400' : ''
                    }`}>
                      {segment.name}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-500">{segment.percentage}</span>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>

          {slide.insight && (
            <BlurFade delay={0.6} duration={0.5}>
              <div className="mt-6 sm:mt-8 px-4 sm:px-6 py-3 sm:py-4 rounded-lg bg-cyan-950/40 border border-cyan-500/30">
                <p className="text-lg sm:text-xl md:text-2xl text-cyan-300 font-medium text-center">
                  {slide.insight}
                </p>
              </div>
            </BlurFade>
          )}
        </div>
      </div>
    </div>
  );
}
