'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { VsSlide as VsSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { Check, X } from 'lucide-react';

interface Props {
  slide: VsSlideType;
}

function ClaudeCodeLogo() {
  return (
    <div className="h-20 flex items-center justify-center">
      <Image src="/claudecode2.png" alt="Claude Code" width={80} height={80} />
    </div>
  );
}

function CursorLogo() {
  return (
    <div className="h-20 flex items-center justify-center">
      <Image src="/cursor2.png" alt="Cursor" width={160} height={48} />
    </div>
  );
}

export function VsSlide({ slide }: Props) {
  const [tool1, tool2] = slide.tools;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault();
        setActiveIndex(0);
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault();
        setActiveIndex(1);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const tools = [
    { data: tool1, Logo: ClaudeCodeLogo },
    { data: tool2, Logo: CursorLogo },
  ];

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-60"
        color="rgba(99, 102, 241, 0.2)"
        blur={50}
        length="90vh"
      />

      <div className="relative z-10 flex flex-1 flex-col">
        {/* Header */}
        <div className="pt-12 text-center">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-6xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Tools comparison */}
        <div className="flex flex-1 items-center justify-center px-16 py-8">
          <div className="grid grid-cols-2 gap-8 w-full max-w-5xl items-stretch">
            {tools.map((tool, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.15} duration={0.5} className="h-full">
                <div
                  className={`relative h-full flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                    activeIndex === index
                      ? 'border-indigo-400/60 bg-gradient-to-br from-indigo-950/60 to-slate-900/60 scale-105'
                      : 'border-slate-700/40 bg-slate-900/40 hover:border-indigo-500/40 hover:bg-slate-900/60'
                  }`}
                >
                  {/* Header section */}
                  <div className="flex flex-col items-center mb-6">
                    <tool.Logo />
                    <h2 className={`text-2xl font-bold mt-2 ${activeIndex === index ? 'text-white' : 'text-slate-300'}`}>
                      {tool.data.name}
                    </h2>
                  </div>

                  {/* Content section */}
                  <div className="flex-1 flex flex-col">
                    {/* Pros */}
                    <div className="space-y-3 mb-6">
                      {tool.data.pros.map((pro, proIndex) => (
                        <div key={proIndex} className={`flex items-start gap-3 ${activeIndex === index ? 'text-green-400' : 'text-slate-600'}`}>
                          <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                          <span className={`text-lg ${activeIndex === index ? 'text-slate-300' : 'text-slate-500'}`}>
                            {pro}
                            {proIndex === 0 && tool.data.highlight && (
                              <span className={`ml-2 text-sm italic ${activeIndex === index ? 'text-indigo-400' : 'text-slate-600'}`}>
                                ({tool.data.highlight})
                              </span>
                            )}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Cons */}
                    <div className="space-y-3">
                      {tool.data.cons.map((con, conIndex) => (
                        <div key={conIndex} className={`flex items-start gap-3 ${activeIndex === index ? 'text-red-400' : 'text-slate-600'}`}>
                          <X className="h-5 w-5 mt-0.5 flex-shrink-0" />
                          <span className={`text-lg ${activeIndex === index ? 'text-slate-300' : 'text-slate-500'}`}>
                            {con}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* Footnotes */}
        {slide.footnotes && slide.footnotes.length > 0 && (
          <BlurFade delay={0.5} duration={0.5}>
            <div className="pb-8 text-center space-y-1">
              {slide.footnotes.map((footnote, index) => (
                <p key={index} className="text-sm text-slate-500">
                  {footnote}
                </p>
              ))}
            </div>
          </BlurFade>
        )}
      </div>
    </div>
  );
}
