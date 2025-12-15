// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel'; // On retire le "/static" ici

// https://astro.build/config
export default defineConfig({
  site: 'https://heritage-vodun.vercel.app',
  
  // On précise qu'on veut un site statique (rapide)
  output: 'static',

  integrations: [sitemap()],
  
  // On ajoute une option factice "webAnalytics" pour satisfaire VS Code
  adapter: vercel({
    webAnalytics: { enabled: true } 
  })
});