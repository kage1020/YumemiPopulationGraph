import type { Config } from "tailwindcss"

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
    },
  },
  plugins: [],
} satisfies Config
