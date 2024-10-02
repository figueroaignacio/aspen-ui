import { unstable_setRequestLocale } from "next-intl/server";

interface TemplatesPageProps {
  params: { locale: string };
}

export default function TemplatesPage({
  params: { locale },
}: TemplatesPageProps) {
  unstable_setRequestLocale(locale);
  return <div>Templates component goes here!</div>;
}
