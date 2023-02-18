// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    app: {
      // head
      head: {
        title: 'Element Plus + Nuxt 3',
        meta: [
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          {
            hid: 'description',
            name: 'description',
            content: 'ElementPlus + Nuxt3',
          },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      }
    },
  
    // css
    css: ['~/assets/scss/index.scss'],
  
    typescript: {
      strict: true,
      shim: false,
    },
  
    // build modules
    modules: [
      '@element-plus/nuxt',
    ],
    elementPlus: {
      icon: 'ElIcon',
      importStyle: 'scss',
      themes: ['dark'],
    },
  })
  