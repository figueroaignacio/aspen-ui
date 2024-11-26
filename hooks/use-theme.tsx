// React
import { useContext } from "react";

// Context
import { ThemeContext } from "./contexts/theme-context";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
