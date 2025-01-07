import React from "react";

interface StepProps {
  children: React.ReactNode;
  className?: string;
}

export const Step = ({ children, className }: StepProps) => {
  return <li className={` ${className}`}>{children}</li>;
};

export const Steps = ({ children }: { children: React.ReactNode }) => {
  return (
    <ol className="space-y-6 [counter-reset:step] mt-5">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Step) {
          return React.cloneElement(child as React.ReactElement<StepProps>, {
            className: `
              ${(child as React.ReactElement<StepProps>).props.className || ""}
              relative pl-8 pb-6 [counter-increment:step]
              before:content-[counter(step)] before:absolute before:left-0 before:flex
              before:items-center before:justify-center
              before:w-6 before:h-6 before:rounded-sm
              before:bg-primary-foreground 
              before:text-sm before:font-bold
              after:absolute after:top-10 after:bottom-0 after:left-3
              after:w-px after:bg-border
              last:pb-0 last:after:hidden
            `,
          });
        }
        return child;
      })}
    </ol>
  );
};
