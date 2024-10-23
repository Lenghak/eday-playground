import type { ComponentPropsWithoutRef } from "react";

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
      {children}
    </Container>
  );
}
