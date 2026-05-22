import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
/// <reference types="@batijs/core/types" />

import vike from "vike/plugin";
import { defineConfig } from "vite";
import { PreRenderedChunk } from "vite/types/internal/rollupTypeCompat.js";

export default defineConfig({
  plugins: [vike(), react(), tailwindcss()],
  
  resolve: {
    alias: {
      "@": new URL("./", import.meta.url).pathname,
    },
  },

  build: {
    outDir: "dist",
    assetsDir: "assets",
    cssCodeSplit: false,
    modulePreload: false,
    assetsInlineLimit: 100000000,
    rollupOptions: {
      output: {
        
        manualChunks: () => "app",

        // entryFileNames: "[name]",
        chunkFileNames: "assets/chunks/app.js",
        // assetFileNames: "assets/[name].[ext]",
      },
    },
  },

});
