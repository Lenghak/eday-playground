import type { PropsWithChildren } from "react";

import { DotPattern } from "@/components/magic-ui/dot-pattern";
import { Box } from "@/components/ui/box";

import { cn } from "@/lib/utils";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Box
      as={"main"}
      className="relative h-full w-full"
    >
      {children}
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "z-0 [mask-image:radial-gradient(75vw_circle_at_center,hsl(var(--background)),transparent)] dark:fill-foreground/20",
        )}
      />
    </Box>
  );
}
