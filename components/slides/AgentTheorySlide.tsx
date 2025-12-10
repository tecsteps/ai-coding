'use client';

import { useRef } from 'react';
import { AgentTheorySlide as AgentTheorySlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { CurvedArrow } from '@/components/ui/curved-arrow';
import { cn } from '@/lib/utils';
import {
  Brain,
  Eye,
  Cog,
  FileCode,
  Terminal,
  Search,
  User,
  MessageSquare,
  Globe,
} from 'lucide-react';

interface Props {
  slide: AgentTheorySlideType;
}

const CircleNode = ({
  className,
  children,
  label,
  sublabel,
  size = 'normal',
}: {
  className?: string;
  children?: React.ReactNode;
  label: string;
  sublabel?: string;
  size?: 'small' | 'normal' | 'large';
}) => {
  // Sizes increased by 30%
  const sizeClasses = {
    small: 'h-[72px] w-[72px]',
    normal: 'h-[84px] w-[84px]',
    large: 'h-[104px] w-[104px]',
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className={cn(
          'z-10 flex items-center justify-center rounded-full border-2 bg-slate-900 shadow-lg',
          sizeClasses[size],
          className
        )}
      >
        {children}
      </div>
      <div className="text-center">
        <p className="text-lg font-semibold text-white">{label}</p>
        {sublabel && <p className="text-sm text-slate-400">{sublabel}</p>}
      </div>
    </div>
  );
};

export function AgentTheorySlide({ slide }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const thoughtRef = useRef<HTMLDivElement>(null);
  const actionRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const observationRef = useRef<HTMLDivElement>(null);
  const finalRef = useRef<HTMLDivElement>(null);

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
        <div className="pt-8 text-center">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Main diagram */}
        <div
          ref={containerRef}
          className="relative mx-auto flex flex-1 w-full max-w-7xl items-center justify-center px-8"
        >
          {/* USER - Entry point (left) */}
          <div className="absolute left-[40px] top-[20%]">
            <BlurFade delay={0.3} duration={0.5}>
              <div ref={userRef}>
                <CircleNode
                  className="border-emerald-500/50 bg-gradient-to-br from-emerald-950 to-slate-900"
                  label="User"
                  sublabel="Request"
                >
                  <User className="h-10 w-10 text-emerald-400" />
                </CircleNode>
              </div>
            </BlurFade>
          </div>

          {/* REASON - Analyze & Plan */}
          <div className="absolute left-[200px] top-[20%]">
            <BlurFade delay={0.4} duration={0.5}>
              <div ref={thoughtRef}>
                <CircleNode
                  className="border-purple-500/50 bg-gradient-to-br from-purple-950 to-slate-900 shadow-xl shadow-purple-500/20"
                  label="Reason"
                  sublabel="Analyze & Plan"
                  size="large"
                >
                  <Brain className="h-12 w-12 text-purple-400" />
                </CircleNode>
              </div>
            </BlurFade>
          </div>

          {/* ACT - Execute Tool */}
          <div className="absolute left-[200px] top-[55%]">
            <BlurFade delay={0.5} duration={0.5}>
              <div ref={actionRef}>
                <CircleNode
                  className="border-amber-500/50 bg-gradient-to-br from-amber-950 to-slate-900"
                  label="Act"
                  sublabel="Execute Tool"
                >
                  <Cog className="h-10 w-10 text-amber-400" />
                </CircleNode>
              </div>
            </BlurFade>
          </div>

          {/* TOOLS */}
          <div className="absolute left-[380px] top-[48%]">
            <BlurFade delay={0.6} duration={0.5}>
              <div ref={toolsRef} className="flex flex-col items-center gap-3">
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
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/20">
                      <Globe className="h-4 w-4 text-cyan-400" />
                    </div>
                    <span className="text-sm text-slate-300">Web Search</span>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* OBSERVE - Process Results */}
          <div className="absolute left-[640px] top-[35%]">
            <BlurFade delay={0.7} duration={0.5}>
              <div ref={observationRef}>
                <CircleNode
                  className="border-rose-500/50 bg-gradient-to-br from-rose-950 to-slate-900"
                  label="Observe"
                  sublabel="Process Results"
                >
                  <Eye className="h-10 w-10 text-rose-400" />
                </CircleNode>
              </div>
            </BlurFade>
          </div>

          {/* RESPONSE - Task Complete */}
          <div className="absolute left-[880px] top-[35%]">
            <BlurFade delay={0.8} duration={0.5}>
              <div ref={finalRef}>
                <CircleNode
                  className="border-emerald-500/50 bg-gradient-to-br from-emerald-950 to-slate-900"
                  label="Response"
                  sublabel="Task Complete"
                >
                  <MessageSquare className="h-10 w-10 text-emerald-400" />
                </CircleNode>
              </div>
            </BlurFade>
          </div>


          {/* Curved arrows - Sequential animation showing ReAct loop */}
          {/* Sequence: User -> Reason -> Act -> Tools -> Observe -> Reason -> Act -> Tools -> Observe -> Response */}
          {/* Total loop time = 12s, each arrow animation ~1.2s */}

          {/* 1. User -> Reason */}
          <CurvedArrow
            containerRef={containerRef}
            fromRef={userRef}
            toRef={thoughtRef}
            duration={12}
            delay={0}
            gradientStartColor="#10b981"
            gradientStopColor="#8b5cf6"
          />

          {/* 2. Reason -> Act (first iteration) */}
          <CurvedArrow
            containerRef={containerRef}
            fromRef={thoughtRef}
            toRef={actionRef}
            duration={24}
            delay={1}
            gradientStartColor="#8b5cf6"
            gradientStopColor="#f59e0b"
          />

          {/* 3. Act -> Tools (first iteration) */}
          <CurvedArrow
            containerRef={containerRef}
            fromRef={actionRef}
            toRef={toolsRef}
            duration={24}
            delay={2}
            gradientStartColor="#f59e0b"
            gradientStopColor="#3b82f6"
          />

          {/* 4. Tools -> Observe (first iteration) */}
          <CurvedArrow
            containerRef={containerRef}
            fromRef={toolsRef}
            toRef={observationRef}
            duration={24}
            delay={3}
            gradientStartColor="#3b82f6"
            gradientStopColor="#f43f5e"
          />

          {/* 5. Observe -> Reason (loop back) */}
          <CurvedArrow
            containerRef={containerRef}
            fromRef={observationRef}
            toRef={thoughtRef}
            duration={12}
            delay={4}
            gradientStartColor="#f43f5e"
            gradientStopColor="#8b5cf6"
            reverse
          />

          {/* 6. Reason -> Act (second iteration) */}
          <CurvedArrow
            containerRef={containerRef}
            fromRef={thoughtRef}
            toRef={actionRef}
            duration={24}
            delay={5.5}
            gradientStartColor="#8b5cf6"
            gradientStopColor="#f59e0b"
          />

          {/* 7. Act -> Tools (second iteration) */}
          <CurvedArrow
            containerRef={containerRef}
            fromRef={actionRef}
            toRef={toolsRef}
            duration={24}
            delay={6.5}
            gradientStartColor="#f59e0b"
            gradientStopColor="#3b82f6"
          />

          {/* 8. Tools -> Observe (second iteration) */}
          <CurvedArrow
            containerRef={containerRef}
            fromRef={toolsRef}
            toRef={observationRef}
            duration={24}
            delay={7.5}
            gradientStartColor="#3b82f6"
            gradientStopColor="#f43f5e"
          />

          {/* 9. Observe -> Response (exit) */}
          <CurvedArrow
            containerRef={containerRef}
            fromRef={observationRef}
            toRef={finalRef}
            duration={12}
            delay={8.5}
            gradientStartColor="#f43f5e"
            gradientStopColor="#10b981"
          />
        </div>

        {/* Footer */}
        <BlurFade delay={1} duration={0.5}>
          <div className="pb-6 text-center">
            <p className="text-lg text-slate-400">
              The ReAct Loop
            </p>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
