import * as React from "react";

import { cn } from "@/lib/utils";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";

const switchVariants = cva(
  "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-muted",
  {
    variants: {
      color: {
        default:
          "border-muted data-[state=checked]:border-primary-500 dark:data-[state=checked]:border-primary-800 focus-visible:ring-primary data-[state=checked]:bg-primary  dark:data-[state=checked]:bg-primary-600",
        secondary:
          "border-muted data-[state=checked]:border-secondary-500 dark:data-[state=checked]:border-secondary-800 focus-visible:ring-secondary data-[state=checked]:bg-secondary  dark:data-[state=checked]:bg-secondary-600",
        destructive:
          "border-muted data-[state=checked]:border-destructive-500 dark:data-[state=checked]:border-destructive-800 focus-visible:ring-destructive data-[state=checked]:bg-destructive  dark:data-[state=checked]:bg-destructive-600",
        slate:
          "border-muted data-[state=checked]:border-slate-500 dark:data-[state=checked]:border-slate-800 focus-visible:ring-slate-500 data-[state=checked]:bg-slate-500 dark:data-[state=checked]:bg-slate-600",
        gray: "border-muted data-[state=checked]:border-gray-500 dark:data-[state=checked]:border-gray-800 focus-visible:ring-gray-500 data-[state=checked]:bg-gray-500 dark:data-[state=checked]:bg-gray-600",
        zinc: "border-muted data-[state=checked]:border-zinc-500 dark:data-[state=checked]:border-zinc-800 focus-visible:ring-zinc-500 data-[state=checked]:bg-zinc-500 dark:data-[state=checked]:bg-zinc-600",
        neutral:
          "border-muted data-[state=checked]:border-neutral-500 dark:data-[state=checked]:border-neutral-800 focus-visible:ring-neutral-500 data-[state=checked]:bg-neutral-500 dark:data-[state=checked]:bg-neutral-600",
        stone:
          "border-muted data-[state=checked]:border-stone-500 dark:data-[state=checked]:border-stone-800 focus-visible:ring-stone-500 data-[state=checked]:bg-stone-500 dark:data-[state=checked]:bg-stone-600",
        red: "border-muted data-[state=checked]:border-red-500 dark:data-[state=checked]:border-red-800 focus-visible:ring-red-500 data-[state=checked]:bg-red-500 dark:data-[state=checked]:bg-red-600",
        orange:
          "border-muted data-[state=checked]:border-orange-500 dark:data-[state=checked]:border-orange-800 focus-visible:ring-orange-500 data-[state=checked]:bg-orange-500 dark:data-[state=checked]:bg-orange-600",
        amber:
          "border-muted data-[state=checked]:border-amber-500 dark:data-[state=checked]:border-amber-800 focus-visible:ring-amber-500 data-[state=checked]:bg-amber-500 dark:data-[state=checked]:bg-amber-600",
        yellow:
          "border-muted data-[state=checked]:border-yellow-500 dark:data-[state=checked]:border-yellow-800 focus-visible:ring-yellow-500 data-[state=checked]:bg-yellow-500 dark:data-[state=checked]:bg-yellow-600",
        lime: "border-muted data-[state=checked]:border-lime-500 dark:data-[state=checked]:border-lime-800 focus-visible:ring-lime-500 data-[state=checked]:bg-lime-500 dark:data-[state=checked]:bg-lime-600",
        green:
          "border-muted data-[state=checked]:border-green-500 dark:data-[state=checked]:border-green-800 focus-visible:ring-green-500 data-[state=checked]:bg-green-500 dark:data-[state=checked]:bg-green-600",
        emerald:
          "border-muted data-[state=checked]:border-emerald-500 dark:data-[state=checked]:border-emerald-800 focus-visible:ring-emerald-500 data-[state=checked]:bg-emerald-500 dark:data-[state=checked]:bg-emerald-600",
        teal: "border-muted data-[state=checked]:border-teal-500 dark:data-[state=checked]:border-teal-800 focus-visible:ring-teal-500 data-[state=checked]:bg-teal-500 dark:data-[state=checked]:bg-teal-600",
        cyan: "border-muted data-[state=checked]:border-cyan-500 dark:data-[state=checked]:border-cyan-800 focus-visible:ring-cyan-500 data-[state=checked]:bg-cyan-500 dark:data-[state=checked]:bg-cyan-600",
        sky: "border-muted data-[state=checked]:border-sky-500 dark:data-[state=checked]:border-sky-800 focus-visible:ring-sky-500 data-[state=checked]:bg-sky-500 dark:data-[state=checked]:bg-sky-600",
        blue: "border-muted data-[state=checked]:border-blue-500 dark:data-[state=checked]:border-blue-800 focus-visible:ring-blue-500 data-[state=checked]:bg-blue-500 dark:data-[state=checked]:bg-blue-600",
        indigo:
          "border-muted data-[state=checked]:border-indigo-500 dark:data-[state=checked]:border-indigo-800 focus-visible:ring-indigo-500 data-[state=checked]:bg-indigo-500 dark:data-[state=checked]:bg-indigo-600",
        violet:
          "border-muted data-[state=checked]:border-violet-500 dark:data-[state=checked]:border-violet-800 focus-visible:ring-violet-500 data-[state=checked]:bg-violet-500 dark:data-[state=checked]:bg-violet-600",
        purple:
          "border-muted data-[state=checked]:border-purple-500 dark:data-[state=checked]:border-purple-800 focus-visible:ring-purple-500 data-[state=checked]:bg-purple-500 dark:data-[state=checked]:bg-purple-600",
        fuchsia:
          "border-muted data-[state=checked]:border-fuchsia-500 dark:data-[state=checked]:border-fuchsia-800 focus-visible:ring-fuchsia-500 data-[state=checked]:bg-fuchsia-500 dark:data-[state=checked]:bg-fuchsia-600",
        pink: "border-muted data-[state=checked]:border-pink-500 dark:data-[state=checked]:border-pink-800 focus-visible:ring-pink-500 data-[state=checked]:bg-pink-500 dark:data-[state=checked]:bg-pink-600",
        rose: "border-muted data-[state=checked]:border-rose-500 dark:data-[state=checked]:border-rose-800 focus-visible:ring-rose-500 data-[state=checked]:bg-rose-500 dark:data-[state=checked]:bg-rose-600",
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
        "bg-white",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
