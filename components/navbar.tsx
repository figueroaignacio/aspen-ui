import { useTranslations } from "next-intl";
import { SiteMobileNavbar } from "./layout/site-mobile-navbar";
import { SiteNavbar } from "./layout/site-navbar";

export function Navbar() {
  const t = useTranslations();
  const navigation = t.raw("navigation");

  return (
    <header className="flex border-b-[.0625rem] border-border py-2 px-5 md:px-10 lg:px-20 justify-between items-center sticky top-0 left-0 backdrop-blur-sm z-50 max-w-[1580px] mx-auto w-full">
      <SiteNavbar navigation={navigation} />
      <SiteMobileNavbar navigation={navigation} />
    </header>
  );
}
