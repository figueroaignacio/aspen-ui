"use client";

// Hooks
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { usePathname, useRouter } from "../config/navigation";

// Icons
import { LanguageIcon } from "@heroicons/react/24/outline";

// Config
import { locales } from "../config/config";

import { Locale } from "@/types";

type Props = {
  label?: string;
};

export function LocaleSwitcher({ label }: Props) {
  const router = useRouter();
  const [_, startTransition] = useTransition();
  const pathname = usePathname();
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  function onLocaleChange(newLocale: Locale) {
    startTransition(() => {
      router.replace({ pathname }, { locale: newLocale });
    });
    setIsOpen(false);
  }

  return (
    <div className="relative inline-block text-left">
      {label && (
        <label
          htmlFor="locale-switcher"
          className="mb-2 text-sm font-medium text-[var(--text-foreground)]"
        >
          {label}
        </label>
      )}
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            "inline-flex justify-between w-full rounded-full border px-4 py-2 bg-[var(--background)] text-sm font-medium",
            "text-[var(--text-foreground)] border-[var(--border)]",
            "focus:outline-none focus:ring-2 focus:ring-violet-500",
            "dark:bg-[var(--background)] dark:text-[var(--text-foreground)] dark:border-[var(--border)]"
          )}
        >
          <div className="flex items-center space-x-2">
            <LanguageIcon className="size-5" />
            <span>{t("locales.locale", { locale })}</span>
          </div>
          <svg
            className={clsx("ml-2 h-5 w-5", { "transform rotate-180": isOpen })}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.292 7.707a1 1 0 011.414 0L10 11l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className={clsx(
            "absolute mt-2 w-full rounded-lg bg-[var(--background)] shadow-lg z-10",
            "border border-[var(--border)]"
          )}
        >
          <div className="py-1">
            {locales.map((loc) => (
              <div
                key={loc}
                onClick={() => onLocaleChange(loc as Locale)}
                className={clsx(
                  "cursor-pointer block px-4 py-2 text-sm",
                  "hover:bg-violet-500 hover:text-white",
                  "text-[var(--text-foreground)] dark:text-[var(--text-foreground)]"
                )}
              >
                {t("locales.locale", { locale: loc })}{" "}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
