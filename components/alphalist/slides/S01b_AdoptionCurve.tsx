'use client';

import { BlurFade } from '@/components/ui/blur-fade';
import { AlphalistFrame } from '../AlphalistFrame';

interface Props {
  index: number;
  total: number;
}

const segments: { label: string; percentage: string }[] = [
  { label: 'Innovators', percentage: '2.5%' },
  { label: 'Early Adopters', percentage: '13.5%' },
  { label: 'Early Majority', percentage: '34%' },
  { label: 'Late Majority', percentage: '34%' },
  { label: 'Laggards', percentage: '16%' },
];

const segmentBoundaries = [0, 10, 30, 65, 90, 100];
const currentIndex = 1;

export function S01b_AdoptionCurve({ index, total }: Props) {
  return (
    <AlphalistFrame
      slideNumber={index + 1}
      totalSlides={total}
      eyebrow="Innovation adoption lifecycle"
      title={
        <>
          You are still an{' '}
          <span className="text-emerald-600">early adopter!</span>
        </>
      }
    >
      <div className="w-full">
        <BlurFade delay={0.3} duration={0.6}>
          <div
            className="relative mx-auto w-full"
            style={{ maxWidth: '1100px', height: 'min(60vh, 540px)' }}
          >
            <svg
              className="h-full w-full"
              viewBox="0 0 500 320"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="alp-bell-hi" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(16,185,129,1)" />
                  <stop offset="100%" stopColor="rgba(16,185,129,0.55)" />
                </linearGradient>
                <linearGradient id="alp-bell-base" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(16,185,129,0.35)" />
                  <stop offset="100%" stopColor="rgba(16,185,129,0.06)" />
                </linearGradient>
              </defs>

              {/* Bell base */}
              <path
                d="M 20 260
                   C 30 260, 40 258, 50 255
                   C 70 248, 90 230, 110 205
                   C 130 175, 150 135, 175 95
                   C 200 60, 225 40, 250 35
                   C 275 40, 300 60, 325 95
                   C 350 135, 370 175, 390 205
                   C 410 230, 430 248, 450 255
                   C 460 258, 470 260, 480 260
                   L 480 260 L 20 260 Z"
                fill="url(#alp-bell-base)"
              />

              {/* Highlighted segment */}
              <clipPath id="alp-segment">
                <rect
                  x={20 + (segmentBoundaries[currentIndex] / 100) * 460}
                  y="0"
                  width={
                    ((segmentBoundaries[currentIndex + 1] - segmentBoundaries[currentIndex]) / 100) *
                    460
                  }
                  height="320"
                />
              </clipPath>
              <path
                d="M 20 260
                   C 30 260, 40 258, 50 255
                   C 70 248, 90 230, 110 205
                   C 130 175, 150 135, 175 95
                   C 200 60, 225 40, 250 35
                   C 275 40, 300 60, 325 95
                   C 350 135, 370 175, 390 205
                   C 410 230, 430 248, 450 255
                   C 460 258, 470 260, 480 260
                   L 480 260 L 20 260 Z"
                fill="url(#alp-bell-hi)"
                clipPath="url(#alp-segment)"
              />

              {/* Outline */}
              <path
                d="M 20 260
                   C 30 260, 40 258, 50 255
                   C 70 248, 90 230, 110 205
                   C 130 175, 150 135, 175 95
                   C 200 60, 225 40, 250 35
                   C 275 40, 300 60, 325 95
                   C 350 135, 370 175, 390 205
                   C 410 230, 430 248, 450 255
                   C 460 258, 470 260, 480 260"
                fill="none"
                stroke="rgba(16,185,129,0.85)"
                strokeWidth="2"
              />

              {/* Dividers */}
              {segmentBoundaries.slice(1, -1).map((boundary, i) => {
                const x = 20 + (boundary / 100) * 460;
                const yPositions = [255, 185, 35, 185, 255];
                return (
                  <line
                    key={i}
                    x1={x}
                    y1={yPositions[i]}
                    x2={x}
                    y2="260"
                    stroke="rgba(15,23,42,0.18)"
                    strokeWidth="1"
                    strokeDasharray="4,4"
                  />
                );
              })}

              {/* Baseline */}
              <line x1="20" y1="260" x2="480" y2="260" stroke="rgba(15,23,42,0.4)" strokeWidth="2" />

              {/* Segment labels (skip current; shown via marker) */}
              {segments.map((segment, i) => {
                if (i === currentIndex) return null;
                const startX = segmentBoundaries[i];
                const endX = segmentBoundaries[i + 1];
                const centerX = 20 + ((startX + endX) / 2 / 100) * 460;
                const labelYPositions = [248, 0, 22, 175, 248];
                return (
                  <text
                    key={`label-${i}`}
                    x={centerX}
                    y={labelYPositions[i]}
                    textAnchor="middle"
                    className="fill-slate-600 text-[11px] font-semibold sm:text-[13px]"
                  >
                    {segment.label}
                  </text>
                );
              })}

              {/* Percentages */}
              {segments.map((segment, i) => {
                const startX = segmentBoundaries[i];
                const endX = segmentBoundaries[i + 1];
                const centerX = 20 + ((startX + endX) / 2 / 100) * 460;
                const isHighlighted = i === currentIndex;
                return (
                  <text
                    key={`pct-${i}`}
                    x={centerX}
                    y={280}
                    textAnchor="middle"
                    className={`text-[10px] font-medium sm:text-[12px] ${
                      isHighlighted ? 'fill-emerald-600' : 'fill-slate-400'
                    }`}
                  >
                    {segment.percentage}
                  </text>
                );
              })}

              {/* "We are here" marker */}
              {(() => {
                const startX = segmentBoundaries[currentIndex];
                const endX = segmentBoundaries[currentIndex + 1];
                const markerX = 20 + ((startX + endX) / 2 / 100) * 460;
                const markerY = 205;

                return (
                  <g>
                    <circle cx={markerX} cy={markerY} r="6" fill="rgba(16,185,129,0.25)" />
                    <circle
                      cx={markerX}
                      cy={markerY}
                      r="4"
                      fill="white"
                      stroke="rgb(16,185,129)"
                      strokeWidth="2"
                    />
                    <line
                      x1={markerX}
                      y1={markerY - 60}
                      x2={markerX}
                      y2={markerY - 15}
                      stroke="rgb(16,185,129)"
                      strokeWidth="2"
                    />
                    <polygon
                      points={`${markerX},${markerY - 12} ${markerX - 5},${markerY - 20} ${markerX + 5},${markerY - 20}`}
                      fill="rgb(16,185,129)"
                    />
                    <rect
                      x={markerX - 60}
                      y={markerY - 105}
                      width="120"
                      height="42"
                      rx="6"
                      fill="white"
                      stroke="rgba(16,185,129,0.5)"
                      strokeWidth="1"
                    />
                    <text
                      x={markerX}
                      y={markerY - 85}
                      textAnchor="middle"
                      className="fill-emerald-700 text-[11px] font-bold"
                    >
                      Early Adopters
                    </text>
                    <text
                      x={markerX}
                      y={markerY - 68}
                      textAnchor="middle"
                      className="fill-slate-500 text-[10px]"
                    >
                      We are here
                    </text>
                  </g>
                );
              })()}
            </svg>
          </div>
        </BlurFade>
      </div>
    </AlphalistFrame>
  );
}
