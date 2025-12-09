'use client';

import { useState, useEffect } from 'react';
import { RegularSlide as RegularSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';
import { Linkedin, User, Presentation, Code, HelpCircle, Rocket, Lightbulb, Target } from 'lucide-react';
import { ContentSection } from '@/types/slide';

interface Props {
  slide: RegularSlideType;
}

const iconMap = {
  presentation: Presentation,
  code: Code,
  question: HelpCircle,
  rocket: Rocket,
  lightbulb: Lightbulb,
  target: Target,
};

function AgendaCard({ section, index, isActive }: { section: ContentSection; index: number; isActive: boolean }) {
  const IconComponent = section.icon ? iconMap[section.icon] : null;

  return (
    <BlurFade delay={0.2 + index * 0.15} duration={0.5}>
      <div className={`flex h-full items-start gap-6 rounded-2xl border p-8 backdrop-blur-sm transition-all ${
        isActive
          ? 'border-cyan-400/50 bg-cyan-950/40'
          : 'border-slate-700/30 bg-slate-900/30'
      }`}>
        {IconComponent && (
          <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl ${
            isActive
              ? 'bg-cyan-500/30 text-cyan-300'
              : 'bg-slate-800/50 text-slate-500'
          }`}>
            <IconComponent className="h-8 w-8" />
          </div>
        )}
        <div className="flex flex-col gap-2">
          {section.title && (
            <h2 className={`text-3xl font-semibold ${isActive ? 'text-white' : 'text-slate-400'}`}>
              {section.title}
            </h2>
          )}
          {section.text && (
            <p className={`text-xl leading-relaxed ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
              {section.text}
            </p>
          )}
        </div>
      </div>
    </BlurFade>
  );
}

function ProfileCard({ profile }: { profile: NonNullable<RegularSlideType['profile']> }) {
  return (
    <div className="flex items-start gap-10">
      <BlurFade delay={0.15} duration={0.5}>
        <div className="relative flex-shrink-0">
          {profile.imageSrc ? (
            <img
              src={profile.imageSrc}
              alt={profile.name}
              className="h-56 w-56 rounded-full border-4 border-cyan-500/30 object-cover"
            />
          ) : (
            <div className="flex h-56 w-56 items-center justify-center rounded-full border-4 border-cyan-500/30 bg-gradient-to-br from-cyan-900/50 to-slate-900/50">
              <User className="h-28 w-28 text-cyan-400/60" />
            </div>
          )}
        </div>
      </BlurFade>

      <BlurFade delay={0.25} duration={0.5}>
        <div className="flex flex-col justify-center pt-4">
          <h2 className="text-5xl font-bold tracking-tight text-white">
            {profile.name}
          </h2>
          <p className="mt-3 text-2xl font-medium text-cyan-400">
            {profile.title}
          </p>
          {profile.linkedIn && (
            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 text-xl text-cyan-300 transition-colors hover:text-cyan-200"
            >
              <Linkedin className="h-6 w-6" />
              {profile.linkedIn.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </a>
          )}
        </div>
      </BlurFade>
    </div>
  );
}

export function RegularSlide({ slide }: Props) {
  const hasProfile = !!slide.profile;
  const isCardsLayout = slide.layout === 'cards';
  const [activeSection, setActiveSection] = useState(slide.activeSection ?? 0);

  useEffect(() => {
    if (!isCardsLayout) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setActiveSection((prev) => Math.max(0, prev - 1));
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        setActiveSection((prev) => Math.min(slide.sections.length - 1, prev + 1));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCardsLayout, slide.sections.length]);

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-70"
        color="rgba(34, 211, 238, 0.2)"
        blur={50}
        length="90vh"
      />

      <div className="relative z-10 flex flex-1 flex-col">
        {/* Header with headline - fixed at top, horizontally centered */}
        <div className="pt-16 text-center">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-6xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Content container - centered both horizontally and vertically */}
        <div className="flex flex-1 items-center justify-center px-20 py-8">
          {isCardsLayout ? (
            <div className="flex w-full max-w-3xl flex-col gap-4">
              {slide.sections.map((section, index) => (
                <AgendaCard
                  key={index}
                  section={section}
                  index={index}
                  isActive={activeSection === index}
                />
              ))}
            </div>
          ) : (
            <div className={`flex ${hasProfile ? 'flex-col items-center gap-16' : 'flex-col gap-8'}`}>
              {hasProfile && (
                <div className="flex-shrink-0">
                  <ProfileCard profile={slide.profile!} />
                </div>
              )}

              <div className={`flex flex-col gap-10 ${hasProfile ? 'w-full max-w-2xl' : ''}`}>
                {slide.sections.map((section, index) => (
                  <BlurFade key={index} delay={hasProfile ? 0.3 + index * 0.15 : 0.2 + index * 0.15} duration={0.5}>
                    <div className="flex flex-col gap-5">
                      {section.title && (
                        <h2 className="text-3xl font-semibold text-cyan-300">
                          {section.title}
                        </h2>
                      )}
                      {section.text && (
                        <p className="text-2xl leading-relaxed text-slate-300">
                          {section.text}
                        </p>
                      )}
                      {section.items && (
                        <ul className="flex flex-col gap-4">
                          {section.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-4 text-2xl text-slate-300"
                            >
                              <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.link && (
                        <a
                          href={section.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-fit items-center gap-3 rounded-lg border border-cyan-500/30 bg-cyan-950/30 px-5 py-3 text-xl text-cyan-300 transition-all hover:border-cyan-400/50 hover:bg-cyan-900/40 hover:text-cyan-200"
                        >
                          {section.link.label}
                        </a>
                      )}
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
