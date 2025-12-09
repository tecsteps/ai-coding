'use client';

import { useState, useEffect } from 'react';
import { SpecGapSlide as SpecGapSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { AlertTriangle, HelpCircle } from 'lucide-react';

interface Props {
  slide: SpecGapSlideType;
}

const specificationGaps = [
  { question: 'What color?', options: ['Primary blue', 'Green', 'Gray', 'Custom brand color'] },
  { question: 'What size?', options: ['Small', 'Medium', 'Large', 'Full width'] },
  { question: 'Where exactly?', options: ['Top right', 'Bottom of form', 'Floating', 'In header'] },
  { question: 'What happens on click?', options: ['API call', 'Local save', 'Show modal', 'Navigate away'] },
  { question: 'Loading state?', options: ['Spinner', 'Disabled', 'Text change', 'None'] },
  { question: 'Success feedback?', options: ['Toast', 'Inline message', 'Redirect', 'Nothing'] },
  { question: 'Error handling?', options: ['Toast', 'Modal', 'Inline', 'Retry button'] },
  { question: 'Keyboard shortcut?', options: ['Ctrl+S', 'None', 'Custom', 'Enter key'] },
];

export function SpecGapSlide({ slide }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault();
        setVisibleCount((prev) => Math.min(specificationGaps.length, prev + 1));
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        setVisibleCount((prev) => Math.max(0, prev - 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-60"
        color="rgba(239, 68, 68, 0.15)"
        blur={50}
        length="90vh"
      />

      <div className="relative z-10 flex flex-1 flex-col">
        {/* Header */}
        <div className="pt-12 text-center">
          <BlurFade delay={0.1} duration={0.6}>
            <div className="inline-flex items-center gap-3 mb-4">
              <AlertTriangle className="h-10 w-10 text-amber-400" />
            </div>
            <h1 className="text-6xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Main content */}
        <div className="flex flex-1 items-start justify-center px-16 pt-8 pb-4">
          <div className="w-full max-w-6xl">
            {/* The prompt */}
            <BlurFade delay={0.2} duration={0.5}>
              <div className="mb-8 rounded-xl border border-slate-700/50 bg-slate-900/60 p-6">
                <p className="text-lg text-slate-400 mb-2">Your prompt:</p>
                <p className="text-2xl font-mono text-green-400">
                  &quot;Add a Save button to the settings page&quot;
                </p>
              </div>
            </BlurFade>

            {/* Points from slide data */}
            <BlurFade delay={0.3} duration={0.5}>
              <div className="mb-8 space-y-3">
                {slide.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-xl text-slate-300"
                  >
                    <span className="text-amber-400 mt-1">→</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </BlurFade>

            {/* Specification gaps grid */}
            <BlurFade delay={0.4} duration={0.5}>
              <div className="grid grid-cols-4 gap-4">
                {specificationGaps.map((gap, index) => (
                  <div
                    key={index}
                    className={`rounded-xl border p-4 transition-all duration-300 ${
                      index < visibleCount
                        ? 'border-red-500/50 bg-red-950/30'
                        : 'border-slate-700/30 bg-slate-900/30 opacity-30'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <HelpCircle
                        className={`h-5 w-5 ${
                          index < visibleCount ? 'text-red-400' : 'text-slate-600'
                        }`}
                      />
                      <span
                        className={`font-semibold ${
                          index < visibleCount ? 'text-red-300' : 'text-slate-600'
                        }`}
                      >
                        {gap.question}
                      </span>
                    </div>
                    <div className="space-y-1">
                      {gap.options.map((option, optIndex) => (
                        <p
                          key={optIndex}
                          className={`text-sm ${
                            index < visibleCount ? 'text-slate-400' : 'text-slate-700'
                          }`}
                        >
                          • {option}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>

        {/* Footer */}
        <BlurFade delay={0.5} duration={0.5}>
          <div className="pb-6 text-center">
            <p className="text-base text-slate-500">
              Press <kbd className="px-2 py-1 bg-slate-800 rounded text-slate-400 mx-1">→</kbd> to reveal specification gaps
            </p>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
