import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import remarkUnwrapImages from "remark-unwrap-images";
import remarkTwemoji from "remark-twemoji";

// https://astro.build/config
export default defineConfig({
	site: 'https://wale.au',
	integrations: [mdx(), sitemap()],
	markdown: {
		remarkPlugins: [remarkUnwrapImages, remarkTwemoji],
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: 'rose-pine',
			wrap: true
		},
	}
});
