'use client';

import { ChatbotMentalModelSlide as ChatbotMentalModelSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { User, MessageSquare, CheckCircle, X } from 'lucide-react';

interface Props {
  slide: ChatbotMentalModelSlideType;
}

export function ChatbotMentalModelSlide({ slide }: Props) {
  const stepIcons = [User, MessageSquare, CheckCircle, X];

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-50"
        color="rgba(148, 163, 184, 0.15)"
        blur={50}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        {/* Header */}
        <div className="pt-6 sm:pt-8 md:pt-12 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8">
          {/* Quote */}
          <BlurFade delay={0.2} duration={0.5}>
            <div className="mb-8 sm:mb-12 md:mb-16 text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-slate-300 italic">
                &ldquo;{slide.quote}&rdquo;
              </p>
            </div>
          </BlurFade>

          {/* Steps diagram */}
          <BlurFade delay={0.4} duration={0.5}>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6">
              {slide.steps.map((step, index) => {
                const Icon = stepIcons[index] || CheckCircle;
                return (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-slate-800/80 border border-slate-600/50">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-slate-400" />
                      </div>
                      <span className="text-xs sm:text-sm md:text-base text-slate-400 font-medium">
                        {step}
                      </span>
                    </div>
                    {index < slide.steps.length - 1 && (
                      <div className="hidden sm:block w-8 md:w-12 lg:w-16 h-0.5 bg-slate-700" />
                    )}
                  </div>
                );
              })}
            </div>
          </BlurFade>

          {/* Tagline */}
          <BlurFade delay={0.6} duration={0.5}>
            <p className="mt-8 sm:mt-12 md:mt-16 text-lg sm:text-xl md:text-2xl text-slate-500">
              {slide.tagline}
            </p>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
