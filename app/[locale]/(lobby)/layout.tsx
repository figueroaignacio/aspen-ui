import { unstable_setRequestLocale } from "next-intl/server";

// Components
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/main-navbar";

// Global Styles
import "@/styles/globals.css";

// Config
import { locales } from "@/config/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
interface LobbyLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function LobbyLayout({
  children,
  params: { locale },
}: LobbyLayoutProps) {
  unstable_setRequestLocale(locale);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="scroll-py-[3.5rem]">
        <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
          <Navbar />
          <main className="container mx-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
