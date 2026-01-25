// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";

export default defineConfig({
  site: "https://www.heritagevodun.com",
  adapter: vercel({}), // On garde l'adaptateur
  integrations: [sitemap()],
  // On a supprimé l'objet 'redirects' ici
});
