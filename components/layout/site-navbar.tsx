// Components
import { Link } from "@/config/navigation";
import { LocaleSwitcher } from "../locale-switcher";
import { Logo } from "../logo";
import { ToggleTheme } from "../toggle-theme";

interface NavigationProps {
  href: string;
  title: string;
}

interface SiteNavbarProps {
  navigation: NavigationProps[];
}

export function SiteNavbar({ navigation }: SiteNavbarProps) {
  return (
    <nav className="hidden md:flex items-center justify-between w-full">
      <ul className="flex items-center">
        <li className="mr-6">
          <Logo />
        </li>
        {navigation.map((navItem: NavigationProps, index: number) => (
          <li key={index} className="mr-6 text-sm">
            <Link href={navItem.href}>{navItem.title}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <ToggleTheme />
        <LocaleSwitcher />
      </div>
    </nav>
  );
}
