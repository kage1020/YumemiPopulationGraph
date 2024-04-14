export type Prefecture = {
  prefCode: number
  prefName: string
}

export type PopulationWithoutRate = {
  label: string
  data: {
    year: number
    value: number
  }[]
}

export type PopulationWithRate = {
  label: string
  data: {
    year: number
    value: number
    rate: number
  }[]
}

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
