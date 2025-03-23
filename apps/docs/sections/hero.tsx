// Hooks
import { useTranslations } from "next-intl";

// Components
import { Github } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

// lib
import { technologies } from "@/lib/constants";

export function Hero() {
  const t = useTranslations();

  const heroLinks = [
    {
      label: t("sections.hero.actions.getStarted"),
      href: "/docs",
      icon: <ArrowRightIcon className="w-5 h-5" />,
      variant: "primary" as const,
    },
    {
      label: "GitHub",
      href: "https://github.com/figueroaignacio/aspen-ui",
      icon: <Github />,
      variant: "ghost" as const,
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 min-h-[80dvh] flex flex-col justify-center">
      <div className="mx-auto lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="space-y-6 w-full">
            <div className="inline-block bg-primary px-3 py-1 text-sm rounded-full">
              {t("sections.hero.badge")}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              {t("sections.hero.title")}
            </h1>

            <p className="text-xl text-muted-foreground mx-auto max-w-2xl">
              {t("sections.hero.subtitle")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {heroLinks.map((item, index) => (
              <Button key={index} variant={item.variant}>
                <Link
                  href={item.href}
                  className={`inline-flex items-center justify-center`}
                >
                  {item.label}
                  <span className="ml-2 inline-block">{item.icon}</span>
                </Link>
              </Button>
            ))}
          </div>
          <div className="w-full max-w-2xl mx-auto mt-12 pt-8">
            <h3 className="text-base font-medium text-muted-foreground mb-4">
              {t("sections.hero.ecosystem")}
            </h3>
            <ul className="flex justify-center flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 border px-3 py-1 rounded-md text-sm"
                >
                  {tech.icon}
                  {tech.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 w-full max-w-md mx-auto">
            <div className="p-4 rounded-lg text-sm text-center ">
              <p>{t("sections.hero.stats.stars")}</p>
              <p>{t("sections.hero.stats.components")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
