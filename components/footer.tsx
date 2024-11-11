import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t text-center py-4 text-sm text-foreground px-5">
      {t.rich("text", {
        link1: (chunks) => (
          <a
            href="https://github.com/figueroaignacio"
            className="underline"
            target="_blank"
          >
            {chunks}
          </a>
        ),
        link2: (chunks) => (
          <a
            href="https://github.com/figueroignacio/aspen-ui"
            className="underline"
            target="_blank"
          >
            {chunks}
          </a>
        ),
      })}
    </footer>
  );
}
