'use client';

import { AdoptionCycleSlide as AdoptionCycleSlideType } from '@/types/slide';
import { BlurFade } from '@/components/ui/blur-fade';
import { StaticLightRays } from '@/components/ui/static-light-rays';

interface Props {
  slide: AdoptionCycleSlideType;
}

export function AdoptionCycleSlide({ slide }: Props) {
  const segments = slide.segments;
  const currentIndex = slide.currentSegmentIndex;

  // Segment boundaries (cumulative percentages converted to x positions)
  // Innovators: 2.5%, Early Adopters: 13.5%, Early Majority: 34%, Late Majority: 34%, Laggards: 16%
  const segmentBoundaries = [0, 10, 30, 65, 90, 100];

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <StaticLightRays
        className="opacity-40"
        color="rgba(236, 72, 153, 0.15)"
        blur={60}
        length="90vh"
      />

      <div className="slide-content relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="pt-4 sm:pt-6 md:pt-8 text-center px-4">
          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white">
              {slide.headline}
            </h1>
          </BlurFade>
        </div>

        {/* Bell Curve */}
        <div className="flex flex-1 items-center justify-center w-full px-8 sm:px-12 md:px-16 lg:px-24 py-6 sm:py-8">
          <BlurFade delay={0.3} duration={0.6}>
            <div className="relative" style={{ width: '80vw', maxWidth: '1100px', height: '60vh', maxHeight: '600px' }}>
            <svg
              className="w-full h-full"
              viewBox="0 0 500 320"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Gradient for highlighted segment */}
                <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(236, 72, 153, 1)" />
                  <stop offset="100%" stopColor="rgba(236, 72, 153, 0.6)" />
                </linearGradient>
                {/* Gradient for non-highlighted segments */}
                <linearGradient id="normalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(236, 72, 153, 0.5)" />
                  <stop offset="100%" stopColor="rgba(236, 72, 153, 0.2)" />
                </linearGradient>
              </defs>

              {/* Bell curve - filled area */}
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
                fill="url(#normalGradient)"
              />

              {/* Highlighted segment overlay */}
              <clipPath id={`segment-${currentIndex}`}>
                <rect
                  x={20 + (segmentBoundaries[currentIndex] / 100) * 460}
                  y="0"
                  width={((segmentBoundaries[currentIndex + 1] - segmentBoundaries[currentIndex]) / 100) * 460}
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
                fill="url(#highlightGradient)"
                clipPath={`url(#segment-${currentIndex})`}
              />

              {/* Bell curve outline */}
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
                stroke="rgba(236, 72, 153, 0.8)"
                strokeWidth="2"
              />

              {/* Vertical divider lines */}
              {segmentBoundaries.slice(1, -1).map((boundary, i) => {
                const x = 20 + (boundary / 100) * 460;
                // Calculate y position on curve for each boundary
                const yPositions = [255, 185, 35, 185, 255];
                return (
                  <line
                    key={i}
                    x1={x}
                    y1={yPositions[i]}
                    x2={x}
                    y2="260"
                    stroke="rgba(255, 255, 255, 0.3)"
                    strokeWidth="1"
                    strokeDasharray="4,4"
                  />
                );
              })}

              {/* Baseline */}
              <line x1="20" y1="260" x2="480" y2="260" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2" />

              {/* Labels as SVG text for better positioning */}
              {segments.map((segment, i) => {
                // Skip Early Adopters label (index 1) - it's indicated by "We are here" marker
                if (i === currentIndex) return null;

                const startX = segmentBoundaries[i];
                const endX = segmentBoundaries[i + 1];
                const centerX = 20 + ((startX + endX) / 2 / 100) * 460;

                // Y positions for labels above the curve
                const labelYPositions = [248, 0, 22, 175, 248];

                return (
                  <text
                    key={`label-${i}`}
                    x={centerX}
                    y={labelYPositions[i]}
                    textAnchor="middle"
                    className="text-[11px] sm:text-[13px] font-semibold fill-slate-300"
                  >
                    {segment.label}
                  </text>
                );
              })}

              {/* Percentage labels below baseline */}
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
                    className={`text-[10px] sm:text-[12px] font-medium ${
                      isHighlighted ? 'fill-pink-400' : 'fill-slate-400'
                    }`}
                  >
                    {segment.percentage}
                  </text>
                );
              })}

              {/* "We are here" marker with arrow */}
              {(() => {
                const startX = segmentBoundaries[currentIndex];
                const endX = segmentBoundaries[currentIndex + 1];
                const markerX = 20 + ((startX + endX) / 2 / 100) * 460;
                // Position on the curve for Early Adopters (index 1) - around y=205
                const markerY = 205;

                return (
                  <g>
                    {/* Circle on the curve */}
                    <circle
                      cx={markerX}
                      cy={markerY}
                      r="6"
                      fill="rgba(255, 255, 255, 0.3)"
                    />
                    <circle
                      cx={markerX}
                      cy={markerY}
                      r="4"
                      fill="white"
                      stroke="#1e293b"
                      strokeWidth="2"
                    />

                    {/* Arrow pointing down to the marker */}
                    <line
                      x1={markerX}
                      y1={markerY - 60}
                      x2={markerX}
                      y2={markerY - 15}
                      stroke="white"
                      strokeWidth="2"
                    />
                    <polygon
                      points={`${markerX},${markerY - 12} ${markerX - 5},${markerY - 20} ${markerX + 5},${markerY - 20}`}
                      fill="white"
                    />

                    {/* Label box above arrow */}
                    <rect
                      x={markerX - 55}
                      y={markerY - 105}
                      width="110"
                      height="42"
                      rx="6"
                      fill="rgba(15, 23, 42, 0.95)"
                      stroke="rgba(255, 255, 255, 0.5)"
                      strokeWidth="1"
                    />
                    <text
                      x={markerX}
                      y={markerY - 85}
                      textAnchor="middle"
                      className="text-[11px] font-bold fill-pink-400"
                    >
                      Early Adopters
                    </text>
                    <text
                      x={markerX}
                      y={markerY - 68}
                      textAnchor="middle"
                      className="text-[10px] fill-slate-300"
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
      </div>
    </div>
  );
}
