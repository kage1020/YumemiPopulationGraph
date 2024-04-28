import { describe, test, expect } from "vitest"

import {
  createChartData,
  createChartOptions,
  makeLineData,
  getLayerOptions,
  getColor,
  getMarker,
  COLORS,
  MARKER,
} from "@/utils/chart"

describe("getColor", () => {
  test("色を一色返す", () => {
    expect(getColor(0)).toEqual(COLORS.red)
  })

  test("grayを返さない", () => {
    expect(getColor(Object.values(COLORS).length - 1)).toEqual(COLORS.red)
  })

  test("色がループする", () => {
    expect(getColor(Object.values(COLORS).length)).toEqual(COLORS.green)
  })
})

describe("getMarker", () => {
  test("マーカーを一つ返す", () => {
    expect(getMarker(0)).toEqual(MARKER[0])
  })

  test("色が一周したら次のマーカーを返す", () => {
    expect(getMarker(Object.values(COLORS).length - 1)).toEqual(MARKER[1])
  })

  test("マーカーがループする", () => {
    expect(
      getMarker((Object.values(COLORS).length - 1) * MARKER.length),
    ).toEqual(MARKER[0])
  })
})

describe("createChartData", () => {
  test("正しいChartDataを返す", () => {
    const data = {
      labels: ["label1", "label2", "label3"],
      data: [
        {
          prefName: "prefName1",
          boundaryYear: 2020,
          data: {
            label: "label1",
            data: [
              { year: 2020, value: 100 },
              { year: 2020, value: 200 },
              { year: 2020, value: 300 },
            ],
          },
        },
      ],
    }
    const result = createChartData(data)
    expect(result).toEqual({
      labels: ["label1", "label2", "label3"],
      datasets: [
        {
          label: "prefName1",
          data: [100, 200, 300],
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverBorderWidth: 4,
          pointHoverRadius: 8,
          borderColor: getColor(0).hex,
          backgroundColor: getColor(0).hex,
          pointStyle: getMarker(0),
          pointBackgroundColor: getColor(0).hex,
        },
      ],
    })
  })
})

describe("createChartOptions", () => {
  test("正しいChartOptionsを返す", () => {
    const result = createChartOptions()
    expect(result).toBeDefined()
  })
})

describe("makeLineData", () => {
  test("正しいLineDataを返す", () => {
    const populations = [
      {
        prefName: "prefName1",
        boundaryYear: 2020,
        data: [
          {
            label: "label1",
            data: [
              { year: 2018, value: 100 },
              { year: 2019, value: 200 },
              { year: 2020, value: 300 },
            ],
          },
        ],
      },
    ]
    const layer = "label1"
    const result = makeLineData(populations, layer)
    expect(result).toEqual({
      labels: ["2018", "2019", "2020"],
      data: [
        {
          prefName: "prefName1",
          boundaryYear: 2020,
          data: {
            label: "label1",
            data: [
              { year: 2018, value: 100 },
              { year: 2019, value: 200 },
              { year: 2020, value: 300 },
            ],
          },
        },
      ],
    })
  })

  test("異なる年度のデータを整形する", () => {
    const populations = [
      {
        prefName: "prefName1",
        boundaryYear: 2023,
        data: [
          {
            label: "label1",
            data: [
              { year: 2020, value: 100 },
              { year: 2021, value: 200 },
              { year: 2022, value: 300 },
            ],
          },
        ],
      },
      {
        prefName: "prefName2",
        boundaryYear: 2023,
        data: [
          {
            label: "label1",
            data: [
              { year: 2019, value: 100 },
              { year: 2021, value: 200 },
              { year: 2023, value: 300 },
            ],
          },
        ],
      },
    ]
    const layer = "label1"
    const result = makeLineData(populations, layer)
    expect(result).toEqual({
      labels: ["2019", "2020", "2021", "2022", "2023"],
      data: [
        {
          prefName: "prefName1",
          boundaryYear: 2023,
          data: {
            label: "label1",
            data: [
              { year: 2020, value: 100 },
              { year: 2021, value: 200 },
              { year: 2022, value: 300 },
            ],
          },
        },
        {
          prefName: "prefName2",
          boundaryYear: 2023,
          data: {
            label: "label1",
            data: [
              { year: 2019, value: 100 },
              { year: 2021, value: 200 },
              { year: 2023, value: 300 },
            ],
          },
        },
      ],
    })
  })
})

describe("getLayerOptions", () => {
  test("正しいlayerのリストを返す", () => {
    const populations = [
      {
        prefName: "prefName1",
        boundaryYear: 2020,
        data: [
          {
            label: "label1",
            data: [
              { year: 2020, value: 100 },
              { year: 2020, value: 200 },
              { year: 2020, value: 300 },
            ],
          },
          {
            label: "label2",
            data: [
              { year: 2020, value: 100 },
              { year: 2020, value: 200 },
              { year: 2020, value: 300 },
            ],
          },
        ],
      },
    ]
    const result = getLayerOptions(populations)
    expect(result).toEqual(["label1", "label2"])
  })
})
