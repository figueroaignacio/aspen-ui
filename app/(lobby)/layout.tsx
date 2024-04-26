// Provider
import { ThemeProvider } from "next-themes";

// Components
import { Header } from "@/components/Header";

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
          enableSystem
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Header />
          <main className="px-6 lg:px-0 min-h-screen py-6 m-auto max-w-7xl">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
