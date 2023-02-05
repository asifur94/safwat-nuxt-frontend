// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/style.css',
  
  ],
      postcss: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
        
  },
  modules: [
    '@nuxtjs/i18n'
  ],
  plugins: [
    { src: '~/plugins/fontawesome.js' },
  ],
  
  i18n: {
   defaultLocale: 'en',
   locales: [
    { code: 'en', iso: 'en-US', file: 'en.js'},
    { code: 'ar', iso: 'ar-EG', file: 'ar.js'}
  ],
   vueI18n: {
      locale: 'en',
     fallbackLocale: 'en',
       messages: {
         en: {
          hello:'Hellow',
          welcome: 'Welcome'
        },
        ar: {
         hello: "مرحبًا",
         welcome : "أهلا بك"
        },
      }
  }
},

})

  
  
  