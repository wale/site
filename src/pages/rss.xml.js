import rss from "@astrojs/rss";

import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_NAME } from "~/config";

export async function GET(context) {
    const blog = await getCollection("blog");
    return rss({
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.published,
            description: post.data.description,
            link: `/blog/${post.slug}`
        }))
    });
}