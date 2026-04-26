'use client';

import {
  BookOpen,
  CheckCircle2,
  Flame,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';
import { useReveal } from '../useReveal';

interface Props {
  index: number;
  total: number;
}

export function K06_Taxonomy({ index, total }: Props) {
  const step = useReveal(2);
  const showRight = step >= 1;
  const showParallel = step >= 2;

  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total}>
      <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
        <BlurFade delay={0.2} duration={0.7} className="flex flex-col gap-8">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Vibe Coding
          </h2>
          <ChaosDiagram />
        </BlurFade>

        <div
          className={`flex flex-col gap-8 transition-all duration-700 ${
            showRight ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-3xl font-semibold text-emerald-600 md:text-4xl">
            Agentic Engineering
          </h2>
          <CalmDiagram parallel={showParallel} />
        </div>
      </div>
    </AlphalistFrame>
  );
}

/* ---------- Vibe Coding: one bold loop ---------- */

function ChaosDiagram() {
  const VW = 520;
  const VH = 340;
  const cx = VW / 2;
  const cy = VH / 2;
  const r = 130;

  const at = (angle: number) => ({
    x: cx + r * Math.sin(angle),
    y: cy - r * Math.cos(angle),
  });

  const TOP = 0;
  const RIGHT = (2 * Math.PI) / 3;
  const LEFT = (4 * Math.PI) / 3;
  const gap = 0.28;

  const arc = (start: number, end: number) => {
    const a = at(start);
    const b = at(end);
    return `M ${a.x} ${a.y} A ${r} ${r} 0 0 1 ${b.x} ${b.y}`;
  };

  const stroke = 'rgb(15,23,42)';
  const labelTop = at(TOP);
  const labelRight = at(RIGHT);
  const labelLeft = at(LEFT);

  return (
    <div className="relative aspect-[520/340] w-full">
      <svg viewBox={`0 0 ${VW} ${VH}`} className="absolute inset-0 h-full w-full">
        <defs>
          <marker id="arrowBold" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0 0 L6 3 L0 6 Z" fill={stroke} />
          </marker>
        </defs>
        <path d={arc(TOP + gap, RIGHT - gap)} stroke={stroke} strokeWidth="4" strokeLinecap="round" fill="none" markerEnd="url(#arrowBold)" />
        <path d={arc(RIGHT + gap, LEFT - gap)} stroke={stroke} strokeWidth="4" strokeLinecap="round" fill="none" markerEnd="url(#arrowBold)" />
        <path d={arc(LEFT + gap, TOP + 2 * Math.PI - gap)} stroke={stroke} strokeWidth="4" strokeLinecap="round" fill="none" markerEnd="url(#arrowBold)" />

        <text x={labelTop.x} y={labelTop.y - 18} textAnchor="middle" fontSize="22" fontWeight="600" fill="rgb(15,23,42)">
          Prompt
        </text>
        <text x={labelRight.x + 16} y={labelRight.y + 8} textAnchor="start" fontSize="22" fontWeight="600" fill="rgb(15,23,42)">
          Review
        </text>
        <text x={labelLeft.x - 16} y={labelLeft.y + 8} textAnchor="end" fontSize="22" fontWeight="600" fill="rgb(15,23,42)">
          Fix
        </text>
      </svg>

      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${(cx / VW) * 100}%`,
          top: `${(cy / VH) * 100}%`,
        }}
      >
        <Flame className="h-16 w-16 text-rose-500" strokeWidth={2} />
      </div>
    </div>
  );
}

/* ---------- Agentic: clean three-step flow ---------- */

