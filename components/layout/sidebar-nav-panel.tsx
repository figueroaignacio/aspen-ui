"use client";

// Hooks
import { usePathname } from "next/navigation";

// Utils

// Components
interface DocItem {
  title: string;
  href: string;
}

interface DocSection {
  title: string;
  items: DocItem[];
}

export function SidebarNavPanel() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-16 h-[calc(100vh-5rem)] hidden lg:block">
      <nav>
        {/* {docsConfig.map((section, index) => (
          <div
            key={section.title}
            className={cn("pb-4", index !== 0 && "pt-4")}
          >
            <h2 className="mb-2 text-lg font-semibold tracking-tight">
              {section.title}
            </h2>
            <ul className="">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-md py-2 text-sm ${
                      pathname === `/${item.href}`
                        ? "text-muted"
                        : "text-muted-foreground hover:text-muted"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))} */}
      </nav>
    </aside>
  );
}
