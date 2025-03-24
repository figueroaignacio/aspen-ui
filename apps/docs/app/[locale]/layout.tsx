// Provider
import { Providers } from "@/components/providers";

// Components
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/header";
import { NextIntlClientProvider } from "next-intl";
import { unstable_ViewTransition as ViewTransition } from "react";

// Utils
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

// Global Styles
import "@/styles/globals.css";

// Font
import { onest } from "@/lib/font";

// Metadata
import { siteConfig } from "@/config/siteConfig";

export async function generateMetadata() {
  return {
    title: {
      default: siteConfig.title.default,
      template: `%s - ${siteConfig.title.template}`,
    },
    description: siteConfig.description,
    creator: siteConfig.creator,
    keywords: siteConfig.keywords,
  };
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  params,
  children,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`relative ${onest.className}`}>
        <ViewTransition>
          <div className="lg:bg-dots absolute inset-0 -z-50"></div>
          <Providers>
            <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
              <Navbar />
              <main className="w-full max-w-[1580px] mx-auto px-5 md:px-10 lg:px-20 overflow-x-hidden lg:overflow-x-visible">
                <NextIntlClientProvider>{children}</NextIntlClientProvider>
              </main>
              <Footer />
            </div>
          </Providers>
        </ViewTransition>
      </body>
    </html>
  );
}
