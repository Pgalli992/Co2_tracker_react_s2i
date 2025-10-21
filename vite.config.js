import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    proxy: {
      "/api": {
        target: "https://www.nowtricity.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
