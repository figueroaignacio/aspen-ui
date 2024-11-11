import {
  defaultLocale,
  localePrefix,
  locales,
  pathnames,
} from "@/lib/i18n/routing";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames,
  localeDetection: true,
});

export const config = {
  matcher: ["/", "/(en|es)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
