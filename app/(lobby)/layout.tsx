// Components
import { Navbar } from "@/components/Navbar";

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
        <Navbar />
        <main className="px-6 lg:px-0 min-h-screen py-6 m-auto container max-w-7xl">
          {children}
        </main>
      </body>
    </html>
  );
}
