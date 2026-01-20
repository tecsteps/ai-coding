'use client';

import { AgentCapabilitiesSlide as AgentCapabilitiesSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { FileText, Search, Globe, Database, Terminal, ScrollText } from 'lucide-react';

interface Props {
  slide: AgentCapabilitiesSlideType;
}

const icons = [FileText, Search, Globe, Database, Terminal, ScrollText];

export function AgentCapabilitiesSlide({ slide }: Props) {
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
          {slide.intro && (
            <BlurFade delay={0.2} duration={0.5}>
              <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto">
                {slide.intro}
              </p>
            </BlurFade>
          )}
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-4 sm:py-6 md:py-8">
          {/* Capabilities grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl">
            {slide.capabilities.map((capability, index) => {
              const Icon = icons[index % icons.length];
              return (
                <BlurFade key={index} delay={0.3 + index * 0.1} duration={0.5}>
                  <div className="flex items-center gap-3 sm:gap-4 rounded-xl border border-slate-700/40 bg-slate-900/40 p-3 sm:p-4 md:p-5 backdrop-blur-sm hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                    </div>
                    <span className="text-sm sm:text-base md:text-lg text-slate-200">
                      {capability.text}
                    </span>
                  </div>
                </BlurFade>
              );
            })}
          </div>

          {/* Conclusion */}
          {slide.conclusion && (
            <BlurFade delay={0.8} duration={0.5}>
              <div className="mt-6 sm:mt-8 px-4 sm:px-6 py-3 sm:py-4 rounded-lg bg-cyan-950/40 border border-cyan-500/30">
                <p className="text-lg sm:text-xl md:text-2xl text-cyan-300 font-medium text-center">
                  {slide.conclusion}
                </p>
              </div>
            </BlurFade>
          )}
        </div>
      </div>
    </div>
  );
}
