import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// GitHub Pages project site: https://KyRaToP.github.io/Portfolio/
// Cloudflare Pages stays on domain root — leave GITHUB_PAGES unset there.
const githubPages = process.env.GITHUB_PAGES === "true";

// Assets live in the repo-root public/ folder (icons, og, covers, videos).
export default defineConfig({
  base: githubPages ? "/Portfolio/" : "/",
  plugins: [react()],
  publicDir: fileURLToPath(new URL("../public", import.meta.url)),
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 5173,
  },
});
