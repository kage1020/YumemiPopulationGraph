import { tv } from "tailwind-variants"

import { Circle, CrossRot, Rect, RectRot, Star, Triangle } from "./markers"
import type { PrefectureState } from "./PopulationLineWithSelect"

import type { Prefecture } from "@/types/data"
import { COLORS, getColor, getMarker } from "@/utils/chart"
import { cn } from "@/utils/misc"

export type CheckboxPrefectureProps = {
  prefectures: PrefectureState[]
  onChange: (prefecture: Prefecture) => void
}

const labelStyle = tv({
  compoundVariants: [
    {
      color: "red",
      checked: true,
      className: "border-red bg-red/5 hover:bg-red/10",
    },
    {
      color: "green",
      checked: true,
      className: "border-green bg-green/5 hover:bg-green/10",
    },
    {
      color: "blue",
      checked: true,
      className: "border-blue bg-blue/5 hover:bg-blue/10",
    },
    {
      color: "sky",
      checked: true,
      className: "border-sky bg-sky/5 hover:bg-sky/10",
    },
    {
      color: "pink",
      checked: true,
      className: "border-pink bg-pink/5 hover:bg-pink/10",
    },
    {
      color: "orange",
      checked: true,
      className: "border-orange bg-orange/5 hover:bg-orange/10",
    },
    {
      color: "purple",
      checked: true,
      className: "border-purple bg-purple/5 hover:bg-purple/10",
    },
    {
      color: "brown",
      checked: true,
      className: "border-brown bg-brown/5 hover:bg-brown/10",
    },
  ],
  variants: {
    color: {
      red: "",
      green: "",
      blue: "",
      sky: "",
      pink: "",
      orange: "",
      purple: "",
      brown: "",
    },
    checked: {
      true: "",
      false: "",
    },
  },
})

export function CheckboxPrefecture({
  prefectures,
  onChange,
}: CheckboxPrefectureProps) {
  const selectAll = () => {
    prefectures.forEach((pref) => {
      if (!pref.checked) onChange(pref)
    })
  }

  const unselectAll = () => {
    prefectures.forEach((pref) => {
      if (pref.checked) onChange(pref)
    })
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        className="w-36 rounded border-2 border-gray-500 p-2"
        onClick={selectAll}
      >
        全選択
      </button>
      <button
        className="w-36 rounded border-2 border-gray-500 p-2"
        onClick={unselectAll}
      >
        全選択解除
      </button>
      {prefectures.map((pref, i) => {
        const color = getColor(i)
        const marker = getMarker(i)
        return (
          <label
            key={pref.prefCode}
            className={cn(
              "flex w-36 cursor-pointer items-center space-x-2 rounded border-2 p-2",
              labelStyle({ color: color.name, checked: pref.checked }),
            )}
          >
            <input
              type="checkbox"
              className="h-4 w-4 cursor-pointer"
              style={{ accentColor: color.hex }}
              checked={pref.checked}
              onChange={() => onChange(pref)}
            />
            {marker === "circle" && (
              <Circle size={15} color={pref.checked ? color : COLORS.gray} />
            )}
            {marker === "crossRot" && (
              <CrossRot size={15} color={pref.checked ? color : COLORS.gray} />
            )}
            {marker === "rect" && (
              <Rect size={15} color={pref.checked ? color : COLORS.gray} />
            )}
            {marker === "star" && (
              <Star size={15} color={pref.checked ? color : COLORS.gray} />
            )}
            {marker === "triangle" && (
              <Triangle size={15} color={pref.checked ? color : COLORS.gray} />
            )}
            {marker === "rectRot" && (
              <RectRot size={15} color={pref.checked ? color : COLORS.gray} />
            )}
            <span className="select-none">{pref.prefName}</span>
          </label>
        )
      })}
    </div>
  )
}
