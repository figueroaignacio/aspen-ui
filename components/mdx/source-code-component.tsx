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
        className="rounded-sm border overflow-x-auto pb-6 px-4 max-w-full"
        style={{ maxHeight: isExpanded ? "none" : "380px", overflowY: "auto" }}
      >
        <code>{highlightCode(code)}</code>
      </pre>

      {/* Botón expandir/colapsar ajustado para móviles */}
      <Button
        onClick={toggleExpand}
        className="mt-2 w-full sm:w-auto text-center"
      >
        {isExpanded ? "Colapsar" : "Expandir"}
      </Button>
    </div>
  );
}
