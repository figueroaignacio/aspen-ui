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
        <div className="px-3 py-1 text-xs">{fileLocation}</div>
      ) : null}
      <div className={cn("relative overflow-hidden", className)} {...props}>
        <CollapsibleContent
          forceMount
          className={cn("overflow-hidden", !isOpened && "max-h-48")}
        >
          <div
            className={cn(
              "[&_[data-rehype-pretty-code-figure]]:my-0 [&_pre]:max-h-[450px] [&_pre]:pb-[100px] rounded-lg",
              !isOpened ? "[&_pre]:overflow-hidden" : "[&_pre]:overflow-auto]"
            )}
          >
            {children}
          </div>
        </CollapsibleContent>
        <div
          className={cn(
            "absolute flex items-center justify-center backdrop-blur-sm p-2",
            isOpened ? "inset-x-0 bottom-0 h-12 mx-[2px]" : "inset-0"
          )}
        >
          <CollapsibleTrigger asChild>
            <Button>{isOpened ? "Collapse" : expandButtonTitle}</Button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  );
}
