import { Link } from "@/lib/i18n/routing";

export function Logo() {
  return (
    <Link
      href="/"
      className="text-xl font-extrabold text-foreground rounded-sm"
    >
      AspenUI
    </Link>
  );
}
