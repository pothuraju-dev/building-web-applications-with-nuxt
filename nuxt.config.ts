// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/test-utils/module',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  imports: {
    dirs: ['stores'],
  },
  pinia: {},
  routeRules: {
    '/**': {
      isr: 60 * 60 * 24,
    },
  },
})
