"use client";

import { useTranslations } from "next-intl";
import { SiteMobileNavbar } from "./layout/site-mobile-navbar";
import { SiteNavbar } from "./layout/site-navbar";

export function Navbar() {
  const t = useTranslations();
  const navigation = t.raw("navigation");

  return (
    <header className="flex border-b-[.0625rem] border-border px-5 lg:px-10 py-3 justify-between items-center sticky top-0 left-0 backdrop-blur-sm z-50">
      <SiteNavbar navigation={navigation} />
      <SiteMobileNavbar navigation={navigation} />
    </header>
  );
}
