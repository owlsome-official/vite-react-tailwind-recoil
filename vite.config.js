import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // '@': resolve(__dirname, './src'),
      "assets": resolve(__dirname, './src/assets'),
      "components": resolve(__dirname, './src/components'),
      "layouts": resolve(__dirname, './src/layouts'),
      "pages": resolve(__dirname, './src/pages'),
      "utils": resolve(__dirname, './src/utils'),
    },
  },
  plugins: [react()]
})
