import * as React from "react";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, type VariantProps } from "class-variance-authority";
import { Check } from "lucide-react";
import { cn } from "src/lib/utils";

// Memoize the Check component
const MemoizedCheck = React.memo(Check);

const checkboxVariants = cva(
  "peer h-4 w-4 shrink-0 rounded-sm border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary transition-all",
  {
    variants: {
      color: {
        default:
          "border-primary-500 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:ring-primary",
        secondary:
          "border-secondary-500 data-[state=checked]:border-secondary data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground focus-visible:ring-secondary",
        destructive:
          "border-destructive-500 data-[state=checked]:border-destructive data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground focus-visible:ring-destructive",
        slate:
          "border-slate-500 data-[state=checked]:border-slate-500 data-[state=checked]:bg-slate-500 data-[state=checked]:text-white dark:data-[state=checked]:text-slate-950 focus-visible:ring-slate-500",
        gray: "border-gray-500 data-[state=checked]:border-gray-500 data-[state=checked]:bg-gray-500 data-[state=checked]:text-white dark:data-[state=checked]:text-gray-950 focus-visible:ring-gray-500",
        zinc: "border-zinc-500 data-[state=checked]:border-zinc-500 data-[state=checked]:bg-zinc-500 data-[state=checked]:text-white dark:data-[state=checked]:text-zinc-950 focus-visible:ring-zinc-500",
        neutral:
          "border-neutral-500 data-[state=checked]:border-neutral-500 data-[state=checked]:bg-neutral-500 data-[state=checked]:text-white dark:data-[state=checked]:text-neutral-950 focus-visible:ring-neutral-500",
        stone:
          "border-stone-500 data-[state=checked]:border-stone-500 data-[state=checked]:bg-stone-500 data-[state=checked]:text-white dark:data-[state=checked]:text-stone-950 focus-visible:ring-stone-500",
        red: "border-red-500 data-[state=checked]:border-red-500 data-[state=checked]:bg-red-500 data-[state=checked]:text-white dark:data-[state=checked]:text-red-950 focus-visible:ring-red-500",
        orange:
          "border-orange-500 data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500 data-[state=checked]:text-white dark:data-[state=checked]:text-orange-950 focus-visible:ring-orange-500",
        amber:
          "border-amber-500 data-[state=checked]:border-amber-500 data-[state=checked]:bg-amber-500 data-[state=checked]:text-white dark:data-[state=checked]:text-amber-950 focus-visible:ring-amber-500",
        yellow:
          "border-yellow-500 data-[state=checked]:border-yellow-500 data-[state=checked]:bg-yellow-500 data-[state=checked]:text-white dark:data-[state=checked]:text-yellow-950 focus-visible:ring-yellow-500",
        lime: "border-lime-500 data-[state=checked]:border-lime-500 data-[state=checked]:bg-lime-500 data-[state=checked]:text-white dark:data-[state=checked]:text-lime-950 focus-visible:ring-lime-500",
        green:
          "border-green-500 data-[state=checked]:border-green-500 data-[state=checked]:bg-green-500 data-[state=checked]:text-white dark:data-[state=checked]:text-green-950 focus-visible:ring-green-500",
        emerald:
          "border-emerald-500 data-[state=checked]:border-emerald-500 data-[state=checked]:bg-emerald-500 data-[state=checked]:text-white dark:data-[state=checked]:text-emerald-950 focus-visible:ring-emerald-500",
        teal: "border-teal-500 data-[state=checked]:border-teal-500 data-[state=checked]:bg-teal-500 data-[state=checked]:text-white dark:data-[state=checked]:text-teal-950 focus-visible:ring-teal-500",
        cyan: "border-cyan-500 data-[state=checked]:border-cyan-500 data-[state=checked]:bg-cyan-500 data-[state=checked]:text-white dark:data-[state=checked]:text-cyan-950 focus-visible:ring-cyan-500",
        sky: "border-sky-500 data-[state=checked]:border-sky-500 data-[state=checked]:bg-sky-500 data-[state=checked]:text-white dark:data-[state=checked]:text-sky-950 focus-visible:ring-sky-500",
        blue: "border-blue-500 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:text-white dark:data-[state=checked]:text-blue-950 focus-visible:ring-blue-500",
        indigo:
          "border-indigo-500 data-[state=checked]:border-indigo-500 data-[state=checked]:bg-indigo-500 data-[state=checked]:text-white dark:data-[state=checked]:text-indigo-950 focus-visible:ring-indigo-500",
        violet:
          "border-violet-500 data-[state=checked]:border-violet-500 data-[state=checked]:bg-violet-500 data-[state=checked]:text-white dark:data-[state=checked]:text-violet-950 focus-visible:ring-violet-500",
        purple:
          "border-purple-500 data-[state=checked]:border-purple-500 data-[state=checked]:bg-purple-500 data-[state=checked]:text-white dark:data-[state=checked]:text-purple-950 focus-visible:ring-purple-500",
        fuchsia:
          "border-fuchsia-500 data-[state=checked]:border-fuchsia-500 data-[state=checked]:bg-fuchsia-500 data-[state=checked]:text-white dark:data-[state=checked]:text-fuchsia-950 focus-visible:ring-fuchsia-500",
        pink: "border-pink-500 data-[state=checked]:border-pink-500 data-[state=checked]:bg-pink-500 data-[state=checked]:text-white dark:data-[state=checked]:text-pink-950 focus-visible:ring-pink-500",
        rose: "border-rose-500 data-[state=checked]:border-rose-500 data-[state=checked]:bg-rose-500 data-[state=checked]:text-white dark:data-[state=checked]:text-rose-950 focus-visible:ring-rose-500",
      },
    },
    defaultVariants: {
      color: "default",
    },
  },
);

export interface CheckboxProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
      "color"
    >,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, color, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxVariants({ color, className }))}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <MemoizedCheck className="h-3 w-3 animate-check-mark stroke-[0.15rem]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
