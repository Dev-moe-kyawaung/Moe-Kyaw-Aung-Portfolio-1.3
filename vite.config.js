import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Production build optimization:
 * - Manual chunk splitting keeps vendor libs (React, Framer Motion, Lucide)
 *   in separate cacheable bundles from app code, so a content update doesn't
 *   force users to re-download React itself.
 * - esbuild minification (faster builds than terser, comparable output size).
 */
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2018',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  // Pre-bundle heavy deps in dev for faster HMR cold starts
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
  },
});
