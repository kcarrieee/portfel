// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  image: {
    // Article media never renders wider than 600 CSS pixels. Capping the
    // generated candidates at 1200px preserves full 2x Retina detail while
    // keeping the original multi-thousand-pixel files out of browser srcsets.
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
      // Prevent Vite from resolving a second React instance for
      // framer-motion's dependency graph, which causes "Invalid hook call"
      // errors even though only one copy of react/react-dom is installed.
      dedupe: ['react', 'react-dom'],
    },
    optimizeDeps: {
      // Force framer-motion into the initial dependency scan alongside
      // react/react-dom, instead of letting Vite discover it lazily on
      // first request. Lazy discovery re-runs the optimizer mid-load,
      // which serves a stale react.js chunk to framer-motion's motion.*
      // components and produces "Invalid hook call" errors.
      include: ['react', 'react-dom', 'framer-motion'],
    },
  },
});
