'use client';

import { useState, useEffect } from 'react';
import { GuardrailsSlide as GuardrailsSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { cn } from '@/lib/utils';
import { Shield, Bot, CheckCircle } from 'lucide-react';

interface Props {
  slide: GuardrailsSlideType;
}

export function GuardrailsSlide({ slide }: Props) {
  const [visibleAgents, setVisibleAgents] = useState(0);

  const maxSteps = slide.subAgents.length + (slide.bottomStatement ? 1 : 0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault();
        setVisibleAgents((prev) => Math.min(maxSteps, prev + 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setVisibleAgents((prev) => Math.max(0, prev - 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [maxSteps]);

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-50"
        color="rgba(168, 85, 247, 0.12)"
        blur={60}
        length="90vh"
      />

      <div className="relative z-10 flex flex-1 flex-col">
        {/* Header */}
        <div className="pt-12 text-center">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col items-center justify-center px-16 py-8">
          <div className="w-full max-w-5xl">
            {/* Intro */}
            <BlurFade delay={0.2} duration={0.5}>
              <div className="mb-8 p-6 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-950/30 to-slate-900/60">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/20">
                    <Shield className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-purple-400 uppercase tracking-wider mb-1">Tooling</p>
                    <p className="text-xl text-slate-200 leading-relaxed">
                      {slide.intro}
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Points */}
            <BlurFade delay={0.3} duration={0.5}>
              <ul className="mb-10 space-y-4">
                {slide.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-lg text-slate-300">
                    <CheckCircle className="flex-shrink-0 w-5 h-5 mt-0.5 text-purple-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </BlurFade>

            {/* Sub-Agents Section */}
            <BlurFade delay={0.4} duration={0.5}>
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wider mb-4">
                  Skeptical Sub-Agents for Reviews
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {slide.subAgents.map((agent, index) => {
                    const isVisible = index < visibleAgents;

                    return (
                      <div
                        key={index}
                        className={cn(
                          'p-5 rounded-xl border transition-all duration-500',
                          isVisible
                            ? 'border-purple-500/40 bg-gradient-to-br from-purple-950/40 to-slate-900/60 translate-y-0 opacity-100'
                            : 'border-slate-700/20 bg-slate-900/20 translate-y-4 opacity-30'
                        )}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div
                            className={cn(
                              'flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-colors duration-300',
                              isVisible ? 'bg-purple-500/20' : 'bg-slate-800/50'
                            )}
                          >
                            <Bot
                              className={cn(
                                'h-8 w-8 transition-colors duration-300',
                                isVisible ? 'text-purple-400' : 'text-slate-600'
                              )}
                            />
                          </div>
                          <h3
                            className={cn(
                              'font-semibold text-lg mb-2 transition-colors duration-300',
                              isVisible ? 'text-white' : 'text-slate-600'
                            )}
                          >
                            {agent.name}
                          </h3>
                          <p
                            className={cn(
                              'text-sm transition-colors duration-300',
                              isVisible ? 'text-slate-400' : 'text-slate-700'
                            )}
                          >
                            {agent.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Statement */}
                {slide.bottomStatement && (
                  <div
                    className={cn(
                      'mt-8 text-center transition-all duration-500',
                      visibleAgents > slide.subAgents.length
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    )}
                  >
                    <p className="text-xl font-medium text-purple-300 italic">
                      {slide.bottomStatement}
                    </p>
                  </div>
                )}
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
}
