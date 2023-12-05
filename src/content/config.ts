import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        description: z.string(),
        published: z.date(),
        updated: z.date().optional(),
        image: z.string().optional()
    }),
});

export const collections = {
    "blog": blogCollection,
};