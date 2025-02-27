"use client";

// Hooks
import { usePathname } from "next/navigation";

// Components
import Link from "next/link";
import { Logo } from "./logo";
import { ToggleTheme } from "./toggle-theme";

// Radix UI Icons
import { Searcher } from "./searcher";

interface NavigationProps {
  href: string;
  title: string;
}

interface SiteNavbarProps {
  navigation: NavigationProps[];
}

export function SiteHeader({ navigation }: SiteNavbarProps) {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center justify-between w-full">
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
        <Searcher />
      </div>
    </nav>
  );
}
