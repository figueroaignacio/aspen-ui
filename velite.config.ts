// Velite
import { defineCollection, defineConfig, s } from "velite";

// Rehype
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

const computedFields = <T extends { slug: string; locale: string }>(
  data: T
) => {
  const slugParts = data.slug.split("/");
  const cleanedSlug = slugParts
    .filter((part) => part !== "en" && part !== "es")
    .join("/");
  return {
    ...data,
    slug: cleanedSlug,
    slugAsParams: cleanedSlug.split("/").slice(1).join("/"),
    localeSlug: `${data.locale}/${cleanedSlug.split("/").slice(1).join("/")}`,
  };
};

const docs = defineCollection({
  name: "Docs",
  pattern: "./docs/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate().optional(),
      published: s.boolean().default(true),
      body: s.mdx(),
      locale: s.string(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "./content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { docs },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {},
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
});
