import * as React from "react";

import { cn } from "@/lib/utils";

import { cva, type VariantProps } from "class-variance-authority";
import { Circle } from "lucide-react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent",
        soft: "border-transparent",
        outline: "border bg-transparent bg-opacity-0",
      },
      dot: {
        true: "pl-1.5",
        false: "",
      },
      color: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/80 focus:ring-primary dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/80 focus:ring-destructive dark:bg-destructive dark:text-destructive-foreground dark:hover:bg-destructive/80",
        slate:
          "bg-slate-500 text-slate-50 hover:bg-slate-500/80 focus:ring-slate-500 dark:bg-slate-400 dark:text-slate-900 dark:hover:bg-slate-400/80",
        gray: "bg-gray-500 text-gray-50 hover:bg-gray-500/80 focus:ring-gray-500 dark:bg-gray-400 dark:text-gray-900 dark:hover:bg-gray-400/80",
        zinc: "bg-zinc-500 text-zinc-50 hover:bg-zinc-500/80 focus:ring-zinc-500 dark:bg-zinc-400 dark:text-zinc-900 dark:hover:bg-zinc-400/80",
        neutral:
          "bg-neutral-500 text-neutral-50 hover:bg-neutral-500/80 focus:ring-neutral-500 dark:bg-neutral-400 dark:text-neutral-900 dark:hover:bg-neutral-400/80",
        stone:
          "bg-stone-500 text-stone-50 hover:bg-stone-500/80 focus:ring-stone-500 dark:bg-stone-400 dark:text-stone-900 dark:hover:bg-stone-400/80",
        red: "bg-red-500 text-red-50 hover:bg-red-500/80 focus:ring-red-500 dark:bg-red-400 dark:text-red-900 dark:hover:bg-red-400/80",
        orange:
          "bg-orange-500 text-orange-50 hover:bg-orange-500/80 focus:ring-orange-500 dark:bg-orange-400 dark:text-orange-900 dark:hover:bg-orange-400/80",
        amber:
          "bg-amber-500 text-amber-50 hover:bg-amber-500/80 focus:ring-amber-500 dark:bg-amber-400 dark:text-amber-900 dark:hover:bg-amber-400/80",
        yellow:
          "bg-yellow-500 text-yellow-50 hover:bg-yellow-500/80 focus:ring-yellow-500 dark:bg-yellow-400 dark:text-yellow-900 dark:hover:bg-yellow-400/80",
        lime: "bg-lime-500 text-lime-50 hover:bg-lime-500/80 focus:ring-lime-500 dark:bg-lime-400 dark:text-lime-900 dark:hover:bg-lime-400/80",
        green:
          "bg-green-500 text-green-50 hover:bg-green-500/80 focus:ring-green-500 dark:bg-green-400 dark:text-green-900 dark:hover:bg-green-400/80",
        emerald:
          "bg-emerald-500 text-emerald-50 hover:bg-emerald-500/80 focus:ring-emerald-500 dark:bg-emerald-400 dark:text-emerald-900 dark:hover:bg-emerald-400/80",
        teal: "bg-teal-500 text-teal-50 hover:bg-teal-500/80 focus:ring-teal-500 dark:bg-teal-400 dark:text-teal-900 dark:hover:bg-teal-400/80",
        cyan: "bg-cyan-500 text-cyan-50 hover:bg-cyan-500/80 focus:ring-cyan-500 dark:bg-cyan-400 dark:text-cyan-900 dark:hover:bg-cyan-400/80",
        sky: "bg-sky-500 text-sky-50 hover:bg-sky-500/80 focus:ring-sky-500 dark:bg-sky-400 dark:text-sky-900 dark:hover:bg-sky-400/80",
        blue: "bg-blue-500 text-blue-50 hover:bg-blue-500/80 focus:ring-blue-500 dark:bg-blue-400 dark:text-blue-900 dark:hover:bg-blue-400/80",
        indigo:
          "bg-indigo-500 text-indigo-50 hover:bg-indigo-500/80 focus:ring-indigo-500 dark:bg-indigo-400 dark:text-indigo-900 dark:hover:bg-indigo-400/80",
        violet:
          "bg-violet-500 text-violet-50 hover:bg-violet-500/80 focus:ring-violet-500 dark:bg-violet-400 dark:text-violet-900 dark:hover:bg-violet-400/80",
        purple:
          "bg-purple-500 text-purple-50 hover:bg-purple-500/80 focus:ring-purple-500 dark:bg-purple-400 dark:text-purple-900 dark:hover:bg-purple-400/80",
        fuchsia:
          "bg-fuchsia-500 text-fuchsia-50 hover:bg-fuchsia-500/80 focus:ring-fuchsia-500 dark:bg-fuchsia-400 dark:text-fuchsia-900 dark:hover:bg-fuchsia-400/80",
        pink: "bg-pink-500 text-pink-50 hover:bg-pink-500/80 focus:ring-pink-500 dark:bg-pink-400 dark:text-pink-900 dark:hover:bg-pink-400/80",
        rose: "bg-rose-500 text-rose-50 hover:bg-rose-500/80 focus:ring-rose-500 dark:bg-rose-400 dark:text-rose-900 dark:hover:bg-rose-400/80",
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        color: "default",
        className:
          "text-primary border-primary dark:text-primary dark:border-primary",
      },
      {
        variant: "outline",
        color: "secondary",
        className:
          "text-secondary border-secondary dark:text-secondary dark:border-secondary",
      },
      {
        variant: "outline",
        color: "destructive",
        className:
          "text-destructive border-destructive dark:text-destructive dark:border-destructive",
      },
      {
        variant: "outline",
        color: "slate",
        className:
          "text-slate-500 border-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:border-slate-400 dark:hover:bg-slate-900",
      },
      {
        variant: "outline",
        color: "gray",
        className:
          "text-gray-500 border-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:border-gray-400 dark:hover:bg-gray-900",
      },
      {
        variant: "outline",
        color: "zinc",
        className:
          "text-zinc-500 border-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:border-zinc-400 dark:hover:bg-zinc-900",
      },
      {
        variant: "outline",
        color: "neutral",
        className:
          "text-neutral-500 border-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:border-neutral-400 dark:hover:bg-neutral-900",
      },
      {
        variant: "outline",
        color: "stone",
        className:
          "text-stone-500 border-stone-500 hover:bg-stone-100 dark:text-stone-400 dark:border-stone-400 dark:hover:bg-stone-900",
      },
      {
        variant: "outline",
        color: "red",
        className:
          "text-red-500 border-red-500 hover:bg-red-100 dark:text-red-400 dark:border-red-400 dark:hover:bg-red-900",
      },
      {
        variant: "outline",
        color: "orange",
        className:
          "text-orange-500 border-orange-500 hover:bg-orange-100 dark:text-orange-400 dark:border-orange-400 dark:hover:bg-orange-900",
      },
      {
        variant: "outline",
        color: "amber",
        className:
          "text-amber-500 border-amber-500 hover:bg-amber-100 dark:text-amber-400 dark:border-amber-400 dark:hover:bg-amber-900",
      },
      {
        variant: "outline",
        color: "yellow",
        className:
          "text-yellow-500 border-yellow-500 hover:bg-yellow-100 dark:text-yellow-400 dark:border-yellow-400 dark:hover:bg-yellow-900",
      },
      {
        variant: "outline",
        color: "lime",
        className:
          "text-lime-500 border-lime-500 hover:bg-lime-100 dark:text-lime-400 dark:border-lime-400 dark:hover:bg-lime-900",
      },
      {
        variant: "outline",
        color: "green",
        className:
          "text-green-500 border-green-500 hover:bg-green-100 dark:text-green-400 dark:border-green-400 dark:hover:bg-green-900",
      },
      {
        variant: "outline",
        color: "emerald",
        className:
          "text-emerald-500 border-emerald-500 hover:bg-emerald-100 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-emerald-900",
      },
      {
        variant: "outline",
        color: "teal",
        className:
          "text-teal-500 border-teal-500 hover:bg-teal-100 dark:text-teal-400 dark:border-teal-400 dark:hover:bg-teal-900",
      },
      {
        variant: "outline",
        color: "cyan",
        className:
          "text-cyan-500 border-cyan-500 hover:bg-cyan-100 dark:text-cyan-400 dark:border-cyan-400 dark:hover:bg-cyan-900",
      },
      {
        variant: "outline",
        color: "sky",
        className:
          "text-sky-500 border-sky-500 hover:bg-sky-100 dark:text-sky-400 dark:border-sky-400 dark:hover:bg-sky-900",
      },
      {
        variant: "outline",
        color: "blue",
        className:
          "text-blue-500 border-blue-500 hover:bg-blue-100 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900",
      },
      {
        variant: "outline",
        color: "indigo",
        className:
          "text-indigo-500 border-indigo-500 hover:bg-indigo-100 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-900",
      },
      {
        variant: "outline",
        color: "violet",
        className:
          "text-violet-500 border-violet-500 hover:bg-violet-100 dark:text-violet-400 dark:border-violet-400 dark:hover:bg-violet-900",
      },
      {
        variant: "outline",
        color: "purple",
        className:
          "text-purple-500 border-purple-500 hover:bg-purple-100 dark:text-purple-400 dark:border-purple-400 dark:hover:bg-purple-900",
      },
      {
        variant: "outline",
        color: "fuchsia",
        className:
          "text-fuchsia-500 border-fuchsia-500 hover:bg-fuchsia-100 dark:text-fuchsia-400 dark:border-fuchsia-400 dark:hover:bg-fuchsia-900",
      },
      {
        variant: "outline",
        color: "pink",
        className:
          "text-pink-500 border-pink-500 hover:bg-pink-100 dark:text-pink-400 dark:border-pink-400 dark:hover:bg-pink-900",
      },
      {
        variant: "outline",
        color: "rose",
        className:
          "text-rose-500 border-rose-500 hover:bg-rose-100 dark:text-rose-400 dark:border-rose-400 dark:hover:bg-rose-900",
      },
      {
        variant: "soft",
        color: "default",
        className:
          "bg-primary-200 text-primary-900 hover:bg-primary-500 hover:text-primary-50 dark:bg-primary-800 dark:text-primary-100 dark:hover:bg-primary-700 dark:hover:text-primary-50",
      },
      {
        variant: "soft",
        color: "secondary",
        className:
          "bg-secondary-200 text-secondary-900 hover:bg-secondary-500 hover:text-secondary-50 dark:bg-secondary-800 dark:text-secondary-100 dark:hover:bg-secondary-700 dark:hover:text-secondary-50",
      },
      {
        variant: "soft",
        color: "destructive",
        className:
          "bg-destructive-200 text-destructive-900 hover:bg-destructive-500 hover:text-destructive-50 dark:bg-destructive-800 dark:text-destructive-100 dark:hover:bg-destructive-700 dark:hover:text-destructive-50",
      },
      {
        variant: "soft",
        color: "slate",
        className:
          "bg-slate-200 text-slate-900 hover:bg-slate-500 hover:text-slate-50 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-50",
      },
      {
        variant: "soft",
        color: "gray",
        className:
          "bg-gray-200 text-gray-900 hover:bg-gray-500 hover:text-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700  dark:hover:text-gray-50",
      },
      {
        variant: "soft",
        color: "zinc",
        className:
          "bg-zinc-200 text-zinc-900 hover:bg-zinc-500 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 dark:hover:text-zinc-50",
      },
      {
        variant: "soft",
        color: "neutral",
        className:
          "bg-neutral-200 text-neutral-900 hover:bg-neutral-500 hover:text-neutral-50 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-50",
      },
      {
        variant: "soft",
        color: "stone",
        className:
          "bg-stone-200 text-stone-900 hover:bg-stone-500 hover:text-stone-50 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700 dark:hover:text-stone-50",
      },
      {
        variant: "soft",
        color: "red",
        className:
          "bg-red-200 text-red-900 hover:bg-red-500 hover:text-red-50 dark:bg-red-800 dark:text-red-100 dark:hover:bg-red-700 dark:hover:text-red-50",
      },
      {
        variant: "soft",
        color: "orange",
        className:
          "bg-orange-200 text-orange-900 hover:bg-orange-500 hover:text-orange-50 dark:bg-orange-800 dark:text-orange-100 dark:hover:bg-orange-700 dark:hover:text-orange-50",
      },
      {
        variant: "soft",
        color: "amber",
        className:
          "bg-amber-200 text-amber-900 hover:bg-amber-500 hover:text-amber-50 dark:bg-amber-800 dark:text-amber-100 dark:hover:bg-amber-700 dark:hover:text-amber-50",
      },
      {
        variant: "soft",
        color: "yellow",
        className:
          "bg-yellow-200 text-yellow-900 hover:bg-yellow-500 hover:text-yellow-50 dark:bg-yellow-800 dark:text-yellow-100 dark:hover:bg-yellow-700 dark:hover:text-yellow-50",
      },
      {
        variant: "soft",
        color: "lime",
        className:
          "bg-lime-200 text-lime-900 hover:bg-lime-500 hover:text-lime-50 dark:bg-lime-800 dark:text-lime-100 dark:hover:bg-lime-700 dark:hover:text-lime-50",
      },
      {
        variant: "soft",
        color: "green",
        className:
          "bg-green-200 text-green-900 hover:bg-green-500 hover:text-green-50 dark:bg-green-800 dark:text-green-100 dark:hover:bg-green-700 dark:hover:text-green-50",
      },
      {
        variant: "soft",
        color: "emerald",
        className:
          "bg-emerald-200 text-emerald-900 hover:bg-emerald-500 hover:text-emerald-50 dark:bg-emerald-800 dark:text-emerald-100 dark:hover:bg-emerald-700 dark:hover:text-emerald-50",
      },
      {
        variant: "soft",
        color: "teal",
        className:
          "bg-teal-200 text-teal-900 hover:bg-teal-500 hover:text-teal-50 dark:bg-teal-800 dark:text-teal-100 dark:hover:bg-teal-700 dark:hover:text-teal-50",
      },
      {
        variant: "soft",
        color: "cyan",
        className:
          "bg-cyan-200 text-cyan-900 hover:bg-cyan-500 hover:text-cyan-50 dark:bg-cyan-800 dark:text-cyan-100 dark:hover:bg-cyan-700 dark:hover:text-cyan-50",
      },
      {
        variant: "soft",
        color: "sky",
        className:
          "bg-sky-200 text-sky-900 hover:bg-sky-500 hover:text-sky-50 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700 dark:hover:text-sky-50",
      },
      {
        variant: "soft",
        color: "blue",
        className:
          "bg-blue-200 text-blue-900 hover:bg-blue-500 hover:text-blue-50 dark:bg-blue-800 dark:text-blue-100 dark:hover:bg-blue-700 dark:hover:text-blue-50",
      },
      {
        variant: "soft",
        color: "indigo",
        className:
          "bg-indigo-200 text-indigo-900 hover:bg-indigo-500 hover:text-indigo-50 dark:bg-indigo-800 dark:text-indigo-100 dark:hover:bg-indigo-700 dark:hover:text-indigo-50",
      },
      {
        variant: "soft",
        color: "violet",
        className:
          "bg-violet-200 text-violet-900 hover:bg-violet-500 hover:text-violet-50 dark:bg-violet-800 dark:text-violet-100 dark:hover:bg-violet-700 dark:hover:text-violet-50",
      },
      {
        variant: "soft",
        color: "purple",
        className:
          "bg-purple-200 text-purple-900 hover:bg-purple-500 hover:text-purple-50 dark:bg-purple-800 dark:text-purple-100 dark:hover:bg-purple-700 dark:hover:text-purple-50",
      },
      {
        variant: "soft",
        color: "fuchsia",
        className:
          "bg-fuchsia-200 text-fuchsia-900 hover:bg-fuchsia-500 hover:text-fuchsia-50 dark:bg-fuchsia-800 dark:text-fuchsia-100 dark:hover:bg-fuchsia-700 dark:hover:text-fuchsia-50",
      },
      {
        variant: "soft",
        color: "pink",
        className:
          "bg-pink-200 text-pink-900 hover:bg-pink-500 hover:text-pink-50 dark:bg-pink-800 dark:text-pink-100 dark:hover:bg-pink-700 dark:hover:text-pink-50",
      },
      {
        variant: "soft",
        color: "rose",
        className:
          "bg-rose-200 text-rose-900 hover:bg-rose-500 hover:text-rose-50 dark:bg-rose-800 dark:text-rose-100 dark:hover:bg-rose-700 dark:hover:text-rose-50",
      },
    ],
    defaultVariants: {
      variant: "default",
      color: "default",
    },
  },
);

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof badgeVariants> {}

function Badge({
  className,
  variant,
  color,
  children,
  dot,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, color }), className)}
      {...props}
    >
      {dot && <Circle className="mr-1.5 h-1.5 w-1.5 fill-current" />}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
