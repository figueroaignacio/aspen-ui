import * as runtime from "react/jsx-runtime";

// Components
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Snippet } from "../ui/snippet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Anchor } from "./anchor";
import { ComponentPreview } from "./component-preview";
import { Step, Steps } from "./steps";

// Utils
import { cn } from "@/lib/utils";
import React from "react";

// Examples
import { ButtonSourceCode } from "@/lib/examples/button/source-code";
import { ButtonPreview } from "@/lib/examples/button/usage";

const useMDXComponents = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Card,
  CardTitle,
  CardDescription,
  CardFooter,
  CardHeader,
  CardContent,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Anchor,
  Snippet,
  Steps,
  Step,
  ComponentPreview,
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className={cn("mt-2 scroll-m-20 font-bold", className)} {...props} />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-12 scroll-m-20 pb-2 text-2xl font-bold tracking-tight cursor-text first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 font-semibold pb-2 tracking-tight cursor-text text-xl",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a className={cn("underline-offset-4", className)} {...props} />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "leading-7 [&:not(:first-child)]:my-2 text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-4 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-4 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto rounded-lg">
      <table
        className={cn("w-full overflow-hidden rounded-lg", className)}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn("m-0 border-t p-0", className)} {...props} />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code className={cn("", className)} {...props} />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <pre
      className={cn("rounded-sm bg-card overflow-x-auto pb-6 px-4", className)}
      {...props}
    ></pre>
  ),
  ButtonPreview,
  ButtonSourceCode,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponents(code);
  return <Component components={components} />;
}
