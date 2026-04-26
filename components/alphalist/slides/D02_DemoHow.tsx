'use client';

import { Fragment } from 'react';
import { BlurFade } from '@/components/ui/blur-fade';
import { ArrowRight, FileText, Map, Hammer, CloudUpload } from 'lucide-react';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const steps = [
  {
    icon: FileText,
    title: 'Spec',
    detail: 'Codex (fast mode) + prepared skill.',
  },
  {
    icon: Map,
    title: 'Roadmap',
    detail: 'Agent generates a phased plan.',
  },
  {
    icon: Hammer,
    title: 'Phased build',
    detail: 'Agent codes, Fabian steers, phase by phase.',
  },
  {
    icon: CloudUpload,
    title: 'Deploy',
    detail: 'Forge deploys to Hetzner.',
  },
];

export function D02_DemoHow({ index, total }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="Live demo · how we build"
      title="Watch the steering, not the typing."
    >
      <div className="flex w-full flex-col">
        <div className="grid grid-cols-[repeat(7,minmax(0,1fr))] items-stretch gap-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Fragment key={s.title}>
                <BlurFade
                  delay={0.3 + i * 0.15}
                  duration={0.5}
                  className="col-span-1"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-600">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <Icon className="mt-3 h-6 w-6 text-emerald-600" />
                    <p className="mt-4 text-xl font-semibold text-slate-900">
                      {s.title}
                    </p>
                    <p className="mt-2 text-xs text-slate-500">{s.detail}</p>
                  </div>
                </BlurFade>
                {i < steps.length - 1 && (
                  <BlurFade
                    delay={0.45 + i * 0.15}
                    duration={0.4}
                    className="col-span-1 flex items-center justify-center"
                  >
                    <ArrowRight className="h-6 w-6 text-slate-400" />
                  </BlurFade>
                )}
              </Fragment>
            );
          })}
        </div>

        <BlurFade delay={1.2} duration={0.6}>
          <blockquote className="mt-14 max-w-3xl border-l-2 border-emerald-600/50 pl-5 text-lg leading-relaxed text-slate-700">
            The agent does the typing.
            <br />
            I do the steering.
            <br />
            <span className="text-emerald-600">
              The prepared environment does half the work.
            </span>
          </blockquote>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}
