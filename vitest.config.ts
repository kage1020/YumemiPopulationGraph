import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    alias: {
      "@/": "/src/",
    },
    coverage: {
      enabled: true,
      include: ["src/components/**/*.{ts,tsx}", "src/utils/**/*.{ts,tsx}"],
    },
  },
})
