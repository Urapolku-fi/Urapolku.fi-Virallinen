import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: true,
  },
  plugins: [react(), mkcert()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name]-[hash].js',
        dir: 'dist',
        manualChunks(id) {
          if (id.endsWith('src/environment/Config.jsx')) {
            return 'config'
          }
        }
      }
    },

  }
});
