// // next-intl
// import { getRequestConfig } from "next-intl/server";

// // Utils
// import { notFound } from "next/navigation";
// import { routing } from "./routing";

// // Constants
// import { namespaces } from "./namespaces";

// export default getRequestConfig(async ({ requestLocale }) => {
//   let locale = await requestLocale;
//   if (!locale || !routing.locales.includes(locale as any)) {
//     locale = routing.defaultLocale;
//   }

//   const messages = {};

//   for (const section of namespaces) {
//     try {
//       const sectionMessages = (
//         await import(`@/locales/${locale}/${section}.json`)
//       ).default;
//       Object.assign(messages, sectionMessages);
//     } catch (error) {
//       return notFound();
//     }
//   }

//   return {
//     locale,
//     messages,
//   };
// });

import fs from "fs/promises";
import { hasLocale, Locale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import path from "path";
import { namespaces } from "./namespaces";
import { routing } from "./routing";

async function loadTranslations(locale: Locale) {
  const messages: Record<string, any> = {};

  const basePath = path.join(process.cwd(), "locales", locale.toString());

  for (const namespace of namespaces) {
    try {
      const filePath = path.join(basePath, `${namespace}.json`);
      const fileContent = await fs.readFile(filePath, "utf-8");
      messages[namespace] = JSON.parse(fileContent);
    } catch (error) {
      console.warn(
        `Translation file for namespace ${namespace} and locale ${locale} not found.`
      );
      messages[namespace] = {};
    }
  }

  return messages;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = await loadTranslations(locale);

  return {
    locale,
    messages,
  };
});
