// Components
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { Toc } from "@/components/mdx/toc";
import { Sidebar } from "@/components/sidebar";
import Balancer from "react-wrap-balancer";

// Content
import { docs } from "@content";

// Utils
import { notFound } from "next/navigation";

// Metadata
import { BgBlur } from "@/components/bg-blur";
import type { Metadata } from "next";

type DocPageProps = {
  slug: string[];
};

async function getDocFromParams({ params }: { params: Promise<DocPageProps> }) {
  const parameters = await params;
  const slug = parameters.slug?.join("/") || "";
  const doc = docs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    return null;
  }

  return doc;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<DocPageProps>;
}): Promise<Metadata> {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
  };
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return docs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

export default async function DocPage({
  params,
}: {
  params: Promise<DocPageProps>;
}) {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    notFound();
  }

  return (
    <>
      <BgBlur />
      <div className="grid grid-cols-1 lg:grid-cols-[270px_1fr_270px] gap-6 bg-background">
        <aside className="sticky top-14 h-[calc(100vh-3.5rem)] border-r border-dashed py-6 pl-6 hidden lg:block z-20">
          <Sidebar />
        </aside>
        <main className="min-w-0 py-6">
          <div className="mx-auto md:px-4 lg:px-0">
            <div className="space-y-2">
              <h1 className="scroll-m-20 text-2xl font-bold tracking-tight">
                {doc.title}
              </h1>
              {doc.description && (
                <p className="text-muted-foreground">
                  <Balancer>{doc.description}</Balancer>
                </p>
              )}
            </div>
            <div className="pb-12 pt-8">
              <MDXContentRenderer code={doc.body} />
            </div>
          </div>
        </main>
        {doc.toc?.visible && (
          <aside className="sticky top-14 h-[calc(100vh-3.5rem)] py-6 pl-6 hidden lg:block">
            <Toc toc={doc.toc.content} />
          </aside>
        )}
      </div>
    </>
  );
}
