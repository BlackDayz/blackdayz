import { generateJsonTranslations } from './scripts/i18n/loadYamlTranslations';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-06-20',
  devtools: { enabled: true },
  devServer: {
    https: false,
  },
  srcDir: 'src',
  runtimeConfig: {
    public: {
      sentryDsn: process.env.SENTRY_DSN,
    }
  },
  ogImage: {
    enabled: false
  },
  colorMode: {
    preference: 'light',
  },
  css: [
      '~/assets/css/main.css',
      '~/assets/scss/base.scss',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'BlackDayz - Gameshows',
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/ui-pro',
    '@nuxt/image',
    '@nuxt/fonts',
    '@sentry/nuxt/module',
    '@nuxtjs/seo',
    '@nuxt/eslint'
  ],
  plugins: [
    '~/plugins/sentry.ts',
  ],
  extensions: ['ts', 'js'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  i18n: {
    lazy: true,
    langDir: 'locales/.generated/',
    strategy: 'no_prefix',
    defaultLocale: 'de-DE',
    locales: [
        {
            code: 'de-DE',
            language: 'de-DE',
            name: 'Deutsch',
            file: 'de-DE.json',
        },
    ],
    compilation: {
        escapeHtml: false,
        strictMessage: false
    }
},
  imports: {
    dirs: [
      'composables/**',
      'utils/**',
    ]
  },
  typescript: {
    typeCheck: true,
    strict: false,
    tsConfig: {
      exclude: ['node_modules'],
    },
    shim: true,
  },
  hooks: {
    'build:before': () => {
        generateJsonTranslations();
    },
    'webpack:change': () => {
        generateJsonTranslations();
    },
    'builder:watch': () => {
        generateJsonTranslations();
    },
  },
  tailwindcss: {
    configPath: './tailwind.config.js',
  },
  fonts: {
    provider: 'google',
    defaults: {
      weights: [400],
      styles: ['normal'],
    },
    families: [
      {
        name: 'Kanit',
        provider: 'google',
        global: true,
      }
    ],
  }
})