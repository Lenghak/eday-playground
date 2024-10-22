import * as React from "react";

import { cn } from "@/lib/utils";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        filled: "",
        soft: "",
        outline: "border border-input",
        ghost: "",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      color: {
        default:
          "border-input bg-primary text-primary-foreground focus-visible:ring-primary",
        secondary:
          "border-secondary-200 dark:border-secondary-900 bg-secondary text-secondary-foreground focus-visible:ring-secondary",
        destructive:
          "border-destructive-200 dark:border-destructive-900 bg-destructive text-destructive-foreground focus-visible:ring-destructive",
        slate:
          "border-slate-200 bg-slate-500 text-slate-50 focus-visible:ring-slate-500 dark:border-slate-900",
        gray: "border-gray-200 bg-gray-500 text-gray-50 focus-visible:ring-gray-500 dark:border-gray-900",
        zinc: "border-zinc-200 bg-zinc-500 text-zinc-50 focus-visible:ring-zinc-500 dark:border-zinc-900",
        neutral:
          "border-neutral-200 bg-neutral-500 text-neutral-50 focus-visible:ring-neutral-500 dark:border-neutral-900",
        stone:
          "border-stone-200 bg-stone-500 text-stone-50 focus-visible:ring-stone-500 dark:border-stone-900",
        red: "border-red-200 bg-red-500 text-red-50 focus-visible:ring-red-500 dark:border-red-900",
        orange:
          "border-orange-200 bg-orange-500 text-orange-50 focus-visible:ring-orange-500 dark:border-orange-900",
        amber:
          "border-amber-200 bg-amber-500 text-amber-50 focus-visible:ring-amber-500 dark:border-amber-900",
        yellow:
          "border-yellow-200 bg-yellow-500 text-yellow-50 focus-visible:ring-yellow-500 dark:border-yellow-900",
        lime: "border-lime-200 bg-lime-500 text-lime-50 focus-visible:ring-lime-500 dark:border-lime-900",
        green:
          "border-green-200 bg-green-500 text-green-50 focus-visible:ring-green-500 dark:border-green-900",
        emerald:
          "border-emerald-200 bg-emerald-500 text-emerald-50 focus-visible:ring-emerald-500 dark:border-emerald-900",
        teal: "border-teal-200 bg-teal-500 text-teal-50 focus-visible:ring-teal-500 dark:border-teal-900",
        cyan: "border-cyan-200 bg-cyan-500 text-cyan-50 focus-visible:ring-cyan-500 dark:border-cyan-900",
        sky: "border-sky-200 bg-sky-500 text-sky-50 focus-visible:ring-sky-500 dark:border-sky-900",
        blue: "border-blue-200 bg-blue-500 text-blue-50 focus-visible:ring-blue-500 dark:border-blue-900",
        indigo:
          "border-indigo-200 bg-indigo-500 text-indigo-50 focus-visible:ring-indigo-500 dark:border-indigo-900",
        violet:
          "border-violet-200 bg-violet-500 text-violet-50 focus-visible:ring-violet-500 dark:border-violet-900",
        purple:
          "border-purple-200 bg-purple-500 text-purple-50 focus-visible:ring-purple-500 dark:border-purple-900",
        fuchsia:
          "border-fuchsia-200 bg-fuchsia-500 text-fuchsia-50 focus-visible:ring-fuchsia-500 dark:border-fuchsia-900",
        pink: "border-pink-200 bg-pink-500 text-pink-50 focus-visible:ring-pink-500 dark:border-pink-900",
        rose: "border-rose-200 bg-rose-500 text-rose-50 focus-visible:ring-rose-500 dark:border-rose-900",
      },
    },
    compoundVariants: [
      {
        variant: "filled",
        color: "default",
        className: "hover:bg-primary/90",
      },
      {
        variant: "soft",
        color: "default",
        className: "bg-primary/20 text-primary hover:bg-primary/30",
      },
      {
        variant: "outline",
        color: "default",
        className: "bg-primary/20 text-primary hover:bg-primary/30",
      },
      {
        variant: "filled",
        color: "secondary",
        className: "hover:bg-secondary/80",
      },
      {
        variant: "outline",
        color: "secondary",
        className:
          "bg-transparent text-secondary-foreground hover:bg-secondary/30",
      },
      {
        variant: "link",
        color: "secondary",
        className:
          "bg-background text-secondary-foreground hover:text-secondary-foreground/75",
      },
      {
        variant: "filled",
        color: "destructive",
        className: "hover:bg-destructive/90",
      },
      {
        variant: "soft",
        color: "secondary",
        className: "bg-secondary/20 text-secondary hover:bg-secondary/30",
      },
      {
        variant: "soft",
        color: "destructive",
        className: "bg-destructive/20 text-destructive hover:bg-destructive/30",
      },
      {
        variant: "filled",
        color: "slate",
        className: "hover:bg-slate-600",
      },
      {
        variant: "soft",
        color: "slate",
        className:
          "bg-slate-100 text-slate-900 hover:bg-slate-500 hover:text-slate-50 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800",
      },
      {
        variant: "outline",
        color: "slate",
        className:
          "bg-background text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-50",
      },
      {
        variant: "ghost",
        color: "slate",
        className:
          "bg-background text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-50",
      },
      {
        variant: "link",
        color: "slate",
        className:
          "bg-background text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300",
      },
      {
        variant: "filled",
        color: "gray",
        className: "hover:bg-gray-600",
      },
      {
        variant: "soft",
        color: "gray",
        className:
          "bg-gray-100 text-gray-900 hover:bg-gray-500 hover:text-gray-50 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800",
      },
      {
        variant: "outline",
        color: "gray",
        className:
          "bg-background text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-50",
      },
      {
        variant: "ghost",
        color: "gray",
        className:
          "bg-background text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-50",
      },
      {
        variant: "link",
        color: "gray",
        className:
          "bg-background text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
      },
      {
        variant: "filled",
        color: "zinc",
        className: "hover:bg-zinc-600",
      },
      {
        variant: "soft",
        color: "zinc",
        className:
          "bg-zinc-100 text-zinc-900 hover:bg-zinc-500 hover:text-zinc-50 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800",
      },
      {
        variant: "outline",
        color: "zinc",
        className:
          "bg-background text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50",
      },
      {
        variant: "ghost",
        color: "zinc",
        className:
          "bg-background text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50",
      },
      {
        variant: "link",
        color: "zinc",
        className:
          "bg-background text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300",
      },
      {
        variant: "filled",
        color: "neutral",
        className: "hover:bg-neutral-600",
      },
      {
        variant: "soft",
        color: "neutral",
        className:
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-500 hover:text-neutral-50 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800",
      },
      {
        variant: "outline",
        color: "neutral",
        className:
          "bg-background text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-50",
      },
      {
        variant: "ghost",
        color: "neutral",
        className:
          "bg-background text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-50",
      },
      {
        variant: "link",
        color: "neutral",
        className:
          "bg-background text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300",
      },
      {
        variant: "filled",
        color: "stone",
        className: "hover:bg-stone-600",
      },
      {
        variant: "soft",
        color: "stone",
        className:
          "bg-stone-100 text-stone-900 hover:bg-stone-500 hover:text-stone-50 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800",
      },
      {
        variant: "outline",
        color: "stone",
        className:
          "bg-background text-stone-500 hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-900 dark:hover:text-stone-50",
      },
      {
        variant: "ghost",
        color: "stone",
        className:
          "bg-background text-stone-500 hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-900 dark:hover:text-stone-50",
      },
      {
        variant: "link",
        color: "stone",
        className:
          "bg-background text-stone-500 hover:text-stone-600 dark:text-stone-400 dark:hover:text-stone-300",
      },
      {
        variant: "filled",
        color: "red",
        className: "hover:bg-red-600",
      },
      {
        variant: "soft",
        color: "red",
        className:
          "bg-red-100 text-red-900 hover:bg-red-500 hover:text-red-50 dark:bg-red-900 dark:text-red-100 dark:hover:bg-red-800",
      },
      {
        variant: "outline",
        color: "red",
        className:
          "bg-background text-red-500 hover:bg-red-100 hover:text-red-900 dark:text-red-400 dark:hover:bg-red-900 dark:hover:text-red-50",
      },
      {
        variant: "ghost",
        color: "red",
        className:
          "bg-background text-red-500 hover:bg-red-100 hover:text-red-900 dark:text-red-400 dark:hover:bg-red-900 dark:hover:text-red-50",
      },
      {
        variant: "link",
        color: "red",
        className:
          "bg-background text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300",
      },
      {
        variant: "filled",
        color: "orange",
        className: "hover:bg-orange-600",
      },
      {
        variant: "soft",
        color: "orange",
        className:
          "bg-orange-100 text-orange-900 hover:bg-orange-500 hover:text-orange-50 dark:bg-orange-900 dark:text-orange-100 dark:hover:bg-orange-800",
      },
      {
        variant: "outline",
        color: "orange",
        className:
          "bg-background text-orange-500 hover:bg-orange-100 hover:text-orange-900 dark:text-orange-400 dark:hover:bg-orange-900 dark:hover:text-orange-50",
      },
      {
        variant: "ghost",
        color: "orange",
        className:
          "bg-background text-orange-500 hover:bg-orange-100 hover:text-orange-900 dark:text-orange-400 dark:hover:bg-orange-900 dark:hover:text-orange-50",
      },
      {
        variant: "link",
        color: "orange",
        className:
          "bg-background text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300",
      },
      {
        variant: "filled",
        color: "amber",
        className: "hover:bg-amber-600",
      },
      {
        variant: "soft",
        color: "amber",
        className:
          "bg-amber-100 text-amber-900 hover:bg-amber-500 hover:text-amber-50 dark:bg-amber-900 dark:text-amber-100 dark:hover:bg-amber-800",
      },
      {
        variant: "outline",
        color: "amber",
        className:
          "bg-background text-amber-500 hover:bg-amber-100 hover:text-amber-900 dark:text-amber-400 dark:hover:bg-amber-900 dark:hover:text-amber-50",
      },
      {
        variant: "ghost",
        color: "amber",
        className:
          "bg-background text-amber-500 hover:bg-amber-100 hover:text-amber-900 dark:text-amber-400 dark:hover:bg-amber-900 dark:hover:text-amber-50",
      },
      {
        variant: "link",
        color: "amber",
        className:
          "bg-background text-amber-500 hover:text-amber-600 dark:text-amber-400 dark:hover:text-amber-300",
      },
      {
        variant: "filled",
        color: "yellow",
        className: "hover:bg-yellow-600",
      },
      {
        variant: "soft",
        color: "yellow",
        className:
          "bg-yellow-100 text-yellow-900 hover:bg-yellow-500 hover:text-yellow-50 dark:bg-yellow-900 dark:text-yellow-100 dark:hover:bg-yellow-800",
      },
      {
        variant: "outline",
        color: "yellow",
        className:
          "bg-background text-yellow-500 hover:bg-yellow-100 hover:text-yellow-900 dark:text-yellow-400 dark:hover:bg-yellow-900 dark:hover:text-yellow-50",
      },
      {
        variant: "ghost",
        color: "yellow",
        className:
          "bg-background text-yellow-500 hover:bg-yellow-100 hover:text-yellow-900 dark:text-yellow-400 dark:hover:bg-yellow-900 dark:hover:text-yellow-50",
      },
      {
        variant: "link",
        color: "yellow",
        className:
          "bg-background text-yellow-500 hover:text-yellow-600 dark:text-yellow-400 dark:hover:text-yellow-300",
      },
      {
        variant: "filled",
        color: "lime",
        className: "hover:bg-lime-600",
      },
      {
        variant: "soft",
        color: "lime",
        className:
          "bg-lime-100 text-lime-900 hover:bg-lime-500 hover:text-lime-50 dark:bg-lime-900 dark:text-lime-100 dark:hover:bg-lime-800",
      },
      {
        variant: "outline",
        color: "lime",
        className:
          "bg-background text-lime-500 hover:bg-lime-100 hover:text-lime-900 dark:text-lime-400 dark:hover:bg-lime-900 dark:hover:text-lime-50",
      },
      {
        variant: "ghost",
        color: "lime",
        className:
          "bg-background text-lime-500 hover:bg-lime-100 hover:text-lime-900 dark:text-lime-400 dark:hover:bg-lime-900 dark:hover:text-lime-50",
      },
      {
        variant: "link",
        color: "lime",
        className:
          "bg-background text-lime-500 hover:text-lime-600 dark:text-lime-400 dark:hover:text-lime-300",
      },
      {
        variant: "filled",
        color: "green",
        className: "hover:bg-green-600",
      },
      {
        variant: "soft",
        color: "green",
        className:
          "bg-green-100 text-green-900 hover:bg-green-500 hover:text-green-50 dark:bg-green-900 dark:text-green-100 dark:hover:bg-green-800",
      },
      {
        variant: "outline",
        color: "green",
        className:
          "bg-background text-green-500 hover:bg-green-100 hover:text-green-900 dark:text-green-400 dark:hover:bg-green-900 dark:hover:text-green-50",
      },
      {
        variant: "ghost",
        color: "green",
        className:
          "bg-background text-green-500 hover:bg-green-100 hover:text-green-900 dark:text-green-400 dark:hover:bg-green-900 dark:hover:text-green-50",
      },
      {
        variant: "link",
        color: "green",
        className:
          "bg-background text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300",
      },
      {
        variant: "filled",
        color: "emerald",
        className: "hover:bg-emerald-600",
      },
      {
        variant: "soft",
        color: "emerald",
        className:
          "bg-emerald-100 text-emerald-900 hover:bg-emerald-500 hover:text-emerald-50 dark:bg-emerald-900 dark:text-emerald-100 dark:hover:bg-emerald-800",
      },
      {
        variant: "outline",
        color: "emerald",
        className:
          "bg-background text-emerald-500 hover:bg-emerald-100 hover:text-emerald-900 dark:text-emerald-400 dark:hover:bg-emerald-900 dark:hover:text-emerald-50",
      },
      {
        variant: "ghost",
        color: "emerald",
        className:
          "bg-background text-emerald-500 hover:bg-emerald-100 hover:text-emerald-900 dark:text-emerald-400 dark:hover:bg-emerald-900 dark:hover:text-emerald-50",
      },
      {
        variant: "link",
        color: "emerald",
        className:
          "bg-background text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-300",
      },
      {
        variant: "filled",
        color: "teal",
        className: "hover:bg-teal-600",
      },
      {
        variant: "soft",
        color: "teal",
        className:
          "bg-teal-100 text-teal-900 hover:bg-teal-500 hover:text-teal-50 dark:bg-teal-900 dark:text-teal-100 dark:hover:bg-teal-800",
      },
      {
        variant: "outline",
        color: "teal",
        className:
          "bg-background text-teal-500 hover:bg-teal-100 hover:text-teal-900 dark:text-teal-400 dark:hover:bg-teal-900 dark:hover:text-teal-50",
      },
      {
        variant: "ghost",
        color: "teal",
        className:
          "bg-background text-teal-500 hover:bg-teal-100 hover:text-teal-900 dark:text-teal-400 dark:hover:bg-teal-900 dark:hover:text-teal-50",
      },
      {
        variant: "link",
        color: "teal",
        className:
          "bg-background text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300",
      },
      {
        variant: "filled",
        color: "cyan",
        className: "hover:bg-cyan-600",
      },
      {
        variant: "soft",
        color: "cyan",
        className:
          "bg-cyan-100 text-cyan-900 hover:bg-cyan-500 hover:text-cyan-50 dark:bg-cyan-900 dark:text-cyan-100 dark:hover:bg-cyan-800",
      },
      {
        variant: "outline",
        color: "cyan",
        className:
          "bg-background text-cyan-500 hover:bg-cyan-100 hover:text-cyan-900 dark:text-cyan-400 dark:hover:bg-cyan-900 dark:hover:text-cyan-50",
      },
      {
        variant: "ghost",
        color: "cyan",
        className:
          "bg-background text-cyan-500 hover:bg-cyan-100 hover:text-cyan-900 dark:text-cyan-400 dark:hover:bg-cyan-900 dark:hover:text-cyan-50",
      },
      {
        variant: "link",
        color: "cyan",
        className:
          "bg-background text-cyan-500 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300",
      },
      {
        variant: "filled",
        color: "sky",
        className: "hover:bg-sky-600",
      },
      {
        variant: "soft",
        color: "sky",
        className:
          "bg-sky-100 text-sky-900 hover:bg-sky-500 hover:text-sky-50 dark:bg-sky-900 dark:text-sky-100 dark:hover:bg-sky-800",
      },
      {
        variant: "outline",
        color: "sky",
        className:
          "bg-background text-sky-500 hover:bg-sky-100 hover:text-sky-900 dark:text-sky-400 dark:hover:bg-sky-900 dark:hover:text-sky-50",
      },
      {
        variant: "ghost",
        color: "sky",
        className:
          "bg-background text-sky-500 hover:bg-sky-100 hover:text-sky-900 dark:text-sky-400 dark:hover:bg-sky-900 dark:hover:text-sky-50",
      },
      {
        variant: "link",
        color: "sky",
        className:
          "bg-background text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300",
      },
      {
        variant: "filled",
        color: "blue",
        className: "hover:bg-blue-600",
      },
      {
        variant: "soft",
        color: "blue",
        className:
          "bg-blue-100 text-blue-900 hover:bg-blue-500 hover:text-blue-50 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800",
      },
      {
        variant: "outline",
        color: "blue",
        className:
          "bg-background text-blue-500 hover:bg-blue-100 hover:text-blue-900 dark:text-blue-400 dark:hover:bg-blue-900 dark:hover:text-blue-50",
      },
      {
        variant: "ghost",
        color: "blue",
        className:
          "bg-background text-blue-500 hover:bg-blue-100 hover:text-blue-900 dark:text-blue-400 dark:hover:bg-blue-900 dark:hover:text-blue-50",
      },
      {
        variant: "link",
        color: "blue",
        className:
          "bg-background text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300",
      },
      {
        variant: "filled",
        color: "indigo",
        className: "hover:bg-indigo-600",
      },
      {
        variant: "soft",
        color: "indigo",
        className:
          "bg-indigo-100 text-indigo-900 hover:bg-indigo-500 hover:text-indigo-50 dark:bg-indigo-900 dark:text-indigo-100 dark:hover:bg-indigo-800",
      },
      {
        variant: "outline",
        color: "indigo",
        className:
          "bg-background text-indigo-500 hover:bg-indigo-100 hover:text-indigo-900 dark:text-indigo-400 dark:hover:bg-indigo-900 dark:hover:text-indigo-50",
      },
      {
        variant: "ghost",
        color: "indigo",
        className:
          "bg-background text-indigo-500 hover:bg-indigo-100 hover:text-indigo-900 dark:text-indigo-400 dark:hover:bg-indigo-900 dark:hover:text-indigo-50",
      },
      {
        variant: "link",
        color: "indigo",
        className:
          "bg-background text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300",
      },
      {
        variant: "filled",
        color: "violet",
        className: "hover:bg-violet-600",
      },
      {
        variant: "soft",
        color: "violet",
        className:
          "bg-violet-100 text-violet-900 hover:bg-violet-500 hover:text-violet-50 dark:bg-violet-900 dark:text-violet-100 dark:hover:bg-violet-800",
      },
      {
        variant: "outline",
        color: "violet",
        className:
          "bg-background text-violet-500 hover:bg-violet-100 hover:text-violet-900 dark:text-violet-400 dark:hover:bg-violet-900 dark:hover:text-violet-50",
      },
      {
        variant: "ghost",
        color: "violet",
        className:
          "bg-background text-violet-500 hover:bg-violet-100 hover:text-violet-900 dark:text-violet-400 dark:hover:bg-violet-900 dark:hover:text-violet-50",
      },
      {
        variant: "link",
        color: "violet",
        className:
          "bg-background text-violet-500 hover:text-violet-600 dark:text-violet-400 dark:hover:text-violet-300",
      },
      {
        variant: "filled",
        color: "purple",
        className: "hover:bg-purple-600",
      },
      {
        variant: "soft",
        color: "purple",
        className:
          "bg-purple-100 text-purple-900 hover:bg-purple-500 hover:text-purple-50 dark:bg-purple-900 dark:text-purple-100 dark:hover:bg-purple-800",
      },
      {
        variant: "outline",
        color: "purple",
        className:
          "bg-background text-purple-500 hover:bg-purple-100 hover:text-purple-900 dark:text-purple-400 dark:hover:bg-purple-900 dark:hover:text-purple-50",
      },
      {
        variant: "ghost",
        color: "purple",
        className:
          "bg-background text-purple-500 hover:bg-purple-100 hover:text-purple-900 dark:text-purple-400 dark:hover:bg-purple-900 dark:hover:text-purple-50",
      },
      {
        variant: "link",
        color: "purple",
        className:
          "bg-background text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300",
      },
      {
        variant: "filled",
        color: "fuchsia",
        className: "hover:bg-fuchsia-600",
      },
      {
        variant: "soft",
        color: "fuchsia",
        className:
          "bg-fuchsia-100 text-fuchsia-900 hover:bg-fuchsia-500 hover:text-fuchsia-50 dark:bg-fuchsia-900 dark:text-fuchsia-100 dark:hover:bg-fuchsia-800",
      },
      {
        variant: "outline",
        color: "fuchsia",
        className:
          "bg-background text-fuchsia-500 hover:bg-fuchsia-100 hover:text-fuchsia-900 dark:text-fuchsia-400 dark:hover:bg-fuchsia-900 dark:hover:text-fuchsia-50",
      },
      {
        variant: "ghost",
        color: "fuchsia",
        className:
          "bg-background text-fuchsia-500 hover:bg-fuchsia-100 hover:text-fuchsia-900 dark:text-fuchsia-400 dark:hover:bg-fuchsia-900 dark:hover:text-fuchsia-50",
      },
      {
        variant: "link",
        color: "fuchsia",
        className:
          "bg-background text-fuchsia-500 hover:text-fuchsia-600 dark:text-fuchsia-400 dark:hover:text-fuchsia-300",
      },
      {
        variant: "filled",
        color: "pink",
        className: "hover:bg-pink-600",
      },
      {
        variant: "soft",
        color: "pink",
        className:
          "bg-pink-100 text-pink-900 hover:bg-pink-500 hover:text-pink-50 dark:bg-pink-900 dark:text-pink-100 dark:hover:bg-pink-800",
      },
      {
        variant: "outline",
        color: "pink",
        className:
          "bg-background text-pink-500 hover:bg-pink-100 hover:text-pink-900 dark:text-pink-400 dark:hover:bg-pink-900 dark:hover:text-pink-50",
      },
      {
        variant: "ghost",
        color: "pink",
        className:
          "bg-background text-pink-500 hover:bg-pink-100 hover:text-pink-900 dark:text-pink-400 dark:hover:bg-pink-900 dark:hover:text-pink-50",
      },
      {
        variant: "link",
        color: "pink",
        className:
          "bg-background text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-300",
      },
      {
        variant: "filled",
        color: "rose",
        className: "hover:bg-rose-600",
      },
      {
        variant: "soft",
        color: "rose",
        className:
          "bg-rose-100 text-rose-900 hover:bg-rose-500 hover:text-rose-50 dark:bg-rose-900 dark:text-rose-100 dark:hover:bg-rose-800",
      },
      {
        variant: "outline",
        color: "rose",
        className:
          "bg-background text-rose-500 hover:bg-rose-100 hover:text-rose-900 dark:text-rose-400 dark:hover:bg-rose-900 dark:hover:text-rose-50",
      },
      {
        variant: "ghost",
        color: "rose",
        className:
          "bg-background text-rose-500 hover:bg-rose-100 hover:text-rose-900 dark:text-rose-400 dark:hover:bg-rose-900 dark:hover:text-rose-50",
      },
      {
        variant: "link",
        color: "rose",
        className:
          "bg-background text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300",
      },
    ],
    defaultVariants: {
      variant: "filled",
      size: "default",
      color: "default",
    },
  },
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, color, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, color, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
