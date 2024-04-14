import type { PointStyle } from "chart.js"

// カラーユニバーサルデザインより配色を決定
// https://jfly.uni-koeln.de/colorset/CUD_color_set_GuideBook_2018.pdf
export const COLORS = [
  {
    label: "赤",
    hex: "#FF4B00",
    rgb: "255, 75, 0",
  },
  {
    label: "緑",
    hex: "#03AF7A",
    rgb: "3, 175, 122",
  },
  {
    label: "青",
    hex: "#005AFF",
    rgb: "0, 90, 255",
  },
  {
    label: "空色",
    hex: "#4DC4FF",
    rgb: "77, 196, 255",
  },
  {
    label: "ピンク",
    hex: "#FF8078",
    rgb: "255, 128, 130",
  },
  {
    label: "オレンジ",
    hex: "#F6AA00",
    rgb: "246, 170, 0",
  },
  {
    label: "紫",
    hex: "#990099",
    rgb: "153, 0, 153",
  },
  {
    label: "茶色",
    hex: "#804000",
    rgb: "128, 64, 0",
  },
] as const

export const MARKER = [
  "circle",
  "crossRot",
  "rect",
  "star",
  "triangle",
  "rectRot",
] as const satisfies PointStyle[]
