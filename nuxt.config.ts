// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/test-utils/module', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
  imports: {
    dirs: ['stores'],
  },
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
  },
})
