// Hooks
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

// Components
import { Link } from "@/lib/i18n/routing";

// Icons
import {
  Github,
  NextIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@/components/icons";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

interface HomePageProps {
  params: { locale: string };
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  setRequestLocale(locale);
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
        "border-[1px] border-border text-center text-foreground rounded-md text-xs flex items-center gap-2 justify-center py-2 px-5 bg-primary hover:bg-primary-foreground group text-nowrap",
    },
    {
      label: "GitHub",
      href: "https://github.com/figueroaignacio/aspen-ui",
      icon: <Github />,
      className:
        "text-center text-foreground rounded-md text-xs flex items-center gap-2 justify-center py-2 px-5 hover:bg-primary-foreground",
    },
  ];

  return (
    <section className="flex flex-col gap-6 border-border border-b-[1px]">
      <div className="py-12 max-w-3xl space-y-8 px-5 md:px-10 lg:px-20">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">
            {t.rich("title", {
              text1: (chunks) => <span className="">{chunks}</span>,
              text2: (chunks) => <span className="">{chunks}</span>,
            })}
          </h1>
          <h2 className="text-sm text-muted-foreground">{t("subtitle")}</h2>
        </div>
        <div className="flex gap-1 max-w-52">
          {links.map((item, index: number) => (
            <Link href={item.href} className={item.className} key={index}>
              {item.label}
              {item.icon}
            </Link>
          ))}
        </div>
        <div className="space-y-3">
          <h3 className="text-muted-foreground text-sm">
            {t("technologiesDescription")}
          </h3>
          <ul className="flex flex-wrap gap-3 border-border border-[1px] rounded-lg p-4">
            {technologies.map((tech, index) => (
              <li
                key={index}
                className="flex items-center gap-2 border-border border-[1px] rounded-md py-2 px-4 text-xs"
              >
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
