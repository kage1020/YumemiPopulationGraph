import axios from "axios"

import { cache } from "./cache"

import type { ResponsePopulation, ResponsePrefectures } from "@/types/api"
import type { Population, Prefecture } from "@/types/data"

export const fetchPrefectures = async (): Promise<Prefecture[]> => {
  return cache("prefectures", () =>
    axios
      .get<ResponsePrefectures>(
        "https://opendata.resas-portal.go.jp/api/v1/prefectures",
        {
          headers: {
            "X-API-KEY": import.meta.env.VITE_RESAS_API_KEY,
          },
        },
      )
      .then((res) => {
        if (res.status === 200) return res.data.result
        else return []
      }),
  )
}

export const fetchPopulation = async (
  prefecture: Prefecture,
): Promise<Population> => {
  return cache(`population-${prefecture.prefName}`, () =>
    axios
      .get<ResponsePopulation>(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefecture.prefCode}`,
        {
          headers: {
            "X-API-KEY": import.meta.env.VITE_RESAS_API_KEY,
          },
        },
      )
      .then((res) => {
        if (res.status === 200) {
          return {
            prefName: prefecture.prefName,
            boundaryYear: res.data.result.boundaryYear,
            data: res.data.result.data,
          }
        } else {
          return {
            prefName: prefecture.prefName,
            boundaryYear: 0,
            data: [],
          }
        }
      }),
  )
}
