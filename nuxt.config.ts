// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/test-utils/module', '@nuxtjs/tailwindcss', '@pinia/nuxt'
  ],
  pinia: {
    autoImports: [
        'defineStore',
        ['defineStore', 'definePiniaStore'],
    ],
},
})
