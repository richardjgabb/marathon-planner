import { defineConfig } from 'vite'
import react from '@vitejs/react-config'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/marathon-planner/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Marathon Planner',
        short_name: 'MarathonPlan',
        description: 'Training plan that respects your shift work.',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})