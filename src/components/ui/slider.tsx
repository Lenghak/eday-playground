import * as React from "react";

import * as SliderPrimitive from "@radix-ui/react-slider";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "src/lib/utils";

const sliderVariants = cva(
  "relative flex w-full touch-none select-none items-center",
  {
    variants: {
      color: {
        default:
          "[&_[data-slider-thumb]]:bg-primary [&_[data-slider-thumb]]:border-primary-100 dark:[&_[data-slider-thumb]]:border-primary-800 [&_[data-slider-thumb]]:focus-visible:ring-primary [&_[data-slider-track]]:bg-primary/20 [&_[data-slider-range]]:bg-primary",
        secondary:
          "[&_[data-slider-thumb]]:bg-secondary [&_[data-slider-thumb]]:border-secondary-100 dark:[&_[data-slider-thumb]]:border-secondary-800 [&_[data-slider-thumb]]:focus-visible:ring-secondary [&_[data-slider-track]]:bg-secondary/20 [&_[data-slider-range]]:bg-secondary",
        destructive:
          "[&_[data-slider-thumb]]:bg-destructive [&_[data-slider-thumb]]:border-destructive-100 dark:[&_[data-slider-thumb]]:border-destructive-800 [&_[data-slider-thumb]]:focus-visible:ring-destructive [&_[data-slider-track]]:bg-destructive/20 [&_[data-slider-range]]:bg-destructive",
        slate:
          "[&_[data-slider-thumb]]:bg-slate-500 [&_[data-slider-thumb]]:border-slate-100 dark:[&_[data-slider-thumb]]:border-slate-800 [&_[data-slider-thumb]]:focus-visible:ring-slate-500 [&_[data-slider-track]]:bg-slate-500/20 [&_[data-slider-range]]:bg-slate-500",
        gray: "[&_[data-slider-thumb]]:bg-gray-500 [&_[data-slider-thumb]]:border-gray-100 dark:[&_[data-slider-thumb]]:border-gray-800 [&_[data-slider-thumb]]:focus-visible:ring-gray-500 [&_[data-slider-track]]:bg-gray-500/20 [&_[data-slider-range]]:bg-gray-500",
        zinc: "[&_[data-slider-thumb]]:bg-zinc-500 [&_[data-slider-thumb]]:border-zinc-100 dark:[&_[data-slider-thumb]]:border-zinc-800 [&_[data-slider-thumb]]:focus-visible:ring-zinc-500 [&_[data-slider-track]]:bg-zinc-500/20 [&_[data-slider-range]]:bg-zinc-500",
        neutral:
          "[&_[data-slider-thumb]]:bg-neutral-500 [&_[data-slider-thumb]]:border-neutral-100 dark:[&_[data-slider-thumb]]:border-neutral-800 [&_[data-slider-thumb]]:focus-visible:ring-neutral-500 [&_[data-slider-track]]:bg-neutral-500/20 [&_[data-slider-range]]:bg-neutral-500",
        stone:
          "[&_[data-slider-thumb]]:bg-stone-500 [&_[data-slider-thumb]]:border-stone-100 dark:[&_[data-slider-thumb]]:border-stone-800 [&_[data-slider-thumb]]:focus-visible:ring-stone-500 [&_[data-slider-track]]:bg-stone-500/20 [&_[data-slider-range]]:bg-stone-500",
        red: "[&_[data-slider-thumb]]:bg-red-500 [&_[data-slider-thumb]]:border-red-100 dark:[&_[data-slider-thumb]]:border-red-800 [&_[data-slider-thumb]]:focus-visible:ring-red-500 [&_[data-slider-track]]:bg-red-500/20 [&_[data-slider-range]]:bg-red-500",
        orange:
          "[&_[data-slider-thumb]]:bg-orange-500 [&_[data-slider-thumb]]:border-orange-100 dark:[&_[data-slider-thumb]]:border-orange-800 [&_[data-slider-thumb]]:focus-visible:ring-orange-500 [&_[data-slider-track]]:bg-orange-500/20 [&_[data-slider-range]]:bg-orange-500",
        amber:
          "[&_[data-slider-thumb]]:bg-amber-500 [&_[data-slider-thumb]]:border-amber-100 dark:[&_[data-slider-thumb]]:border-amber-800 [&_[data-slider-thumb]]:focus-visible:ring-amber-500 [&_[data-slider-track]]:bg-amber-500/20 [&_[data-slider-range]]:bg-amber-500",
        yellow:
          "[&_[data-slider-thumb]]:bg-yellow-500 [&_[data-slider-thumb]]:border-yellow-100 dark:[&_[data-slider-thumb]]:border-yellow-800 [&_[data-slider-thumb]]:focus-visible:ring-yellow-500 [&_[data-slider-track]]:bg-yellow-500/20 [&_[data-slider-range]]:bg-yellow-500",
        lime: "[&_[data-slider-thumb]]:bg-lime-500 [&_[data-slider-thumb]]:border-lime-100 dark:[&_[data-slider-thumb]]:border-lime-800 [&_[data-slider-thumb]]:focus-visible:ring-lime-500 [&_[data-slider-track]]:bg-lime-500/20 [&_[data-slider-range]]:bg-lime-500",
        green:
          "[&_[data-slider-thumb]]:bg-green-500 [&_[data-slider-thumb]]:border-green-100 dark:[&_[data-slider-thumb]]:border-green-800 [&_[data-slider-thumb]]:focus-visible:ring-green-500 [&_[data-slider-track]]:bg-green-500/20 [&_[data-slider-range]]:bg-green-500",
        emerald:
          "[&_[data-slider-thumb]]:bg-emerald-500 [&_[data-slider-thumb]]:border-emerald-100 dark:[&_[data-slider-thumb]]:border-emerald-800 [&_[data-slider-thumb]]:focus-visible:ring-emerald-500 [&_[data-slider-track]]:bg-emerald-500/20 [&_[data-slider-range]]:bg-emerald-500",
        teal: "[&_[data-slider-thumb]]:bg-teal-500 [&_[data-slider-thumb]]:border-teal-100 dark:[&_[data-slider-thumb]]:border-teal-800 [&_[data-slider-thumb]]:focus-visible:ring-teal-500 [&_[data-slider-track]]:bg-teal-500/20 [&_[data-slider-range]]:bg-teal-500",
        cyan: "[&_[data-slider-thumb]]:bg-cyan-500 [&_[data-slider-thumb]]:border-cyan-100 dark:[&_[data-slider-thumb]]:border-cyan-800 [&_[data-slider-thumb]]:focus-visible:ring-cyan-500 [&_[data-slider-track]]:bg-cyan-500/20 [&_[data-slider-range]]:bg-cyan-500",
        sky: "[&_[data-slider-thumb]]:bg-sky-500 [&_[data-slider-thumb]]:border-sky-100 dark:[&_[data-slider-thumb]]:border-sky-800 [&_[data-slider-thumb]]:focus-visible:ring-sky-500 [&_[data-slider-track]]:bg-sky-500/20 [&_[data-slider-range]]:bg-sky-500",
        blue: "[&_[data-slider-thumb]]:bg-blue-500 [&_[data-slider-thumb]]:border-blue-100 dark:[&_[data-slider-thumb]]:border-blue-800 [&_[data-slider-thumb]]:focus-visible:ring-blue-500 [&_[data-slider-track]]:bg-blue-500/20 [&_[data-slider-range]]:bg-blue-500",
        indigo:
          "[&_[data-slider-thumb]]:bg-indigo-500 [&_[data-slider-thumb]]:border-indigo-100 dark:[&_[data-slider-thumb]]:border-indigo-800 [&_[data-slider-thumb]]:focus-visible:ring-indigo-500 [&_[data-slider-track]]:bg-indigo-500/20 [&_[data-slider-range]]:bg-indigo-500",
        violet:
          "[&_[data-slider-thumb]]:bg-violet-500 [&_[data-slider-thumb]]:border-violet-100 dark:[&_[data-slider-thumb]]:border-violet-800 [&_[data-slider-thumb]]:focus-visible:ring-violet-500 [&_[data-slider-track]]:bg-violet-500/20 [&_[data-slider-range]]:bg-violet-500",
        purple:
          "[&_[data-slider-thumb]]:bg-purple-500 [&_[data-slider-thumb]]:border-purple-100 dark:[&_[data-slider-thumb]]:border-purple-800 [&_[data-slider-thumb]]:focus-visible:ring-purple-500 [&_[data-slider-track]]:bg-purple-500/20 [&_[data-slider-range]]:bg-purple-500",
        fuchsia:
          "[&_[data-slider-thumb]]:bg-fuchsia-500 [&_[data-slider-thumb]]:border-fuchsia-100 dark:[&_[data-slider-thumb]]:border-fuchsia-800 [&_[data-slider-thumb]]:focus-visible:ring-fuchsia-500 [&_[data-slider-track]]:bg-fuchsia-500/20 [&_[data-slider-range]]:bg-fuchsia-500",
        pink: "[&_[data-slider-thumb]]:bg-pink-500 [&_[data-slider-thumb]]:border-pink-100 dark:[&_[data-slider-thumb]]:border-pink-800 [&_[data-slider-thumb]]:focus-visible:ring-pink-500 [&_[data-slider-track]]:bg-pink-500/20 [&_[data-slider-range]]:bg-pink-500",
        rose: "[&_[data-slider-thumb]]:bg-rose-500 [&_[data-slider-thumb]]:border-rose-100 dark:[&_[data-slider-thumb]]:border-rose-800 [&_[data-slider-thumb]]:focus-visible:ring-rose-500 [&_[data-slider-track]]:bg-rose-500/20 [&_[data-slider-range]]:bg-rose-500",
      },
    },
    defaultVariants: {
      color: "default",
    },
  },
);

