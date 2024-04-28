import { render, cleanup } from "@testing-library/react"
import { describe, test, expect, afterEach } from "vitest"
import "@testing-library/jest-dom/vitest"

import {
  Circle,
  CrossRot,
  Rect,
  Star,
  Triangle,
  RectRot,
} from "@/components/markers"
import { getColor } from "@/utils/chart"

afterEach(cleanup)

describe("Circle", () => {
  test("正しく描画される", () => {
    const { container } = render(<Circle color={getColor(0)} size={20} />)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveAttribute("width", "20")
    expect(container.firstChild).toHaveAttribute("height", "20")
    expect(container.firstChild?.firstChild).toHaveAttribute(
      "fill",
      getColor(0).hex,
    )
  })
})

describe("CrossRot", () => {
  test("正しく描画される", () => {
    const { container } = render(<CrossRot color={getColor(1)} size={20} />)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveAttribute("width", "20")
    expect(container.firstChild).toHaveAttribute("height", "20")
    expect(container.firstChild?.firstChild).toHaveAttribute(
      "stroke",
      getColor(1).hex,
    )
  })
})

describe("Rect", () => {
  test("正しく描画される", () => {
    const { container } = render(<Rect color={getColor(2)} size={20} />)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveAttribute("width", "20")
    expect(container.firstChild).toHaveAttribute("height", "20")
    expect(container.firstChild?.firstChild).toHaveAttribute(
      "fill",
      getColor(2).hex,
    )
  })
})

describe("Star", () => {
  test("正しく描画される", () => {
    const { container } = render(<Star color={getColor(3)} size={20} />)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveAttribute("width", "20")
    expect(container.firstChild).toHaveAttribute("height", "20")
    expect(container.firstChild?.firstChild).toHaveAttribute(
      "stroke",
      getColor(3).hex,
    )
  })
})

describe("Triangle", () => {
  test("正しく描画される", () => {
    const { container } = render(<Triangle color={getColor(4)} size={20} />)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveAttribute("width", "20")
    expect(container.firstChild).toHaveAttribute("height", "20")
    expect(container.firstChild?.firstChild).toHaveAttribute(
      "fill",
      getColor(4).hex,
    )
  })
})

describe("RectRot", () => {
  test("正しく描画される", () => {
    const { container } = render(<RectRot color={getColor(5)} size={20} />)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveAttribute("width", "20")
    expect(container.firstChild).toHaveAttribute("height", "20")
    expect(container.firstChild?.firstChild).toHaveAttribute(
      "fill",
      getColor(5).hex,
    )
  })
})
