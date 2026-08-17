import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string().optional(),
    duration: z.string().optional(),
    platform: z.string().optional(),
    year: z.string().optional(),
    cover: z.string().optional(),
    order: z.number().default(0),
    /** Covered by an NDA: the card is shown but not clickable, and it's
     *  labelled instead of linking through to a case study. */
    nda: z.boolean().default(false),
  }),
});

const leadership = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/leadership' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.string().optional(),
    cover: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { projects, leadership };
