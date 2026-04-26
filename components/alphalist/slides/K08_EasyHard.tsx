'use client';

import { BlurFade } from '@/components/ui/blur-fade';
import {
  Check,
  Sparkles,
  Heart,
  Presentation,
  Compass,
  BookX,
  Building2,
  Map,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AlphalistFrame } from '../AlphalistFrame';
import { useReveal } from '../useReveal';

interface Props {
  index: number;
  total: number;
}

const easyItems: Array<{ icon: LucideIcon; label: string; sub: string }> = [
  { icon: Presentation, label: 'Workshop', sub: 'With a trainer who has done it.' },
  { icon: Sparkles, label: 'The aha moment', sub: '"Wait, it actually wrote that?"' },
  { icon: Heart, label: 'Hooked', sub: 'AI coding is addictive.' },
];

const hardItems: Array<{ icon: LucideIcon; label: string; sub: string }> = [
  { icon: BookX, label: 'No industry standard', sub: 'Best practices change every month.' },
  { icon: Compass, label: 'No handbook', sub: 'Nobody wrote down how to do this.' },
  { icon: Building2, label: 'No reference org', sub: 'No "Spotify model" to copy.' },
  { icon: Map, label: 'No safe path', sub: 'You are drawing the map yourself.' },
];

export function K08_EasyHard({ index, total }: Props) {
  const step = useReveal(2);

  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      title={
        <>
          Starting is simple, but transforming the entire org{' '}
          <span className="text-rose-600">isn&apos;t.</span>
        </>
      }
    >
      <div className="w-full">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <Panel
            tone="emerald"
            label="The easy part"
            heading="A workshop and a click."
            items={easyItems}
            visible={step >= 0}
            ladder="up"
          />

          <Panel
            tone="rose"
            label="And then?"
            heading="Uncharted territory."
            items={hardItems}
            visible={step >= 1}
            ladder="down"
          />
        </div>

        {step >= 2 && (
          <BlurFade duration={0.6}>
            <p className="mt-12 text-center text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              That is why this room exists.
            </p>
          </BlurFade>
        )}
      </div>
    </AlphalistFrame>
  );
}

function Panel({
  tone,
  label,
  heading,
  items,
  visible,
  ladder,
}: {
  tone: 'emerald' | 'rose';
  label: string;
  heading: string;
  items: Array<{ icon: LucideIcon; label: string; sub: string }>;
  visible: boolean;
  ladder: 'up' | 'down';
}) {
  const isEmerald = tone === 'emerald';
  const containerCls = isEmerald
    ? 'border-emerald-600/25 bg-gradient-to-br from-emerald-50 to-white'
    : 'border-rose-600/25 bg-gradient-to-br from-rose-50 to-white';
  const labelCls = isEmerald ? 'text-emerald-700' : 'text-rose-600';
  const headingCls = isEmerald ? 'text-emerald-900' : 'text-rose-900';
  const iconRingCls = isEmerald
    ? 'bg-emerald-600/10 text-emerald-700'
    : 'bg-rose-600/10 text-rose-600';
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-500 sm:p-8 ${containerCls} ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-2'
      }`}
    >
      {/* Decorative ladder pattern */}
      <Ladder direction={ladder} tone={tone} />

      <div className="relative">
        <div className={`mb-2 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.3em] ${labelCls}`}>
          <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${iconRingCls}`}>
            {isEmerald ? <Check className="h-3 w-3" strokeWidth={3} /> : <span className="text-xs font-bold">?</span>}
          </span>
          {label}
        </div>
        <p className={`mb-6 text-lg font-semibold ${headingCls} sm:text-xl`}>{heading}</p>

        <ul className="space-y-3">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <li key={it.label} className="flex items-start gap-3">
                <span className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${iconRingCls}`}>
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <p className="text-base font-semibold text-slate-900">{it.label}</p>
                  <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">{it.sub}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function Ladder({ direction, tone }: { direction: 'up' | 'down'; tone: 'emerald' | 'rose' }) {
  const stroke = tone === 'emerald' ? 'rgba(16,185,129,0.18)' : 'rgba(244,63,94,0.18)';
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className="pointer-events-none absolute -bottom-6 -right-6 h-44 w-44 opacity-90"
    >
      {direction === 'up' ? (
        <>
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1={20 + i * 30}
              y1={180 - i * 30}
              x2={60 + i * 30}
              y2={140 - i * 30}
              stroke={stroke}
              strokeWidth="2"
            />
          ))}
          <line x1="20" y1="180" x2="160" y2="40" stroke={stroke} strokeWidth="2" />
          <line x1="60" y1="180" x2="200" y2="40" stroke={stroke} strokeWidth="2" />
        </>
      ) : (
        <>
          {[0, 1, 2].map((i) => (
            <line
              key={i}
              x1={30 + i * 25}
              y1={40 + i * 25}
              x2={70 + i * 25}
              y2={80 + i * 25}
              stroke={stroke}
              strokeWidth="2"
            />
          ))}
          <line x1="30" y1="40" x2="100" y2="110" stroke={stroke} strokeWidth="2" />
          <line x1="60" y1="40" x2="130" y2="110" stroke={stroke} strokeWidth="2" />
          <text
            x="120"
            y="170"
            fontSize="80"
            fontWeight="700"
            fill={stroke}
            opacity="0.5"
          >
            ?
          </text>
        </>
      )}
    </svg>
  );
}

