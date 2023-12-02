import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

const logoSvg512 = "/logo512.svg";
const logoPng512 = "/logo512.png";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    VitePWA({
      filename: "킹모장",
      registerType: "autoUpdate",
      includeAssets: [logoSvg512],
      manifest: {
        theme_color: "#ffffff",
        icons: [
          {
            src: logoSvg512,
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
          {
            src: logoPng512,
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
