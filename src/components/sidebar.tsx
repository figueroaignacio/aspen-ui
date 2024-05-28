// Components
import Link from "next/link";

// Config
import { docsConfig } from "@/config/docs";

export function Sidebar() {
  return (
    <div>
      {docsConfig.map((doc, index) => (
        <div key={index}>
          <h2 className="font-bold py-3">{doc.title}</h2>
          <ul className="flex flex-col gap-1">
            {doc.items.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="opacity-50 hover:opacity-100">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
