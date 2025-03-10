"use client";

// Hooks
import { useTheme } from "@/hooks/use-theme";
import { useEffect, useState } from "react";

// Components
import { Button } from "@/components/ui/button";

// Icons
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ToggleTheme({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const SWITCH = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
      // case "system":
      //   setTheme(systemTheme === "light" ? "dark" : "light");
      //   break;
      default:
        break;
    }
  };

  const toggleTheme = () => {
    //@ts-ignore
    if (!document.startViewTransition) SWITCH();

    //@ts-ignore
    document.startViewTransition(SWITCH);
  };

  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon">
      <SunIcon className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
