import { cn } from "@/lib/utils";
import * as React from "react";

type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

type ButtonSize = "default" | "sm" | "lg" | "icon";

const buttonStyles: Record<ButtonVariant, string> = {
  default:
    "border text-center text-foreground rounded-md text-sm flex items-center gap-2 justify-center py-2 px-5 bg-primary hover:bg-primary-foreground text-nowrap",
  destructive:
    "bg-red-800 hover:bg-red-800/90 text-center text-foreground rounded-md text-xs flex items-center gap-2 justify-center py-2 px-5",
  outline: "hover:bg-primary-foreground border",
  secondary:
    "flex items-center gap-2 text-xs text-center bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost:
    "text-center text-foreground rounded-md text-xs flex items-center gap-2 justify-center text-center py-2 px-5 hover:bg-primary-foreground text-nowrap",
  link: "text-foreground underline-offset-4 hover:underline",
};

const buttonSizes: Record<ButtonSize, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
};

function buttonVariants(
  variant: ButtonVariant = "default",
  size: ButtonSize = "default"
) {
  return cn(buttonStyles[variant], buttonSizes[size]);
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95 transition-all duration-200",
          buttonVariants(variant, size),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
