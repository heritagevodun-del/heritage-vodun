// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel"; // ✅ CORRECTION : Plus de '/static'

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.heritagevodun.com",

  // ✅ AJOUT : On force le mode statique explicite (Best Practice)
  output: "static",

  adapter: vercel({
    webAnalytics: { enabled: true }, // Bonus : Active les stats Vercel gratuites
  }),

  integrations: [sitemap(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
});