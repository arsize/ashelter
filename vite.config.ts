import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import presetEnv from "postcss-preset-env"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [presetEnv],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
