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
          <section className="m-auto container py-5">{children}</section>
        </ThemeProvider>
      </body>
    </html>
  );
}
