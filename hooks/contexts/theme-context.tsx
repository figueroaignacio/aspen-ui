"use client";

// React
import React, { createContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const LIGHT_THEME = "light";
const DARK_THEME = "dark";
const MEDIA = "(prefers-color-scheme: dark)";

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia(MEDIA).matches;
    setTheme(storedTheme || (prefersDark ? DARK_THEME : LIGHT_THEME));
  }, []);

  useEffect(() => {
    if (theme) {
      const root = window.document.documentElement;
      root.classList.remove(LIGHT_THEME, DARK_THEME);
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme) {
      setTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme: theme || LIGHT_THEME, setTheme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
