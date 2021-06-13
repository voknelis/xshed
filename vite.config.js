import { resolve } from "path";
import { defineConfig } from "vite";
import ViteComponents, { VuetifyResolver } from "vite-plugin-components";
import { createVuePlugin } from "vite-plugin-vue2";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/xshed/" : "/",
  optimizeDeps: {
    exclude: ["vuetify"],
  },
  plugins: [createVuePlugin({}), ViteComponents({ customComponentResolvers: [VuetifyResolver()] })],
  resolve: {
    alias: {
      "@": `${resolve(__dirname, "src")}`,
    },
  },
  server: {
    port: 8080,
  },
});
