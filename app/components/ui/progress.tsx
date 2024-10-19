import * as React from "react";

import { cn } from "@/lib/utils";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cva, type VariantProps } from "class-variance-authority";

const progressVariants = cva(
  "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
  {
    variants: {
      color: {
        default: "bg-secondary [&>div]:bg-primary",
        secondary:
          "bg-secondary-100 dark:bg-secondary-900 [&>div]:bg-secondary",
        destructive:
          "bg-destructive-100 dark:bg-destructive-900 [&>div]:bg-destructive",
        slate: "bg-slate-100 dark:bg-slate-900 [&>div]:bg-slate-500",
        gray: "bg-gray-100 dark:bg-gray-900 [&>div]:bg-gray-500",
        zinc: "bg-zinc-100 dark:bg-zinc-900 [&>div]:bg-zinc-500",
        neutral: "bg-neutral-100 dark:bg-neutral-900 [&>div]:bg-neutral-500",
        stone: "bg-stone-100 dark:bg-stone-900 [&>div]:bg-stone-500",
        red: "bg-red-100 dark:bg-red-900 [&>div]:bg-red-500",
        orange: "bg-orange-100 dark:bg-orange-900 [&>div]:bg-orange-500",
        amber: "bg-amber-100 dark:bg-amber-900 [&>div]:bg-amber-500",
        yellow: "bg-yellow-100 dark:bg-yellow-900 [&>div]:bg-yellow-500",
        lime: "bg-lime-100 dark:bg-lime-900 [&>div]:bg-lime-500",
        green: "bg-green-100 dark:bg-green-900 [&>div]:bg-green-500",
        emerald: "bg-emerald-100 dark:bg-emerald-900 [&>div]:bg-emerald-500",
        teal: "bg-teal-100 dark:bg-teal-900 [&>div]:bg-teal-500",
        cyan: "bg-cyan-100 dark:bg-cyan-900 [&>div]:bg-cyan-500",
        sky: "bg-sky-100 dark:bg-sky-900 [&>div]:bg-sky-500",
        blue: "bg-blue-100 dark:bg-blue-900 [&>div]:bg-blue-500",
        indigo: "bg-indigo-100 dark:bg-indigo-900 [&>div]:bg-indigo-500",
        violet: "bg-violet-100 dark:bg-violet-900 [&>div]:bg-violet-500",
        purple: "bg-purple-100 dark:bg-purple-900 [&>div]:bg-purple-500",
        fuchsia: "bg-fuchsia-100 dark:bg-fuchsia-900 [&>div]:bg-fuchsia-500",
        pink: "bg-pink-100 dark:bg-pink-900 [&>div]:bg-pink-500",
        rose: "bg-rose-100 dark:bg-rose-900 [&>div]:bg-rose-500",
      },
    },
    defaultVariants: {
      color: "default",
    },
  },
);

export interface ProgressProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
      "color"
    >,
    VariantProps<typeof progressVariants> {}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, color, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(progressVariants({ color, className }))}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
