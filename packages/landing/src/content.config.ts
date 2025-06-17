import { defineCollection, reference, z } from "astro:content";
import { file, glob } from "astro/loaders";

// Type-check frontmatter using a schema
const blogCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/blog" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// reference the authors collection https://docs.astro.build/en/guides/content-collections/#defining-collection-references
			authors: z.array(reference("authors")),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			heroImage: image(),
			categories: z.array(z.string().optional()).optional(),
			// mappingKey allows you to match entries across languages for SEO purposes
			mappingKey: z.string().optional(),
			// blog posts will be excluded from build if draft is "true"
			draft: z.boolean().optional(),
		}),
});

// authors
const authorsCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/authors" }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			avatar: image(),
			about: z.string(),
			email: z.string(),
			authorLink: z.string(), // author page link. Could be a personal website, github, twitter, whatever you want
		}),
});

// other pages
const pagesCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/otherPages" }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			mappingKey: z.string().optional(),
			draft: z.boolean().optional(),
		}),
});

// projects
const projectsCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/projects" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			image: image(),
			technologies: z.array(z.string()),
			demoUrl: z.string().url().optional(),
			githubUrl: z.string().url().optional(),
			completionDate: z.date(),
			keyFeatures: z.array(z.string()),
			order: z.number().optional(),
			mappingKey: z.string().optional(),
			draft: z.boolean().optional(),
		}),
});

// resume
const resumeCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{json,jsonc}", base: "./src/data/resume" }),
	schema: ({ image }) =>
		z.object({
			diplomas: z.array(
				z.object({
					title: z.string(),
					school: z.string(),
					year: z.number(),
				}),
			),
			certifications: z.array(
				z.object({
					title: z.string(),
					year: z.number(),
				}),
			),
			experience: z.array(
				z.object({
					title: z.string(),
					company: z.string(),
					companyImage: image(),
					dates: z.string(),
					location: z.string(),
					responsibilities: z.array(z.string()),
				}),
			),
			hardSkills: z.array(
				z.object({
					skill: z.string(),
					percentage: z.number().min(0).max(100),
				}),
			),
			softSkills: z.array(
				z.object({
					skill: z.string(),
					icon: z.string(),
				}),
			),
			languages: z.array(
				z.object({
					language: z.string(),
					level: z.number().min(1).max(10),
				}),
			),
			tools: z.array(
				z.object({
					name: z.string(),
					category: z.string(),
					image: image(),
					link: z.string().url(),
				}),
			),
			mappingKey: z.string().optional(),
		}),
});

export const collections = {
	blog: blogCollection,
	authors: authorsCollection,
	otherPages: pagesCollection,
	projects: projectsCollection,
	resume: resumeCollection,
};
