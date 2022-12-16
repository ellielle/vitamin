# Vitamin

An (relatively) minimal opinionated Vue 3 starter template using Vite + TS.

Inspired by [Vitesse](https://github.com/antfu/vitesse)  

## Features

- [x] ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 4](https://github.com/vitejs/vite), and [yarn](https://yarnpkg.com/)
  
- [x] 🦾 [TypeScript](https://www.typescriptlang.org/)

- [x] 📦 [Component auto importing (unplugin-vue-components)](https://github.com/antfu/unplugin-vue-components)

- [x] 📥 [API auto importing (unplugin-auto-import)](https://github.com/antfu/unplugin-auto-import)

- [x] 🔥 Use the [`<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- [x] 🗂️ [Vue Composition Collection (VueUse)](https://vueuse.org/)
  
- [x] 🎨 [UnoCSS](https://github.com/unocss/unocss)

- [x] 🎊 [Icon Pack Component (unplugin-icons)](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- [x] ⚙️ Unit Testing with [Vitest](https://github.com/vitest-dev/vitest) and mocking with [MSW](https://github.com/mswjs/msw)

- [x] ☁️ Deploy on Netlify, zero-config

- [x] 🌙 Switch Theme (light and dark)

## Demo

[https://vitamin-e11.netlify.app/](https://vitamin-e11.netlify.app/)

## Quick Start

> Requires Node >= 14

### GitHub Template

[Create a repo from this template](https://github.com/ellielle/vitamin/generate)

### Clone to local

```bash
npx degit ellielle/vitamin my-app-name
cd my-app-name
yarn install
```

## [Recommended IDE Setup](https://vuejs.org/guide/scaling-up/tooling.html#ide-support)

I personally use [WebStorm](https://www.jetbrains.com/webstorm/) with this, but most people recommend:

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start), select your clone, and click `Deploy Site`.

## Usage

### Theme Changer

This template uses VueUse for [changing theme](https://vueuse.org/core/usedark/).

```bash
/src/composables/useDark.ts
```

How to use :

```vue
<script setup lang="ts">
import { toggleDark, isDark } from '@/composables'
</script>

<template>
  <button @click="toggleDark()">
    <IconCarbonSun v-if="isDark" class="animate-spin"/>
    <IconCarbonMoon v-else class="animate-bounce"/>
  </button>
</template>
```

### Icons

This template is using unplugin-icons with unplugin-vue-components for auto importing.
It uses the default prefix of `Icon`, and is currently only set to use Carbon icons (`@iconify-json/carbon`).


You may view usable providers here: https://icones.js.org/  


```vue
<IconProviderIconName />

<IconMdiChevronDown />

<IconLogoGoogleIcon />
```

### Component Auto Importing

This template uses `unplugin-vue-components` to automatically import components. Configuration reference:

```ts
Components({
  // relative paths to the directory to search for components.
  dirs: ['src/components'],

  // valid file extensions for components.
  extensions: ['vue'],
  // search for subdirectories
  deep: true,
  // resolvers for custom components
  resolvers: [],

  // generate `components.d.ts` global declarations,
  // also accepts a path for custom filename
  // default: `true` if package typescript is installed
  dts: false,

  // Allow subdirectories as namespace prefix for components.
  directoryAsNamespace: false,
  // Subdirectory paths for ignoring namespace prefixes
  // works when `directoryAsNamespace: true`
  globalNamespaces: [],

  // auto import for directives
  // default: `true` for Vue 3, `false` for Vue 2
  // Babel is needed to do the transformation for Vue 2, it's disabled by default for performance concerns.
  // To install Babel, run: `npm install -D @babel/parser`
  directives: true,

  // Transform path before resolving
  importPathTransform: v => v,

  // Allow for components to override other components with the same name
  allowOverrides: false,

  // filters for transforming targets
  include: [/\.vue$/, /\.vue\?vue/],
  exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],

  // Vue version of project. It will detect automatically if not specified.
  // Acceptable value: 2 | 2.7 | 3
  version: 3
})
```

### API Auto Importing

This template uses `unplugin-auto-import` for API auto importing. Configuration reference:

```ts
AutoImport({
  // targets to transform
  include: [
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    /\.vue$/, /\.vue\?vue/, // .vue
    /\.md$/, // .md
  ],

  // global imports to register
  imports: [
    // presets
    'vue',
    'vue-router',
    // custom
    {
      '@vueuse/core': [
        // named imports
        'useMouse', // import { useMouse } from '@vueuse/core',
        // alias
        ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
      ],
      'axios': [
        // default imports
        ['default', 'axios'], // import { default as axios } from 'axios',
      ],
      '[package-name]': [
        '[import-names]',
        // alias
        ['[from]', '[alias]'],
      ],
    },
  ],
  // Enable auto import by filename for default module exports under directories
  defaultExportByFilename: false,
  
  // Auto import for all module exports under directories
  dirs: [
    // './hooks',
    // './composables'
    // ...
  ],

  // Filepath to generate corresponding .d.ts file.
  // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
  // Set `false` to disable.
  dts: './auto-imports.d.ts',

  // Auto import inside Vue template
  // see https://github.com/unjs/unimport/pull/15
  vueTemplate: false,

  // Custom resolvers, compatible with `unplugin-vue-components`
  // see https://github.com/antfu/unplugin-auto-import/pull/23/
  resolvers: [
    /* ... */
  ],

  // Generate corresponding .eslintrc-auto-import.json file.
  // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
  eslintrc: {
    enabled: false, // Default `false`
    filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
    globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
  },
})
```
