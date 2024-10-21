import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type PreAuthLayoutProps = ComponentPropsWithoutRef<"section">;

export function PreAuthLayout({
  children,
  className,
  ...props
}: PreAuthLayoutProps) {
  return (
    <section
      className={cn(className)}
      {...props}
    >
      {children}
    </section>
  );
}
