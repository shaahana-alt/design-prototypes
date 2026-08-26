import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || (process.env.GITHUB_PAGES === 'true' ? '/design-prototypes/' : '/'),
})
