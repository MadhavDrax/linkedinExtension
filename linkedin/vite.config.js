import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        dir: 'dist', // Output files to the 'dist' folder
      }
    }
  },
  publicDir: 'public', // Ensures public assets like manifest.json are copied to dist
});
