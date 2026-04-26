'use client';

import Image from 'next/image';
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
    title: 'Trainer & Coach · Co-Founder & MD, ROQ',
    bullets: [
      'Ex-CTO Rocket Internet & Project A',
      'Co-Founder & ex-CTO Spryker',
      'Lead host of the bootcamp',
    ],
  },
  {
    slug: 'tereza-iofciu',
    name: 'Tereza Iofciu',
    title: 'Data & AI Leadership Coach',
    bullets: [
      'PhD in computer science (L3S)',
      'Head of Data Science at neuefische',
      'Founder of PyLadies Hamburg',
    ],
  },
  {
    slug: 'tim-niemeier',
    name: 'Tim Niemeier',
    title: 'Co-Founder & MD, ROQ',
    bullets: [
      'Ex-CTO Rocket Internet',
      'Scaled products to millions of users',
      'Capture & logistics on the floor',
    ],
  },
  {
    slug: 'denis-turkov',
    name: 'Denis Turkov',
    title: 'Trainer & Consultant · Founder, Execuro',
    bullets: [
      'Ex-Chief Architect (VP) at Spryker',
      '15+ years in large-scale architecture',
      'Hosts Day 2 Fireside Chat',
    ],
  },
  {
    slug: 'benedikt-stemmildt',
    name: 'Benedikt Stemmildt',
    title: 'CTO & Co-Lead, hackers&wizards',
    bullets: [
      'Ex-CIO BLUME2000, ex-Breuninger',
      'Co-founder Hacker School',
      'Agentic engineering advocate',
    ],
  },
  {
    slug: 'bjoern-rochel',
    name: 'Björn Rochel',
    title: 'Engineering Leader · Agentic Tooling',
    bullets: [
      '20 years in software engineering',
      'Ex-engineering lead XING / New Work',
      'Writes "Dude, where’s my Kaizen?"',
    ],
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
}: {
  slug: string;
  name: string;
  title: string;
  bullets: string[];
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
      </div>
    </div>
  );
}
