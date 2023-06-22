import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        sourcemap: true,
      },
      devOptions: {
        enabled: true,
      },
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'masked-icon.svg',
        'safari-pinned-tab.svg',
        'mstile-70x70.png',
        'mstile-144x144.png',
        'mstile-150x150.png',
        'mstile-310x150.png',
        'mstile-310x310.png',
        'android-chrome-192x192.png',
        'android-chrome-512x512.png',
        'favicon-16x16.png',
        'favicon-32x32.png',
      ],
      manifest: {
        name: 'Resume Genie',
        short_name: 'Resume Genie',
        description: 'The Next-Gen Resume Builder Software',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: 'favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: 'favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: 'favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
          {
            src: 'mstile-70x70.png',
            sizes: '70x70',
            type: 'image/png',
          },
          {
            src: 'mstile-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'mstile-150x150.png',
            sizes: '150x150',
            type: 'image/png',
          },
          {
            src: 'mstile-310x150.png',
            sizes: '310x150',
            type: 'image/png',
          },
          {
            src: 'mstile-310x310.png',
            sizes: '310x310',
            type: 'image/png',
          },
          {
            src: 'safari-pinned-tab.svg',
            sizes: '16x16',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
        start_url: '/',
        filename: 'manifest.json',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#007bff',
      },
    }),
  ],
  optimizeDeps: {
    include: ['linked-dep'],
  },
  build: {
    commonjsOptions: {
      include: [/linked-dep/, /node_modules/],
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
});
