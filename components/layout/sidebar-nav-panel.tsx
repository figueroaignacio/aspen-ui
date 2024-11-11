"use client";

// Hooks
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

// Utils
import { cn } from "@/lib/utils";

// Components
import { Link } from "@/lib/i18n/routing";

interface DocItem {
  title: string;
  href: string;
}

interface DocSection {
  title: string;
  items: DocItem[];
}

export function SidebarNavPanel() {
  const t = useTranslations();
  const pathname = usePathname();
  const docsConfig: DocSection[] = t.raw("docsConfig");

  return (
    <aside className="sticky top-20 h-[calc(100vh-5rem)] hidden lg:block">
      <nav>
        {docsConfig.map((section, index) => (
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
        ))}
      </nav>
    </aside>
  );
}
