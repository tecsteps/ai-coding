'use client';

import { RefObject, useEffect, useId, useState } from 'react';
import { motion } from 'motion/react';
import { getBoxToBoxArrow } from 'curved-arrows';
import { cn } from '@/lib/utils';

export interface CurvedArrowProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  color?: string;
  strokeWidth?: number;
  arrowHeadSize?: number;
  showArrowHead?: boolean;
  animated?: boolean;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  pathOpacity?: number;
  reverse?: boolean;
}

export const CurvedArrow: React.FC<CurvedArrowProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  color = 'gray',
  strokeWidth = 2,
  arrowHeadSize = 0,
  showArrowHead = false,
  animated = true,
  gradientStartColor,
  gradientStopColor,
  delay = 0,
  duration = 3,
  pathOpacity = 0.3,
  reverse = false,
}) => {
  const id = useId();
  const [arrowData, setArrowData] = useState<{
    path: string;
    endAngle: number;
    endX: number;
    endY: number;
  } | null>(null);
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateArrow = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const fromRect = fromRef.current.getBoundingClientRect();
        const toRect = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        // Convert to container-relative coordinates
        const fromBox = {
          x: fromRect.left - containerRect.left,
          y: fromRect.top - containerRect.top,
          w: fromRect.width,
          h: fromRect.height,
        };

        const toBox = {
          x: toRect.left - containerRect.left,
          y: toRect.top - containerRect.top,
          w: toRect.width,
          h: toRect.height,
        };

        // getBoxToBoxArrow returns [sx, sy, c1x, c1y, c2x, c2y, ex, ey, ae, as]
        const [sx, sy, c1x, c1y, c2x, c2y, ex, ey, ae] = getBoxToBoxArrow(
          fromBox.x,
          fromBox.y,
          fromBox.w,
          fromBox.h,
          toBox.x,
          toBox.y,
          toBox.w,
          toBox.h,
          {
            padEnd: showArrowHead ? arrowHeadSize : 0,
          }
        );

        const path = `M ${sx} ${sy} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${ex} ${ey}`;
        setArrowData({ path, endAngle: ae, endX: ex, endY: ey });
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updateArrow();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    updateArrow();

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, fromRef, toRef, arrowHeadSize, showArrowHead]);

  if (!arrowData) return null;

  const useGradient = gradientStartColor && gradientStopColor;

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'pointer-events-none absolute top-0 left-0 transform-gpu',
        className
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      {/* Background path */}
      <path
        d={arrowData.path}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        fill="none"
      />

      {/* Animated gradient path */}
      {animated && useGradient && (
        <path
          d={arrowData.path}
          strokeWidth={strokeWidth}
          stroke={`url(#${id})`}
          strokeOpacity="1"
          strokeLinecap="round"
          fill="none"
        />
      )}

      {/* Arrow head */}
      {showArrowHead && (
        <polygon
          points={`0,${-arrowHeadSize} ${arrowHeadSize * 2},0, 0,${arrowHeadSize}`}
          transform={`translate(${arrowData.endX}, ${arrowData.endY}) rotate(${arrowData.endAngle})`}
          fill={gradientStopColor || color}
        />
      )}

      {/* Gradient definition for animated beam */}
      {animated && useGradient && (
        <defs>
          <motion.linearGradient
            className="transform-gpu"
            id={id}
            gradientUnits="userSpaceOnUse"
            initial={{
              x1: '0%',
              x2: '0%',
              y1: '0%',
              y2: '0%',
            }}
            animate={
              reverse
                ? {
                    x1: ['90%', '-10%'],
                    x2: ['100%', '0%'],
                    y1: ['0%', '0%'],
                    y2: ['0%', '0%'],
                  }
                : {
                    x1: ['10%', '110%'],
                    x2: ['0%', '100%'],
                    y1: ['0%', '0%'],
                    y2: ['0%', '0%'],
                  }
            }
            transition={{
              delay,
              duration,
              ease: [0.16, 1, 0.3, 1],
              repeat: Infinity,
              repeatDelay: 0,
            }}
          >
            <stop stopColor={gradientStartColor} stopOpacity="0" />
            <stop stopColor={gradientStartColor} />
            <stop offset="32.5%" stopColor={gradientStopColor} />
            <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      )}
    </svg>
  );
};
