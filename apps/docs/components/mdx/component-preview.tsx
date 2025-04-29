import type React from "react";

export function ComponentPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center border border-dotted min-h-[40dvh] h-auto rounded-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-dots" />
      <div className="text-center relative z-10">{children}</div>
    </div>
  );
}
