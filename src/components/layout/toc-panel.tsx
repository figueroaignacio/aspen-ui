"use client";

interface Heading {
  id: string;
  text: string | null;
  level: number;
}

interface TocPanelProps {
  headings: Heading[];
  activeId: string;
}

export function TocPanel({ headings, activeId }: TocPanelProps) {
  return (
    <nav className="sticky top-16 h-[calc(100vh-121px)] left-0 rounded-lg mx-auto overflow-y-auto px-4 hidden lg:block">
      <p className="font-semibold text-sm">On this page</p>
      <ul className="list-none flex flex-col gap-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ marginLeft: heading.level === 3 ? "1rem" : "0" }}
          >
            <a
              href={`#${heading.id}`}
              className={`hover:underline hover:text-foreground text-sm transition-colors duration-150 ${
                activeId === heading.id
                  ? "underline text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
