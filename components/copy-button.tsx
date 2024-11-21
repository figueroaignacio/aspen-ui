"use client";

// Hooks
import { useState } from "react";

// Components
import { Button } from "./ui/button";

// Icons
import {
  CheckCircleIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";

interface CopyButtonProps {
  content: string;
}

export function CopyButton({ content }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar el código: ", err);
    }
  };

  return (
    <Button
      onClick={copyToClipboard}
      className="absolute top-2 right-2 px-3 py-2 text-sm font-medium rounded-md flex items-center gap-2  active:scale-95 transition-all duration-200 border-muted-foreground"
      aria-label="Copiar código al portapapeles"
      size="icon"
      variant="outline"
    >
      {copied ? (
        <>
          <CheckCircleIcon className="h-4 w-4" />
        </>
      ) : (
        <>
          <ClipboardDocumentIcon className="h-4 w-4" />
        </>
      )}
    </Button>
  );
}
