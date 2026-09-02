import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT for GitHub Pages: set this to '/<your-repo-name>/'
  // e.g. if your repo is github.com/you/portfolio, use '/portfolio/'.
  // If deploying to a <username>.github.io repo or a custom domain, use '/'.
  base: '/portfolio/',
})
