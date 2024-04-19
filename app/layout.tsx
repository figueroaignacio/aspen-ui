// Global Styles
import "./globals.css";

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
    template: ` - %s ${siteConfig.title}`,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
