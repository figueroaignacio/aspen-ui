import { unstable_setRequestLocale } from "next-intl/server";

// Hooks
import { useTranslations } from "next-intl";

// Components
import { BgBlur } from "@/components/bg-blur";

// Icons
import { CommandLineIcon } from "@heroicons/react/24/outline";
import { CodeBracketIcon } from "@heroicons/react/24/solid";

interface TemplatesPageProps {
  params: { locale: string };
}

export default function BlocksPage({ params: { locale } }: TemplatesPageProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("blocks");
  return (
    <section className="relative flex min-h-[80dvh] items-center justify-center p-4">
      <BgBlur />
      <div className="w-full max-w-md overflow-hidden rounded-xl">
        <div className="p-8">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-primary/10 p-3">
              <CodeBracketIcon className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="mb-4 text-center text-2xl font-bold text-foreground">
            {t("title")}
          </h1>
          <div className="rounded-lg border-[1px] border-dashed border-border p-6">
            <div className="mb-4 flex justify-center">
              <CommandLineIcon className="h-10 w-10 text-muted-foreground" />
            </div>
            <p className="text-center text-sm text-foreground">
              {t("description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
