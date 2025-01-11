import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import styles from "./button.module.css";

const buttonVariants = cva(styles.baseButton, {
  variants: {
    variant: {
      primary: styles.primary,
      destructive: styles.destructive,
      outline: styles.outline,
      secondary: styles.secondary,
      ghost: styles.ghost,
      link: styles.link,
    },
    size: {
      default: styles.defaultSize,
      sm: styles.sm,
      lg: styles.lg,
      icon: styles.icon,
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = (
  { className, variant = "primary", size = "default", ...props }: ButtonProps,
  ref?: React.Ref<HTMLButtonElement>
) => {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      ref={ref}
      {...props}
    />
  );
};

Button.displayName = "Button";

export { Button, buttonVariants };
