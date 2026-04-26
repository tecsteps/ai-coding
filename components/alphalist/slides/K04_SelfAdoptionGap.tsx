'use client';

import { AlphalistFrame } from '../AlphalistFrame';
import { useReveal } from '../useReveal';

interface Props {
  index: number;
  total: number;
}

export function K04_SelfAdoptionGap({ index, total }: Props) {
  const step = useReveal(2);

  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="The Adoption Gap"
      title="Stage two to stage three does not happen on its own."
    >
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-[1fr_11rem_1fr_11rem_1fr] md:items-center md:gap-3">
          <StageCell
            eyebrow="01"
            title="Developer writes code."
            active={step >= 0}
          />
          <TransitionArrow
            label="Self-adoption"
            color="emerald"
            visible={step >= 1}
          />
          <StageCell
            eyebrow="02"
            title="Developer writes code with AI."
            caption={<ProductivityBadge accent="emerald" value="+30%" />}
            active={step >= 1}
          />
          <TransitionArrow
            label="No self-adoption"
            color="rose"
            visible={step >= 2}
          />
          <StageCell
            eyebrow="03"
            title="AI writes code with the developer."
            caption={<ProductivityBadge accent="rose" value="10×" />}
            active={step >= 2}
          />
      </div>
    </AlphalistFrame>
  );
}

function StageCell({
  eyebrow,
  title,
  caption,
  active,
}: {
  eyebrow: string;
  title: string;
  caption?: React.ReactNode;
  active: boolean;
}) {
  return (
    <div
      className={`flex flex-col rounded-2xl border px-6 py-7 transition-all duration-500 ${
        active ? 'border-slate-200 bg-slate-50' : 'border-slate-200 bg-white opacity-40'
      }`}
    >
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-slate-400">
        Stage {eyebrow}
      </span>
      <h3 className="mt-3 text-xl font-semibold leading-snug text-slate-900 md:text-2xl">
        {title}
      </h3>
      {caption && <div className="mt-4">{caption}</div>}
    </div>
  );
}

function ProductivityBadge({
  value,
  accent,
}: {
  value: string;
  accent: 'emerald' | 'rose';
}) {
  const styles =
    accent === 'emerald'
      ? {
          wrap: 'border-emerald-300/70 bg-gradient-to-br from-emerald-50 to-emerald-100/80 text-emerald-700',
          dot: 'bg-emerald-500 shadow-[0_0_12px_2px_rgba(16,185,129,0.55)]',
          value: 'text-emerald-700',
        }
      : {
          wrap: 'border-rose-300/70 bg-gradient-to-br from-rose-50 to-rose-100/80 text-rose-700',
          dot: 'bg-rose-500 shadow-[0_0_12px_2px_rgba(244,63,94,0.55)]',
          value: 'text-rose-700',
        };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium shadow-sm ${styles.wrap}`}
    >
      <span className={`h-2 w-2 rounded-full ${styles.dot}`} aria-hidden />
      <span className={`font-mono text-base font-bold tracking-tight ${styles.value}`}>
        {value}
      </span>
      <span className="text-xs uppercase tracking-[0.18em] opacity-80">productivity</span>
    </span>
  );
}

function TransitionArrow({
  label,
  color,
  visible,
}: {
  label: string;
  color: 'emerald' | 'rose';
  visible: boolean;
}) {
  const stroke = color === 'emerald' ? '#34D399' : '#F43F5E';
  const text = color === 'emerald' ? 'text-emerald-600' : 'text-rose-600';
  return (
    <div
      className={`flex flex-col items-center transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <p className={`mb-1 whitespace-nowrap text-[0.68rem] uppercase tracking-[0.22em] ${text}`}>
        {label}
      </p>
      <svg viewBox="0 0 176 42" className="h-10 w-44" aria-hidden>
        <defs>
          <marker id={`arrow-${color}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill={stroke} />
          </marker>
        </defs>
        <path
          d="M 5 27 Q 88 7, 170 27"
          stroke={stroke}
          strokeWidth="2.5"
          fill="none"
          markerEnd={`url(#arrow-${color})`}
        />
      </svg>
    </div>
  );
}
