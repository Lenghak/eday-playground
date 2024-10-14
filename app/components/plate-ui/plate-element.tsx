import { forwardRef } from "react";

import { cn } from "@udecode/cn";
import type { PlateElementProps } from "@udecode/plate-common/react";
import { PlateElement as PlateElementPrimitive } from "@udecode/plate-common/react";
import { useBlockSelectableStore } from "@udecode/plate-selection/react";

import { BlockSelection } from "./block-selection";

export const PlateElement = forwardRef<HTMLDivElement, PlateElementProps>(
  ({ children, className, ...props }: PlateElementProps, ref) => {
    const selectable = useBlockSelectableStore().get.selectable();

    return (
      <PlateElementPrimitive
        ref={ref}
        className={cn("relative", className)}
        {...props}
      >
        {children}

        {selectable && <BlockSelection />}
      </PlateElementPrimitive>
    );
  },
);
PlateElement.displayName = "PlateElement";
