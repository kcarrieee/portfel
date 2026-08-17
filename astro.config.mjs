import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://kcarriee.com',
  image: {
    layout: 'full-width',
    responsiveStyles: true,
    breakpoints: [320, 480, 600, 900, 1200],
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [react()],
  vite: {
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion'],
    },
  },
});
