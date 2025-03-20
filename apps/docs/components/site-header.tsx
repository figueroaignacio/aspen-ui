"use client";

// Hooks
import { usePathname } from "next/navigation";

// Components
import Link from "next/link";
import { GitHubLink } from "./github-link";
import { Logo } from "./logo";
import { Searcher } from "./searcher";
import { ToggleTheme } from "./toggle-theme";

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
                  ? "text-foreground"
                  : "hover:text-muted-foreground"
              }`}
            >
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <Searcher />
        <GitHubLink />
        <ToggleTheme />
      </div>
    </nav>
  );
}
