import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import remarkUnwrapImages from "remark-unwrap-images";
import remarkTwemoji from "remark-twemoji";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import mochaTheme from "./src/catppuccin/mocha-theme.json";

export default defineConfig({
  site: 'https://wale.au',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [remarkUnwrapImages, remarkTwemoji],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: mochaTheme,
      wrap: true
    }
  }
});