import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
process.env.BROWSER = 'Chrome'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true
  }
})
