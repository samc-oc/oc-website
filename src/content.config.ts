import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Blog posts migrated from the WordPress site — slugs preserved
 *  (served at /blog/{slug}/ with 301s from the old root-level URLs). */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** Featured image URL (currently absolute to the old WP media library —
     *  see TODO in the build handoff notes re media migration). */
    image: z.string().optional(),
    originalUrl: z.string().optional(),
  }),
});

export const collections = { blog };
