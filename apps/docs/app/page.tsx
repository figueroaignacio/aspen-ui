// Sections
import { BlurBackground } from "@/components/blur-background";
import { Features } from "@/sections/features";
import { Hero } from "@/sections/hero";

export default function HomePage() {
  return (
    <div className="pb-16">
      <BlurBackground />
      <Hero />
      <Features />
    </div>
  );
}
