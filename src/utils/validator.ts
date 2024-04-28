import type { Population, Prefecture } from "@/types/data"

export function validatePrefectures(data: Prefecture[]): Prefecture[] {
  return data.filter(
    (prefecture) => prefecture.prefCode > 0 && prefecture.prefCode < 48,
  )
}

export function validatePopulations(populations: Population[]): Population[] {
  return populations.map((data) => ({
    prefName: data.prefName,
    boundaryYear: data.boundaryYear,
    data: data.data.map((d) => ({
      label: d.label,
      data: d.data.filter((v) => v.year <= data.boundaryYear),
    })),
  }))
}
