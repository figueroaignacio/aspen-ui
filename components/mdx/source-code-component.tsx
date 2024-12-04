"use client";

// Hooks
import { useState } from "react";

// Components
import { CopyButton } from "@/components/copy-button";
import { Button } from "../ui/button";

// Utils
import { highlightCode } from "@/lib/highlight-code";

interface SourceCodeComponentProps {
  code: string;
}

export function SourceCodeComponent({ code }: SourceCodeComponentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="relative">
      <CopyButton content={code} />
      <pre
        className="bg-primary-foreground overflow-x-auto overflow-y-auto pb-6 px-6 max-w-full"
        style={{ maxHeight: isExpanded ? "none" : "380px", overflowY: "auto" }}
      >
        <code>{highlightCode(code)}</code>
      </pre>
      <Button onClick={toggleExpand} className="mt-2 w-full  text-center">
        {isExpanded ? "Colapsar" : "Expandir"}
      </Button>
    </div>
  );
}
