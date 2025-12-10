'use client';

import { useState, useEffect } from 'react';
import { InteractionSlide as InteractionSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { cn } from '@/lib/utils';
import {
  Eye,
  Database,
  FileText,
  Code2,
  Search,
  TestTube,
  AlertTriangle,
} from 'lucide-react';

interface Props {
  slide: InteractionSlideType;
}

const iconMap = {
  eye: Eye,
  database: Database,
  log: FileText,
  script: Code2,
  search: Search,
  test: TestTube,
};

const defaultColor = { bg: 'bg-violet-500/20', text: 'text-violet-400', border: 'border-violet-500/50', activeBg: 'bg-violet-950/30' };

const colorMap = {
  eye: defaultColor,
  database: defaultColor,
  log: defaultColor,
  script: defaultColor,
  search: defaultColor,
  test: defaultColor,
};

export function InteractionSlide({ slide }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault();
        setVisibleCount((prev) => Math.min(slide.capabilities.length + 1, prev + 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setVisibleCount((prev) => Math.max(0, prev - 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slide.capabilities.length]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-50"
        color="rgba(6, 182, 212, 0.12)"
        blur={60}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
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
            {/* Problem Statement */}
            <BlurFade delay={0.2} duration={0.5}>
              <div className="mb-10 p-6 rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-950/30 to-slate-900/60">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-red-500/20">
                    <AlertTriangle className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-xs text-red-400 uppercase tracking-wider mb-1">The Problem</p>
                    <p className="text-xl text-slate-200 leading-relaxed">
                      {slide.problem}
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Solution Statement */}
            <BlurFade delay={0.25} duration={0.5}>
              <p className="text-center text-slate-400 text-lg mb-2">
                We want to enable the Coding Agent to...
              </p>
            </BlurFade>

            {/* Capabilities Grid */}
            <BlurFade delay={0.3} duration={0.5}>
              <div className="grid grid-cols-3 gap-4">
                {slide.capabilities.map((capability, index) => {
                  const Icon = iconMap[capability.icon];
                  const colors = colorMap[capability.icon];
                  const isActive = index < visibleCount;

                  return (
                    <div
                      key={index}
                      className={cn(
                        'p-5 rounded-xl border transition-all duration-300 h-[120px] flex items-center',
                        isActive
                          ? cn(colors.border, colors.activeBg)
                          : 'border-slate-700/30 bg-slate-900/30 opacity-30'
                      )}
                    >
                      <div className="flex items-center gap-4 w-full">
                        <div
                          className={cn(
                            'flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg',
                            isActive ? colors.bg : 'bg-slate-800/50'
                          )}
                        >
                          <Icon
                            className={cn(
                              'h-6 w-6',
                              isActive ? colors.text : 'text-slate-600'
                            )}
                          />
                        </div>
                        <div>
                          <h3
                            className={cn(
                              'font-semibold text-lg',
                              isActive ? 'text-white' : 'text-slate-600'
                            )}
                          >
                            {capability.title}
                          </h3>
                          <p
                            className={cn(
                              'text-sm mt-0.5',
                              isActive ? 'text-slate-400' : 'text-slate-700'
                            )}
                          >
                            {capability.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </BlurFade>

            {/* How? CTA */}
            <div
              className={cn(
                'mt-12 flex justify-center transition-all duration-500',
                visibleCount > slide.capabilities.length
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 pointer-events-none'
              )}
            >
              <span className="text-3xl font-semibold text-violet-400">
                How?
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
