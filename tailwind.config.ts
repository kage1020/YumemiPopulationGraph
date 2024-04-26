import type { Config } from "tailwindcss"

import { COLORS } from "./src/utils/chart"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        flip: "flip 2s infinite",
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotateX(0deg)" },
          "25%": { transform: "rotateZ(-180deg)" },
          "50%": { transform: "rotateX(-180deg)" },
          "75%": { transform: "rotateZ(0deg)" },
          "100%": { transform: "rotateX(0deg)" },
        },
      },
      colors: {
        red: COLORS.red.hex,
        green: COLORS.green.hex,
        blue: COLORS.blue.hex,
        sky: COLORS.sky.hex,
        pink: COLORS.pink.hex,
        orange: COLORS.orange.hex,
        purple: COLORS.purple.hex,
        brown: COLORS.brown.hex,
      },
    },
  },
  plugins: [],
} satisfies Config
