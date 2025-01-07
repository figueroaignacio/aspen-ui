// Components
import { SiteHeader } from "./site-header";
import { SiteMobileHeader } from "./site-mobile-header";

import { docsNavigation, navigation } from "@/config/navigation";

export function Navbar() {
  return (
    <header className="flex border-b py-2 px-5 md:px-10 lg:px-20 justify-between items-center sticky top-0 left-0 backdrop-blur-xl z-50 max-w-[1580px] mx-auto w-full">
      <SiteHeader navigation={navigation} />
      <SiteMobileHeader navigation={docsNavigation} />
    </header>
  );
}
