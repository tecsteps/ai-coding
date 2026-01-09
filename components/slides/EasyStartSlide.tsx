'use client';

import { EasyStartSlide as EasyStartSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { Terminal, TypingAnimation, AnimatedSpan } from '@/components/ui/terminal';

interface Props {
  slide: EasyStartSlideType;
}

export function EasyStartSlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-60"
        color="rgba(34, 197, 94, 0.2)"
        blur={50}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        {/* Header */}
        <div className="pt-6 sm:pt-8 md:pt-12 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Terminal example */}
        <div className="flex flex-1 items-center justify-center px-2 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 overflow-hidden">
          <BlurFade delay={0.4} duration={0.6}>
            <Terminal className="w-full max-w-5xl min-w-0 max-h-[60vh] sm:max-h-[70vh] md:max-h-[500px] bg-slate-900/80 border-slate-700/50">
              <TypingAnimation delay={800} duration={30} className="text-green-400 text-sm sm:text-base md:text-lg whitespace-pre-wrap break-words">
                {`> Add a "Save" button to the settings page`}
              </TypingAnimation>
              <AnimatedSpan delay={2500} className="text-slate-400 mt-2 sm:mt-4 md:mt-6 text-xs sm:text-sm md:text-base">
                Analyzing codebase...
              </AnimatedSpan>
              <AnimatedSpan delay={3200} className="text-slate-400 text-xs sm:text-sm md:text-base whitespace-pre-wrap break-words">
                Found settings page at src/pages/Settings.tsx
              </AnimatedSpan>
              <AnimatedSpan delay={4000} className="text-cyan-400 mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base">
                + Added Button component import
              </AnimatedSpan>
              <AnimatedSpan delay={4600} className="text-cyan-400 text-xs sm:text-sm md:text-base">
                + Created handleSave function
              </AnimatedSpan>
              <AnimatedSpan delay={5200} className="text-cyan-400 text-xs sm:text-sm md:text-base whitespace-pre-wrap break-words">
                + Added Save button with onClick handler
              </AnimatedSpan>
              <AnimatedSpan delay={6000} className="text-green-400 mt-2 sm:mt-4 md:mt-6 font-semibold text-sm sm:text-base md:text-lg whitespace-pre-wrap break-words">
                Done! The Save button has been added.
              </AnimatedSpan>
            </Terminal>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
