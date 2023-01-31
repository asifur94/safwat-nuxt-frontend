// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({


    css: ['~/assets/style.css'],
      postcss: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
  },
  
  
  // modules: [
  //   '@nuxtjs/locale',
  // ],
  // locale: {
  //   default: 'ar',
  //   locales: [
  //     {
  //       code: 'ar',
  //       file: 'ar.json'
  //     }
  //   ],
  //   detectBrowserLanguage: {
  //     useCookie: true,
  //     cookieKey: 'i18n_redirected',
  //     alwaysRedirect: false,
  //     fallbackLocale: 'ar'
  //   }
  // }
     
    
     
    
  

// ssr: process.env.NODE_ENV === 'production' ? true : false // for hot reloading
  })


  