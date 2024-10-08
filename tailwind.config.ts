import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx,mdx}",
    "./content/**/*.{ts,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        foreground: "var(--text-foreground)",
      },
      backgroundColor: {
        background: "var(--background)",
        card: "var(--bg-card)",
      },
      colors: {
        foreground: "var(--foreground)",
      },
      borderColor: {
        border: "var(--border)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
