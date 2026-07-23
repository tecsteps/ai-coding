"use client"

import { type CSSProperties } from "react"
import { cn } from "@/lib/utils"

interface StaticLightRaysProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>
  color?: string
  blur?: number
  length?: string
}

type StaticRay = {
  id: string
  left: number
  rotate: number
  width: number
  opacity: number
}

const staticRays: StaticRay[] = [
  { id: "1", left: 15, rotate: -20, width: 200, opacity: 0.4 },
  { id: "2", left: 30, rotate: -8, width: 280, opacity: 0.3 },
  { id: "3", left: 50, rotate: 5, width: 320, opacity: 0.5 },
  { id: "4", left: 70, rotate: 15, width: 240, opacity: 0.35 },
  { id: "5", left: 85, rotate: 25, width: 180, opacity: 0.45 },
]

const Ray = ({ left, rotate, width, opacity }: StaticRay) => {
  return (
    <div
      className="pointer-events-none absolute -top-[12%] left-[var(--ray-left)] h-[var(--light-rays-length)] w-[var(--ray-width)] origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-[color-mix(in_srgb,var(--light-rays-color)_70%,transparent)] to-transparent mix-blend-screen blur-[var(--light-rays-blur)]"
      style={
        {
          "--ray-left": `${left}%`,
          "--ray-width": `${width}px`,
          transform: `translateX(-50%) rotate(${rotate}deg)`,
          opacity: opacity,
        } as CSSProperties
      }
    />
  )
}

export function StaticLightRays({
  className,
  style,
  color = "rgba(56, 189, 248, 0.25)",
  blur = 40,
  length = "80vh",
  ref,
  ...props
}: StaticLightRaysProps) {
  return (
    <div
      ref={ref}
      className={cn(
        "pointer-events-none absolute inset-0 isolate overflow-hidden rounded-[inherit]",
        className
      )}
      style={
        {
          "--light-rays-color": color,
          "--light-rays-blur": `${blur}px`,
          "--light-rays-length": length,
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={
            {
              background:
                "radial-gradient(circle at 20% 15%, color-mix(in srgb, var(--light-rays-color) 50%, transparent), transparent 70%)",
            } as CSSProperties
          }
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={
            {
              background:
                "radial-gradient(circle at 80% 10%, color-mix(in srgb, var(--light-rays-color) 40%, transparent), transparent 75%)",
            } as CSSProperties
          }
        />
        {staticRays.map((ray) => (
          <Ray key={ray.id} {...ray} />
        ))}
      </div>
    </div>
  )
}
