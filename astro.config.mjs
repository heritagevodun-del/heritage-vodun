// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static'; // On utilise l'import static spécifique

export default defineConfig({
  // C'EST LA LIGNE MANQUANTE QUI VA TOUT CHANGER :
  output: 'static',

  site: 'https://heritage-vodun.vercel.app',
  
  integrations: [sitemap()],
  
  // @ts-ignore
  adapter: vercel()
});