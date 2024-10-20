import * as React from "react";

import { cn } from "@/lib/utils";

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { bool, oneOf, string } from "prop-types";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;
Separator.propTypes = {
  className: string,
  orientation: oneOf(["horizontal", "vertical"]),
  decorative: bool,
};

export { Separator };
