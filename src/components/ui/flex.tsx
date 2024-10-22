import React from "react";

import { cn } from "src/lib/utils";

export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  inline?: boolean;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  items?: "start" | "end" | "center" | "baseline" | "stretch";
  children: React.ReactNode;
}

export function Flex({
  as: Component = "div",
  inline = false,
  direction = "row",
  wrap = "nowrap",
  justify = "start",
  items = "stretch",
  className,
  children,
  ...props
}: FlexProps) {
  return (
    <Component
      className={cn(
        inline ? "inline-flex" : "flex",
        `flex-${direction}`,
        `flex-${wrap}`,
        `justify-${justify}`,
        `items-${items}`,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
