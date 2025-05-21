import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'Site-SerraJr-2024',
  optimizeDeps: {
    include: ['swiper'],  
  },
})
