import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
// import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    tailwindcss(),
    //  svgr()
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/react/') || id.includes('/react-dom/'))
            return 'react'
          if (id.includes('/react-router/')) return 'react-router'
        },
      },
    },
  },
})
