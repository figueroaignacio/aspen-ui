"use client";

// React
import { useState } from "react";

// Components
import Link from "next/link";
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
    <header className="relative flex sm:border-b-0 border-b-[.0625rem] px-12 py-3">
      <div className="md:hidden flex items-center">
        <Bars3Icon
          className="h-6 w-6 text-gray-700 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
      <nav className="hidden md:flex items-center">
        <ul className="flex items-center">
          <li className="mr-6">
            <Wordmark />
          </li>
          {navigation.map((navItem, index) => (
            <li key={index} className="mr-6">
              <Link
                href={navItem.href}
                className="text-gray-700 hover:text-gray-900"
              >
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full backdrop-blur-3xl z-10"
          onClick={toggleMenu}
        ></div>
      )}
      {/* Mobile Menu */}
      <nav
        className={`${
          isMenuOpen ? "left-0" : "-left-full"
        } opacity-100 fixed md:hidden top-0 h-screen w-64 z-20 transition-all duration-300 ease-in-out bg-white`}
      >
        <div className="flex justify-end p-4">
          <XMarkIcon
            className="h-6 w-6 text-gray-700 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <ul className="flex flex-col items-start p-8">
          <li>
            <Wordmark />
          </li>
          {navigation.map((navItem, index) => (
            <li key={index} className="my-4" onClick={toggleMenu}>
              <Link
                href={navItem.href}
                className="text-gray-700 hover:text-gray-900"
              >
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
