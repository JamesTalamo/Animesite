import { defineConfig } from 'vite'
import dotenv from 'dotenv'
import react from '@vitejs/plugin-react'

dotenv.config()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173, // Use Render's assigned port or default to 3000
    host: '0.0.0.0', // Make sure the server is accessible on all network interfaces
  },
})
