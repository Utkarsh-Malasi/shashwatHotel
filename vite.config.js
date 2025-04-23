import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Generate source maps for better debugging
    sourcemap: false,
    // Minify output for production
    minify: 'terser',
    // Terser options for better compression
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          // Don't manually split components to avoid export issues
        }
      }
    }
  },
  // Optimize asset handling
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.webp'],
  // Improve dev server performance
  server: {
    hmr: true,
    // Optimize dependencies that don't change often
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom']
    }
  }
})
