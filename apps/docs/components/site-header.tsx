"use client";

// Hooks
import { usePathname } from "next/navigation";

// Components
import { Link } from "@/i18n/navigation";
import { HeaderActions } from "./header-actions";
import { Logo } from "./logo";

interface NavigationProps {
  url: string;
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
              href={navItem.url}
              className={`mr-6 text-sm ${
                pathname === `/${navItem.url}`
                  ? "text-foreground"
                  : "hover:text-muted-foreground"
              }`}
            >
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
      <HeaderActions />
    </nav>
  );
}
