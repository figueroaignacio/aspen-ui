// Provider
import { ThemeProvider } from "@/hooks/contexts/theme-context";

// Components
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

// Global Styles
import "@/styles/globals.css";

// Font
import "@fontsource-variable/onest";

// Metadata

// export async function generateMetadata({ params: { locale } }: MetadataParams) {
//   const metadataBase =
//     locale === "es"
//       ? process.env.NEXT_PUBLIC_URL_ES
//       : process.env.NEXT_PUBLIC_URL_EN;

//   return {
//     metadataBase: new URL(metadataBase ?? "http://localhost:3000"),
//     title: {
//       default: t("defaultTitle"),
//       template: `%s - ${t("templateTitle")}`,
//     },
//     description: t("description"),
//     creator: t("creator"),
//     keywords: t("keywords"),
//   };
// }

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}