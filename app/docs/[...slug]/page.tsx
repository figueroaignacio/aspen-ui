// Components
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { Toc } from "@/components/layout/toc";
import { MDXContent } from "@/components/mdx/mdx-components";
import { Pagination } from "@/components/pagination";

// Content
import { docs } from "@content";

// Utils
import { notFound } from "next/navigation";

// Metadata
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
    console.error("Error getting doc from params:", error);
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

async function getPreviousDoc(currentDocSlug: string, locale: string) {
  const localePosts = docs
    .filter((doc) => doc.locale === locale)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  const currentIndex = localePosts.findIndex(
    (doc) => doc.slugAsParams === currentDocSlug
  );

  if (currentIndex > 0) {
    return localePosts[currentIndex - 1];
  }
  return null;
}

async function getNextDoc(currentDocSlug: string, locale: string) {
  const localePosts = docs
    .filter((doc) => doc.locale === locale)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  const currentIndex = localePosts.findIndex(
    (doc) => doc.slugAsParams === currentDocSlug
  );

  if (currentIndex < localePosts.length - 1) {
    return localePosts[currentIndex + 1];
  }
  return null;
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug, locale = "en" } = params;
  const doc = await getDocFromParams(params);

  if (!doc || !doc.published) {
    notFound();
  }

  const previousDoc = await getPreviousDoc(doc.slugAsParams, locale);
  const nextDoc = await getNextDoc(doc.slugAsParams, locale);

  return (
    <article className="px-5 md:px-10 lg:px-20 mx-auto grid grid-cols-1 lg:grid-cols-12 relative top-6">
      <aside className="hidden lg:block lg:col-span-2">
        <SidebarNav />
      </aside>
      <div className="lg:col-span-7 pb-16">
        <div className="flex flex-col border-b mb-12">
          <h1 className="text-3xl font-bold mb-7">{doc.title}</h1>
          {doc.description ? (
            <p className="mb-4 text-muted-foreground">{doc.description}</p>
          ) : null}
        </div>
        <div id="content" className="max-w-full overflow-x-clip">
          <MDXContent code={doc.body} />
        </div>
        <div className="my-10">
          <Pagination previousDoc={previousDoc} nextDoc={nextDoc} />
        </div>
      </div>
      <aside className="lg:col-span-3">
        <Toc />
      </aside>
    </article>
  );
}
