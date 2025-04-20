// Hooks
import { useTranslations } from "next-intl";

// Components
import { Github } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { ArrowRightIcon } from "@radix-ui/react-icons";

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
      href: "https://github.com/figueroaignacio/n3o/ui-ui",
      icon: <Github />,
      variant: "ghost" as const,
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 min-h-[80dvh]">
      <div>
        <div className="flex flex-col items-start text-left max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-accent text-accent-foreground">
            <span className="mr-2">🚀</span>
            {t("sections.hero.badge")}
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </div>

          <div className="space-y-6 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight">
              {t("sections.hero.title")}{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                with speed
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              {t("sections.hero.subtitle")}{" "}
              <span className="font-medium text-foreground">
                Works with React.js
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <Button
              variant="primary"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base font-medium rounded-md"
            >
              <Link
                href={heroLinks[0].href}
                className="inline-flex items-center justify-center"
              >
                {heroLinks[0].label}
                <span className="ml-2 inline-block">{heroLinks[0].icon}</span>
              </Link>
            </Button>
          </div>

          <div className="w-full mt-16 pt-8 ">
            <h3 className="text-base font-medium text-muted-foreground mb-4">
              {t("sections.hero.ecosystem")}
            </h3>
            <ul className="flex flex-wrap gap-4">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 px-3 py-1 rounded-md text-sm bg-background/50 border border-border hover:bg-background transition-colors"
                >
                  {tech.icon}
                  {tech.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
