import { render, cleanup, fireEvent } from "@testing-library/react"
import { describe, test, expect, vi, afterEach } from "vitest"
import "@testing-library/jest-dom/vitest"

import { CheckboxPrefecture } from "@/components/CheckboxPrefecture"

afterEach(cleanup)

describe("CheckboxPrefecture", () => {
  test("正しく描画される", () => {
    const prefectures = [
      {
        prefCode: 1,
        prefName: "北海道",
        checked: true,
      },
      {
        prefCode: 2,
        prefName: "青森県",
        checked: false,
      },
    ]
    const onChange = vi.fn((pref) => {
      expect(pref).toBeDefined()
    })

    const { container } = render(
      <CheckboxPrefecture prefectures={prefectures} onChange={onChange} />,
    )
    expect(container.firstChild).toBeInTheDocument()
  })

  test("onChangeが呼ばれる", () => {
    const prefectures = [
      {
        prefCode: 1,
        prefName: "北海道",
        checked: true,
      },
      {
        prefCode: 2,
        prefName: "青森県",
        checked: false,
      },
    ]
    const onChange = vi.fn((pref) => {
      expect(pref).toEqual(prefectures[0])
    })

    const { getByRole } = render(
      <CheckboxPrefecture prefectures={prefectures} onChange={onChange} />,
    )
    const checkbox = getByRole("checkbox", { name: "北海道" })
    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  test("全選択ボタンが正しく動作する", () => {
    const prefectures = [
      {
        prefCode: 1,
        prefName: "北海道",
        checked: false,
      },
      {
        prefCode: 2,
        prefName: "青森県",
        checked: false,
      },
    ]
    const onChange = vi.fn()

    const { getByRole } = render(
      <CheckboxPrefecture prefectures={prefectures} onChange={onChange} />,
    )
    const selectAllButton = getByRole("button", { name: "全選択" })
    fireEvent.click(selectAllButton)
    expect(onChange).toHaveBeenCalledTimes(2)
  })

  test("全選択解除ボタンが正しく動作する", () => {
    const prefectures = [
      {
        prefCode: 1,
        prefName: "北海道",
        checked: true,
      },
      {
        prefCode: 2,
        prefName: "青森県",
        checked: true,
      },
    ]
    const onChange = vi.fn()

    const { getByRole } = render(
      <CheckboxPrefecture prefectures={prefectures} onChange={onChange} />,
    )
    const unselectAllButton = getByRole("button", { name: "全選択解除" })
    fireEvent.click(unselectAllButton)
    expect(onChange).toHaveBeenCalledTimes(2)
  })

  test("都道府県別のチェックボックスが正しく動作する", () => {
    const prefectures = [
      {
        prefCode: 1,
        prefName: "北海道",
        checked: true,
      },
      {
        prefCode: 2,
        prefName: "青森県",
        checked: false,
      },
      {
        prefCode: 3,
        prefName: "岩手県",
        checked: false,
      },
      {
        prefCode: 4,
        prefName: "宮城県",
        checked: false,
      },
      {
        prefCode: 5,
        prefName: "秋田県",
        checked: false,
      },
      {
        prefCode: 6,
        prefName: "山形県",
        checked: false,
      },
    ]
    const onChange = vi.fn()

    const { getByRole } = render(
      <CheckboxPrefecture prefectures={prefectures} onChange={onChange} />,
    )
    let checkbox = getByRole("checkbox", { name: "北海道" })
    fireEvent.click(checkbox)
    checkbox = getByRole("checkbox", { name: "青森県" })
    fireEvent.click(checkbox)
    checkbox = getByRole("checkbox", { name: "岩手県" })
    fireEvent.click(checkbox)
    checkbox = getByRole("checkbox", { name: "宮城県" })
    fireEvent.click(checkbox)
    checkbox = getByRole("checkbox", { name: "秋田県" })
    fireEvent.click(checkbox)
    checkbox = getByRole("checkbox", { name: "山形県" })
    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenCalledTimes(6)
  })
})
