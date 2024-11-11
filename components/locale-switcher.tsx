"use client";

// Hooks
import { usePathname, useRouter } from "@/lib/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

// Config
import { locales } from "@/lib/i18n/routing";

import { Locale } from "@/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type Props = {
  label?: string;
};

export function LocaleSwitcher({ label }: Props) {
  const router = useRouter();
  const [_, startTransition] = useTransition();
  const pathname = usePathname();
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();

  function onLocaleChange(newLocale: Locale) {
    startTransition(() => {
      router.replace({ pathname }, { locale: newLocale });
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {t("locales.locale", { locale })}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {locales.map((loc) => (
          <DropdownMenuItem key={loc} onClick={() => onLocaleChange(loc)}>
            {t("locales.locale", { locale: loc })}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
