import type { ClassNameValue } from "tailwind-merge"
import { twMerge } from "tailwind-merge"

export function cn(...classNames: ClassNameValue[]) {
  return twMerge(classNames)
}
