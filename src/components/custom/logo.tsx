import type { ImageProps } from "next/image";

import { type ComponentPropsWithoutRef, memo } from "react";

import { Image } from "@/components/custom/image";

import { cn } from "@/lib/utils";

type LogoProps = ComponentPropsWithoutRef<"div">;

export const Logo = memo(function ({
  className,
  children,
  ...props
}: LogoProps) {
  return (
    <div
      className={cn(
        "relative flex w-fit min-w-fit items-center gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Logo.displayName = "Logo";

type LogoImageProps = Omit<
  ImageProps & ComponentPropsWithoutRef<"image">,
  "src" | "alt"
>;
export const LogoImage = memo(function ({
  className,
  ...props
}: LogoImageProps) {
  return (
    <Image
      src={"/svg/logo-light.svg"}
      alt="Logo"
      className={cn("aspect-square", className)}
      {...props}
    />
  );
});

LogoImage.displayName = "LogoImage";

type LogoContentProps = ComponentPropsWithoutRef<"span">;

export const LogoText = memo(function ({
  className,
  ...props
}: LogoContentProps) {
  return (
    <span
      className={cn("text-pretty text-lg font-bold text-primary", className)}
      {...props}
    >
      Insight the Mind
    </span>
  );
});

LogoText.displayName = "LogoContent";
