"use client";

// Hooks
import { usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

// Components
import { Link } from "@/i18n/navigation";

// Utils
import { cn } from "@/lib/utils";

// Definitions
import { DocItem, DocSection } from "@/lib/definitions";

export function Sidebar() {
  const pathname = usePathname();
  const t = useTranslations("ui");
  const docsNavigation = t.raw("docsNavigation");

  return (
    <aside className="h-[calc(100vh-5rem)] hidden lg:block bg-transparent">
      <nav>
        {docsNavigation.map((section: DocSection, index: number) => (
          <div
            key={section.title}
            className={cn("pb-4", index !== 0 && "pt-4")}
          >
            <h2 className="mb-2 text-sm font-semibold tracking-tight">
              {section.title}
            </h2>
            <ul className="space-y-2">
              {section.items.map((item: DocItem) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-l-md py-2 text-sm hover:bg-primary-foreground transition-all duration-150 px-3 ${
                      pathname === item.href
                        ? "bg-primary-foreground text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
