import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { externalLink } from "./src/externalLink.ts";

// https://astro.build/config
export default defineConfig({
	site: 'https://www.halfwaytogo.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		rehypePlugins: [[externalLink, { domain: "www.halfwaytogo.com" }]],
	},
	redirects: {
		"/blog/lupine-race-2024/": "/lupine-race-2024/",
	},
});
