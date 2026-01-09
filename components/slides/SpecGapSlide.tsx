'use client';

import { useState, useEffect } from 'react';
import { SpecGapSlide as SpecGapSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { AlertTriangle, HelpCircle } from 'lucide-react';

interface Props {
  slide: SpecGapSlideType;
}

function renderWithItalics(text: string) {
  const parts = text.split(/\*([^*]+)\*/g);
  return parts.map((part, index) =>
    index % 2 === 1 ? <em key={index}>{part}</em> : part
  );
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
      if (event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault();
        setVisibleCount((prev) => Math.min(specificationGaps.length, prev + 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setVisibleCount((prev) => Math.max(0, prev - 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-60"
        color="rgba(239, 68, 68, 0.15)"
        blur={50}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        {/* Header */}
        <div className="pt-14 sm:pt-8 md:pt-12 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white">
              <AlertTriangle className="h-5 w-5 sm:h-7 sm:w-7 md:h-9 md:w-9 lg:h-10 lg:w-10 text-amber-400 flex-shrink-0" />
              <span>{renderWithItalics(slide.headline)}</span>
            </h1>
          </BlurFade>
        </div>

        {/* Main content */}
        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 overflow-y-auto">
          <div className="w-full max-w-6xl">
            {/* The prompt */}
            <BlurFade delay={0.2} duration={0.5}>
              <div className="mb-4 sm:mb-6 md:mb-8 rounded-lg sm:rounded-xl border border-slate-700/50 bg-slate-900/60 p-3 sm:p-4 md:p-6">
                <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-1 sm:mb-2">Your prompt:</p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-mono text-green-400">
                  &quot;Add a Save button to the settings page&quot;
                </p>
              </div>
            </BlurFade>

            {/* Points from slide data */}
            <BlurFade delay={0.3} duration={0.5}>
              <div className="mb-4 sm:mb-6 md:mb-8 space-y-2 sm:space-y-3">
                {slide.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base md:text-lg lg:text-xl text-slate-300"
                  >
                    <span className="text-amber-400 mt-0.5 sm:mt-1">→</span>
                    <span>{renderWithItalics(point)}</span>
                  </div>
                ))}
              </div>
            </BlurFade>

            {/* Specification gaps grid */}
            <BlurFade delay={0.4} duration={0.5}>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                {specificationGaps.map((gap, index) => (
                  <div
                    key={index}
                    className={`rounded-lg sm:rounded-xl border p-2 sm:p-3 md:p-4 transition-all duration-300 ${
                      index < visibleCount
                        ? 'border-red-500/50 bg-red-950/30'
                        : 'border-slate-700/30 bg-slate-900/30 opacity-30'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                      <HelpCircle
                        className={`h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 ${
                          index < visibleCount ? 'text-red-400' : 'text-slate-600'
                        }`}
                      />
                      <span
                        className={`font-semibold text-xs sm:text-sm ${
                          index < visibleCount ? 'text-red-300' : 'text-slate-600'
                        }`}
                      >
                        {gap.question}
                      </span>
                    </div>
                    <div className="space-y-0.5 sm:space-y-1">
                      {gap.options.map((option, optIndex) => (
                        <p
                          key={optIndex}
                          className={`text-[10px] sm:text-xs md:text-sm ${
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

      </div>
    </div>
  );
}
