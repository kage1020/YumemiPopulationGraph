import { describe, test, expect } from "vitest"

import { fetchPrefectures, fetchPopulation } from "@/utils/fetcher"

describe("fetchPrefectures", () => {
  test("正しくfetchされる", async () => {
    localStorage.clear()
    const data = await fetchPrefectures()
    expect(data).toBeInstanceOf(Array)
  })
})

describe("fetchPopulation", () => {
  test("正しくfetchされる", async () => {
    localStorage.clear()
    const data = await fetchPopulation({ prefCode: 1, prefName: "北海道" })
    expect(data.prefName).toBe("北海道")
    expect(data).toHaveProperty("boundaryYear")
    expect(data).toHaveProperty("data")
  })

  test("無効な都道府県コード", async () => {
    localStorage.clear()
    const data = await fetchPopulation({
      prefCode: 0,
      prefName: "無効な都道府県",
    })
    expect(data.prefName).toBe("無効な都道府県")
    expect(data.boundaryYear).toBe(0)
    expect(data.data).toEqual([])
  })
})
