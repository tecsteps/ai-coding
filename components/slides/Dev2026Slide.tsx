'use client';

import { useState, useEffect } from 'react';
import { Dev2026Slide as Dev2026SlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { Terminal, User } from 'lucide-react';

interface Props {
  slide: Dev2026SlideType;
}

export function Dev2026Slide({ slide }: Props) {
  // Reveal one terminal per ArrowDown, then skills, then punchline
  const terminalCount = slide.terminalLabels.length;
  const maxStep = terminalCount + 1 + (slide.punchline ? 1 : 0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setStep((prev) => Math.min(maxStep, prev + 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setStep((prev) => Math.max(0, prev - 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [maxStep]);

  const skillsVisible = step >= terminalCount + 1;
  const punchlineVisible = step >= terminalCount + 2;

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-50"
        color="rgba(99, 102, 241, 0.2)"
        blur={60}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        <div className="pt-6 sm:pt-8 md:pt-12 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8 overflow-y-auto">
          <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                {slide.terminalLabels.map((label, index) => {
                  const visible = index < step;
                  return (
                    <div
                      key={index}
                      className={`relative rounded-lg sm:rounded-xl border p-2 sm:p-3 md:p-4 transition-all duration-500 ${
                        visible
                          ? 'border-indigo-400/60 bg-gradient-to-br from-indigo-950/60 to-slate-900/80 opacity-100 scale-100'
                          : 'border-slate-800 bg-slate-900/20 opacity-0 scale-90'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500/60" />
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500/60" />
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500/60" />
                        </div>
                        <Terminal
                          className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ml-auto ${
                            visible ? 'text-indigo-400' : 'text-slate-700'
                          }`}
                        />
                      </div>
                      <p
                        className={`text-[10px] sm:text-xs md:text-sm font-mono leading-tight ${
                          visible ? 'text-indigo-300' : 'text-slate-700'
                        }`}
                      >
                        {label}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 sm:mt-5 md:mt-6 flex items-center justify-center gap-2 sm:gap-3">
                <User className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-slate-400" />
                <p className="text-sm sm:text-base md:text-lg text-slate-400 italic">
                  You, orchestrating
                </p>
              </div>
            </div>

            <div
              className={`transition-all duration-700 ${
                skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <p className="text-xs sm:text-sm text-indigo-400 uppercase tracking-wider mb-3 sm:mb-4 md:mb-5">
                Top skills now
              </p>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                {slide.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200"
                  >
                    <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-indigo-400 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {slide.punchline && (
          <div
            className={`pb-6 sm:pb-8 md:pb-12 text-center px-4 transition-all duration-700 ${
              punchlineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white">
              {slide.punchline}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
