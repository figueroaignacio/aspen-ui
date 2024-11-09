// Hooks
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

// Icons
import {
  NextIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@/components/icons";
import { Link } from "@/config/navigation";
import { ArrowRightIcon, BoltIcon } from "@heroicons/react/16/solid";

interface HomePageProps {
  params: { locale: string };
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("home");

  const technologies = [
    { title: "Typescript", icon: <TypescriptIcon /> },
    { title: "React.js", icon: <ReactIcon /> },
    { title: "Next.js", icon: <NextIcon /> },
    { title: "Tailwind", icon: <TailwindIcon /> },
  ];

  const links = [
    {
      label: t("buttons.getStarted"),
      href: "/docs/introduction",
      icon: (
        <ArrowRightIcon className="size-4 transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:translate-x-1" />
      ),
      className:
        "border-[1px] border-border text-center text-foreground rounded-md w-full text-xs flex items-center gap-2 justify-center py-2 bg-primary hover:bg-primary-foreground group text-nowrap",
    },
    {
      label: t("buttons.exploreComponents"),
      href: "/docs/components/avatar",
      icon: <BoltIcon className="size-4" />,
      className:
        "text-center text-foreground rounded-md w-full text-xs flex items-center gap-2 justify-center py-2 hover:bg-primary-foreground",
    },
  ];

  return (
    <section className="flex flex-col gap-6 border-border border-[1px]">
      <div className="py-12 max-w-3xl space-y-8 px-5 md:px-10 lg:px-20">
        <div>
          <h1 className="text-3xl font-bold">
            {t.rich("title", {
              text1: (chunks) => <span className="">{chunks}</span>,
              text2: (chunks) => <span className="">{chunks}</span>,
            })}
          </h1>
          <h2 className="text-sm text-muted-foreground">{t("subtitle")}</h2>
        </div>
        <div className="flex gap-4 max-w-80">
          {links.map((item, index: number) => (
            <Link href={item.href} className={item.className} key={index}>
              {item.label}
              {item.icon}
            </Link>
          ))}
        </div>
        <div className="space-y-3">
          <h3 className="text-muted-foreground text-sm">
            Especificamente para proyectos construidos con:
          </h3>
          <ul className="flex flex-wrap gap-4 border-[1px] border-border px-4 py-5 rounded-md justify-start md:justify-around">
            {technologies.map((tech, index) => (
              <li key={index} className="text-sm flex items-center gap-2">
                {tech.icon}
                {tech.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
