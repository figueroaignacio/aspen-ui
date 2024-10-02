// Hooks
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations("home");

  const technologies = [
    { title: "Next.js" },
    { title: "React.js" },
    { title: "Typescript" },
    { title: "Tailwind" },
  ];

  return (
    <section className="flex flex-col justify-center min-h-[80dvh] gap-6 items-center text-center">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">{t("title")}</h1>
        <p className="text-sm text-foreground">{t("subtitle")}</p>
      </div>
      <div className="space-x-3">
        <Link
          href={"/docs/introduction"}
          className="border-[1px] py-2 px-5 rounded-md w-full text-xs"
        >
          {t("buttons.getStarted")}
        </Link>
        <Link
          href={"/docs/components"}
          className="border-[1px] py-2 px-5 rounded-md w-full text-xs"
        >
          {t("buttons.exploreComponents")}
        </Link>
      </div>
      <ul className="flex gap-5 mt-6 flex-wrap justify-center">
        {technologies.map((tech, index) => (
          <li key={index} className="text-sm">
            {tech.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
