'use client';

import { ContactSlide as ContactSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { Particles } from '@/components/ui/particles';
import { Linkedin, User, HelpCircle } from 'lucide-react';

interface Props {
  slide: ContactSlideType;
}

export function ContactSlide({ slide }: Props) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={50}
        color="#ffffff"
        size={0.5}
        staticity={40}
      />

      <div className="slide-content relative z-10 flex flex-col items-center justify-center">
        <BlurFade delay={0.1} duration={0.6}>
          <div className="flex items-center justify-center mb-8">
            <HelpCircle className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-cyan-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white text-center">
            {slide.headline}
          </h1>
        </BlurFade>

        {slide.name && (
          <BlurFade delay={0.3} duration={0.5}>
            <div className="mt-12 flex flex-col items-center gap-4">
              {slide.imageSrc ? (
                <img
                  src={slide.imageSrc}
                  alt={slide.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-cyan-500/30 object-cover"
                />
              ) : (
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-cyan-500/30 bg-gradient-to-br from-cyan-900/50 to-slate-900/50 flex items-center justify-center">
                  <User className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-cyan-400/60" />
                </div>
              )}

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                {slide.name}
              </h2>

              {slide.linkedIn && (
                <a
                  href={slide.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg sm:text-xl text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>{slide.linkedIn.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                </a>
              )}
            </div>
          </BlurFade>
        )}
      </div>
    </div>
  );
}
