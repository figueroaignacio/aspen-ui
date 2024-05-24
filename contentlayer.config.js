// Contentlayer
import { defineDocumentType } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// Rehype
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

// Remark
import remarkGfm from "remark-gfm";

/** @type {import('contentlayer/source-files').ComputedField)} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    remarkPlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark-default",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: "" }];
            }
          },
          onVisitLineHighlightedLine(node) {
            node.properties.classname.push("line--highlighted");
          },
          onVisitLineHighlightedWord(node) {
            node.properties.classname = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
