import React from "react";

import { cn } from "src/lib/utils";

interface SpacerProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  size?: number;
}

export function Spacer({
  as: Component = "div",
  size = 4,
  className,
  ...props
}: SpacerProps) {
  return (
    <Component
      className={cn(`h-${size} w-${size}`, className)}
      {...props}
    />
  );
}
