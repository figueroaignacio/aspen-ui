"use client";

import { cn } from "@/lib/utils";
import { Cross1Icon } from "@radix-ui/react-icons";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

// Context
type DrawerContextProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DrawerContext = React.createContext<DrawerContextProps | undefined>(
  undefined
);

function useDrawerContext() {
  const context = React.useContext(DrawerContext);
  if (!context)
    throw new Error("Drawer components must be used within <Drawer>");
  return context;
}

// Root
export function Drawer({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <DrawerContext.Provider value={{ open, setOpen }}>
      {children}
    </DrawerContext.Provider>
  );
}

// Trigger
export function DrawerTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { setOpen } = useDrawerContext();
  return (
    <button onClick={() => setOpen(true)} className={cn(className)}>
      {children}
    </button>
  );
}

// Overlay
export function DrawerOverlay({ className }: { className?: string }) {
  const { setOpen } = useDrawerContext();
  return (
    <div
      className={cn(
        "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity",
        className
      )}
      onClick={() => setOpen(false)}
    />
  );
}

// Variants
const drawerVariants = cva(
  "fixed z-50 bg-background border shadow-xl transition-transform duration-300 ease-out overflow-auto",
  {
    variants: {
      side: {
        bottom: "left-0 right-0 bottom-0 rounded-t-xl",
        top: "left-0 right-0 top-0 rounded-b-xl",
        left: "left-0 top-0 bottom-0 h-full rounded-r-xl",
        right: "right-0 top-0 bottom-0 h-full rounded-l-xl",
      },
      size: {
        sm: "h-full w-1/4",
        md: "h-full w-1/2",
        lg: "h-full w-3/4",
        full: "h-full w-full",
      },
    },
    compoundVariants: [
      { side: "top", size: "md", class: "h-1/2 w-full" },
      { side: "bottom", size: "lg", class: "h-3/4 w-full" },
      { side: "left", size: "md", class: "w-1/2 h-full" },
      { side: "right", size: "sm", class: "w-1/4 h-full" },
    ],
    defaultVariants: {
      side: "bottom",
      size: "md",
    },
  }
);

// Content
interface DrawerContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof drawerVariants> {
  children: React.ReactNode;
}

export function DrawerContent({
  children,
  className,
  side,
  size,
  ...props
}: DrawerContentProps) {
  const { open, setOpen } = useDrawerContext();

  if (!open) return null;

  return (
    <>
      <DrawerOverlay />
      <div className={cn(drawerVariants({ side, size }), className)} {...props}>
        <div className="flex justify-end p-2">
          <button
            onClick={() => setOpen(false)}
            className="text-sm hover:underline text-muted-foreground"
          >
            <Cross1Icon />
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </>
  );
}
