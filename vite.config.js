import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // The portfolio serves the demo from a sub-path, e.g. /demos/thunderish/
  base: process.env.DEMO_BASE ?? '/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
    testMatch: ['./tests/**/*.test.jsx'],
    globals: true,
  },
});
