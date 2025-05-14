import { useTranslations } from 'next-intl';

// Components
import { SiteHeader } from './site-header';
import { SiteMobileHeader } from './site-mobile-header';

export function Navbar() {
  const t = useTranslations();
  const navigation = t.raw('ui.navigation');
  const docsNavigation = t.raw('ui.docsNavigation');

  return (
    <header className="flex border-b px-5 md:px-10 lg:px-20 justify-between items-center sticky top-0 left-0 backdrop-blur-xl z-50 max-w-[1580px] mx-auto w-full">
      <SiteHeader navigation={navigation} />
      <SiteMobileHeader navigation={docsNavigation} />
    </header>
  );
}
