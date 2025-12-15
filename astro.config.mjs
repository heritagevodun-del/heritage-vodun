// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://heritage-vodun.vercel.app',
  
  integrations: [sitemap()],
  
  // @ts-ignore
  adapter: vercel()
});