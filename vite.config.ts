import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({ include: [/\.vue$/] }),
    AutoImport({
      include: [
        /\.[tj]s?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: [
        "vue",
        "vue-router",
        "@vueuse/core",
      ],
      dirs: ["src/composables", "src/stores"],
      dts: "src/types/auto-imports.d.ts",
    }),
    Components({
      resolvers: [
        IconsResolver({
          prefix: "Icon",
        }),
      ],
      dirs: ["src/components", "src/store"],
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
      dts: "src/types/components.d.ts",
    }),
    Icons(),
    WindiCSS(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    include: ["test/**/*.test.ts"],
    deps: {
      inline: ["@vue", "@vueuse"],
    },
    setupFiles: "test/mocks/server.js",
  },
});
