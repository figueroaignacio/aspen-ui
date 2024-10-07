// Components
import { BgBlur } from "@/components/bg-blur";
import { Toc } from "@/components/layout/toc";
import { MDXContent } from "@/components/mdx/mdx-components";

// Content
import { docs } from "@content";

// Utils
import { notFound } from "next/navigation";

// Metadata
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { Metadata } from "next";

interface DocPageProps {
  params: {
    slug: string[];
    locale?: string;
  };
}

async function getDocFromParams(params: DocPageProps["params"]) {
  try {
    const slug = params?.slug.join("/");
    const locale = params.locale || "en";
    const doc = docs.find(
      (doc) => doc.slugAsParams === slug && doc.locale === locale
    );
    return doc;
  } catch (error) {
    console.error("Error getting post from params:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const { slug, locale = "en" } = params;

  try {
    const doc = await getDocFromParams({ slug, locale });
    if (!doc) return {};

    // const ogSearchParams = new URLSearchParams({ title: doc.title });

    return {
      title: doc.title,
      description: doc.description,
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {};
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
    <article className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative top-12">
      <BgBlur />
      <aside className="hidden lg:block lg:col-span-2">
        <SidebarNav />
      </aside>
      <div className="lg:col-span-7 pb-16">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold mb-4">{doc.title}</h1>
          <p className="mb-4">{doc.description}</p>
        </div>
        <MDXContent code={doc.body} />
      </div>
      <aside className="lg:col-span-3">
        <Toc />
      </aside>
    </article>
  );
}
