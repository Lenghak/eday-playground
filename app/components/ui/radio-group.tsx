import * as React from "react";
import { memo } from "react";

import { cn } from "@/lib/utils";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva, type VariantProps } from "class-variance-authority";
import { Circle } from "lucide-react";
import PropTypes from "prop-types";

const radioVariants = cva(
  "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      color: {
        default: "border-primary-500 text-primary focus-visible:ring-primary",
        secondary:
          "border-secondary-500 text-secondary focus-visible:ring-secondary",
        destructive:
          "border-destructive-500 text-destructive focus-visible:ring-destructive",
        slate: "border-slate-500 text-slate-500 focus-visible:ring-slate-500",
        gray: "border-gray-500 text-gray-500 focus-visible:ring-gray-500",
        zinc: "border-zinc-500 text-zinc-500 focus-visible:ring-zinc-500",
        neutral:
          "border-neutral-500 text-neutral-500 focus-visible:ring-neutral-500",
        stone: "border-stone-500 text-stone-500 focus-visible:ring-stone-500",
        red: "border-red-500 text-red-500 focus-visible:ring-red-500",
        orange:
          "border-orange-500 text-orange-500 focus-visible:ring-orange-500",
        amber: "border-amber-500 text-amber-500 focus-visible:ring-amber-500",
        yellow:
          "border-yellow-500 text-yellow-500 focus-visible:ring-yellow-500",
        lime: "border-lime-500 text-lime-500 focus-visible:ring-lime-500",
        green: "border-green-500 text-green-500 focus-visible:ring-green-500",
        emerald:
          "border-emerald-500 text-emerald-500 focus-visible:ring-emerald-500",
        teal: "border-teal-500 text-teal-500 focus-visible:ring-teal-500",
        cyan: "border-cyan-500 text-cyan-500 focus-visible:ring-cyan-500",
        sky: "border-sky-500 text-sky-500 focus-visible:ring-sky-500",
        blue: "border-blue-500 text-blue-500 focus-visible:ring-blue-500",
        indigo:
          "border-indigo-500 text-indigo-500 focus-visible:ring-indigo-500",
        violet:
          "border-violet-500 text-violet-500 focus-visible:ring-violet-500",
        purple:
          "border-purple-500 text-purple-500 focus-visible:ring-purple-500",
        fuchsia:
          "border-fuchsia-500 text-fuchsia-500 focus-visible:ring-fuchsia-500",
        pink: "border-pink-500 text-pink-500 focus-visible:ring-pink-500",
        rose: "border-rose-500 text-rose-500 focus-visible:ring-rose-500",
      },
    },
    defaultVariants: {
      color: "default",
    },
  },
);

const RadioGroupItem = memo(
  React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> &
      VariantProps<typeof radioVariants>
    // eslint-disable-next-line react/prop-types
  >(({ className, color, ...props }, ref) => (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(radioVariants({ color, className }))}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 animate-scale-in fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )),
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
RadioGroupItem.prototype = {
  className: PropTypes.string,
};

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
RadioGroup.propTypes = {
  className: PropTypes.string,
};

export { RadioGroup, RadioGroupItem };
