// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
      'bootstrap/dist/css/bootstrap.min.css',
      '@/assets/css/style.css',
      "@/assets/fonts/stylesheet.css"
  ],
  script: [
      { src: 'bootstrap/dist/js/bootstrap.bundle.min.js' }
  ],
    modules: ['@nuxtjs/apollo','nuxt-icon'],
    // googleFonts: {
    //     families: {
    //         // download: true,

    //       // basic
    //       Cairo: [100,200, 300,400,500,600,700],

    //       // advanced
    //     //   Raleway: {
    //     //     // weights
    //     //     wght: [100, 400],
    //     //     // italic
    //     //     ital: [100]
    //     //   },
    //     }
    //   },
    // i18n: {
    //     // vueI18nLoader: true,
    //     baseUrl: process.env.APP_BASE_URL || "http://localhost:3000",
    //       locales: [
    //         {
    //           code: "en",
    //           iso: "en-US",
    //           file: "en.json",
    //           dir: "ltr",
    //         },
    //         {
    //           code: "ar",
    //           iso: "ar-SA",
    //           file: "ar.json",
    //           dir: "rtl",
    //         },
    //       ],
    //       defaultLocale: "en",
    //       lazy: false,
    //       langDir: "locales",
    //       detectBrowserLanguage: false,
    //       vueI18n: {
    //         fallbackLocale: "en",
    //         legacy: false,
    //       },
    //   },
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://board.humm.world/graphql'
            }
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/css/scss/global.scss" as *;',
                },
            },
        },
    },

})
