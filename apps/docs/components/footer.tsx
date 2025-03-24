import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("sections");

  return (
    <footer className="border-t border-dashed py-4 text-sm text-foreground px-5 flex border-b md:px-10 lg:px-20  backdrop-blur-sm z-50 max-w-[1580px] mx-auto w-full">
      <p>
        {t("footer.sourceCode")}
        <a
          href="https://github.com/figueroaignacio/aspen-ui"
          target="blank"
          className="underline"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
