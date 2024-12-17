// Components
import { SiteMobileNavbar } from "./layout/site-mobile-navbar";
import { SiteNavbar } from "./layout/site-navbar";

import { docsNavigation, navigation } from "@/lib/config/navigation";

export function Navbar() {
  return (
    <header className="flex border-b py-2 px-5 md:px-10 lg:px-20 justify-between items-center sticky top-0 left-0 backdrop-blur-sm z-50 max-w-[1580px] mx-auto w-full">
      <SiteNavbar navigation={navigation} />
      <SiteMobileNavbar navigation={docsNavigation} />
    </header>
  );
}
