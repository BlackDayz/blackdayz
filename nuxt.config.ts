import { load } from 'js-yaml';
import fs from 'fs';
import path from 'path';

function loadYamlTranslations(locale: string) {
  const dirPath = path.resolve(`./i18n/locales/${locale}`);
  const files = fs.readdirSync(dirPath);
  return files.reduce((acc, file) => {
    if (file.endsWith('.yaml') || file.endsWith('.yml')) {
      const content = fs.readFileSync(path.join(dirPath, file), 'utf8');
      const data = load(content);
      return { ...acc, ...data };
    }
    return acc;
  }, {});
}

function generateJsonTranslations() {
  const locales = ['de'];
  locales.forEach((locale) => {
    const translations = loadYamlTranslations(locale);
    fs.writeFileSync(
      path.resolve(`./i18n/locales/.generated/${locale}-${locale.toUpperCase()}.json`),
      JSON.stringify(translations, null, 2)
    );
  });
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-14',
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
    '~/assets/scss/base.scss',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'BlackDayz - Gameshows',
    },
  },
  extends: [
    '@nuxt/ui-pro'
  ],
  modules: ['@nuxtjs/i18n', '@nuxt/ui', '@nuxt/image', '@nuxt/fonts', '@sentry/nuxt/module', '@nuxtjs/seo'],
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
    vueI18n: './vue-i18n.options.ts',
    locales: [
      {
        code: 'de-DE',
        language: 'de-DE',
        name: 'Deutsch',
        file: 'de-DE.json'
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
  },
  tailwindcss: {
    configPath: './tailwind.config.js',
  },
})