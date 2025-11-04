import { generateJsonTranslations } from './scripts/i18n/loadYamlTranslations';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/i18n',
        '@nuxt/ui',
        '@nuxt/image',
        '@nuxt/fonts',
        '@sentry/nuxt/module',
        '@nuxtjs/seo',
        '@nuxt/eslint'
    ],
    plugins: [
        '~/plugins/sentry.ts',
    ],
    ssr: true,
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    imports: {
        dirs: [
            'composables/**',
            'utils/**',
        ]
    },
    devtools: { enabled: true },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'BlackDayz - Gameshows',
        },
    },
    css: [
        '~/assets/css/main.css',
        '~/assets/scss/base.scss',
    ],
    colorMode: {
        preference: 'light',
    },
    runtimeConfig: {
        public: {
            sentryDsn: process.env.SENTRY_DSN,
        }
    },
    extensions: ['ts', 'js'],
    devServer: {
        https: false,
    },
    future: {
        compatibilityVersion: 4,
    },
    compatibilityDate: '2024-06-20',
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
    },
    i18n: {
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
    ogImage: {
        enabled: false
    },
});
