'use client';

import * as React from 'react';

// Components
import { CodeBlockWrapper } from './codeblock-wrapper';

// Utils
import { cn } from '@/lib/utils';

interface ComponentSourceProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
}

export function ComponentSource({ children, className }: ComponentSourceProps) {
  return (
    <CodeBlockWrapper expandButtonTitle="Expand" className={cn('overflow-hidden', className)}>
      {children}
    </CodeBlockWrapper>
  );
}
