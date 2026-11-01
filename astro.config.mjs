import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://swadh.in',
  integrations: [sitemap()],
  // Old Jekyll URL
  redirects: { '/about': '/#about' },
});
