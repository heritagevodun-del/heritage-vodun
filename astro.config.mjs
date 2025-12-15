// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static'; // Assurez-vous d'avoir "/static" ici

// https://astro.build/config
export default defineConfig({
  site: 'https://heritage-vodun.vercel.app',
  
  integrations: [sitemap()],
  
  // CORRECTION ICI : On ajoute des accolades {} vides
  adapter: vercel({}) 
});