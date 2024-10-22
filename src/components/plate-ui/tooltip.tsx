"use client";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef, useEffect, useState } from "react";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { withCn, withProps } from "@udecode/cn";

export const TooltipProvider = withProps(TooltipPrimitive.Provider, {
  delayDuration: 0,
  disableHoverableContent: true,
  skipDelayDuration: 0,
});

export const Tooltip = TooltipPrimitive.Root;

export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipPortal = TooltipPrimitive.Portal;

export const TooltipContent = withCn(
  withProps(TooltipPrimitive.Content, {
    sideOffset: 4,
  }),
  "z-50 overflow-hidden rounded-md bg-black px-3 py-1.5 text-sm font-semibold text-white shadow-md",
);

export function withTooltip<
  T extends React.ComponentType<any> | keyof HTMLElementTagNameMap,
>(Component: T) {
  return forwardRef<
    React.ElementRef<T>,
    {
      tooltipContentProps?: Omit<
        React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
        "children"
      >;
      tooltipProps?: Omit<
        React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>,
        "children"
      >;
      tooltip?: React.ReactNode;
    } & React.ComponentPropsWithoutRef<T> &
      Omit<TooltipPrimitive.TooltipProviderProps, "children">
  >(function ExtendComponent(
    {
      delayDuration = 0,
      disableHoverableContent = true,
      skipDelayDuration = 0,
      tooltip,
      tooltipContentProps,
      tooltipProps,
      ...props
    },
    ref,
  ) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    const component = (
      <Component
        ref={ref}
        {...(props as any)}
      />
    );

    if (tooltip && mounted) {
      return (
        <TooltipProvider
          delayDuration={delayDuration}
          disableHoverableContent={disableHoverableContent}
          skipDelayDuration={skipDelayDuration}
        >
          <Tooltip {...tooltipProps}>
            <TooltipTrigger asChild>{component}</TooltipTrigger>

            <TooltipPortal>
              <TooltipContent {...tooltipContentProps}>
                {tooltip}
              </TooltipContent>
            </TooltipPortal>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return component;
  });
}
