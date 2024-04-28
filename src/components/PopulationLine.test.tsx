import { render } from "@testing-library/react"
import { describe, test, expect } from "vitest"
import "@testing-library/jest-dom/vitest"

import { PopulationLine } from "@/components/PopulationLine"
import { makeLineData } from "@/utils/chart"

describe("PopulationLine", () => {
  window.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  test("正しく描画される", () => {
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
    const data = makeLineData(populations, layer)
    const { container } = render(<PopulationLine {...data} />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
