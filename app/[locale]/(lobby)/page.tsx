// Hooks
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

// Components
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
    <section className="flex flex-col justify-center min-h-[90dvh] gap-6 items-center text-center relative overflow-hidden">
      <div className="hidden dark:block fixed top-1/2 left-1/2 size-6/12 bg-gradient-to-br from-purple-500 via-violet-500 to-transparent opacity-10 blur-3xl transform -skew-y-6 translate-x-[-50%] translate-y-[-50%]" />
      <div className="max-w-4xl space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          {t.rich("title", {
            text1: (chunks) => <span className="gradient-text">{chunks}</span>,
            text2: (chunks) => <span className="gradient-text">{chunks}</span>,
          })}
        </h1>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
          {t("subtitle")}
        </p>
      </div>
      <div className="flex items-center gap-2 z-10">
        <Link
          href={"/docs/introduction"}
          className="border-[1px] border-border text-center text-white rounded-md w-full text-xs lg:text-sm flex items-center gap-2 justify-center py-2 px-7 bg-violet-500 group text-nowrap"
        >
          {t("buttons.getStarted")}
          <ArrowRightIcon className="size-4 transition-transform ease-in-out duration-300 transform translate-x-0 group-hover:translate-x-1" />
        </Link>
        <Link
          href={"/docs/components/avatar"}
          className="border-[1px] border-border text-center rounded-md w-full text-xs lg:text-sm flex items-center gap-2 justify-center py-2 px-7 "
        >
          {t("buttons.exploreComponents")}
          <BoltIcon className="size-4" />
        </Link>
      </div>
      <ul className="mt-12 flex flex-wrap justify-center gap-4">
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
