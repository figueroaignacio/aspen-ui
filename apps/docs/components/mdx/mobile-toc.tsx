"use client";

import * as React from "react";

// Hooks
import { useTranslations } from "next-intl";

// Components
import { Cross1Icon, ViewVerticalIcon } from "@radix-ui/react-icons";

// Utils
import { cn } from "@/lib/utils";

interface TocEntry {
  items?: TocEntry[];
  url: string;
  title: string;
}

interface TocMobileProps {
  toc: TocEntry[];
}

export function TocMobile({ toc }: TocMobileProps) {
  const [open, setOpen] = React.useState(false);
  const t = useTranslations("components");

  return (
    <div>
      <button onClick={() => setOpen(true)} className="flex gap-x-2 mt-5">
        <ViewVerticalIcon />
        <span className="text-xs">{t("toc.mobil.label")}</span>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 backdrop-blur-md z-40"
            onClick={() => setOpen(false)}
          />

          <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up rounded-t-xl bg-background p-4 shadow-2xl border-t max-h-[70vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs">{t("toc.mobil.label")}</span>
              <button
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:underline"
              >
                <Cross1Icon />
              </button>
            </div>

            <TreeMobile tree={toc} onLinkClick={() => setOpen(false)} />
          </div>
        </>
      )}
    </div>
  );
}

function TreeMobile({
  tree,
  level = 1,
  onLinkClick,
}: {
  tree: TocEntry[];
  level?: number;
  onLinkClick?: () => void;
}) {
  return tree.length && level < 3 ? (
    <ul className={cn("list-none", { "pl-4": level !== 1 })}>
      {tree.map((item, index) => (
        <li key={index} className="mb-5 mt-5">
          <a
            href={item.url}
            onClick={onLinkClick}
            className="block text-sm text-muted-foreground hover:underline hover:text-foreground transition"
          >
            {item.title}
          </a>
          {item.items?.length ? (
            <TreeMobile
              tree={item.items}
              level={level + 1}
              onLinkClick={onLinkClick}
            />
          ) : null}
        </li>
      ))}
    </ul>
  ) : null;
}
