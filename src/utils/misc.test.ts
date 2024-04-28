import { describe, test, expect } from "vitest"

import { cn } from "@/utils/misc"

describe("cn", () => {
  test("正しくクラス名を返す", () => {
    const className = cn("text-red border-red")
    expect(className).toBe("text-red border-red")
  })

  test("競合するクラス名を上書きする", () => {
    const className = cn("text-red text-blue")
    expect(className).toBe("text-blue")
  })
})
