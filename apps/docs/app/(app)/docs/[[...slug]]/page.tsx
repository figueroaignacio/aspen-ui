// Components
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { Toc } from "@/components/mdx/toc";
import { SidebarNav } from "@/components/sidebar-nav";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Balancer from "react-wrap-balancer";

// Content
import { docs } from "@content";

// Utils
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";

// Metadata
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
    <main className="xl:grid xl:grid-cols-[200px_1fr_200px] max-w-[1280px] mx-auto">
      <div className="hidden xl:block border-1 h-full border-r border-dashed">
        <div className="sticky top-24 left-0 h-auto">
          <SidebarNav />
        </div>
      </div>
      <div className="w-full mx-auto min-w-0 lg:px-7 relative">
        <div className="absolute inset-0 bg-diagonal-lines pointer-events-none -z-40"></div>
        <div className="pt-12 bg-background lg:px-12">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              {doc.slug.split("/").map((slug, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href={`/${doc.slug
                        .split("/")
                        .slice(0, index + 1)
                        .join("/")}`}
                      className={cn(
                        index === doc.slug.split("/").length - 1
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {slug.charAt(0).toUpperCase() + slug.slice(1)}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {index < doc.slug.split("/").length - 1 && (
                    <BreadcrumbSeparator />
                  )}
                </div>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
          <div className="my-6">
            <div className="space-y-2 border-b border-dashed pb-6">
              <h1
                className={cn("scroll-m-20 text-3xl font-bold tracking-tight")}
              >
                {doc.title}
              </h1>
              {doc && (
                <p className="text-base text-muted-foreground">
                  <Balancer>{doc.description}</Balancer>
                </p>
              )}
            </div>
            <div className="pb-12 pt-6">
              <MDXContentRenderer code={doc.body} />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:block border-l border-dashed h-full">
        <div className="sticky top-24 left-0">
          {doc.toc.visible && <Toc toc={doc.toc.content} />}
        </div>
      </div>
    </main>
  );
}
