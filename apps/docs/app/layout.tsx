// Provider
import { ThemeProvider } from "@/hooks/contexts/theme-context";

// Components
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/header";

// Global Styles
import "@/styles/globals.css";

// Font
import { onest } from "@/lib/font";

// Metadata
import { siteConfig } from "@/config/siteConfig";

export async function generateMetadata() {
  // const metadataBase =
  //   locale === "es"
  //     ? process.env.NEXT_PUBLIC_URL_ES
  //     : process.env.NEXT_PUBLIC_URL_EN;

  return {
    // metadataBase: new URL(metadataBase ?? "http://localhost:3000"),
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
  params: Promise<{ locale: string }>;
}

export default async function RootLayout(props: LocaleLayoutProps) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`relative ${onest.className}`}>
        <div className="md:bg-dots absolute inset-0 -z-50"></div>
        <ThemeProvider>
          <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
            <Navbar />
            <main className="w-full max-w-[1580px] mx-auto px-5 md:px-10 lg:px-20 overflow-x-hidden lg:overflow-x-visible">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
