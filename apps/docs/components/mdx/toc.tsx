"use client";

import * as React from "react";

// Hooks
import { useMounted } from "@/hooks/use-mounted";

// Utils
import { cn } from "@/lib/utils";

interface TocEntry {
  items?: TocEntry[];
  url: string;
  title: string;
}

interface TocProps {
  toc: TocEntry[];
}

export function Toc({ toc }: TocProps) {
  const itemIds = React.useMemo(
    () =>
      toc
        ? toc
            .flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split("#")[1])
        : [],
    [toc]
  );
  const activeHeading = useActiveItem(itemIds);
  const mounted = useMounted();

  return mounted ? (
    <div className="space-y-2 pl-4 h-[calc(100vh-5rem)] ">
      <p className="font-medium">On this page</p>
      <Tree tree={toc} activeItem={activeHeading} />
    </div>
  ) : null;
}

function useActiveItem(itemIds: (string | undefined)[]) {
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -60% 0%` }
    );

    itemIds?.forEach((id) => {
      if (!id) {
        return;
      }

      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        if (!id) {
          return;
        }

        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

interface TreeProps {
  tree: TocEntry[];
  level?: number;
  activeItem?: string | null;
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree.length && level < 3 ? (
    <ul className={cn("m-0 list-none text-sm", { "pl-4": level !== 1 })}>
      {tree.map((item, index) => {
        return (
          <li key={index} className={cn("mt-0 pt-2")}>
            <a
              href={item.url}
              className={cn(
                "inline-block no-underline hover:underline hover:text-foreground transition-all duration-150 px-1 py-0.5",
                item.url === `#${activeItem}`
                  ? "font-medium underline text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree
                tree={item.items}
                level={level + 1}
                activeItem={activeItem}
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  ) : null;
}
