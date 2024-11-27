
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      BASE_URL: process.env['DDEV_PRIMARY_URL']
    }
  },
  modules: [
    '@vue-macros/nuxt',
  ],
  ssr: false,
  app: {
    cdnURL: '/nuxt/dist'
  }
})
