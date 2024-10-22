import * as React from "react";

import { cn } from "@/lib/utils";

import * as SliderPrimitive from "@radix-ui/react-slider";
import { cva, type VariantProps } from "class-variance-authority";

const sliderVariants = cva(
  "relative flex w-full touch-none select-none items-center",
  {
    variants: {
      color: {
        default:
          "[&_[data-slider-thumb]]:border-primary-100 dark:[&_[data-slider-thumb]]:border-primary-800 [&_[data-slider-range]]:bg-primary [&_[data-slider-thumb]]:bg-primary [&_[data-slider-thumb]]:focus-visible:ring-primary [&_[data-slider-track]]:bg-primary/20",
        secondary:
          "[&_[data-slider-thumb]]:border-secondary-100 dark:[&_[data-slider-thumb]]:border-secondary-800 [&_[data-slider-range]]:bg-secondary [&_[data-slider-thumb]]:bg-secondary [&_[data-slider-thumb]]:focus-visible:ring-secondary [&_[data-slider-track]]:bg-secondary/20",
        destructive:
          "[&_[data-slider-thumb]]:border-destructive-100 dark:[&_[data-slider-thumb]]:border-destructive-800 [&_[data-slider-range]]:bg-destructive [&_[data-slider-thumb]]:bg-destructive [&_[data-slider-thumb]]:focus-visible:ring-destructive [&_[data-slider-track]]:bg-destructive/20",
        slate:
          "[&_[data-slider-range]]:bg-slate-500 [&_[data-slider-thumb]]:border-slate-100 [&_[data-slider-thumb]]:bg-slate-500 [&_[data-slider-thumb]]:focus-visible:ring-slate-500 dark:[&_[data-slider-thumb]]:border-slate-800 [&_[data-slider-track]]:bg-slate-500/20",
        gray: "[&_[data-slider-range]]:bg-gray-500 [&_[data-slider-thumb]]:border-gray-100 [&_[data-slider-thumb]]:bg-gray-500 [&_[data-slider-thumb]]:focus-visible:ring-gray-500 dark:[&_[data-slider-thumb]]:border-gray-800 [&_[data-slider-track]]:bg-gray-500/20",
        zinc: "[&_[data-slider-range]]:bg-zinc-500 [&_[data-slider-thumb]]:border-zinc-100 [&_[data-slider-thumb]]:bg-zinc-500 [&_[data-slider-thumb]]:focus-visible:ring-zinc-500 dark:[&_[data-slider-thumb]]:border-zinc-800 [&_[data-slider-track]]:bg-zinc-500/20",
        neutral:
          "[&_[data-slider-range]]:bg-neutral-500 [&_[data-slider-thumb]]:border-neutral-100 [&_[data-slider-thumb]]:bg-neutral-500 [&_[data-slider-thumb]]:focus-visible:ring-neutral-500 dark:[&_[data-slider-thumb]]:border-neutral-800 [&_[data-slider-track]]:bg-neutral-500/20",
        stone:
          "[&_[data-slider-range]]:bg-stone-500 [&_[data-slider-thumb]]:border-stone-100 [&_[data-slider-thumb]]:bg-stone-500 [&_[data-slider-thumb]]:focus-visible:ring-stone-500 dark:[&_[data-slider-thumb]]:border-stone-800 [&_[data-slider-track]]:bg-stone-500/20",
        red: "[&_[data-slider-range]]:bg-red-500 [&_[data-slider-thumb]]:border-red-100 [&_[data-slider-thumb]]:bg-red-500 [&_[data-slider-thumb]]:focus-visible:ring-red-500 dark:[&_[data-slider-thumb]]:border-red-800 [&_[data-slider-track]]:bg-red-500/20",
        orange:
          "[&_[data-slider-range]]:bg-orange-500 [&_[data-slider-thumb]]:border-orange-100 [&_[data-slider-thumb]]:bg-orange-500 [&_[data-slider-thumb]]:focus-visible:ring-orange-500 dark:[&_[data-slider-thumb]]:border-orange-800 [&_[data-slider-track]]:bg-orange-500/20",
        amber:
          "[&_[data-slider-range]]:bg-amber-500 [&_[data-slider-thumb]]:border-amber-100 [&_[data-slider-thumb]]:bg-amber-500 [&_[data-slider-thumb]]:focus-visible:ring-amber-500 dark:[&_[data-slider-thumb]]:border-amber-800 [&_[data-slider-track]]:bg-amber-500/20",
        yellow:
          "[&_[data-slider-range]]:bg-yellow-500 [&_[data-slider-thumb]]:border-yellow-100 [&_[data-slider-thumb]]:bg-yellow-500 [&_[data-slider-thumb]]:focus-visible:ring-yellow-500 dark:[&_[data-slider-thumb]]:border-yellow-800 [&_[data-slider-track]]:bg-yellow-500/20",
        lime: "[&_[data-slider-range]]:bg-lime-500 [&_[data-slider-thumb]]:border-lime-100 [&_[data-slider-thumb]]:bg-lime-500 [&_[data-slider-thumb]]:focus-visible:ring-lime-500 dark:[&_[data-slider-thumb]]:border-lime-800 [&_[data-slider-track]]:bg-lime-500/20",
        green:
          "[&_[data-slider-range]]:bg-green-500 [&_[data-slider-thumb]]:border-green-100 [&_[data-slider-thumb]]:bg-green-500 [&_[data-slider-thumb]]:focus-visible:ring-green-500 dark:[&_[data-slider-thumb]]:border-green-800 [&_[data-slider-track]]:bg-green-500/20",
        emerald:
          "[&_[data-slider-range]]:bg-emerald-500 [&_[data-slider-thumb]]:border-emerald-100 [&_[data-slider-thumb]]:bg-emerald-500 [&_[data-slider-thumb]]:focus-visible:ring-emerald-500 dark:[&_[data-slider-thumb]]:border-emerald-800 [&_[data-slider-track]]:bg-emerald-500/20",
        teal: "[&_[data-slider-range]]:bg-teal-500 [&_[data-slider-thumb]]:border-teal-100 [&_[data-slider-thumb]]:bg-teal-500 [&_[data-slider-thumb]]:focus-visible:ring-teal-500 dark:[&_[data-slider-thumb]]:border-teal-800 [&_[data-slider-track]]:bg-teal-500/20",
        cyan: "[&_[data-slider-range]]:bg-cyan-500 [&_[data-slider-thumb]]:border-cyan-100 [&_[data-slider-thumb]]:bg-cyan-500 [&_[data-slider-thumb]]:focus-visible:ring-cyan-500 dark:[&_[data-slider-thumb]]:border-cyan-800 [&_[data-slider-track]]:bg-cyan-500/20",
        sky: "[&_[data-slider-range]]:bg-sky-500 [&_[data-slider-thumb]]:border-sky-100 [&_[data-slider-thumb]]:bg-sky-500 [&_[data-slider-thumb]]:focus-visible:ring-sky-500 dark:[&_[data-slider-thumb]]:border-sky-800 [&_[data-slider-track]]:bg-sky-500/20",
        blue: "[&_[data-slider-range]]:bg-blue-500 [&_[data-slider-thumb]]:border-blue-100 [&_[data-slider-thumb]]:bg-blue-500 [&_[data-slider-thumb]]:focus-visible:ring-blue-500 dark:[&_[data-slider-thumb]]:border-blue-800 [&_[data-slider-track]]:bg-blue-500/20",
        indigo:
          "[&_[data-slider-range]]:bg-indigo-500 [&_[data-slider-thumb]]:border-indigo-100 [&_[data-slider-thumb]]:bg-indigo-500 [&_[data-slider-thumb]]:focus-visible:ring-indigo-500 dark:[&_[data-slider-thumb]]:border-indigo-800 [&_[data-slider-track]]:bg-indigo-500/20",
        violet:
          "[&_[data-slider-range]]:bg-violet-500 [&_[data-slider-thumb]]:border-violet-100 [&_[data-slider-thumb]]:bg-violet-500 [&_[data-slider-thumb]]:focus-visible:ring-violet-500 dark:[&_[data-slider-thumb]]:border-violet-800 [&_[data-slider-track]]:bg-violet-500/20",
        purple:
          "[&_[data-slider-range]]:bg-purple-500 [&_[data-slider-thumb]]:border-purple-100 [&_[data-slider-thumb]]:bg-purple-500 [&_[data-slider-thumb]]:focus-visible:ring-purple-500 dark:[&_[data-slider-thumb]]:border-purple-800 [&_[data-slider-track]]:bg-purple-500/20",
        fuchsia:
          "[&_[data-slider-range]]:bg-fuchsia-500 [&_[data-slider-thumb]]:border-fuchsia-100 [&_[data-slider-thumb]]:bg-fuchsia-500 [&_[data-slider-thumb]]:focus-visible:ring-fuchsia-500 dark:[&_[data-slider-thumb]]:border-fuchsia-800 [&_[data-slider-track]]:bg-fuchsia-500/20",
        pink: "[&_[data-slider-range]]:bg-pink-500 [&_[data-slider-thumb]]:border-pink-100 [&_[data-slider-thumb]]:bg-pink-500 [&_[data-slider-thumb]]:focus-visible:ring-pink-500 dark:[&_[data-slider-thumb]]:border-pink-800 [&_[data-slider-track]]:bg-pink-500/20",
        rose: "[&_[data-slider-range]]:bg-rose-500 [&_[data-slider-thumb]]:border-rose-100 [&_[data-slider-thumb]]:bg-rose-500 [&_[data-slider-thumb]]:focus-visible:ring-rose-500 dark:[&_[data-slider-thumb]]:border-rose-800 [&_[data-slider-track]]:bg-rose-500/20",
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
          "border-primary-100 dark:border-primary-800 bg-primary focus-visible:ring-primary",
        secondary:
          "border-secondary-100 dark:border-secondary-800 bg-secondary focus-visible:ring-secondary",
        destructive:
          "border-destructive-100 dark:border-destructive-800 bg-destructive focus-visible:ring-destructive",
        slate:
          "border-slate-100 bg-slate-500 focus-visible:ring-slate-500 dark:border-slate-800",
        gray: "border-gray-100 bg-gray-500 focus-visible:ring-gray-500 dark:border-gray-800",
        zinc: "zinc-500 border-zinc-100 bg-zinc-500 focus-visible:ring dark:border-zinc-800",
        neutral:
          "border-neutral-100 bg-neutral-500 focus-visible:ring-neutral-500 dark:border-neutral-800",
        stone:
          "border-stone-100 bg-stone-500 focus-visible:ring-stone-500 dark:border-stone-800",
        red: "border-red-100 bg-red-500 focus-visible:ring-red-500 dark:border-red-800",
        orange:
          "border-orange-100 bg-orange-500 focus-visible:ring-orange-500 dark:border-orange-800",
        amber:
          "border-amber-100 bg-amber-500 focus-visible:ring-amber-500 dark:border-amber-800",
        yellow:
          "border-yellow-100 bg-yellow-500 focus-visible:ring-yellow-500 dark:border-yellow-800",
        lime: "border-lime-100 bg-lime-500 focus-visible:ring-lime-500 dark:border-lime-800",
        green:
          "border-green-100 bg-green-500 focus-visible:ring-green-500 dark:border-green-800",
        emerald:
          "border-emerald-100 bg-emerald-500 focus-visible:ring-emerald-500 dark:border-emerald-800",
        teal: "border-teal-100 bg-teal-500 focus-visible:ring-teal-500 dark:border-teal-800",
        cyan: "border-cyan-100 bg-cyan-500 focus-visible:ring-cyan-500 dark:border-cyan-800",
        sky: "border-sky-100 bg-sky-500 focus-visible:ring-sky-500 dark:border-sky-800",
        blue: "border-blue-100 bg-blue-500 focus-visible:ring-blue-500 dark:border-blue-800",
        indigo:
          "border-indigo-100 bg-indigo-500 focus-visible:ring-indigo-500 dark:border-indigo-800",
        violet:
          "border-violet-100 bg-violet-500 focus-visible:ring-violet-500 dark:border-violet-800",
        purple:
          "border-purple-100 bg-purple-500 focus-visible:ring-purple-500 dark:border-purple-800",
        fuchsia:
          "border-fuchsia-100 bg-fuchsia-500 focus-visible:ring-fuchsia-500 dark:border-fuchsia-800",
        pink: "border-pink-100 bg-pink-500 focus-visible:ring-pink-500 dark:border-pink-800",
        rose: "border-rose-100 bg-rose-500 focus-visible:ring-rose-500 dark:border-rose-800",
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
