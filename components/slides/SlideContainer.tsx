'use client';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function SlideContainer({ children }: Props) {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {children}
    </div>
  );
}

export function SlideContent({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[1914px] ${className}`}>
      {children}
    </div>
  );
}
