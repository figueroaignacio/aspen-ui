export function ComponentPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center w-full border min-h-[40dvh] h-auto rounded-md">
      <div className="text-center">{children}</div>
    </div>
  );
}
