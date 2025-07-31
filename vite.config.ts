import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '', // Empty base for relative paths
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "public/assets"),
    },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  publicDir: 'public',
  server: {
    port: 3001,
    host: "0.0.0.0",
    strictPort: false,
    cors: true,
    hmr: {
      clientPort: 443 // for secure WebSocket connections
    },
    // Allow Replit domains and local development
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.replit.dev',
      '.repl.co',
      '.repl.run'
    ]
  },
});