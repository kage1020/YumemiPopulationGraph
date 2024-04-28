import { describe, test, expect, vi } from "vitest"

import { cache } from "@/utils/cache"

describe("cache", () => {
  test("キャッシュがない場合はfetcherを実行してキャッシュする", async () => {
    const fetcher = vi.fn(() => Promise.resolve("data"))
    const key = "key"
    const data = await cache(key, fetcher)
    expect(data).toBe("data")
    expect(fetcher).toHaveBeenCalled()
    expect(localStorage.getItem(key)).not.toBeNull()
  })

  test("キャッシュがある場合はfetcherを実行せずにキャッシュを返す", async () => {
    localStorage.setItem(
      "key",
      JSON.stringify({ value: "data", expiration: Date.now() + 10 * 1000 }),
    )
    const fetcher = vi.fn(() => Promise.resolve("update"))
    const key = "key"
    const data = await cache(key, fetcher)
    expect(data).toBe("data")
    expect(fetcher).not.toHaveBeenCalled()
    expect(localStorage.getItem(key)).toEqual(expect.stringContaining("data"))
  })

  test("キャッシュが期限切れの場合はfetcherを実行してキャッシュを更新する", async () => {
    const fetcher = vi.fn(() => Promise.resolve("update"))
    const key = "key"
    const expiration = Date.now() - 1
    localStorage.setItem(key, JSON.stringify({ value: "data", expiration }))
    const data = await cache(key, fetcher)
    expect(data).toBe("update")
    expect(fetcher).toHaveBeenCalled()
    expect(localStorage.getItem(key)).toEqual(expect.stringContaining("update"))
  })
})
