import React from 'react';
import { cn } from '../utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  size?: 'small' | 'default' | 'large' | 'full';
}

export default function Container({
  children,
  className,
  as: Component = 'div',
  size = 'default'
}: ContainerProps) {
  // Define max widths based on size
  const maxWidths = {
    small: 'max-w-4xl',     // ~896px
    default: 'max-w-6xl',   // ~1152px
    large: 'max-w-7xl',     // ~1280px
    full: 'max-w-full'
  };

  return (
    <Component
      className={cn(
        'w-full mx-auto px-4 sm:px-6 lg:px-8',
        maxWidths[size],
        className
      )}
    >
      {children}
    </Component>
  );
}
