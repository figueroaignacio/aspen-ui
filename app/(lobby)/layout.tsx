// Components
import { Navbar } from "@/components/navbar";

// Providers
import { ThemeProvider } from "next-themes";

// Global Styles
import "@/styles/globals.css";

// Config

export default function LobbyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Navbar />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
