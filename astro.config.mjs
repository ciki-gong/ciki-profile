// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 面试脱敏版：GitHub 组织项目页，部署在 https://ciki-gong.github.io/ciki-profile/
// 组织无自定义域名，因此不会跳转到主站 www.hiciki.me；base 仍为 /ciki-profile
export default defineConfig({
  site: 'https://ciki-gong.github.io',
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
