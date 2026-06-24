'use client';

import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const fromItems = [
  'Translate tickets into working code',
  'Implement predefined specs',
  'Fix bugs and maintain code',
  'Estimate and deliver sprint work',
  'Review PRs and follow standards',
];

const fromSuccess = ['On-time tickets', 'Low bug rate', 'Clean code', 'Reliable velocity'];

const toItems = [
  'Turn business problems into product outcomes',
  'Use agents to research, build, test, and refactor',
  'Write specs, prompts, checks, and acceptance criteria',
  'Own quality through tests, review, and production feedback',
  'Reduce handovers and improve the team workflow',
];

const toSuccess = ['Faster product impact', 'Fewer handovers', 'Judgment with AI', 'Learning from users'];

export function K01l_JobDescriptionShift({ index, total }: Props) {
  return (
    <AlphalistFrame slideNumber={index + 1} totalSlides={total} align="center">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 sm:px-10 md:px-12">
        <BlurFade delay={0.1} duration={0.7}>
          <div className="grid items-start gap-6 md:grid-cols-[0.92fr_0.68fr]">
            <div>
              <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight text-slate-900 md:text-[3.85rem]">
                The job description
                <br />
                <span className="text-rose-600">changes</span>.
              </h1>
            </div>

            <div className="hidden justify-end md:flex">
              <Image
                src="/alphalist/job-impact-board.png"
                alt="Product engineer working on impact metrics"
                width={681}
                height={374}
                className="h-auto max-h-32 w-full max-w-[26rem] object-contain"
                priority
              />
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} duration={0.7}>
          <div className="mt-4 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1.14fr]">
            <RoleCard
              tone="from"
              avatar="/alphalist/job-software-developer-avatar.png"
              label="From"
              role="Software Developer"
              quote="Give me a clear ticket and I will implement it."
              items={fromItems}
              success={fromSuccess}
            />

            <div className="hidden items-center justify-center md:flex">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white shadow-[0_14px_34px_-18px_rgba(15,23,42,0.8)]">
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>

            <RoleCard
              tone="to"
              avatar="/alphalist/job-ai-native-avatar.png"
              label="To"
              role="AI-Native Product Engineer"
              quote="I will find an opportunity and ship a solution."
              items={toItems}
              success={toSuccess}
            />
          </div>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}

function RoleCard({
  tone,
  avatar,
  label,
  role,
  quote,
  items,
  success,
}: {
  tone: 'from' | 'to';
  avatar: string;
  label: string;
  role: string;
  quote: string;
  items: string[];
  success: string[];
}) {
  const active = tone === 'to';

  return (
    <section
      className={`relative overflow-hidden rounded-2xl border p-4 ${
        active
          ? 'border-transparent bg-emerald-50/70 shadow-[0_18px_60px_-36px_rgba(16,185,129,0.55)]'
          : 'border-slate-200 bg-white shadow-[0_18px_60px_-42px_rgba(15,23,42,0.45)]'
      }`}
    >
      {active && (
        <Image
          src="/alphalist/job-rocket-panel.png"
          alt=""
          width={1608}
          height={968}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-right-bottom opacity-70"
        />
      )}

      <div className="relative z-10">
        <div className="mb-3 flex items-center gap-3">
          <Image
            src={avatar}
            alt=""
            width={96}
            height={96}
            className="h-12 w-12 rounded-full object-contain"
          />
          <div>
            <p
              className={`mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] ${
                active ? 'text-emerald-600' : 'text-slate-400'
              }`}
            >
              {label}
            </p>
            <h2 className={`text-xl font-semibold tracking-tight ${active ? 'text-emerald-700' : 'text-slate-900'}`}>
              {role}
            </h2>
            <p className="mt-1 text-sm leading-snug text-slate-600">&ldquo;{quote}&rdquo;</p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.22fr_0.78fr]">
          <div>
            <h3 className={`mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] ${active ? 'text-emerald-600' : 'text-slate-400'}`}>
              Responsibilities
            </h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="flex gap-2 text-[0.82rem] leading-snug text-slate-700">
                  {active ? (
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  ) : (
                    <span className="mt-1 h-3 w-3 shrink-0 rounded-full border-2 border-slate-400" />
                  )}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-slate-200 lg:border-l lg:pl-4">
            <h3 className={`mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] ${active ? 'text-emerald-600' : 'text-slate-400'}`}>
              Success
            </h3>
            <ul className="space-y-2.5">
              {success.map((item) => (
                <li key={item} className="flex gap-2 text-[0.82rem] leading-snug text-slate-700">
                  <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${active ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
