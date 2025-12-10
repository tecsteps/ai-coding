'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown, Space } from 'lucide-react';

interface Props {
  slideIndex: number;
  slideType: string;
}

const HINTS_STORAGE_KEY = 'slide-hints-visible';

export function SlideHints({ slideIndex, slideType }: Props) {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(HINTS_STORAGE_KEY);
    if (stored !== null) {
      setVisible(stored === 'true');
    }
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'h' || event.key === 'H') {
        setVisible((prev) => {
          const newValue = !prev;
          localStorage.setItem(HINTS_STORAGE_KEY, String(newValue));
          return newValue;
        });
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!mounted || !visible) return null;

  const hints: { icon: React.ReactNode; text: string }[] = [];

  // Slide 0: Show how to navigate between slides
  if (slideIndex === 0) {
    hints.push({
      icon: <ArrowRight className="h-4 w-4" />,
      text: 'to go to next slide',
    });
  }

  // Slides with down arrow interactions
  const slidesWithDownArrow = [
    'interaction',
    'guidance',
    'guardrails',
    'mental-model',
    'spec-gap',
    'quality',
    'ai-failures',
  ];

  if (slidesWithDownArrow.includes(slideType)) {
    hints.push({
      icon: <ArrowDown className="h-4 w-4" />,
      text: 'to reveal',
    });
  }

  // Question slides with counter
  if (slideType === 'question') {
    hints.push({
      icon: <ArrowDown className="h-4 w-4" />,
      text: 'to select',
    });
    hints.push({
      icon: <div className="px-2 py-0.5 bg-slate-700 rounded text-xs font-mono">Space</div>,
      text: 'to count',
    });
  }

  if (hints.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-4 px-3 py-1.5 rounded-lg bg-slate-800/80 backdrop-blur-sm border border-slate-700/50">
        {hints.map((hint, index) => (
          <div key={index} className="flex items-center gap-1.5 text-slate-400 text-xs">
            <span className="flex items-center justify-center w-6 h-6 rounded bg-slate-700 text-slate-300">
              {hint.icon}
            </span>
            <span>{hint.text}</span>
          </div>
        ))}
        <div className="flex items-center gap-1.5 text-slate-500 text-xs border-l border-slate-700 pl-3">
          <span className="flex items-center justify-center w-5 h-5 rounded bg-slate-700 text-slate-400 text-xs">H</span>
          <span>hide</span>
        </div>
      </div>
    </div>
  );
}
