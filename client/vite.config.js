import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  server: {
    port: 8080,
    proxy: {
      '/test': 'http://localhost:3000/',
    },
  },
  plugins: [
    VitePWA({ registerType: 'autoUpdate' }),
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: '/src/quasar-variables.sass',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
