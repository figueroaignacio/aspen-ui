// Components
import { Mdx } from "@/components/mdx/mdx-components";

// Next
import { notFound } from "next/navigation";

// Contentlayer
import { allDocs } from ".contentlayer/generated";

interface DocPageProps {
  params: {
    slug: string;
  };
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    notFound();
  }

  return doc;
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams(params.slug);

  return (
    <div>
      <h1>{doc.title}</h1>
      <p>{doc.description}</p>
      <Mdx code={doc.body.code} />
    </div>
  );
}
