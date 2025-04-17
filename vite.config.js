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
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Split UI components into a separate chunk
          components: ['./src/components/Header.jsx', './src/components/Footer.jsx']
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
