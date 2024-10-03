// Components
import Link from "next/link";

// Config
import { docsConfig } from "@/config/docs";

export function SidebarNavPanel() {
  return (
    <aside className="sticky top-16 h-[calc(100vh-121px)] left-0 rounded-lg mx-auto overflow-y-auto hidden lg:block">
      <nav>
        {docsConfig.map((section) => (
          <div key={section.title}>
            <h4 className="my-3 font-bold">{section.title}</h4>
            <ul className="ml-3 space-y-2">
              {section.items.map((item) => (
                <li key={item.href} className="text-sm">
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
