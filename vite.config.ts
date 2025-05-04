import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/mikmik/', // Updated to match the GitHub repository name
  plugins: [react()],
})
