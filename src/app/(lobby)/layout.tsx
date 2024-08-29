// Components
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/main-navbar";

// Global Styles
import "@/styles/globals.css";

export default function LobbyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="scroll-py-[3.5rem]">
        <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
