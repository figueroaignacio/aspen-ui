"use client";

import * as React from "react";

// Components
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface CodeBlockWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string;
  language?: string;
  fileName?: string;
}

export function CodeBlockWrapper({
  expandButtonTitle = "View Code",
  className,
  children,
  fileName,
  language,
  ...props
}: CodeBlockWrapperProps) {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <div className="overflow-hidden border rounded-md">
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            {fileName && <span className="font-medium">{fileName}</span>}
            {language && <span className="opacity-70">{language}</span>}
          </div>

          <CollapsibleTrigger asChild>
            <Button
              variant="link"
              size="sm"
              className="text-foreground text-xs"
            >
              {isOpened ? "Collapse" : expandButtonTitle}
            </Button>
          </CollapsibleTrigger>
        </div>

        <div className={cn("relative overflow-hidden", className)} {...props}>
          <CollapsibleContent
            forceMount
            className={cn("overflow-hidden", !isOpened && "max-h-32")}
          >
            <div
              className={cn(
                "[&_[data-rehype-pretty-code-figure]]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[100px] [&_[data-rehype-pretty-code-figure]]:rounded-none [&_pre]:rounded-none",
                !isOpened ? "[&_pre]:overflow-hidden" : "[&_pre]:overflow-auto"
              )}
            >
              {children}
            </div>
          </CollapsibleContent>
          {!isOpened && (
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          )}
        </div>
      </div>
    </Collapsible>
  );
}
