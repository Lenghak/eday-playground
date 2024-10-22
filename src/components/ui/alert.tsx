import * as React from "react";

import { cn } from "@/lib/utils";

import { cva, type VariantProps } from "class-variance-authority";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      color: {
        default: "border-primary/50 text-primary [&>svg]:text-primary",
        secondary: "border-secondary/50 text-secondary [&>svg]:text-secondary",
        destructive:
          "border-destructive/50 text-destructive [&>svg]:text-destructive",
        slate:
          "border-slate-500/50 text-slate-700 dark:text-slate-300 [&>svg]:text-slate-500",
        gray: "border-gray-500/50 text-gray-700 dark:text-gray-300 [&>svg]:text-gray-500",
        zinc: "border-zinc-500/50 text-zinc-700 dark:text-zinc-300 [&>svg]:text-zinc-500",
        neutral:
          "border-neutral-500/50 text-neutral-700 dark:text-neutral-300 [&>svg]:text-neutral-500",
        stone:
          "border-stone-500/50 text-stone-700 dark:text-stone-300 [&>svg]:text-stone-500",
        red: "border-red-500/50 text-red-700 dark:text-red-300 [&>svg]:text-red-500",
        orange:
          "border-orange-500/50 text-orange-700 dark:text-orange-300 [&>svg]:text-orange-500",
        amber:
          "border-amber-500/50 text-amber-700 dark:text-amber-300 [&>svg]:text-amber-500",
        yellow:
          "border-yellow-500/50 text-yellow-700 dark:text-yellow-300 [&>svg]:text-yellow-500",
        lime: "border-lime-500/50 text-lime-700 dark:text-lime-300 [&>svg]:text-lime-500",
        green:
          "border-green-500/50 text-green-700 dark:text-green-300 [&>svg]:text-green-500",
        emerald:
          "border-emerald-500/50 text-emerald-700 dark:text-emerald-300 [&>svg]:text-emerald-500",
        teal: "border-teal-500/50 text-teal-700 dark:text-teal-300 [&>svg]:text-teal-500",
        cyan: "border-cyan-500/50 text-cyan-700 dark:text-cyan-300 [&>svg]:text-cyan-500",
        sky: "border-sky-500/50 text-sky-700 dark:text-sky-300 [&>svg]:text-sky-500",
        blue: "border-blue-500/50 text-blue-700 dark:text-blue-300 [&>svg]:text-blue-500",
        indigo:
          "border-indigo-500/50 text-indigo-700 dark:text-indigo-300 [&>svg]:text-indigo-500",
        violet:
          "border-violet-500/50 text-violet-700 dark:text-violet-300 [&>svg]:text-violet-500",
        purple:
          "border-purple-500/50 text-purple-700 dark:text-purple-300 [&>svg]:text-purple-500",
        fuchsia:
          "border-fuchsia-500/50 text-fuchsia-700 dark:text-fuchsia-300 [&>svg]:text-fuchsia-500",
        pink: "border-pink-500/50 text-pink-700 dark:text-pink-300 [&>svg]:text-pink-500",
        rose: "border-rose-500/50 text-rose-700 dark:text-rose-300 [&>svg]:text-rose-500",
      },
    },
    defaultVariants: {
      color: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, color, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ color, className }))}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  >
    {children}
  </h5>
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
