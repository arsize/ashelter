import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
    // 省略文件后缀
    extensions: ["", ".js", ".json", ".vue", ".scss", ".css", ".ts", ".tsx"],
  },
})
