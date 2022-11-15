import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://wale.au',
	integrations: [mdx(), sitemap()],
	markdown: {
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: 'rose-pine',
			wrap: true
		},
	}
});
