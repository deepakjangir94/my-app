import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://ec2-13-233-97-72.ap-south-1.compute.amazonaws.com:8000', // point to your backend
    },
  },
})
