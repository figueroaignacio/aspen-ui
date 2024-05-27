// Components
import { Mdx } from "@/components/mdx/mdx-components";

// Next
import { notFound } from "next/navigation";

// Contentlayer
import { allDocs } from ".contentlayer/generated";

// Metadata
import { Metadata } from "next";

interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    notFound();
  }

  return doc;
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
  };
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params });

  return (
    <article className="prose dark:prose-invert mx-auto max-w-3xl">
      <div>
        <h1>{doc.title}</h1>
        <p>{doc.description}</p>
      </div>
      <Mdx code={doc.body.code} />
    </article>
  );
}
