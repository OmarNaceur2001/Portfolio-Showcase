import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

// PORT / BASE_PATH are only needed at dev/preview time, not at build time
const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 3000;
const basePath = process.env.BASE_PATH ?? '/';

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      // Remove the ../../ escape — copy assets into the project instead
      '@assets': path.resolve(import.meta.dirname, 'src/assets'),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: 'dist',          // simpler; Vercel default matches
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: false,       // don't crash if port is taken locally
    host: '0.0.0.0',
    allowedHosts: true,
    fs: { strict: false },   // needed since assets were outside root
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});