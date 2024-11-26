// Hooks
import { useTheme } from "@/hooks/use-theme";

// Components
import { Button } from "./ui/button";

// Icons
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
