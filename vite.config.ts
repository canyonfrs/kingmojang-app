import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["robots.txt"],
      manifest: {
        name: "킹모장",
        short_name: "킹모장",
        lang: "ko",
        theme_color: "#ffffff",
        description: "찍어찍어찍어",
        icons: [
          {
            src: "/logo-x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "/logo-x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logo-x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/maskable-logo-x512.png",
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
