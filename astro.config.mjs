import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import remarkUnwrapImages from "remark-unwrap-images";
import remarkTwemoji from "remark-twemoji";

import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
	site: 'https://wale.au',
	integrations: [mdx(), sitemap()],
	markdown: {
		extendDefaultPlugins: true,
		remarkPlugins: [remarkUnwrapImages, remarkTwemoji],
		rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: 'rose-pine',
			wrap: true
		},
	}
});
