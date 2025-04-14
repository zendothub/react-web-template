import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://zenquotes.io/api/today",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/todoexamples": {
        target: "https://dummyjson.com/todos",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/todoexamples/, ""),
      },
    },
  },
});
