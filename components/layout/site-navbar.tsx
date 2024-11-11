"use client";

// Hooks
import { usePathname } from "next/navigation";

// Components
import { Link } from "@/lib/i18n/routing";
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
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center justify-between w-full">
      <ul className="flex items-center">
        <li className="mr-6">
          <Logo />
        </li>
        {navigation.map((navItem: NavigationProps, index: number) => (
          <li key={index}>
            <Link
              href={navItem.href}
              className={`mr-6 text-sm ${
                pathname === `/${navItem.href}`
                  ? "text-muted"
                  : "text-muted-foreground hover:text-muted"
              }`}
            >
              {navItem.title}
            </Link>
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
