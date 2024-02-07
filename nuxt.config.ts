// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/test-utils/module', '@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/devtools'],
  tres:{
    devtools: true,
    glsl: true,
  },
  imports: {
    dirs: ['stores'],
  },
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
  },
  routeRules: {
    '/**': {
      isr: 60 * 60 * 24
    }
  },
})
