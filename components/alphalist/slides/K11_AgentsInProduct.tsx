'use client';

import { Activity, Bot, GitPullRequest, AppWindow } from 'lucide-react';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

type Tone = 'emerald' | 'sky' | 'violet' | 'rose';

export function K11_AgentsInProduct({ index, total }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="Agents inside the product"
      title="Agents can even improve the product itself."
    >
      <div className="relative mx-auto h-[640px] w-full max-w-[860px]">
          {/* Soft radial backdrop */}
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-[360px] w-[360px] rounded-full bg-gradient-to-br from-emerald-200/40 via-sky-200/30 to-rose-200/40 blur-3xl" />
          </div>

          {/* Loop SVG */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 860 640"
            aria-hidden
          >
            <defs>
              <linearGradient id="loop-top" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#0EA5E9" />
              </linearGradient>
              <linearGradient id="loop-right" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0EA5E9" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="loop-bottom" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#F43F5E" />
              </linearGradient>
              <linearGradient id="loop-left" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#F43F5E" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
              <marker id="ar-top" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0 L10 5 L0 10 z" fill="#0EA5E9" />
              </marker>
              <marker id="ar-right" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0 L10 5 L0 10 z" fill="#8B5CF6" />
              </marker>
              <marker id="ar-bottom" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0 L10 5 L0 10 z" fill="#F43F5E" />
              </marker>
              <marker id="ar-left" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0 L10 5 L0 10 z" fill="#10B981" />
              </marker>
            </defs>

            {/* Top: App -> Analytics */}
            <path
              d="M 220 130 Q 430 40 640 130"
              stroke="url(#loop-top)"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
              markerEnd="url(#ar-top)"
            >
              <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="2s" fill="freeze" />
            </path>
            {/* Right: Analytics -> Agent */}
            <path
              d="M 700 200 Q 830 320 700 460"
              stroke="url(#loop-right)"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
              markerEnd="url(#ar-right)"
            />
            {/* Bottom: Agent -> GitHub */}
            <path
              d="M 640 530 Q 430 610 220 530"
              stroke="url(#loop-bottom)"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
              markerEnd="url(#ar-bottom)"
            />
            {/* Left: GitHub -> App */}
            <path
              d="M 160 460 Q 30 320 160 200"
              stroke="url(#loop-left)"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
              markerEnd="url(#ar-left)"
            />

            {/* Animated traveling dots */}
            <circle r="5" fill="#10B981">
              <animateMotion dur="6s" repeatCount="indefinite" path="M 220 130 Q 430 40 640 130" />
            </circle>
            <circle r="5" fill="#8B5CF6">
              <animateMotion dur="6s" begin="1.5s" repeatCount="indefinite" path="M 700 200 Q 830 320 700 460" />
            </circle>
            <circle r="5" fill="#F43F5E">
              <animateMotion dur="6s" begin="3s" repeatCount="indefinite" path="M 640 530 Q 430 610 220 530" />
            </circle>
            <circle r="5" fill="#10B981">
              <animateMotion dur="6s" begin="4.5s" repeatCount="indefinite" path="M 160 460 Q 30 320 160 200" />
            </circle>
          </svg>

          {/* Nodes */}
          <Node icon={AppWindow} label="App" sub="users behave" tone="emerald" step={1} position="left-0 top-12" />
          <Node
            icon={Activity}
            label="Analytics"
            sub="heatmaps · session recordings"
            tone="sky"
            step={2}
            position="right-0 top-12"
          />
          <Node
            icon={Bot}
            label="Agent"
            sub="watches recordings · proposes fixes"
            tone="violet"
            step={3}
            position="right-0 bottom-12"
          />
          <Node
            icon={GitPullRequest}
            label="GitHub"
            sub="opens PRs"
            tone="rose"
            step={4}
            position="left-0 bottom-12"
          />

          {/* Edge annotation: what flows from Analytics to Agent */}
          <div className="absolute right-[-12px] top-1/2 flex -translate-y-1/2 flex-col items-end gap-1.5">
            <FlowChip>heatmaps</FlowChip>
            <FlowChip>session recordings</FlowChip>
            <FlowChip>error events</FlowChip>
          </div>

          {/* Caption center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="rounded-full border border-emerald-600/30 bg-white/80 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.35em] text-emerald-700 shadow-sm backdrop-blur">
              Self-improving product
            </span>
            <p className="mt-3 text-xl font-semibold text-slate-800 md:text-2xl">
              User behavior is the spec.
            </p>
          </div>
      </div>
    </AlphalistFrame>
  );
}

const TONE_STYLES: Record<Tone, { ring: string; icon: string; chip: string; glow: string }> = {
  emerald: {
    ring: 'border-emerald-500/40',
    icon: 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white',
    chip: 'bg-emerald-100 text-emerald-700',
    glow: 'shadow-[0_8px_30px_-8px_rgba(16,185,129,0.55)]',
  },
  sky: {
    ring: 'border-sky-500/40',
    icon: 'bg-gradient-to-br from-sky-500 to-sky-600 text-white',
    chip: 'bg-sky-100 text-sky-700',
    glow: 'shadow-[0_8px_30px_-8px_rgba(14,165,233,0.55)]',
  },
  violet: {
    ring: 'border-violet-500/40',
    icon: 'bg-gradient-to-br from-violet-500 to-violet-600 text-white',
    chip: 'bg-violet-100 text-violet-700',
    glow: 'shadow-[0_8px_30px_-8px_rgba(139,92,246,0.55)]',
  },
  rose: {
    ring: 'border-rose-500/40',
    icon: 'bg-gradient-to-br from-rose-500 to-rose-600 text-white',
    chip: 'bg-rose-100 text-rose-700',
    glow: 'shadow-[0_8px_30px_-8px_rgba(244,63,94,0.55)]',
  },
};

function Node({
  icon: Icon,
  label,
  sub,
  position,
  tone,
  step,
}: {
  icon: React.ElementType;
  label: string;
  sub: string;
  position: string;
  tone: Tone;
  step: number;
}) {
  const t = TONE_STYLES[tone];
  return (
    <div
      className={`absolute flex w-[210px] flex-col items-center rounded-2xl border-2 bg-white/95 px-5 py-5 text-center backdrop-blur ${t.ring} ${t.glow} ${position}`}
    >
      <span
        className={`absolute -left-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${t.chip}`}
      >
        {step}
      </span>
      <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${t.icon}`}>
        <Icon className="h-6 w-6" strokeWidth={2.4} />
      </span>
      <p className="mt-3 text-lg font-bold tracking-tight text-slate-900">{label}</p>
      <p className="mt-1 text-xs leading-snug text-slate-500">{sub}</p>
    </div>
  );
}

function FlowChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-violet-500/40 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-700 shadow-md">
      {children}
    </span>
  );
}
