// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://www.heritagevodun.com",

  // 👇 C'EST ICI LA CORRECTION : on ajoute {} dans la parenthèse
  adapter: vercel({}),

  integrations: [sitemap()],

  // 👇 TABLE DE REDIRECTION (Search Console Fix)
  redirects: {
    "/categories/Divinités": "/categories/Panthéon%20&%20Divinités",
    "/categories/Spiritualité": "/categories/Sagesse%20&%20Spiritualité",
    "/categories/Histoire": "/categories/Histoire%20&%20Patrimoine",
    "/categories/Histoire%20&%20Mémoire":
      "/categories/Histoire%20&%20Patrimoine",
    "/categories/Lieux%20Sacrés": "/categories/Tourisme%20&%20Découverte",
    "/categories/Événement": "/categories/Rituels%20&%20Cérémonies",
    "/categories/Objets%20Sacrés": "/categories/Objets%20&%20Symboles",
  },
});
