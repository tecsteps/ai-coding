'use client';

import { useRef } from 'react';
import { AgentTheorySlide as AgentTheorySlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { AnimatedBeam } from '@/components/ui/animated-beam';
import { cn } from '@/lib/utils';
import {
  Brain,
  Eye,
  Cog,
  FileCode,
  Terminal,
  Search,
  User,
} from 'lucide-react';

interface Props {
  slide: AgentTheorySlideType;
}

const CircleNode = ({
  className,
  children,
  label,
  sublabel,
}: {
  className?: string;
  children?: React.ReactNode;
  label: string;
  sublabel?: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={cn(
          'z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-slate-900 shadow-lg',
          className
        )}
      >
        {children}
      </div>
      <div className="text-center">
        <p className="text-base font-semibold text-white">{label}</p>
        {sublabel && <p className="text-xs text-slate-400">{sublabel}</p>}
      </div>
    </div>
  );
};

export function AgentTheorySlide({ slide }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const orchestratorRef = useRef<HTMLDivElement>(null);
  const reasonRef = useRef<HTMLDivElement>(null);
  const actRef = useRef<HTMLDivElement>(null);
  const observeRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-50"
        color="rgba(147, 51, 234, 0.15)"
        blur={60}
        length="90vh"
      />

      <div className="relative z-10 flex flex-1 flex-col">
        {/* Header */}
        <div className="pt-10 text-center">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
          <BlurFade delay={0.2} duration={0.6}>
            <p className="mt-3 text-xl text-slate-400">
              The Re-Act Pattern
            </p>
          </BlurFade>
        </div>

        {/* Main diagram */}
        <div
          ref={containerRef}
          className="relative mx-auto flex flex-1 w-full max-w-5xl items-center justify-center px-8"
        >
          {/* Row layout: You -> Orchestrator -> [Loop] -> Tools */}

          {/* Left: User */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2">
            <BlurFade delay={0.3} duration={0.5}>
              <div ref={userRef}>
                <CircleNode
                  className="border-emerald-500/50 bg-gradient-to-br from-emerald-950 to-slate-900"
                  label="You"
                  sublabel="Prompt"
                >
                  <User className="h-8 w-8 text-emerald-400" />
                </CircleNode>
              </div>
            </BlurFade>
          </div>

          {/* Orchestrator */}
          <div className="absolute left-[180px] top-1/2 -translate-y-1/2">
            <BlurFade delay={0.4} duration={0.5}>
              <div ref={orchestratorRef} className="flex flex-col items-center gap-2">
                <div className="z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-purple-500/50 bg-gradient-to-br from-purple-950 to-slate-900 shadow-xl shadow-purple-500/20">
                  <Brain className="h-10 w-10 text-purple-400" />
                </div>
                <div className="text-center">
                  <p className="text-base font-bold text-white">Orchestrator</p>
                  <p className="text-xs text-slate-400">Claude LLM</p>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Center: The Re-Act Loop - triangle layout */}
          {/* Reason - top center of the loop */}
          <div className="absolute left-[420px] top-[25%]">
            <BlurFade delay={0.5} duration={0.5}>
              <div ref={reasonRef}>
                <CircleNode
                  className="border-cyan-500/50 bg-gradient-to-br from-cyan-950 to-slate-900"
                  label="Reason"
                  sublabel="Analyze & Plan"
                >
                  <Brain className="h-8 w-8 text-cyan-400" />
                </CircleNode>
              </div>
            </BlurFade>
          </div>

          {/* Act - bottom right of triangle, connects to tools */}
          <div className="absolute left-[560px] top-[60%]">
            <BlurFade delay={0.6} duration={0.5}>
              <div ref={actRef}>
                <CircleNode
                  className="border-amber-500/50 bg-gradient-to-br from-amber-950 to-slate-900"
                  label="Act"
                  sublabel="Execute Tools"
                >
                  <Cog className="h-8 w-8 text-amber-400" />
                </CircleNode>
              </div>
            </BlurFade>
          </div>

          {/* Observe - bottom left of triangle */}
          <div className="absolute left-[300px] top-[60%]">
            <BlurFade delay={0.7} duration={0.5}>
              <div ref={observeRef}>
                <CircleNode
                  className="border-rose-500/50 bg-gradient-to-br from-rose-950 to-slate-900"
                  label="Observe"
                  sublabel="Analyze Results"
                >
                  <Eye className="h-8 w-8 text-rose-400" />
                </CircleNode>
              </div>
            </BlurFade>
          </div>

          {/* Right: Tools */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2">
            <BlurFade delay={0.8} duration={0.5}>
              <div ref={toolsRef} className="flex flex-col items-center gap-2">
                <p className="text-base font-semibold text-white mb-2">Tools</p>
                <div className="flex flex-col gap-3 rounded-xl border border-slate-700/50 bg-slate-900/80 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/20">
                      <FileCode className="h-4 w-4 text-blue-400" />
                    </div>
                    <span className="text-sm text-slate-300">Read / Write</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/20">
                      <Terminal className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-sm text-slate-300">Bash</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/20">
                      <Search className="h-4 w-4 text-orange-400" />
                    </div>
                    <span className="text-sm text-slate-300">Search / Glob</span>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Animated beams - clear flow */}
          {/* 1. User -> Orchestrator */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={userRef}
            toRef={orchestratorRef}
            curvature={0}
            duration={3}
            gradientStartColor="#10b981"
            gradientStopColor="#8b5cf6"
          />

          {/* 2. Orchestrator -> Reason (start the loop) */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={orchestratorRef}
            toRef={reasonRef}
            curvature={-20}
            duration={2}
            delay={0.3}
            gradientStartColor="#8b5cf6"
            gradientStopColor="#06b6d4"
          />

          {/* 3. Reason -> Act */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={reasonRef}
            toRef={actRef}
            curvature={-20}
            duration={1.5}
            delay={0.6}
            gradientStartColor="#06b6d4"
            gradientStopColor="#f59e0b"
          />

          {/* 4. Act -> Tools */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={actRef}
            toRef={toolsRef}
            curvature={0}
            duration={2}
            delay={0.9}
            gradientStartColor="#f59e0b"
            gradientStopColor="#3b82f6"
          />

          {/* 5. Tools -> Observe (results return) */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={toolsRef}
            toRef={observeRef}
            curvature={20}
            duration={2}
            delay={1.2}
            gradientStartColor="#3b82f6"
            gradientStopColor="#f43f5e"
          />

          {/* 6. Observe -> Reason (loop back!) */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={observeRef}
            toRef={reasonRef}
            curvature={60}
            duration={2}
            delay={1.5}
            gradientStartColor="#f43f5e"
            gradientStopColor="#06b6d4"
          />
        </div>

        {/* Legend */}
        <BlurFade delay={1} duration={0.5}>
          <div className="pb-6 text-center">
            <p className="text-base text-slate-500">
              The agent loops: Reason, Act, Observe - until the task is complete
            </p>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
