import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    open: false,
    watch: {
      // Ignore binary fonts and videos from OS file watcher so OneDrive syncing does not throw EBUSY
      ignored: ['**/*.ttf', '**/*.otf', '**/*.woff', '**/*.woff2', '**/*.mp4', '**/.git/**'],
    },
  },
});
