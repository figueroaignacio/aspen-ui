import { ComponentPreview } from "@/components/mdx/component-preview";
import { Button } from "@/components/ui/button";

const ButtonUsage = () => <Button>Button</Button>;

const code = `
import React from "react"
import { Button } from "@/components/ui/button"

export default function ButtonExample() {
  return (
    <Button>Button</Button>
  )
}
`;

export const ButtonPreview = () => (
  <ComponentPreview component={ButtonUsage} code={code} />
);
