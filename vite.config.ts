import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
/// <reference types="@batijs/core/types" />

import vike from "vike/plugin";
import { defineConfig } from "vite";


export default defineConfig({
  plugins: [vike(), react(), tailwindcss()],

  base: "/react-vite-vike/",

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
