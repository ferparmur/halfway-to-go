import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		countries: z.array(z.string()),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImageCloudinary: z.string().optional(),
		draft: z.boolean().optional(),
	}),
});

export const collections = { blog };
