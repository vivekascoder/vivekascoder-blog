export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // PWA Config
  pwa: {
    manifest: {
      name: 'Blog',
      description: "A blog on full stack Web Dev and DevOps.",
      lang: 'en',
      useWebmanifestExtension: false
    }
  },

  // Hooks
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        Object.entries(document).forEach(([key, value]) => {
          const _key = `case_insensitive__${key}`; // prefix is arbitrary

          if (!document[_key] && typeof value === 'string') {
            document[_key] = value.toLocaleLowerCase();
          }
        });
      }
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Vivek\'s Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'My personal blog, learn about cool Fullstack & DevOps Things.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /**
   * Global Styles for the pages.
   */
  css: [
    '@/assets/css/globals.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-heroicons.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/pwa'
  ],
  googleFonts: {
    families: {
      // 'DM Mono': [500],

      // // The following font is for normal text.
      // 'Noto Sans': {
      //   wght: [300, 400, 500, 600, 700],
      //   // ital: [400]
      // },

      // // The following font is for headings and titles.
      // 'IBM Plex Sans': {
      //   wght: [400, 500, 600]
      // }
      'Inter': {
        wght: [300, 400, 500, 600, 700]
      }
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: '@heroicons/vue'
  },
  tailwindcss: {
    config: {
      plugins: [require('@tailwindcss/typography')],
    }
  },

  // For the middlewares.
  router: {
    middleware: 'navbarState'
  }
}
