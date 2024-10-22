import Link from "next/link";

import type { ComponentPropsWithoutRef } from "react";

import { buttonVariants } from "@/components/ui/button";
import { TypographyMuted } from "@/components/ui/typography";

import { cn } from "@/lib/utils";

export default function TermsPrivacyLinks({
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return (
    <TypographyMuted
      className={cn("mt-12 max-w-xs text-center", className)}
      {...props}
    >
      By signing in, you are agreed to our
      <Link
        href={"/terms"}
        className={cn(
          buttonVariants({
            size: "sm",
            color: "secondary",
            variant: "link",
          }),
          "h-fit px-1.5 py-0.5 font-bold focus-visible:ring-offset-0",
        )}
      >
        Terms of Service
      </Link>
      and our
      <a
        href={"/privacy"}
        className={cn(
          buttonVariants({
            size: "sm",
            color: "secondary",
            variant: "link",
          }),
          "h-fit px-1.5 py-0.5 font-bold focus-visible:ring-offset-0",
        )}
      >
        Privacy Policy
      </a>
    </TypographyMuted>
  );
}
