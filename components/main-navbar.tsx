"use client";

// Hooks
import { useTranslations } from "next-intl";
import { useState } from "react";

// Components
import { Link } from "@/config/navigation";
import NextLink from "next/link";
import { Logo } from "./logo";
import { ToggleTheme } from "./toggle-theme";

// Icons
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export function Navbar() {
  const t = useTranslations();
  const navigation = t.raw("navigation");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  type NavItemTypes = {
    href: string;
    title: string;
  };

  return (
    <header className="relative flex border-b-[.0625rem] border-border px-5 lg:px-10 py-3 bg-background justify-between">
      <div className="md:hidden flex items-center">
        <Bars3Icon className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
      </div>
      <nav className="hidden md:flex items-center">
        <ul className="flex items-center">
          <li className="mr-6">
            <Logo />
          </li>
          {navigation.map((navItem: NavItemTypes, index: number) => (
            <li key={index} className="mr-6 text-sm">
              <Link href={navItem.href}>{navItem.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <ToggleTheme />
        <div className="space-x-3">
          <NextLink href={"/es"}>ES</NextLink>
          <span>/</span>
          <NextLink href={"/en"}>EN</NextLink>
        </div>
      </div>
      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full backdrop-blur-sm z-10"
          onClick={toggleMenu}
        ></div>
      )}
      {/* Mobile Menu */}
      <nav
        className={`${
          isMenuOpen ? "left-0" : "-left-full"
        } opacity-100 fixed md:hidden top-0 h-screen w-64 z-20 transition-all duration-300 ease-in-out bg-background`}
      >
        <div className="flex justify-end p-4">
          <XMarkIcon className="h-6 w-6" onClick={toggleMenu} />
        </div>
        <ul className="flex flex-col items-start gap-3 px-6">
          <li onClick={toggleMenu}>
            <Logo />
          </li>
          {navigation.map((navItem: NavItemTypes, index: number) => (
            <li key={index} onClick={toggleMenu}>
              <Link href={navItem.href}>{navItem.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
