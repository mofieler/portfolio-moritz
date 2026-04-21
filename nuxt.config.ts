export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  css: ['~/assets/css/global.css'],

  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
  },

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],

  image: {
    // Use IPX for static site generation (processes images at build time)
    provider: 'ipx',
    // Directory where processed images are stored
    dir: 'assets/images',
    // Default quality for WebP conversion
    quality: 80,
    // Enable lazy loading by default
    loading: 'lazy',
    // Presets for common use cases
    presets: {
      project: {
        widths: [320, 640, 960, 1280, 1920],
        sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
        format: ['webp', 'png'],
        placeholder: true,
      },
      thumbnail: {
        widths: [200, 400],
        format: ['webp', 'png'],
        placeholder: true,
      },
    },
    // Screens for responsive sizing
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1920,
    },
  },

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'de',
    lazy: false,
    vueI18n: './i18n.config.ts',
    bundle: {
      optimizeTranslationDirective: false,
    },
    locales: [
      { code: 'en', name: 'English', language: 'en-US' },
      { code: 'de', name: 'Deutsch', language: 'de-DE' },
    ],
    detectBrowserLanguage: false,
  },

  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY || '',
    contactEmail: process.env.CONTACT_EMAIL || 'moritzfieler@icloud.com',
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://moritzfieler.com',
    },
  },

  nitro: {
    preset: 'static',
  },

  app: {
    head: {
      // Fallback title — overridden per-page with locale-aware version
      title: 'Moritz Fieler – UX Designer & Frontend Developer Stuttgart',
      titleTemplate: '%s',
      script: [
        {
          // Anti-FOUC: only restore explicitly saved preference — never auto-detect system theme
          id: 'color-mode-script',
          innerHTML: `(function(){if(localStorage.getItem('color-mode')==='dark'){document.documentElement.classList.add('dark')}})()`,
          type: 'text/javascript',
        },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#F9F8F6' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://moritzfieler.com/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://moritzfieler.com/og-image.jpg' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap' },
      ],
    },
  },
})