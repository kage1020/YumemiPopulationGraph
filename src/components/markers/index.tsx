import type { Color } from "@/types/data"

export type MarkerProps = {
  color: Color
  size: number
}

export function Circle({ color, size }: MarkerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" className="inline">
      <circle cx="10" cy="10" r="10" fill={color.hex} />
    </svg>
  )
}

export function CrossRot({ color, size }: MarkerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" className="inline">
      <path d="M0 0 L20 20 M20 0 L0 20" stroke={color.hex} strokeWidth={3} />
    </svg>
  )
}

export function Rect({ color, size }: MarkerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" className="inline">
      <rect x="2.5" y="2.5" width="15" height="15" fill={color.hex} />
    </svg>
  )
}

export function Star({ color, size }: MarkerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" className="inline">
      <path
        d="M0 10 L20 10 M10 0 L10 20 M3 3 L17 17 M17 3 L 3 17"
        stroke={color.hex}
        strokeWidth={3}
      />
    </svg>
  )
}

export function Triangle({ color, size }: MarkerProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" className="inline">
      <polygon points="10,0 20,20 0,20" fill={color.hex} />
    </svg>
  )
}

export function RectRot({ color, size }: MarkerProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      className="inline"
      transform="rotate(45)"
    >
      <rect x="2.5" y="2.5" width="15" height="15" fill={color.hex} />
    </svg>
  )
}
