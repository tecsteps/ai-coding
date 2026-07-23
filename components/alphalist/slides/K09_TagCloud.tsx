'use client';

import { AlphalistFrame } from '../AlphalistFrame';
import { useReveal } from '../useReveal';

interface Props {
  index: number;
  total: number;
}

const questions: Array<{
  text: string;
  size: 'sm' | 'md' | 'lg';
  tone?: 'rose' | 'emerald' | 'amber';
  rotate?: number;
  x: number; // 0..100 (anchor)
  y: number; // 0..100
  anchor?: 'left' | 'right';
}> = [
  { text: 'Do we still review code?', size: 'lg', x: 4, y: 4, rotate: -2 },
  { text: 'Where do POs fit in?', size: 'md', x: 46, y: 2, rotate: 1 },
  { text: 'Is SCRUM still a thing?', size: 'lg', tone: 'rose', x: 4, y: 14, rotate: 3, anchor: 'right' },
  { text: 'Frontend vs backend, still a thing?', size: 'sm', x: 6, y: 20, rotate: 1 },
  { text: 'Where do specs come from?', size: 'md', x: 40, y: 16, rotate: -1 },
  { text: 'Compliance how?', size: 'sm', tone: 'amber', x: 4, y: 26, rotate: -2, anchor: 'right' },
  { text: 'How do we test all this?', size: 'md', x: 8, y: 34, rotate: 0 },
  { text: 'Which agent? Which license?', size: 'sm', x: 44, y: 32, rotate: 2 },
  { text: 'What is an acceptable token bill?', size: 'md', tone: 'amber', x: 4, y: 38, rotate: -3, anchor: 'right' },
  { text: 'Still need Jira?', size: 'lg', x: 14, y: 48, rotate: 2 },
  { text: 'What do juniors do?', size: 'md', x: 46, y: 50, rotate: -2 },
  { text: 'Where do future seniors come from?', size: 'sm', x: 4, y: 52, rotate: 1, anchor: 'right' },
  { text: 'How do we hire?', size: 'sm', x: 6, y: 64, rotate: -1 },
  { text: 'Spec-kit, yes or no?', size: 'md', tone: 'emerald', x: 30, y: 66, rotate: 1 },
  { text: 'Who deploys all the marketing apps?', size: 'sm', x: 24, y: 74, rotate: 2, anchor: 'right' },
  { text: 'What about the skeptics?', size: 'md', x: 4, y: 70, rotate: -2, anchor: 'right' },
  {
    text: 'Who is accountable when no one wrote it?',
    size: 'lg',
    tone: 'rose',
    x: 6,
    y: 84,
    rotate: -1,
  },
  { text: 'Do we still need agencies?', size: 'sm', x: 4, y: 92, rotate: 1, anchor: 'right' },
];

export function K09_TagCloud({ index, total }: Props) {
  const step = useReveal(questions.length);

  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="The cloud of open questions"
      title="There are so many open questions."
    >
      <div className="relative h-[60vh] w-full">
          {questions.map((q, i) => {
            const visible = step > i;
            const sizeClass =
              q.size === 'lg'
                ? 'text-2xl md:text-4xl'
                : q.size === 'md'
                ? 'text-xl md:text-2xl'
                : 'text-base md:text-lg';
            const toneClass =
              q.tone === 'rose'
                ? 'text-rose-600'
                : q.tone === 'emerald'
                ? 'text-emerald-600'
                : q.tone === 'amber'
                ? 'text-amber-300'
                : 'text-slate-900';
            const anchor = q.anchor ?? 'left';
            return (
              <span
                key={i}
                className={`absolute whitespace-nowrap font-semibold leading-tight transition-all duration-500 ${sizeClass} ${toneClass}`}
                style={{
                  ...(anchor === 'right'
                    ? { right: `${q.x}%` }
                    : { left: `${q.x}%` }),
                  top: `${q.y}%`,
                  transform: `rotate(${q.rotate ?? 0}deg) translateY(${visible ? 0 : 8}px)`,
                  opacity: visible ? 1 : 0,
                }}
              >
                {q.text}
              </span>
            );
          })}
      </div>
    </AlphalistFrame>
  );
}
