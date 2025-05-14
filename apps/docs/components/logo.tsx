import { Link } from '@/i18n/navigation';

export function Logo() {
  return (
    <Link href="/" className="gap-1.5 px-1 py-1 lg:px-2.5">
      <span className="text-foreground font-bold">I7A/UI</span>
    </Link>
  );
}
