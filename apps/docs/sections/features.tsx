// Hooks
import { useTranslations } from "next-intl";

// Components
import { FeatureCard } from "@/components/feature-card";
import { CssIcon, TailwindIcon, TypescriptIcon } from "@/components/icons";
import {
  CodeIcon,
  ColorWheelIcon,
  MobileIcon,
  MoonIcon,
  Pencil1Icon,
  ReaderIcon,
} from "@radix-ui/react-icons";

// Types
import { type Features } from "@/lib/definitions";

const iconMap = {
  colorWheel: ColorWheelIcon,
  mobile: MobileIcon,
  code: CodeIcon,
  moon: MoonIcon,
  pencil: Pencil1Icon,
  reader: ReaderIcon,
  typescript: TypescriptIcon,
  tailwind: TailwindIcon,
  css: CssIcon,
};

export function Features() {
  const t = useTranslations();
  const features = t.raw("sections.features.items") as Features[];

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto relative z-10">
        <h2 className="text-xl font-bold mb-12 text-center">
          {t("sections.features.title")}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent =
              iconMap[feature.icon as keyof typeof iconMap] || null;

            return (
              <li key={index}>
                <FeatureCard
                  description={feature.description}
                  icon={<IconComponent />}
                  title={feature.title}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
