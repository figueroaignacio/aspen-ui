// Components
import { MDXContent } from "@/components/mdx/mdx-components";

// Content
import { docs } from "#site/content";

// Utils
import { notFound } from "next/navigation";

interface DocPageProps {
  params: {
    slug: string[];
    locale?: string;
  };
}

async function getDocFromParams(params: DocPageProps["params"]) {
  try {
    const slug = params?.slug.join("/");
    const doc = docs.find((doc) => doc.slugAsParams === slug);
    return doc;
  } catch (error) {
    console.error("Error getting post from params:", error);
    return null;
  }
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return docs.map((doc) => ({ slug: doc.slugAsParams.split("/") }));
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams(params);

  if (!doc || !doc.published) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert mt-5 max-w-3xl mx-auto py-8">
      <h1>{doc.title}</h1>
      <p className="m-0">{doc.description ? <p>{doc.description}</p> : null}</p>
      <MDXContent code={doc.body} />
    </article>
  );
}
