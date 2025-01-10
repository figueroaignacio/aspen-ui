import React from "react";
import { cn } from "../../lib/utils";
import styles from "./Button.module.css";

export type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

export type ButtonSize = "default" | "sm" | "lg" | "icon";

const buttonStyles: Record<ButtonVariant, string> = {
  default: styles.default,
  destructive: styles.destructive,
  outline: styles.outline,
  secondary: styles.secondary,
  ghost: styles.ghost,
  link: styles.link,
};

const buttonSizes: Record<ButtonSize, string> = {
  default: styles.defaultSize,
  sm: styles.sm,
  lg: styles.lg,
  icon: styles.icon,
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

export const Button = (
  { className, variant = "default", size = "default" }: ButtonProps,
  ref?: React.Ref<HTMLButtonElement>
) => {
  return (
    <button
      className={cn(
        styles.baseButton,
        buttonVariants(variant, size),
        className
      )}
      ref={ref}
    />
  );
};

Button.displayName = "Button";
