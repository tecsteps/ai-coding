'use client';

import { useEffect, useRef, useCallback } from 'react';

interface Point {
  x: number;
  y: number;
}

interface Stroke {
  points: Point[];
  createdAt: number;
}

const FADE_DURATION = 2000; // 2 seconds to fully fade
const LASER_COLOR = 'rgba(255, 50, 50, 1)';
const LASER_GLOW_COLOR = 'rgba(255, 100, 100, 0.6)';
const LINE_WIDTH = 4;

// Text elements where we want to allow selection
const TEXT_TAGS = new Set([
  'P', 'SPAN', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6',
  'A', 'STRONG', 'EM', 'B', 'I', 'U', 'CODE', 'PRE',
  'LI', 'TD', 'TH', 'LABEL', 'BLOCKQUOTE', 'CITE'
]);

function isOverText(element: Element | null): boolean {
  if (!element) return false;

  // Check if element or its parent is a text element
  let current: Element | null = element;
  while (current && current !== document.body) {
    // Check tag name
    if (TEXT_TAGS.has(current.tagName)) {
      return true;
    }
    // Check if element has text cursor style
    const style = window.getComputedStyle(current);
    if (style.cursor === 'text') {
      return true;
    }
    current = current.parentElement;
  }
  return false;
}

export function LaserPointer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const strokesRef = useRef<Stroke[]>([]);
  const currentStrokeRef = useRef<Point[]>([]);
  const isDrawingRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  const getCanvasPoint = useCallback((e: MouseEvent): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const now = Date.now();

    // Filter out fully faded strokes
    strokesRef.current = strokesRef.current.filter(
      (stroke) => now - stroke.createdAt < FADE_DURATION
    );

    // Draw completed strokes with fade effect
    strokesRef.current.forEach((stroke) => {
      const elapsed = now - stroke.createdAt;
      const opacity = Math.max(0, 1 - elapsed / FADE_DURATION);

      if (stroke.points.length > 1) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 50, 50, ${opacity})`;
        ctx.lineWidth = LINE_WIDTH;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowColor = `rgba(255, 100, 100, ${opacity * 0.6})`;
        ctx.shadowBlur = 10;

        ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
        for (let i = 1; i < stroke.points.length; i++) {
          ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    });

    // Draw current stroke (fully opaque)
    if (currentStrokeRef.current.length > 1) {
      ctx.beginPath();
      ctx.strokeStyle = LASER_COLOR;
      ctx.lineWidth = LINE_WIDTH;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowColor = LASER_GLOW_COLOR;
      ctx.shadowBlur = 10;

      ctx.moveTo(currentStrokeRef.current[0].x, currentStrokeRef.current[0].y);
      for (let i = 1; i < currentStrokeRef.current.length; i++) {
        ctx.lineTo(currentStrokeRef.current[i].x, currentStrokeRef.current[i].y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    animationFrameRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      if (isDrawingRef.current) {
        currentStrokeRef.current.push(getCanvasPoint(e));
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 0) {
        // If over text, allow normal text selection
        const targetElement = document.elementFromPoint(e.clientX, e.clientY);
        if (isOverText(targetElement)) {
          return; // Let browser handle text selection
        }

        e.preventDefault();
        // Clear any existing text selection
        window.getSelection()?.removeAllRanges();
        // Disable text selection while drawing
        document.body.style.userSelect = 'none';
        isDrawingRef.current = true;
        currentStrokeRef.current = [getCanvasPoint(e)];
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (e.button === 0 && isDrawingRef.current) {
        isDrawingRef.current = false;
        // Re-enable text selection
        document.body.style.userSelect = '';
        if (currentStrokeRef.current.length > 0) {
          strokesRef.current.push({
            points: [...currentStrokeRef.current],
            createdAt: Date.now(),
          });
          currentStrokeRef.current = [];
        }
      }
    };

    const handleMouseLeave = () => {
      if (isDrawingRef.current) {
        isDrawingRef.current = false;
        // Re-enable text selection
        document.body.style.userSelect = '';
        if (currentStrokeRef.current.length > 0) {
          strokesRef.current.push({
            points: [...currentStrokeRef.current],
            createdAt: Date.now(),
          });
          currentStrokeRef.current = [];
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);

    animationFrameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      // Ensure text selection is re-enabled on cleanup
      document.body.style.userSelect = '';
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [draw, getCanvasPoint]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-none"
      />
    </div>
  );
}
