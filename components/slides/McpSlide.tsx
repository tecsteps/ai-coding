'use client';

import { McpSlide as McpSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { Plug, Check } from 'lucide-react';

interface Props {
  slide: McpSlideType;
}

export function McpSlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-60"
        color="rgba(168, 85, 247, 0.15)"
        blur={50}
        length="90vh"
      />

      <div className="relative z-10 flex flex-1 flex-col">
        {/* Header */}
        <div className="pt-16 text-center">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Content */}
        <div className="flex flex-1 items-center justify-center px-16 py-8">
          <div className="flex flex-col gap-8 w-full max-w-5xl">
            {/* Definition Box */}
            <BlurFade delay={0.2} duration={0.5}>
              <div className="flex items-center gap-6 p-6 rounded-2xl border border-purple-500/40 bg-gradient-to-br from-purple-950/40 to-slate-900/60">
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-violet-500">
                  <Plug className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="text-lg font-mono text-purple-300">MCP = Model Context Protocol</p>
                  <p className="text-slate-400 mt-1">{slide.definition}</p>
                </div>
              </div>
            </BlurFade>

            {/* MCP Table */}
            <BlurFade delay={0.3} duration={0.5}>
              <div className="rounded-xl border border-slate-700/40 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-800/60">
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300 uppercase tracking-wider">MCP / Tool</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300 uppercase tracking-wider">Description</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300 uppercase tracking-wider">Enables</th>
                      <th className="text-center px-6 py-4 text-sm font-semibold text-slate-300 uppercase tracking-wider">Built-in</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slide.items.map((item, index) => (
                      <tr
                        key={index}
                        className="border-t border-slate-700/40 hover:bg-slate-800/30 transition-colors"
                      >
                        <td className="px-6 py-4 font-mono text-purple-400">{item.name}</td>
                        <td className="px-6 py-4 text-slate-300">{item.description}</td>
                        <td className="px-6 py-4 text-slate-400">{item.enables}</td>
                        <td className="px-6 py-4 text-center">
                          {item.builtIn && (
                            <Check className="h-5 w-5 text-emerald-400 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </BlurFade>
          </div>
        </div>

        {/* Footer */}
        {slide.footer && (
          <BlurFade delay={0.5} duration={0.5}>
            <div className="pb-8 text-center">
              <p className="text-sm text-slate-500">{slide.footer}</p>
            </div>
          </BlurFade>
        )}
      </div>
    </div>
  );
}
