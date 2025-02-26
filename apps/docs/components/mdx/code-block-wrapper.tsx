"use client";

import * as React from "react";

// Components
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Utils
import { cn } from "@/lib/utils";

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string;
  fileLocation?: string;
}

export function CodeBlockWrapper({
  expandButtonTitle = "View Code",
  className,
  children,
  fileLocation,
  ...props
}: CodeBlockProps) {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      {fileLocation ? (
        <div className="px-3 py-1 text-sm">{fileLocation}</div>
      ) : null}
      <div className={cn("relative overflow-hidden", className)} {...props}>
        <CollapsibleContent
          forceMount
          className={cn("overflow-hidden border-none", !isOpened && "max-h-48")}
        >
          <div
            className={cn(
              "[&_[data-rehype-pretty-code-figure]]:my-0 [&_pre]:max-h-[750px] [&_pre]:pb-[100px] rounded-lg",
              !isOpened ? "[&_pre]:overflow-hidden" : "[&_pre]:overflow-auto]"
            )}
          >
            {children}
          </div>
        </CollapsibleContent>
        <div
          className={cn(
            "absolute flex items-center justify-center p-2",
            isOpened
              ? "inset-x-0 bottom-0 h-12 mx-[2px] backdrop-blur-sm bg-black/10"
              : "inset-0"
          )}
        >
          {!isOpened && (
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/10 via-black/5 to-transparent backdrop-blur-sm" />
          )}
          <CollapsibleTrigger asChild>
            <Button className="relative z-10">
              {isOpened ? "Collapse" : expandButtonTitle}
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  );
}
