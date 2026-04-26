'use client';

import Image from 'next/image';
import { ReactNode } from 'react';
import { BlurFade } from '@/components/ui/blur-fade';

interface Props {
  children: ReactNode;
  slideNumber?: number;
  totalSlides?: number;
  showFooter?: boolean;
  align?: 'top' | 'center';
  eyebrow?: ReactNode;
  title?: ReactNode;
}

export function AlphalistFrame({
  children,
  slideNumber,
  totalSlides,
  showFooter = true,
  align = 'top',
  eyebrow,
  title,
}: Props) {
  const hasHeader = Boolean(eyebrow || title);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-white text-slate-900">
      <div className="pointer-events-none absolute left-5 top-5 z-30 flex items-end gap-2 sm:left-8 sm:top-7 sm:gap-3">
        <Image
          src="/alphalist/logo.png"
          alt="alphalist"
          width={120}
          height={20}
          priority
          className="h-4 w-auto sm:h-5"
        />
        <span className="mb-[3px] text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:mb-[4px] sm:text-[11px] sm:tracking-[0.25em]">
          / CTO Bootcamp
        </span>
      </div>

      <AlphalistWaveMark />

      {align === 'center' && !hasHeader ? (
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center pt-20 pb-20 sm:pt-24 sm:pb-16 md:pt-28">
          {children}
        </div>
      ) : (
        <>
          <div className="relative z-10 px-6 pt-20 sm:px-10 sm:pt-24 md:px-12 md:pt-28">
            <div className="mx-auto w-full max-w-7xl">
              {eyebrow && (
                <BlurFade delay={0.1} duration={0.6}>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-emerald-600 md:text-sm">
                    {eyebrow}
                  </p>
                </BlurFade>
              )}
              {title && (
                <BlurFade delay={0.2} duration={0.7}>
                  <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
                    {title}
                  </h1>
                </BlurFade>
              )}
            </div>
          </div>

          <div className="relative z-10 flex flex-1 items-center justify-center px-6 pb-20 sm:px-10 sm:pb-16 md:px-12">
            <div className="mx-auto w-full max-w-7xl">{children}</div>
          </div>
        </>
      )}

      {showFooter && (
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-5 pb-4 text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:px-8 sm:pb-5 sm:text-[11px] sm:tracking-[0.25em]">
          <span className="ml-16 sm:ml-20">Berlin · 2026</span>
          {typeof slideNumber === 'number' && typeof totalSlides === 'number' && (
            <span>
              {String(slideNumber).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export function AlphalistWaveMark({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -bottom-6 -left-6 z-0 h-[180px] w-[140px] ${className}`}
    >
      <Image
        src="/alphalist/wave.png"
        alt=""
        fill
        sizes="260px"
        className="object-contain object-bottom"
      />
    </div>
  );
}

export function AlphalistAccent({
  color = 'emerald',
  children,
  className = '',
}: {
  color?: 'emerald' | 'rose' | 'amber';
  children: ReactNode;
  className?: string;
}) {
  const colorClass =
    color === 'emerald'
      ? 'text-emerald-600'
      : color === 'rose'
      ? 'text-rose-600'
      : 'text-amber-600';
  return <span className={`${colorClass} ${className}`}>{children}</span>;
}
