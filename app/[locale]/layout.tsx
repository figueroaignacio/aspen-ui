// Provider
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

// Utils
import { locales } from "@/config/config";
import { getMessages } from "next-intl/server";

// Global Styles
import "@/styles/globals.css";

// Font
import { onest } from "@/font/onest";

// Config
import { siteConfig } from "@/config/site";

// Metadata
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://icoded.vercel.app/" ?? "http://localhost:3000"
  ),
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
  ],
  creator: siteConfig.creator,
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  keywords: siteConfig.keywords,
};

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
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${onest.className}`}>
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
