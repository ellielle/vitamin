/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Unocss from "unocss/vite";
import { presetUno } from "@unocss/preset-uno";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/] }),
    AutoImport({
      include: [
        /\.[tj]s?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: [
        "vue",
        "vue-router",
        { "@vueuse/core": ["useDark", "useToggle"] },
      ],
      dirs: ["src/composables"],
      dts: "src/types/auto-imports.d.ts",
    }),
    Components({
      resolvers: [
        IconsResolver({
          prefix: "Icon",
        }),
      ],
      dirs: ["src/components"],
      extensions: ["vue"],
      deep: true,
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [/[\\/]node_modules[\\/]/,
        /[\\/]\.git[\\/]/,
        /[\\/]\.nuxt[\\/]/],
      dts: "src/types/components.d.ts",
    }),
    Icons({ autoInstall: true }),
    Unocss({
      presets: [
        presetUno(),
      ],
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: "/src" },
      { find: "@composables", replacement: "/src/composables" }],
  },
  test: {
    include: ["test/**/*.test.ts"],
    deps: {
      inline: ["@vue", "@vueuse"],
    },
    setupFiles: "test/mocks/server.js",
  },
});
