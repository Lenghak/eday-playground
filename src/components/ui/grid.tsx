import React from "react";

import { cn } from "src/lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  cols?: number;
  gap?: number;
  children: React.ReactNode;
}

export function Grid({
  as: Component = "div",
  cols = 1,
  gap = 4,
  className,
  children,
  ...props
}: GridProps) {
  return (
    <Component
      className={cn("grid", `grid-cols-${cols}`, `gap-${gap}`, className)}
      {...props}
    >
      {children}
    </Component>
  );
}
