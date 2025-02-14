import type React from "react";

export function ComponentPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center border min-h-[40dvh] h-auto rounded-md relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="text-center relative z-10">{children}</div>
    </div>
  );
}
