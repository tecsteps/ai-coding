'use client';

import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const hosts = [
  {
    slug: 'fabian-wesner',
    name: 'Fabian Wesner',
    title: 'CTO · Passionate about AI and Entrepreneurship',
    bullets: [
      'Ex-CTO Rocket Internet & Project A',
      'Co-Founder & ex-CTO Spryker',
      'Currently building something new',
    ],
    linkedin: 'https://www.linkedin.com/in/fabian-wesner',
  },
  {
    slug: 'tereza-iofciu',
    name: 'Tereza Iofciu, PhD',
    title: 'Helping data & AI professionals lead with purpose',
    bullets: [
      '15+ years in data science & ML',
      'PhD in computer science',
      'Founder of PyLadies Hamburg',
    ],
    linkedin: 'https://www.linkedin.com/in/tereza-iofciu',
  },
  {
    slug: 'tim-niemeier',
    name: 'Tim Niemeier',
    title: 'Technical Founder (Stealth) · Former CTO @ Rocket Internet',
    bullets: [
      'Co-Founder & MD ROQ',
      'Ex-CTO Rocket Internet',
      'Scaled products to millions of users',
    ],
    linkedin: 'https://www.linkedin.com/in/niemeier',
  },
  {
    slug: 'denis-turkov',
    name: 'Denis Turkov',
    title: 'Agentic Engineering Trainer · Architect for Agentic Commerce',
    bullets: [
      'Ex-Chief Architect (VP) at Spryker',
      '15+ years in large-scale architecture',
      'Founder of Execuro',
    ],
    linkedin: 'https://www.linkedin.com/in/turkovdenis',
  },
  {
    slug: 'benedikt-stemmildt',
    name: 'Benedikt Stemmildt',
    title: 'Helping engineering teams thrive with AI',
    bullets: [
      '20+ years enterprise experience',
      'Ex-CIO BLUME2000, ex-Breuninger',
      'Founder hackers&wizards',
    ],
    linkedin: 'https://www.linkedin.com/in/benedikt-stemmildt',
  },
  {
    slug: 'bjoern-rochel',
    name: 'Björn Rochel',
    title: 'Coach & Consultant for Agentic Engineering',
    bullets: [
      '20 years in software engineering',
      'Ex-engineering lead XING / New Work',
      'Writes "Dude, where’s my Kaizen?"',
    ],
    linkedin: 'https://www.linkedin.com/in/bjoern-rochel',
  },
];

export function P04_Hosts({ index, total }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="Your hosts"
    >
      <div className="grid w-full grid-cols-3 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
        {hosts.map((h, i) => (
          <BlurFade key={h.slug} delay={0.25 + i * 0.07} duration={0.5} className="h-full">
            <HostCard {...h} />
          </BlurFade>
        ))}
      </div>
    </AlphalistFrame>
  );
}

function HostCard({
  slug,
  name,
  title,
  bullets,
  linkedin,
}: {
  slug: string;
  name: string;
  title: string;
  bullets: string[];
  linkedin?: string;
}) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
        <Image
          src={`/alphalist/hosts/${slug}.jpg`}
          alt={name}
          fill
          sizes="(min-width: 1024px) 15vw, (min-width: 640px) 28vw, 45vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-base font-semibold leading-tight text-slate-900">{name}</p>
        <p className="mt-1 text-sm leading-snug text-slate-500">{title}</p>
        <ul className="mt-3 space-y-1.5 text-sm leading-snug text-slate-600">
          {bullets.map((b) => (
            <li key={b} className="flex gap-1.5">
              <span aria-hidden className="mt-1 inline-block h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex items-center gap-1.5 pt-4 text-xs font-medium text-[#0A66C2] hover:underline"
          >
            <Linkedin className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
            <span className="truncate">{linkedin.replace(/^.*\/in\//, '')}</span>
          </a>
        )}
      </div>
    </div>
  );
}
