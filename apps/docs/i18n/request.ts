import fs from 'fs/promises';
import { hasLocale, Locale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import path from 'path';
import { namespaces } from './namespaces';
import { routing } from './routing';

async function loadTranslations(locale: Locale) {
  const messages: Record<string, any> = {};

  const basePath = path.join(process.cwd(), 'locales', locale.toString());

  for (const namespace of namespaces) {
    try {
      const filePath = path.join(basePath, `${namespace}.json`);
      const fileContent = await fs.readFile(filePath, 'utf-8');
      messages[namespace] = JSON.parse(fileContent);
    } catch (error) {
      console.warn(`Translation file for namespace ${namespace} and locale ${locale} not found.`);
      messages[namespace] = {};
    }
  }

  return messages;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const messages = await loadTranslations(locale);

  return {
    locale,
    messages,
  };
});
