import type { PointStyle } from "chart.js"

import type { Color } from "@/types/data"

// カラーユニバーサルデザインより配色を決定
// https://jfly.uni-koeln.de/colorset/CUD_color_set_GuideBook_2018.pdf
export const COLORS = {
  red: {
    name: "red",
    label: "赤",
    hex: "#FF4B00",
    rgb: "255, 75, 0",
  },
  green: {
    name: "green",
    label: "緑",
    hex: "#03AF7A",
    rgb: "3, 175, 122",
  },
  blue: {
    name: "blue",
    label: "青",
    hex: "#005AFF",
    rgb: "0, 90, 255",
  },
  sky: {
    name: "sky",
    label: "空色",
    hex: "#4DC4FF",
    rgb: "77, 196, 255",
  },
  pink: {
    name: "pink",
    label: "ピンク",
    hex: "#FF8078",
    rgb: "255, 128, 130",
  },
  orange: {
    name: "orange",
    label: "オレンジ",
    hex: "#F6AA00",
    rgb: "246, 170, 0",
  },
  purple: {
    name: "purple",
    label: "紫",
    hex: "#990099",
    rgb: "153, 0, 153",
  },
  brown: {
    name: "brown",
    label: "茶色",
    hex: "#804000",
    rgb: "128, 64, 0",
  },
  gray: {
    name: "gray",
    label: "灰色",
    hex: "#C8C8CB",
    rgb: "200, 200, 203",
  },
} as const satisfies Record<string, Color>

export const MARKER = [
  "circle",
  "crossRot",
  "rect",
  "star",
  "triangle",
  "rectRot",
] as const satisfies PointStyle[]

export const getColor = (index: number) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { gray, ...colors } = COLORS
  return Object.values(colors)[index % Object.values(colors).length]
}

export const getMarker = (index: number) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { gray, ...colors } = COLORS
  return MARKER[
    Math.floor(index / Object.values(colors).length) % MARKER.length
  ]
}
