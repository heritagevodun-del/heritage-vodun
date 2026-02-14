// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel"; // ✅ CORRECTION : Plus de '/static'

export default defineConfig({
  site: "https://www.heritagevodun.com",
  output: "static", // ✅ AJOUT : On force le mode statique explicite (Best Practice)
  adapter: vercel({
    webAnalytics: { enabled: true }, // Bonus : Active les stats Vercel gratuites
  }),
  integrations: [sitemap()],
});
