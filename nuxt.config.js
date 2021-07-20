export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // PWA Config
  pwa: {
    manifest: {
      name: 'Blog',
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
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
      'DM Mono': [500],
      Inconsolata: {
        wght: [300, 400, 500, 700],
        // ital: [400]
      },
      'Josefin Sans': {
        wght: [400, 500, 600]
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
