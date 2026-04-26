'use client';

import { Brain, Shield, Wrench } from 'lucide-react';
import { AlphalistFrame } from '../AlphalistFrame';
import { useReveal } from '../useReveal';

interface Props {
  index: number;
  total: number;
}

const pillars = [
  {
    icon: Brain,
    title: 'Spec-Driven Development',
    description: 'Spec is the primary artifact. Code is generated and reviewed.',
  },
  {
    icon: Shield,
    title: 'Knowledge & Guardrails',
    description: 'The agent knows your system and your conventions.',
  },
  {
    icon: Wrench,
    title: 'Tools & MCPs',
    description: 'The agent reaches into your stack like a developer would.',
  },
];

export function K07_Pillars({ index, total }: Props) {
  const step = useReveal(pillars.length);

  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="Agentic Engineering"
      title="Three pillars of Agentic Engineering."
    >
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            const active = step >= i;
            return (
              <div
                key={p.title}
                className={`relative flex flex-col rounded-2xl border px-7 py-8 transition-all duration-500 ${
                  active
                    ? 'border-emerald-600/30 bg-white shadow-[0_8px_24px_-12px_rgba(5,150,105,0.25)]'
                    : 'border-slate-200 bg-white opacity-40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-emerald-600">
                    0{i + 1}
                  </span>
                  <Icon className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold leading-tight text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {p.description}
                </p>
              </div>
            );
          })}
      </div>
    </AlphalistFrame>
  );
}
