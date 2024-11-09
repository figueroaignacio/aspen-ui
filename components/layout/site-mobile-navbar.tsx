"use client";

// Hooks
import { usePathname } from "next/navigation";
import { useState } from "react";

// Components
import { Link } from "@/config/navigation";
import { Logo } from "../logo";

// Icons
import { cn } from "@/lib/utils";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "../locale-switcher";
import { ToggleTheme } from "../toggle-theme";

interface NavigationProps {
  href: string;
  title: string;
}

interface SiteMobileNavbarProps {
  navigation: NavigationProps[];
}

interface DocItem {
  title: string;
  href: string;
}

interface DocSection {
  title: string;
  items: DocItem[];
}

export function SiteMobileNavbar({ navigation }: SiteMobileNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const t = useTranslations();
  const docsConfig: DocSection[] = t.raw("docsConfig");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="md:hidden flex items-center relative justify-between w-full">
      <Bars3Icon className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
      <div
        className={`fixed inset-0 w-full h-[100vh] backdrop-blur-sm bg-black/40 z-10 transition-opacity duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>
      <nav
        className={`fixed top-0 left-0 h-screen w-64 z-20 bg-background transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b-[1px] border-border">
          <div onClick={toggleMenu} className="flex justify-start p-3.5">
            <Logo />
          </div>
          <div className="flex justify-end p-3.5">
            <XMarkIcon className="size-8 cursor-pointer" onClick={toggleMenu} />
          </div>
        </div>
        <div className="space-y-6 px-5 py-4 overflow-y-scroll">
          <ul className="flex flex-col items-start gap-3">
            {navigation.map((navItem: NavigationProps, index: number) => (
              <li
                key={index}
                onClick={toggleMenu}
                className={`mr-6 text-sm ${
                  pathname === navItem.href
                    ? "text-muted"
                    : "text-muted-foreground hover:text-muted"
                }`}
              >
                <Link href={navItem.href}>{navItem.title}</Link>
              </li>
            ))}
          </ul>
          <div>
            {docsConfig.map((section, index) => (
              <div
                key={section.title}
                className={cn("pb-2", index !== 0 && "pt-2")}
              >
                <h2 className="mb-2 text-lg font-semibold tracking-tight">
                  {section.title}
                </h2>
                <ul>
                  {section.items.map((item) => (
                    <li
                      key={item.href}
                      onClick={toggleMenu}
                      className={`mr-6 text-sm ${
                        pathname === item.href
                          ? "text-muted"
                          : "text-muted-foreground hover:text-muted"
                      }`}
                    >
                      <Link href={item.href} className={"block py-2 text-sm "}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </nav>
      <div className="flex items-center gap-4">
        <ToggleTheme />
        <LocaleSwitcher />
      </div>
    </div>
  );
}
