import { cn } from '@/lib/utils';
import type React from 'react';

interface ComponentPreviewProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export function ComponentPreview({ children, className, title }: ComponentPreviewProps) {
  return (
    <div className="my-6 w-full overflow-hidden border rounded-lg">
      <div className="flex items-center px-3 py-2 bg-gradient-to-b border-b">
        <div className="flex space-x-1.5 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>

        {title ?? (
          <div className="flex-1 px-3 py-1 text-xs text-center rounded-md text-slate-600 truncate">
            {title}
          </div>
        )}
      </div>

      <div
        className={cn(
          'flex justify-center items-center p-6 md:p-10 min-h-[40dvh] h-auto relative overflow-hidden',
          className,
        )}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}
