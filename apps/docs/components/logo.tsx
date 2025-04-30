import { Link } from "@/i18n/navigation";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-1.5 px-3 py-1 rounded-xl transition-all duration-300 bg-secondary"
    >
      <span className="text-xl text-foreground">i7a/ui</span>
    </Link>
  );
}
