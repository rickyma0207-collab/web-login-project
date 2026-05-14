import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const API_TARGET = 'http://43.154.250.117:5010'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/login-api': {
        target: API_TARGET,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/login-api/, ''),
      },
    },
  },
})
