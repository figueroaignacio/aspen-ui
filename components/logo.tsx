import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="text-xl font-extrabold px-3 py-1 text-foreground bg-purple-700 text-white rounded-sm"
    >
      AspenUI
    </Link>
  );
}
