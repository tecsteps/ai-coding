'use client';

import { McpSlide as McpSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { Plug, Sparkles, Check } from 'lucide-react';

interface Props {
  slide: McpSlideType;
}

export function McpSlide({ slide }: Props) {
  const hasSkills = !!slide.skills && slide.skills.length > 0;

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-60"
        color="rgba(168, 85, 247, 0.15)"
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

        {/* Content */}
        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 overflow-y-auto">
          <div className={`grid grid-cols-1 ${hasSkills ? 'md:grid-cols-2' : ''} gap-4 sm:gap-6 w-full ${hasSkills ? 'max-w-6xl' : 'max-w-5xl'}`}>
            {/* MCP column */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <BlurFade delay={0.2} duration={0.5}>
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl border border-purple-500/40 bg-gradient-to-br from-purple-950/40 to-slate-900/60 h-full">
                  <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-purple-500 to-violet-500">
                    <Plug className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm md:text-base font-mono text-purple-300">MCP = Model Context Protocol</p>
                    <p className="text-[11px] sm:text-xs md:text-sm text-slate-400 mt-0.5">{slide.definition}</p>
                  </div>
                </div>
              </BlurFade>

              <BlurFade delay={0.3} duration={0.5}>
                <div className="rounded-lg sm:rounded-xl border border-slate-700/40 divide-y divide-slate-700/40 overflow-hidden">
                  {slide.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between gap-3 px-3 sm:px-4 py-2 sm:py-2.5 hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs sm:text-sm text-purple-400">{item.name}</span>
                          {item.builtIn && <Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />}
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{item.description}</p>
                      </div>
                      <span className="hidden sm:block text-[11px] sm:text-xs text-slate-500 text-right flex-shrink-0 max-w-[45%]">
                        {item.enables}
                      </span>
                    </div>
                  ))}
                </div>
              </BlurFade>
            </div>

            {/* Skills column */}
            {hasSkills && (
              <div className="flex flex-col gap-3 sm:gap-4">
                <BlurFade delay={0.25} duration={0.5}>
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl border border-amber-500/40 bg-gradient-to-br from-amber-950/30 to-slate-900/60 h-full">
                    <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500">
                      <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm md:text-base font-mono text-amber-300">Skills</p>
                      <p className="text-[11px] sm:text-xs md:text-sm text-slate-400 mt-0.5">{slide.skillsDefinition}</p>
                    </div>
                  </div>
                </BlurFade>

                <BlurFade delay={0.35} duration={0.5}>
                  <div className="rounded-lg sm:rounded-xl border border-slate-700/40 divide-y divide-slate-700/40 overflow-hidden">
                    {slide.skills!.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start justify-between gap-3 px-3 sm:px-4 py-2 sm:py-2.5 hover:bg-slate-800/30 transition-colors"
                      >
                        <div className="min-w-0">
                          <span className="font-mono text-xs sm:text-sm text-amber-400">{item.name}</span>
                          <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{item.description}</p>
                        </div>
                        <span className="hidden sm:block text-[11px] sm:text-xs text-slate-500 text-right flex-shrink-0 max-w-[45%]">
                          {item.enables}
                        </span>
                      </div>
                    ))}
                  </div>
                </BlurFade>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        {slide.footer && (
          <BlurFade delay={0.5} duration={0.5}>
            <div className="pb-4 sm:pb-6 md:pb-8 text-center px-4">
              <p className="text-xs sm:text-sm text-slate-500">{slide.footer}</p>
            </div>
          </BlurFade>
        )}
      </div>
    </div>
  );
}
