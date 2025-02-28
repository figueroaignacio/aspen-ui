import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 text-sm font-medium transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-foreground active:scale-95 ring-primary ring-offset-background",
        destructive:
          "bg-red-600 text-white hover:brightness-110 active:scale-95",
        outline:
          "border border-border text-foreground hover:bg-primary-foreground active:scale-95",
        secondary:
          "bg-secondary text-secondary-foreground hover:brightness-110 active:scale-95",
        ghost:
          "bg-transparent text-foreground hover:bg-primary-foreground active:scale-95",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-8 w-8 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = (
  { className, variant = "primary", size = "default", ...props }: ButtonProps,
  ref?: React.Ref<HTMLButtonElement>
) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
};

Button.displayName = "Button";

export { Button, buttonVariants };
