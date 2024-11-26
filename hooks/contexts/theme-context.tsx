"use client";

import React, { createContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);

    const root = document.documentElement;
    root.classList.add(initialTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{ theme: theme || "light", setTheme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
