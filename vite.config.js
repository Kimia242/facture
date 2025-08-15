import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  root: '.',
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['assets/logo.svg', 'assets/icon-512.png'],
      manifest: {
        name: 'GC TRADING CO.LTD — Générateur de Factures',
        short_name: 'Facture PWA',
        description: 'Générateur de factures (PWA) — PDF & XLSX',
        theme_color: '#0f3460',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'assets/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html'
    }
  }
})
