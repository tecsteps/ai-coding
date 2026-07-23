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

const FADE_DURATION = 2000;
const LASER_COLOR = 'rgba(255, 50, 50, 1)';
const LASER_GLOW_COLOR = 'rgba(255, 100, 100, 0.6)';
const LINE_WIDTH = 4;

export function LaserPointer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const strokesRef = useRef<Stroke[]>([]);
  const trackedPointsRef = useRef<Point[]>([]);
  const mouseDownRef = useRef(false);
  const startTargetIsTextRef = useRef(false);
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

    strokesRef.current = strokesRef.current.filter(
      (stroke) => now - stroke.createdAt < FADE_DURATION
    );

    const drawPath = (points: Point[], opacity: number) => {
      if (points.length < 2) return;
      ctx.beginPath();
      ctx.strokeStyle = `rgba(255, 50, 50, ${opacity})`;
      ctx.lineWidth = LINE_WIDTH;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowColor = `rgba(255, 100, 100, ${opacity * 0.6})`;
      ctx.shadowBlur = 10;
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    strokesRef.current.forEach((stroke) => {
      const elapsed = now - stroke.createdAt;
      const opacity = Math.max(0, 1 - elapsed / FADE_DURATION);
      drawPath(stroke.points, opacity);
    });

    // Live preview only if start target was non-text (so we know it's a laser
    // gesture, not a text selection drag).
    if (mouseDownRef.current && !startTargetIsTextRef.current) {
      drawPath(trackedPointsRef.current, 1);
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

    const isTextLike = (el: Element | null): boolean => {
      if (!el) return false;
      const cursor = window.getComputedStyle(el).cursor;
      if (cursor === 'text') return true;
      // Walk up: if any ancestor has cursor text and nothing in between
      // overrides it, treat as text.
      let cur = el.parentElement;
      while (cur && cur !== document.body) {
        const c = window.getComputedStyle(cur).cursor;
        if (c === 'text') return true;
        cur = cur.parentElement;
      }
      return false;
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      const target = document.elementFromPoint(e.clientX, e.clientY);
      mouseDownRef.current = true;
      startTargetIsTextRef.current = isTextLike(target);
      trackedPointsRef.current = [getCanvasPoint(e)];
      // Do NOT preventDefault. Let the browser handle text selection if any.
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseDownRef.current) return;
      trackedPointsRef.current.push(getCanvasPoint(e));
    };

    const finalizeStroke = () => {
      if (!mouseDownRef.current) return;
      mouseDownRef.current = false;
      const wasText = startTargetIsTextRef.current;
      startTargetIsTextRef.current = false;
      const points = trackedPointsRef.current;
      trackedPointsRef.current = [];

      if (wasText) return;
      if (points.length < 2) return;
      // If the browser made a non-collapsed selection during the drag, the
      // user was selecting text (probably a div without cursor:text). Skip.
      const sel = window.getSelection();
      if (sel && sel.rangeCount > 0 && !sel.getRangeAt(0).collapsed && (sel.toString().length > 0)) {
        return;
      }
      strokesRef.current.push({
        points,
        createdAt: Date.now(),
      });
    };

    const handleMouseUp = () => finalizeStroke();
    const handleMouseLeave = () => finalizeStroke();

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
