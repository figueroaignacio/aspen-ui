export function Snippet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center min-h-[100px]">
      <div className="bg-primary-foreground px-6 py-3 w-full rounded-xl">
        {children}
      </div>
    </div>
  );
}
