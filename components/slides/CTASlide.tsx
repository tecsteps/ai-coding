'use client';

import { CTASlide as CTASlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { Particles } from '@/components/ui/particles';
import { SparklesText } from '@/components/ui/sparkles-text';

interface Props {
  slide: CTASlideType;
}

export function CTASlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={60}
        color="#22d3ee"
        size={0.8}
        staticity={20}
      />

      <div className="slide-content relative z-10 flex flex-col items-center justify-center">
        <BlurFade delay={0.1} duration={0.8}>
          <SparklesText
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white text-center px-4"
            colors={{ first: '#9E7AFF', second: '#38bdf8' }}
            sparklesCount={10}
          >
            {slide.headline}
          </SparklesText>
        </BlurFade>

        {slide.subheadline && (
          <BlurFade delay={0.3} duration={0.6}>
            <p className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl text-slate-400 text-center px-4">
              {slide.subheadline}
            </p>
          </BlurFade>
        )}

        {/* Steps */}
        <div className="mt-8 sm:mt-12 flex flex-col gap-3 sm:gap-4 md:gap-5 max-w-2xl px-4">
          {slide.steps.map((step, index) => (
            <BlurFade key={index} delay={0.5 + index * 0.15} duration={0.5}>
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0 text-lg sm:text-xl font-bold">
                  {index + 1}
                </div>
                <span className="text-lg sm:text-xl md:text-2xl text-slate-200">
                  {step}
                </span>
              </div>
            </BlurFade>
          ))}
        </div>

        {slide.footer && (
          <BlurFade delay={1} duration={0.5}>
            <p className="mt-8 sm:mt-12 text-base sm:text-lg text-slate-500 text-center px-4">
              {slide.footer}
            </p>
          </BlurFade>
        )}
      </div>
    </div>
  );
}
