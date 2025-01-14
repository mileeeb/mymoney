import Aura from '@primevue/themes/aura';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss'
  ],
  css: [
    'primeicons/primeicons.css',
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    },
    components: {
      prefix: 'Prime'
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})