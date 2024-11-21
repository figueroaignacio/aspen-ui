import React from "react";

// Components
import { CopyButton } from "@/components/copy-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Utils
import { highlightCode } from "@/lib/highlight-code";

interface ComponentPreviewProps {
  component: React.ComponentType<any>;
  code: string;
}

export function ComponentPreview({
  component: Component,
  code,
}: ComponentPreviewProps) {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">Vista previa</TabsTrigger>
        <TabsTrigger value="code">Código</TabsTrigger>
      </TabsList>
      <TabsContent
        value="preview"
        className="p-4 h-80 border rounded-sm flex justify-center items-center"
      >
        <Component />
      </TabsContent>
      <TabsContent value="code" className="relative">
        <CopyButton content={code} />
        <pre className="rounded-sm border overflow-x-auto pb-6 px-4">
          <code>{highlightCode(code)}</code>
        </pre>
      </TabsContent>
    </Tabs>
  );
}
