import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Development config

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: "globalThis",
    "process.env": {},
  },
});

// Production config
/*
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
*/
