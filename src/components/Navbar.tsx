"use client";

// React
import { useState } from "react";

// Components
import Link from "next/link";
import { ToggleTheme } from "./ToggleTheme";
import { Wordmark } from "./Wordmark";

// Icons
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

// Navigation
import { navigation } from "@/config/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative flex border-b-[.0625rem] border-border px-5 lg:px-10 py-3 bg-background justify-between">
      <div className="md:hidden flex items-center">
        <Bars3Icon className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
      </div>
      <nav className="hidden md:flex items-center">
        <ul className="flex items-center">
          <li className="mr-6">
            <Wordmark />
          </li>
          {navigation.map((navItem, index) => (
            <li key={index} className="mr-6">
              <Link href={navItem.href}>{navItem.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <ToggleTheme />
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
        <ul className="flex flex-col items-start p-8">
          <li>
            <Wordmark />
          </li>
          {navigation.map((navItem, index) => (
            <li key={index} className="my-4" onClick={toggleMenu}>
              <Link href={navItem.href}>{navItem.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
