// Sections
import { BlurBackground } from "@/components/blur-background";
import { Features } from "@/sections/features";
import { Hero } from "@/sections/hero";

// Utils
import { setRequestLocale } from "next-intl/server";

export default function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  setRequestLocale(locale);

  return (
    <div className="pb-16">
      <BlurBackground />
      <Hero />
      <Features />
    </div>
  );
}
