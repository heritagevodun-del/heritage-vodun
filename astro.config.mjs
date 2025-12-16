// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 👇 C'est ici qu'on met l'adresse officielle !
  site: 'https://www.heritagevodun.com',

  // On active le sitemap
  integrations: [sitemap()],
  
  // Pas d'adaptateur nécessaire pour un site statique sur Vercel
});