'use client';

import { useState, useEffect } from 'react';
import { ProductivityCurveSlide as ProductivityCurveSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';

interface Props {
  slide: ProductivityCurveSlideType;
}

export function ProductivityCurveSlide({ slide }: Props) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

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
              {/* Exponential curve visualization */}
              <div className="relative bg-slate-900/50 rounded-xl border border-slate-700/50 p-4 sm:p-6 md:p-8">
                <svg viewBox="0 0 400 200" className="w-full h-48 sm:h-56 md:h-72">
                  {/* Grid lines */}
                  <line x1="50" y1="180" x2="380" y2="180" stroke="#334155" strokeWidth="1" />
                  <line x1="50" y1="20" x2="50" y2="180" stroke="#334155" strokeWidth="1" />

                  {/* Exponential curve */}
                  <path
                    d="M 50 170 Q 100 168 150 160 Q 200 145 250 110 Q 300 50 350 20"
                    fill="none"
                    stroke="url(#expGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className={`transition-all duration-1500 ${animated ? 'stroke-dashoffset-0' : ''}`}
                    style={{
                      strokeDasharray: 500,
                      strokeDashoffset: animated ? 0 : 500,
                      transition: 'stroke-dashoffset 2s ease-out'
                    }}
                  />

                  {/* Gradient fill under curve */}
                  <path
                    d="M 50 170 Q 100 168 150 160 Q 200 145 250 110 Q 300 50 350 20 L 350 180 L 50 180 Z"
                    fill="url(#fillGradient)"
                    className={`transition-opacity duration-1000 ${animated ? 'opacity-30' : 'opacity-0'}`}
                    style={{ transitionDelay: '1s' }}
                  />

                  <defs>
                    <linearGradient id="expGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                    <linearGradient id="fillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>

                  {/* "You are here" marker */}
                  <circle
                    cx="100"
                    cy="168"
                    r="8"
                    className={`fill-cyan-400 transition-all duration-500 ${animated ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: '1.5s' }}
                  />
                  <line
                    x1="100"
                    y1="158"
                    x2="100"
                    y2="120"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                    className={`transition-opacity duration-500 ${animated ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: '1.7s' }}
                  />
                  <text
                    x="100"
                    y="110"
                    textAnchor="middle"
                    className={`fill-cyan-300 text-xs font-bold transition-opacity duration-500 ${animated ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: '1.8s' }}
                  >
                    YOU ARE HERE
                  </text>

                  {/* Axis labels */}
                  <text x="215" y="198" textAnchor="middle" className="fill-slate-400 text-xs">
                    Time →
                  </text>
                  <text
                    x="20"
                    y="100"
                    textAnchor="middle"
                    className="fill-slate-400 text-xs"
                    transform="rotate(-90, 20, 100)"
                  >
                    Productivity →
                  </text>

                  {/* Year markers */}
                  <text x="50" y="195" textAnchor="middle" className="fill-slate-500 text-xs">2023</text>
                  <text x="150" y="195" textAnchor="middle" className="fill-slate-500 text-xs">2025</text>
                  <text x="250" y="195" textAnchor="middle" className="fill-slate-500 text-xs">2027</text>
                  <text x="350" y="195" textAnchor="middle" className="fill-slate-500 text-xs">Future</text>
                </svg>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.8} duration={0.5}>
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
