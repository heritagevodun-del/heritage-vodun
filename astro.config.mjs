// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.heritagevodun.com",
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [sitemap(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  // 👇 L'ARCHITECTURE MULTILINGUE (i18n)
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es", "pt", "yo", "fon"],
    routing: {
      prefixDefaultLocale: false, // Le français reste sur heritagevodun.com/ (sans /fr/)
    },
  },
});
