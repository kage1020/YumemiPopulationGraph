import type { Chart } from "chart.js"
import clsx from "clsx"
import { useEffect, useRef, useState } from "react"

import { CheckboxPrefecture } from "./CheckboxPrefecture"
import { Loading } from "./Loading"
import { PopulationLine } from "./PopulationLine"

import type { Population, Prefecture } from "@/types/data"
import { getLayerOptions, makeLineData } from "@/utils/chart"
import { fetchPopulation, fetchPrefectures } from "@/utils/fetcher"
import { validatePopulations, validatePrefectures } from "@/utils/validator"

export type PrefectureState = Prefecture & { checked: boolean }

export function PopulationLineWithSelect() {
  const [prefectures, setPrefectures] = useState<PrefectureState[]>([])
  const [populations, setPopulations] = useState<Population[]>([])
  const [layer, setLayer] = useState<string>("")
  const chartRef = useRef<Chart<"line"> | null>(null)

  useEffect(() => {
    fetchPrefectures()
      .then((res) => {
        const data = validatePrefectures(res)
        setPrefectures(data.map((d) => ({ ...d, checked: true })))
        return data
      })
      .then((prefectures) => {
        return Promise.all(
          prefectures.map((prefecture) => fetchPopulation(prefecture)),
        )
      })
      .then((pops) => {
        const data = validatePopulations(pops)
        setPopulations(data)
        setLayer(data[0].data[0].label)
      })
  }, [])

  const updateCheck = (prefecture: Prefecture) => {
    setPrefectures((prev) =>
      prev.map((pref) =>
        pref.prefCode === prefecture.prefCode
          ? { ...pref, checked: !pref.checked }
          : pref,
      ),
    )
    if (!chartRef.current) return
    chartRef.current.data.datasets.forEach((d) => {
      d.hidden = d.label === prefecture.prefName ? !d.hidden : d.hidden
    })
    chartRef.current.update()
  }

  return (
    <div className="relative w-full">
      <div
        className={clsx(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-300",
          populations.length === 0 ? "opacity-1 h-auto" : "h-0 opacity-0",
        )}
      >
        <Loading />
      </div>
      {populations.length > 0 && (
        <div className="space-y-4">
          <h1 className="text-center text-3xl font-bold [word-break:auto-phrase] md:text-4xl">
            {`都道府県別の${layer}推移グラフ`}
          </h1>
          <div className="space-y-4">
            <select
              className="w-36 rounded border-2 border-gray-500 p-2"
              onChange={(e) => setLayer(e.target.value)}
            >
              {getLayerOptions(populations).map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
            <CheckboxPrefecture
              prefectures={prefectures}
              onChange={updateCheck}
            />
          </div>
          <div className="w-full">
            <PopulationLine
              {...makeLineData(populations, layer)}
              ref={chartRef}
            />
          </div>
        </div>
      )}
    </div>
  )
}
