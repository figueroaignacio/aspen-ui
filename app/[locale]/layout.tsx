// Provider
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

// Utils
import { locales } from "@/config/config";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
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
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
            enableSystem
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
