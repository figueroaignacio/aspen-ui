interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-1 flex-col">
      <main className="flex flex-1 flex-col md:border-l md:border-r md:border-dashed">
        {children}
      </main>
    </div>
  );
}
