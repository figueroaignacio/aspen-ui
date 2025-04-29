"use client";

// Hooks
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

// Components
import { Link } from "@/i18n/navigation";
import {
  CodeIcon,
  Cross2Icon,
  FileIcon,
  MagnifyingGlassIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface SearchResultItem {
  title: string;
  href: string;
  category: string;
}

export function Searcher() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const t = useTranslations();
  const docsNavigation: {
    title: string;
    items: { title: string; href: string }[];
  }[] = t.raw("ui.docsNavigation");

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "getting started":
        return <RocketIcon className="h-4 w-4" />;
      case "components":
        return <CodeIcon className="h-4 w-4" />;
      default:
        return <FileIcon className="h-4 w-4" />;
    }
  };

  const getFlattenedNavigationItems = () => {
    const flattenedItems: SearchResultItem[] = [];

    docsNavigation.forEach((section) => {
      section.items.forEach((item) => {
        flattenedItems.push({
          title: item.title,
          href: item.href,
          category: section.title,
        });
      });
    });

    return flattenedItems;
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const allItems = getFlattenedNavigationItems();

    const filtered = allItems.filter(
      (item) =>
        item.title.toLowerCase() === query ||
        item.href.toLowerCase() === query ||
        item.title.toLowerCase().includes(query) ||
        item.href.toLowerCase().includes(query)
    );

    filtered.sort((a, b) => {
      const aExactTitleMatch = a.title.toLowerCase() === query ? -1 : 0;
      const bExactTitleMatch = b.title.toLowerCase() === query ? -1 : 0;
      const aExactHrefMatch = a.href.toLowerCase() === query ? -1 : 0;
      const bExactHrefMatch = b.href.toLowerCase() === query ? -1 : 0;

      return (
        aExactTitleMatch +
        aExactHrefMatch -
        (bExactTitleMatch + bExactHrefMatch)
      );
    });

    setSearchResults(filtered);
  }, [searchQuery]);

  const handleDialogOpenChange = (open: boolean) => {
    if (open && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setSearchQuery("");
    }
  };

  return (
    <Dialog onOpenChange={handleDialogOpenChange}>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm" className="gap-2">
          <span>{t("components.searcher.label")}</span>
          <MagnifyingGlassIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm sm:max-w-lg rounded-xl">
        <DialogHeader>
          <DialogTitle>i7a/ui docs</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a command or search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border bg-background px-9 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            {searchQuery && (
              <Cross2Icon
                className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer hover:text-foreground"
                onClick={() => setSearchQuery("")}
              />
            )}
          </div>

          {searchResults.length > 0 ? (
            <div className="my-4 max-h-64 overflow-hidden">
              <ul className="overflow-y-auto max-h-96 space-y-1 pr-2">
                {searchResults.map((item) => (
                  <li
                    key={item.href}
                    className="py-2 px-3 hover:bg-primary rounded-sm text-foreground active:scale-95 transition-transform duration-200 ring-primary ring-offset-background text-sm"
                  >
                    <DialogClose className="w-full h-full">
                      <Link
                        href={item.href}
                        className="flex items-center gap-x-4"
                      >
                        {getCategoryIcon(item.category)}
                        <div className="flex justify-between items-center w-full">
                          <div className="text-sm">{item.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {item.category}
                          </div>
                        </div>
                      </Link>
                    </DialogClose>
                  </li>
                ))}
              </ul>
            </div>
          ) : searchQuery ? (
            <div className="text-center py-8 text-muted-foreground">
              No results found.
            </div>
          ) : (
            <div className="max-h-64 overflow-hidden">
              <div className="overflow-y-auto max-h-64 pr-2">
                {docsNavigation.map((section) => (
                  <div key={section.title}>
                    <h2 className="text-xs text-muted-foreground my-4">
                      {section.title}
                    </h2>
                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li
                          key={item.href}
                          className="py-2 px-3 hover:bg-primary rounded-sm text-foreground active:scale-95 transition-transform duration-200 ring-primary ring-offset-background text-sm"
                        >
                          <DialogClose className="w-full h-full">
                            <Link
                              href={item.href}
                              className="flex items-center gap-x-4"
                            >
                              {getCategoryIcon(section.title)}
                              {item.title}
                            </Link>
                          </DialogClose>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
