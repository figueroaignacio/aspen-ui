"use client";

// Hooks
import { useState } from "react";

// Components
import { Link } from "@/config/navigation";
import { Logo } from "../logo";

// Icons
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { LocaleSwitcher } from "../locale-switcher";
import { ToggleTheme } from "../toggle-theme";

interface NavigationProps {
  href: string;
  title: string;
}

interface SiteMobileNavbarProps {
  navigation: NavigationProps[];
}

export function SiteMobileNavbar({ navigation }: SiteMobileNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div className="flex justify-end p-4">
          <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
        </div>
        <ul className="flex flex-col items-start gap-3 px-6">
          <li onClick={toggleMenu}>
            <Logo />
          </li>
          {navigation.map((navItem: NavigationProps, index: number) => (
            <li key={index} onClick={toggleMenu}>
              <Link href={navItem.href}>{navItem.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <ToggleTheme />
        <LocaleSwitcher />
      </div>
    </div>
  );
}
