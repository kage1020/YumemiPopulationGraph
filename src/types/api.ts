import { PopulationWithRate, PopulationWithoutRate, Prefecture } from "./data"

export type ResponseError = {
  message: string
}

export type ResponsePrefectures = {
  message: null
  result: Prefecture[]
}

export type ResponsePopulation = {
  message: null
  result: {
    boundaryYear: number
    data: (PopulationWithoutRate | PopulationWithRate)[]
  }
}
