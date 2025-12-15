// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://heritage-vodun.vercel.app',
  
  integrations: [sitemap()],
  
  // LA SOLUTION : On met des accolades vides ici v
  adapter: vercel({}) 
});