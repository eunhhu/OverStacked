import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    proxy: {
      '/api' : {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewriteWsOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    port: 3000,
    strictPort: true,
    cors: true,
    hmr: true
  },
  resolve: {
    alias: {}
  },
  envPrefix: ['VITE_', 'NODE_']
})
