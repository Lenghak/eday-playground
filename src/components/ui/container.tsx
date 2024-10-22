import React from "react";

import { cn } from "src/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  children: React.ReactNode;
}

export function Container({
  as: Component = "div",
  maxWidth = "xl",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto px-4",
        {
          "max-w-screen-sm": maxWidth === "sm",
          "max-w-screen-md": maxWidth === "md",
          "max-w-screen-lg": maxWidth === "lg",
          "max-w-screen-xl": maxWidth === "xl",
          "max-w-screen-2xl": maxWidth === "2xl",
          "max-w-full": maxWidth === "full",
        },
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
