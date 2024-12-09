// Provider
import { ThemeProvider } from "@/hooks/contexts/theme-context";
import { NextIntlClientProvider } from "next-intl";

// Components
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

// Utils
import { locales } from "@/lib/i18n/routing";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

// Global Styles
import "@/styles/globals.css";

// Font
import "@fontsource-variable/onest";

// Metadata
import { MetadataParams } from "@/types";

export async function generateMetadata({ params: { locale } }: MetadataParams) {
  const t = await getTranslations({ locale, namespace: "siteConfig" });

  const metadataBase =
    locale === "es"
      ? process.env.NEXT_PUBLIC_URL_ES
      : process.env.NEXT_PUBLIC_URL_EN;

  return {
    metadataBase: new URL(metadataBase ?? "http://localhost:3000"),
    title: {
      default: t("defaultTitle"),
      template: `%s - ${t("templateTitle")}`,
    },
    description: t("description"),
    creator: t("creator"),
    keywords: t("keywords"),
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
