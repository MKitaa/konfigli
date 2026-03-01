import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mkode.pl',
  integrations: [sitemap()],
  vite: {
    ssr: {
      noExternal: ['three', 'gsap']
    }
  }
});
