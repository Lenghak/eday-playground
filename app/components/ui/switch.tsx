import * as React from "react";

import { cn } from "@/lib/utils";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";

const switchVariants = cva(
  "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
  {
    variants: {
      color: {
        default:
          "border-primary-100 dark:border-primary-800 focus-visible:ring-primary",
        secondary:
          "border-secondary-100 dark:border-secondary-800 focus-visible:ring-secondary",
        destructive:
          "border-destructive-100 dark:border-destructive-800 focus-visible:ring-destructive",
        slate:
          "border-slate-100 dark:border-slate-800 focus-visible:ring-slate-500",
        gray: "border-gray-100 dark:border-gray-800 focus-visible:ring-gray-500",
        zinc: "border-zinc-100 dark:border-zinc-800 focus-visible:ring-zinc-500",
        neutral:
          "border-neutral-100 dark:border-neutral-800 focus-visible:ring-neutral-500",
        stone:
          "border-stone-100 dark:border-stone-800 focus-visible:ring-stone-500",
        red: "border-red-100 dark:border-red-800 focus-visible:ring-red-500",
        orange:
          "border-orange-100 dark:border-orange-800 focus-visible:ring-orange-500",
        amber:
          "border-amber-100 dark:border-amber-800 focus-visible:ring-amber-500",
        yellow:
          "border-yellow-100 dark:border-yellow-800 focus-visible:ring-yellow-500",
        lime: "border-lime-100 dark:border-lime-800 focus-visible:ring-lime-500",
        green:
          "border-green-100 dark:border-green-800 focus-visible:ring-green-500",
        emerald:
          "border-emerald-100 dark:border-emerald-800 focus-visible:ring-emerald-500",
        teal: "border-teal-100 dark:border-teal-800 focus-visible:ring-teal-500",
        cyan: "border-cyan-100 dark:border-cyan-800 focus-visible:ring-cyan-500",
        sky: "border-sky-100 dark:border-sky-800 focus-visible:ring-sky-500",
        blue: "border-blue-100 dark:border-blue-800 focus-visible:ring-blue-500",
        indigo:
          "border-indigo-100 dark:border-indigo-800 focus-visible:ring-indigo-500",
        violet:
          "border-violet-100 dark:border-violet-800 focus-visible:ring-violet-500",
        purple:
          "border-purple-100 dark:border-purple-800 focus-visible:ring-purple-500",
        fuchsia:
          "border-fuchsia-100 dark:border-fuchsia-800 focus-visible:ring-fuchsia-500",
        pink: "border-pink-100 dark:border-pink-800 focus-visible:ring-pink-500",
        rose: "border-rose-100 dark:border-rose-800 focus-visible:ring-rose-500",
      },
    },
    defaultVariants: {
      color: "default",
    },
  },
);

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> &
    VariantProps<typeof switchVariants>
>(({ className, color, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(switchVariants({ color, className }))}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
