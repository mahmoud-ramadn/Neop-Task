import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import Components from "unplugin-vue-components/vite";
import MotionResolver from "motion-v/resolver";
import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons/svg")],
      symbolId: "icon-[name]",
    }),
    Components({
      dts: true,
      dirs: ["src/components"],
      resolvers: [MotionResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@ui": path.resolve(__dirname, "src/components/ui"),
      "@views": path.resolve(__dirname, "src/views"),
    },
  },
});