function CalmDiagram({ parallel = false }: { parallel?: boolean }) {
  return (
    <div className="relative flex aspect-[520/340] w-full flex-col justify-center gap-10">
      {/* Three big steps with connectors */}
      <div className="relative">
        {/* Ghost lanes behind the front row to imply parallelism */}
        {parallel && (
          <>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-3 -translate-y-3 rounded-2xl border border-emerald-200/60 bg-emerald-50/30 transition-all duration-700"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-1.5 -translate-y-1.5 rounded-2xl border border-emerald-200/80 bg-emerald-50/60 transition-all duration-700"
            />
            <span className="absolute -top-3 right-0 rounded-full border border-emerald-300 bg-white px-2.5 py-0.5 font-mono text-[11px] font-bold text-emerald-600 shadow-sm">
              ×3 in parallel
            </span>
          </>
        )}

        <div className="relative grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
          <BigStep n="01" label="Brainstorming" icon={Target} tone="muted" />
          <FlowConnector id="a" delay="0s" />
          <BigStep
            n="02"
            label="Code Generation"
            caption="& Automated Verification"
            icon={Sparkles}
            tone="accent"
          />
          <FlowConnector id="b" delay="0.6s" />
          <BigStep n="03" label="Final check" icon={CheckCircle2} tone="muted" />
        </div>
      </div>

      {/* Context strip */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
          Context loaded once
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <ContextChip icon={BookOpen} label="Specs" />
          <ContextChip icon={ShieldCheck} label="Guardrails" />
          <ContextChip icon={Wrench} label="Tools" />
          <ContextChip icon={CheckCircle2} label="Verifiers" />
        </div>
      </div>
    </div>
  );
}

function BigStep({
  n,
  label,
  caption,
  icon: Icon,
  tone,
  stacked,
}: {
  n: string;
  label: string;
  caption?: string;
  icon: LucideIcon;
  tone: 'accent' | 'muted';
  stacked?: boolean;
}) {
  const isAccent = tone === 'accent';
  return (
    <div className="relative">
      {stacked && (
        <>
          <div
            aria-hidden
            className="absolute left-2 top-2 h-full w-full rounded-2xl border border-emerald-200/60 bg-emerald-50/40"
          />
          <div
            aria-hidden
            className="absolute left-1 top-1 h-full w-full rounded-2xl border border-emerald-200/80 bg-emerald-50/70"
          />
        </>
      )}
      <div
        className={`relative flex flex-col items-center justify-center rounded-2xl border px-4 py-7 transition-all ${
          isAccent
            ? 'border-emerald-300 bg-gradient-to-br from-emerald-50 to-emerald-100/80 shadow-[0_10px_40px_-12px_rgba(16,185,129,0.5)]'
            : 'border-slate-200 bg-white shadow-sm'
        }`}
      >
        {isAccent && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-emerald-400/40 [animation:pulse_2.4s_ease-in-out_infinite]"
          />
        )}
        <span
          className={`font-mono text-[10px] font-bold tracking-[0.3em] ${
            isAccent ? 'text-emerald-500' : 'text-slate-400'
          }`}
        >
          {n}
        </span>
        <Icon
          className={`mt-2 h-7 w-7 ${isAccent ? 'text-emerald-600' : 'text-slate-700'}`}
          strokeWidth={1.8}
        />
        <p
          className={`mt-2 text-center text-base font-semibold leading-tight tracking-tight ${
            isAccent ? 'text-emerald-700' : 'text-slate-900'
          }`}
        >
          {label}
        </p>
        {caption && (
          <p
            className={`mt-1 text-center text-[11px] leading-tight ${
              isAccent ? 'text-emerald-500/90' : 'text-slate-500'
            }`}
          >
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}

function FlowConnector({ id, delay }: { id: string; delay: string }) {
  return (
    <div className="relative flex h-6 w-8 items-center justify-center">
      <svg viewBox="0 0 32 24" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id={`flow-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(16,185,129)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(16,185,129)" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M 2 12 L 26 12"
          stroke={`url(#flow-${id})`}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 22 7 L 28 12 L 22 17"
          stroke="rgb(16,185,129)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle r="2.2" fill="rgb(16,185,129)">
          <animateMotion
            dur="2.4s"
            repeatCount="indefinite"
            begin={delay}
            path="M 2 12 L 26 12"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.1;0.9;1"
            dur="2.4s"
            begin={delay}
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}

function ContextChip({
  icon: Icon,
  label,
}: {
  icon: LucideIcon;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/70 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm">
      <Icon className="h-3.5 w-3.5 text-emerald-500" strokeWidth={2} />
      {label}
    </span>
  );
}
