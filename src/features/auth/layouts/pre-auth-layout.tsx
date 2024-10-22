import type { ComponentPropsWithoutRef } from "react";

import { Flex, type FlexProps } from "@/components/ui/flex";

import { cn } from "@/lib/utils";

type PreAuthLayoutProps = Partial<FlexProps> &
  ComponentPropsWithoutRef<"section">;

export function PreAuthLayout({
  children,
  className,
  ...props
}: PreAuthLayoutProps) {
  return (
    <Flex
      direction="column"
      items="center"
      justify="center"
      as={"section"}
      className={cn(className)}
      {...props}
    >
      {children}
    </Flex>
  );
}