const sliderThumbVariant = cva(
  "block h-5 w-5 rounded-full border-2 bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      color: {
        default:
          "bg-primary border-primary-100 dark:border-primary-800 focus-visible:ring-primary",
        secondary:
          "bg-secondary border-secondary-100 dark:border-secondary-800 focus-visible:ring-secondary",
        destructive:
          "bg-destructive border-destructive-100 dark:border-destructive-800 focus-visible:ring-destructive",
        slate:
          "bg-slate-500 border-slate-100 dark:border-slate-800 focus-visible:ring-slate-500",
        gray: "bg-gray-500 border-gray-100 dark:border-gray-800 focus-visible:ring-gray-500",
        zinc: "bg-zinc-500 border-zinc-100 dark:border-zinc-800 focus-visible:ring zinc-500",
        neutral:
          "bg-neutral-500 border-neutral-100 dark:border-neutral-800 focus-visible:ring-neutral-500",
        stone:
          "bg-stone-500 border-stone-100 dark:border-stone-800 focus-visible:ring-stone-500",
        red: "bg-red-500 border-red-100 dark:border-red-800 focus-visible:ring-red-500",
        orange:
          "bg-orange-500 border-orange-100 dark:border-orange-800 focus-visible:ring-orange-500",
        amber:
          "bg-amber-500 border-amber-100 dark:border-amber-800 focus-visible:ring-amber-500",
        yellow:
          "bg-yellow-500 border-yellow-100 dark:border-yellow-800 focus-visible:ring-yellow-500",
        lime: "bg-lime-500 border-lime-100 dark:border-lime-800 focus-visible:ring-lime-500",
        green:
          "bg-green-500 border-green-100 dark:border-green-800 focus-visible:ring-green-500",
        emerald:
          "bg-emerald-500 border-emerald-100 dark:border-emerald-800 focus-visible:ring-emerald-500",
        teal: "bg-teal-500 border-teal-100 dark:border-teal-800 focus-visible:ring-teal-500",
        cyan: "bg-cyan-500 border-cyan-100 dark:border-cyan-800 focus-visible:ring-cyan-500",
        sky: "bg-sky-500 border-sky-100 dark:border-sky-800 focus-visible:ring-sky-500",
        blue: "bg-blue-500 border-blue-100 dark:border-blue-800 focus-visible:ring-blue-500",
        indigo:
          "bg-indigo-500 border-indigo-100 dark:border-indigo-800 focus-visible:ring-indigo-500",
        violet:
          "bg-violet-500 border-violet-100 dark:border-violet-800 focus-visible:ring-violet-500",
        purple:
          "bg-purple-500 border-purple-100 dark:border-purple-800 focus-visible:ring-purple-500",
        fuchsia:
          "bg-fuchsia-500 border-fuchsia-100 dark:border-fuchsia-800 focus-visible:ring-fuchsia-500",
        pink: "bg-pink-500 border-pink-100 dark:border-pink-800 focus-visible:ring-pink-500",
        rose: "bg-rose-500 border-rose-100 dark:border-rose-800 focus-visible:ring-rose-500",
      },
    },
    defaultVariants: {
      color: "default",
    },
  },
);

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> &
    VariantProps<typeof sliderVariants>
>(({ className, color, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(sliderVariants({ color, className }))}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range
        className="absolute h-full"
        data-slider-range=""
      />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(sliderThumbVariant({ color }))}
      data-slider-thumb=""
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
