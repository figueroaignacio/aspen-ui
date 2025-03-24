import { setRequestLocale } from "next-intl/server";

// Sections
import { BlurBackground } from "@/components/blur-background";
import { Features } from "@/sections/features";
import { Hero } from "@/sections/hero";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <div className="pb-16">
      <BlurBackground />
      <Hero />
      <Features />
    </div>
  );
}
