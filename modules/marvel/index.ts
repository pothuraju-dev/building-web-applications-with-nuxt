import {
  defineNuxtModule,
  createResolver,
  extendPages,
  addComponentsDir,
} from '@nuxt/kit'
import { fileURLToPath } from 'url'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'marvel-app',
    configKey: 'marvel',
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    addComponentsDir({
      path: resolve(runtimeDir, 'components'),
      prefix: 'Marvel',
      // @ts-ignore
      level: 999,
      global: true,
    })

    extendPages((pages) => {
      pages.push({
        name: 'comics',
        path: '/apps/marvel-comics',
        file: resolve(__dirname, './runtime/pages/comics.vue'),
      })
    })

    nuxt.hook('tailwindcss:config', (tailwindConfig) => {
      const resourcePaths = (srcDir: string) => [
        `${srcDir}/components/**/*.{js,vue,ts}`,
        `${srcDir}/pages/**/*.{js,ts,json}`,
      ]
      const contentPaths = resourcePaths(runtimeDir)
      console.log('contentPaths', contentPaths)
      // If condition to neglect ts warnings
      if (
        tailwindConfig &&
        tailwindConfig.content &&
        Array.isArray(tailwindConfig.content)
      )
        tailwindConfig.content.push(...contentPaths)
    })
  },
})
