// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 面试脱敏版：GitHub 项目页，部署在 https://hiciki-1029.github.io/ciki-profile/
// 因此需要 base='/ciki-profile'；不放 CNAME（主站 www.hiciki.me 保持独立、内容不变）
export default defineConfig({
  site: 'https://hiciki-1029.github.io',
  base: '/ciki-profile',
  integrations: [sitemap()],
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
  },
});
