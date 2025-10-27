import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	// Lê arquivos Markdown e MDX dentro de src/content/blog/
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),

	// Validação e tipagem do frontmatter
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			category: z.string().optional(), // ✅ adicionado
			tags: z.array(z.string()).optional(), // ✅ adicionado
			draft: z.boolean().optional(), // ✅ opcional pra posts ocultos
		}),
});

export const collections = { blog };
