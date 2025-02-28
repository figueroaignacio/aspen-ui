"use client";

// Hooks
import { usePathname } from "next/navigation";
import { useState } from "react";

// Components
import Link from "next/link";
import { GitHubLink } from "./github-link";
import { Logo } from "./logo";
import { Searcher } from "./searcher";
import { ToggleTheme } from "./toggle-theme";

// Icons
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

interface DocItem {
  title: string;
  href: string;
}

interface DocSection {
  title: string;
  items: DocItem[];
}

interface SiteMobileNavbarProps {
  navigation: DocSection[];
}

export function SiteMobileHeader({ navigation }: SiteMobileNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="lg:hidden flex items-center relative justify-between w-full">
      <HamburgerMenuIcon
        className="h-6 w-6 cursor-pointer"
        onClick={toggleMenu}
      />
      <div
        className={`fixed inset-0 w-full h-[100vh] backdrop-blur-sm bg-black/80 z-10 transition-opacity duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>
      <nav
        className={`fixed top-0 left-0 h-screen w-64 z-20 bg-background transition-transform duration-300 ease-in-out border-r border-dashed ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-dashed">
          <div onClick={toggleMenu} className="flex justify-start p-3.5">
            <Logo />
          </div>
          <div className="flex justify-end p-3.5">
            <Cross1Icon
              className="size-8 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
        <div className="space-y-6 px-5 py-4 overflow-y-scroll">
          {navigation.map((section, index) => (
            <div key={section.title} className={index !== 0 ? "pt-2" : ""}>
              <h2 className="mb-2 text-sm font-semibold tracking-tight">
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
                    <Link href={item.href} className="block py-2 text-sm">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
      <div className="flex items-center gap-4">
        <Searcher />
        <GitHubLink />
        <ToggleTheme />
      </div>
    </div>
  );
}
