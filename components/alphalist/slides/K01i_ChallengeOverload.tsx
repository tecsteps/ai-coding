'use client';

import Image from 'next/image';
import { Building2, ServerCog, UsersRound } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';
import { useReveal } from '../useReveal';

interface Props {
  index: number;
  total: number;
}

const columns = [
  {
    title: 'Tech challenges',
    icon: ServerCog,
    tone: 'emerald',
    items: [
      'Which coding agent? Which license?',
      'Unify and deploy all the micro-apps?',
      'API keys and environment variables?',
      'Use an SDD framework?',
      'Same skills across all teams?',
      'Token budgets?',
      'Security boundaries?',
      'Observability for agent work?',
      'Shared prompts and runbooks?',
      'Local vs cloud execution?',
    ],
  },
  {
    title: 'Org challenges',
    icon: Building2,
    tone: 'sky',
    items: [
      'How do interviews work now?',
      'Do we still need juniors?',
      'Do we still need Scrum?',
      'What should product managers do?',
      'Do we still need testers?',
      'Enough backlog for 100 engineers?',
      'Where do future seniors come from?',
      'How do career ladders change?',
      'Who owns generated systems?',
      'What does productivity mean?',
    ],
  },
  {
    title: 'Team pushback',
    icon: UsersRound,
    tone: 'rose',
    items: [
      'Managing emotions',
      'Fear',
      'Skepticism',
      'Concerns',
      'Resistance to change',
      'Territory wars',
      'Loss of craft identity',
      'Skill atrophy anxiety',
      'Trust in generated code',
      'Silent disengagement',
    ],
  },
];

export function K01i_ChallengeOverload({ index, total }: Props) {
  const step = useReveal(2);

  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total} align="center">
      <div className="pointer-events-none absolute inset-y-0 left-28 right-0 z-0 opacity-80">
        <Image
          src="/alphalist/challenge-overload-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-contain object-bottom"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 sm:px-10 md:px-12">
        <BlurFade delay={0.1} duration={0.7}>
          <div className="mb-7 text-center">
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-slate-900 md:text-[4.7rem]">
              The challenges arrive <span className="text-rose-600">all at once</span>.
            </h1>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} duration={0.7}>
          <div className="grid gap-5 md:grid-cols-3">
            {columns.map((column, i) => (
              <div
                key={column.title}
                className={`transition-all duration-500 ${
                  step >= i
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
              >
                <ChallengeColumn {...column} />
              </div>
            ))}
          </div>
        </BlurFade>

      </div>
    </AlphalistFrame>
  );
}

function ChallengeColumn({
  title,
  icon: Icon,
  tone,
  items,
}: {
  title: string;
  icon: typeof ServerCog;
  tone: string;
  items: string[];
}) {
  const colors =
    tone === 'rose'
      ? {
          border: 'border-rose-200',
          bg: 'bg-rose-50/90',
          icon: 'text-rose-600',
          dot: 'bg-rose-500',
        }
      : tone === 'sky'
      ? {
          border: 'border-sky-200',
          bg: 'bg-sky-50/90',
          icon: 'text-sky-600',
          dot: 'bg-sky-500',
        }
      : {
          border: 'border-emerald-200',
          bg: 'bg-emerald-50/90',
          icon: 'text-emerald-600',
          dot: 'bg-emerald-500',
        };

  return (
    <section
      className={`rounded-2xl border ${colors.border} ${colors.bg} px-5 py-5 shadow-[0_18px_48px_-34px_rgba(15,23,42,0.55)] backdrop-blur-md`}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white/70 ${colors.icon}`}>
          <Icon className="h-7 w-7" strokeWidth={1.8} />
        </span>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          {title}
        </h2>
      </div>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-base leading-snug text-slate-700">
            <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${colors.dot}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
