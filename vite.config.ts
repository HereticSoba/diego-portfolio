import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: "#root",
      prerenderScript: fileURLToPath(new URL("./src/prerender.tsx", import.meta.url)),
    }),
  ],

  server: {
    proxy: {
      "/api": {
        target: "https://diego-portfolio-one.vercel.app",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
