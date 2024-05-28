// Provider

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
        <section className="m-auto container py-5">{children}</section>
      </body>
    </html>
  );
}
