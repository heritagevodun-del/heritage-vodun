// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// On retire l'import de Vercel qui pose problème
// import vercel from '@astrojs/vercel/static'; 

// https://astro.build/config
export default defineConfig({
  site: 'https://heritage-vodun.vercel.app',
  
  // On active le sitemap
  integrations: [sitemap()],
  
  // On ne met PAS d'adaptateur. 
  // Astro va juste créer un dossier "dist" et Vercel le mettra en ligne tout seul.
});