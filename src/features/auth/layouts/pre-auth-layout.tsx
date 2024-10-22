import type { ComponentPropsWithoutRef } from "react";

import { ThemeToggle } from "@/components/custom/theme-toggle";
import { Container } from "@/components/ui/container";
import { type FlexProps } from "@/components/ui/flex";

import { cn } from "@/lib/utils";

type PreAuthLayoutProps = Partial<FlexProps> &
  ComponentPropsWithoutRef<"section">;

export function PreAuthLayout({
  children,
  className,
  ...props
}: PreAuthLayoutProps) {
  return (
    <Container
      as={"main"}
      className={cn("h-full", className)}
      {...props}
    >
      <ThemeToggle className="absolute right-4 top-4 rounded-full" />
      {children}
    </Container>
  );
}
