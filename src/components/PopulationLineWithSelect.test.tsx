import { render, cleanup, fireEvent, waitFor } from "@testing-library/react"
import { describe, test, expect, afterEach } from "vitest"
import "@testing-library/jest-dom/vitest"

import { PopulationLineWithSelect } from "@/components/PopulationLineWithSelect"

afterEach(cleanup)

describe("PopulationLineWithSelect", () => {
  window.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  test("正しく描画される", () => {
    const { container } = render(<PopulationLineWithSelect />)
    expect(container.firstChild).toBeInTheDocument()
  })

  test("fetchが終わり次第タイトルがレンダリングされる", async () => {
    const { container } = render(<PopulationLineWithSelect />)
    await waitFor(
      () => {
        expect(container.firstChild).toBeInTheDocument()
        expect(container.firstChild).toHaveTextContent(
          "都道府県別の総人口推移グラフ",
        )
      },
      { timeout: 2000 },
    )
  })

  test("layerが変更される", async () => {
    const { container, getByRole } = render(<PopulationLineWithSelect />)
    await waitFor(
      () => {
        expect(container.firstChild).toBeInTheDocument()
        expect(container.firstChild).toHaveTextContent(
          "都道府県別の総人口推移グラフ",
        )
      },
      { timeout: 2000 },
    )
    const select = getByRole("combobox")
    fireEvent.change(select, { target: { value: "生産年齢人口" } })
    await waitFor(
      () => {
        expect(container.firstChild).toBeInTheDocument()
        expect(container.firstChild).toHaveTextContent(
          "都道府県別の生産年齢人口推移グラフ",
        )
      },
      { timeout: 2000 },
    )
  })
})
