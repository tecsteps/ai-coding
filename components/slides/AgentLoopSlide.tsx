'use client';

import { AgentLoopSlide as AgentLoopSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { FileText, Globe, Database, Terminal, RotateCw } from 'lucide-react';

interface Props {
  slide: AgentLoopSlideType;
}

const toolIconMap = {
  file: FileText,
  browser: Globe,
  database: Database,
  terminal: Terminal,
};

export function AgentLoopSlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-60"
        color="rgba(6, 182, 212, 0.15)"
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
        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8">
          <div className="w-full max-w-5xl">
            {/* Description */}
            <BlurFade delay={0.2} duration={0.5}>
              <p className="text-center text-slate-400 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12">
                {slide.description}
              </p>
            </BlurFade>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              {/* Loop diagram */}
              <BlurFade delay={0.3} duration={0.5}>
                <div className="relative">
                  <div className="flex items-center justify-center w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-2 border-dashed border-cyan-500/40">
                    <RotateCw className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-cyan-400/60 animate-spin" style={{ animationDuration: '8s' }} />
                  </div>
                  {slide.loopSteps.map((step, index) => {
                    const angle = (index * 360) / slide.loopSteps.length - 90;
                    const radius = 120;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    return (
                      <div
                        key={index}
                        className="absolute flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full text-xs sm:text-sm font-medium bg-cyan-950/80 border border-cyan-500/50 text-cyan-300"
                        style={{
                          left: `calc(50% + ${x}px - 2rem)`,
                          top: `calc(50% + ${y}px - 2rem)`,
                        }}
                      >
                        {step}
                      </div>
                    );
                  })}
                </div>
              </BlurFade>

              {/* Tools */}
              <BlurFade delay={0.5} duration={0.5}>
                <div className="flex flex-col gap-3 sm:gap-4">
                  <p className="text-sm sm:text-base text-slate-500 uppercase tracking-wider mb-2">With Tools</p>
                  {slide.tools.map((tool, index) => {
                    const Icon = toolIconMap[tool.icon];
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 px-4 py-2.5 sm:py-3 rounded-lg bg-slate-800/60 border border-slate-700/50"
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400" />
                        <span className="text-sm sm:text-base md:text-lg text-slate-300">{tool.name}</span>
                      </div>
                    );
                  })}
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
