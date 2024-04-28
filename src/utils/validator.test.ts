import { describe, test, expect } from "vitest"

import { validatePrefectures, validatePopulations } from "@/utils/validator"

describe("validatePrefectures", () => {
  test("正しい都道府県データのみを返す", () => {
    const data = [
      { prefCode: 1, prefName: "北海道" },
      { prefCode: 2, prefName: "青森県" },
      { prefCode: 0, prefName: "無効な都道府県" },
    ]
    const result = validatePrefectures(data)
    expect(result.length).toBe(2)
    expect(result[0].prefName).toBe("北海道")
    expect(result[1].prefName).toBe("青森県")
  })
})

describe("validatePopulations", () => {
  test("boundaryYear以前のデータのみを返す", () => {
    const data = [
      {
        prefName: "北海道",
        boundaryYear: 2020,
        data: [
          {
            label: "総人口",
            data: [
              { year: 2019, value: 1000 },
              { year: 2020, value: 2000 },
              { year: 2021, value: 3000 },
            ],
          },
        ],
      },
    ]
    const result = validatePopulations(data)
    expect(result[0].data[0].data.length).toBe(2)
    expect(result[0].data[0].data[0].year).toBe(2019)
    expect(result[0].data[0].data[1].year).toBe(2020)
  })
})
