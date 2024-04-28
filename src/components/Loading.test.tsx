import { render } from "@testing-library/react"
import { describe, test, expect } from "vitest"
import "@testing-library/jest-dom/vitest"

import { Loading } from "@/components/Loading"

describe("Loading", () => {
  test("正しく描画される", () => {
    const { container } = render(<Loading />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
