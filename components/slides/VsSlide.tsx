'use client';

import { VsSlide as VsSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';

interface Props {
  slide: VsSlideType;
}

const GRID_COLS_CLASS: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
};

export function VsSlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-60"
        color="rgba(99, 102, 241, 0.2)"
        blur={50}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col">
        {/* Header */}
        <div className="pt-6 sm:pt-8 md:pt-10 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Tools comparison */}
        <div className="flex flex-1 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8">
          <div className={`grid grid-cols-1 ${GRID_COLS_CLASS[slide.tools.length] || 'md:grid-cols-3'} gap-4 sm:gap-6 w-full max-w-6xl items-stretch`}>
            {slide.tools.map((tool, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.15} duration={0.5} className="h-full">
                <div className="relative h-full flex flex-col items-center justify-center rounded-xl sm:rounded-2xl border border-indigo-400/60 bg-gradient-to-br from-indigo-950/60 to-slate-900/60 px-4 sm:px-6 py-8 sm:py-10">
                  <div className="h-14 sm:h-16 flex items-center justify-center gap-3">
                    {tool.logos.map((logo, logoIndex) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={logoIndex} src={logo} alt={tool.name} className="h-12 sm:h-14 w-auto object-contain" />
                    ))}
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-3 sm:mt-4 text-white">
                    {tool.name}
                  </h2>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
