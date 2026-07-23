'use client';

import { SddSlide as SddSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { MessageSquare, FileText, Code, CheckCircle } from 'lucide-react';

interface Props {
  slide: SddSlideType;
}

const stepIcons = [MessageSquare, FileText, Code, CheckCircle];

export function SddSlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-60"
        color="rgba(59, 130, 246, 0.15)"
        blur={50}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        {/* Header */}
        <div className="pt-6 sm:pt-8 md:pt-12 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Steps */}
        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 overflow-y-auto">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 w-full max-w-4xl">
            {/* Simplified note */}
            <BlurFade delay={0.15} duration={0.5}>
              <p className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider mb-1 sm:mb-2 text-center">-- Simplified --</p>
            </BlurFade>
            {slide.steps.map((step, index) => {
              const Icon = stepIcons[index] || CheckCircle;

              return (
                <BlurFade key={index} delay={0.2 + index * 0.15} duration={0.5}>
                  <div className="relative flex items-start gap-3 sm:gap-4 md:gap-6 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl border border-slate-700/40 bg-slate-900/40 hover:border-blue-500/40 hover:bg-slate-900/60 transition-all duration-300">
                    {/* Step number */}
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg bg-slate-800/60">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-blue-400" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
                        {step.title}
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        {slide.footer && (
          <BlurFade delay={0.6} duration={0.5}>
            <div className="pb-4 sm:pb-6 md:pb-8 text-center px-4">
              <p className="text-xs sm:text-sm text-slate-500">
                {slide.footer}
                {slide.footerLink && (
                  <>
                    {' '}
                    <a
                      href={slide.footerLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      {slide.footerLink.label}
                    </a>
                  </>
                )}
              </p>
            </div>
          </BlurFade>
        )}
      </div>
    </div>
  );
}
