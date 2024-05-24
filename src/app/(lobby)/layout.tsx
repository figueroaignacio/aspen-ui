// Components
import { Navbar } from "@/components/Navbar";

// Provider
import { ThemeProvider } from "next-themes";

// Global Styles
import "@/styles/globals.css";

export default function LobbyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Navbar />
          <section className="min-h-screen py-6 m-auto container max-w-8xl">
            {children}
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
