// 都道府県データの型定義
export type Prefecture = {
  prefCode: number
  prefName: string
}

// 総人口データの型定義
export type PopulationWithoutRate = {
  label: string
  data: {
    year: number
    value: number
  }[]
}

// 総人口以外のデータの型定義
export type PopulationWithRate = {
  label: string
  data: {
    year: number
    value: number
    rate: number
  }[]
}

// 都道府県の人口データの型定義
export type Population = {
  prefName: string
  boundaryYear: number
  data: (PopulationWithoutRate | PopulationWithRate)[]
}

export type LineData = {
  labels: string[]
  data: {
    prefName: string
    boundaryYear: number
    data: PopulationWithRate | PopulationWithoutRate
  }[]
}

export type Color = {
  name: string
  label: string
  hex: string
  rgb: string
}
