import type { ImageProps } from "next/image";
import Image from "next/image";

import { type ComponentPropsWithoutRef, memo } from "react";

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
  "alt"
>;
const LogoImage = memo(function ({ className, ...props }: LogoImageProps) {
  return (
    <Image
      alt="Logo"
      className={cn("aspect-square", className)}
      {...props}
    />
  );
});
LogoImage.displayName = "LogoImage";

export const LogoLightWithBackground = memo(function ({
  ...props
}: Omit<LogoImageProps, "src">) {
  return (
    <LogoImage
      src={"/svg/logo-light-background.svg"}
      {...props}
    />
  );
});

LogoLightWithBackground.displayName = "LogoLightWithBackground";

export const LogoLightNoBackground = memo(function ({
  ...props
}: Omit<LogoImageProps, "src">) {
  return (
    <LogoImage
      src={"/svg/logo-light-no-background.svg"}
      {...props}
    />
  );
});

LogoLightNoBackground.displayName = "LogoLightNoBackground";

export const LogoDarkWithBackground = memo(function ({
  ...props
}: Omit<LogoImageProps, "src">) {
  return (
    <LogoImage
      src={"/svg/logo-dark-background.svg"}
      {...props}
    />
  );
});

LogoDarkWithBackground.displayName = "LogoDarkWithBackground";

export const LogoDarkNoBackground = memo(function ({
  ...props
}: Omit<LogoImageProps, "src">) {
  return (
    <LogoImage
      src={"/svg/logo-dark-no-background.svg"}
      {...props}
    />
  );
});

LogoDarkNoBackground.displayName = "LogoDarkNoBackground";

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
