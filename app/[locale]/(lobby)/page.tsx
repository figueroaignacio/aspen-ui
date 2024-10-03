// Hooks
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

// Components
import { BgBorders } from "@/components/bg-borders";
import { Link } from "@/config/navigation";

// Icons
import {
  NextIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@/components/icons";
import { ArrowRightIcon, BoltIcon } from "@heroicons/react/16/solid";

interface HomePageProps {
  params: { locale: string };
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("home");

  const technologies = [
    { title: "Next.js", icon: <NextIcon /> },
    { title: "React.js", icon: <ReactIcon /> },
    { title: "Typescript", icon: <TypescriptIcon /> },
    { title: "Tailwind", icon: <TailwindIcon /> },
  ];

  return (
    <section className="flex flex-col justify-center min-h-[80dvh] gap-6 items-center text-center relative">
      <BgBorders />
      <div className="space-y-3 max-w-4xl">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl border-t border-b border-border border-dashed py-12">
          {t("title")}
        </h1>
        <p className="text-sm text-foreground lg:text-lg">{t("subtitle")}</p>
      </div>
      <div className="flex flex-col flex-wrap md:flex-row md:flex-nowrap gap-2 w-96">
        <Link
          href={"/docs/introduction"}
          className="border-[1px] border-border text-center text-white rounded-full w-full text-xs lg:text-sm flex items-center gap-2 justify-center py-2 px-7 bg-violet-500"
        >
          {t("buttons.getStarted")}
          <ArrowRightIcon className="size-4" />
        </Link>
        <Link
          href={"/docs/components"}
          className=" border-[1px] border-border text-center rounded-full w-full text-xs lg:text-sm flex items-center gap-2 justify-center py-2 px-7"
        >
          {t("buttons.exploreComponents")}
          <BoltIcon className="size-4" />
        </Link>
      </div>
      <ul className="flex gap-5 mt-6 flex-wrap justify-center">
        {technologies.map((tech, index) => (
          <li key={index} className="text-sm flex items-center gap-2">
            {tech.icon}
            {tech.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
