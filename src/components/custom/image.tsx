"use client";

import NextImage, { type ImageProps as NextImageProps } from "next/image";

import {
  Fragment,
  memo,
  type SyntheticEvent,
  useCallback,
  useState,
} from "react";

import { Skeleton } from "@/components/ui/skeleton";

import { cn } from "@/lib/utils";

type ImageProps = NextImageProps;

export const Image = memo(function ({
  className,
  alt,
  onLoad,
  ...props
}: ImageProps) {
  const [isImageLoaded, setImageLoaded] = useState<boolean>(false);

  // Memoize the onLoad function
  const handleLoad = useCallback(
    (e: SyntheticEvent<HTMLImageElement, Event>) => {
      setImageLoaded(true);
      onLoad?.(e);
    },
    [onLoad], // Dependency array
  );

  return (
    <Fragment>
      <NextImage
        className={cn(
          className,
          !isImageLoaded ? "invisible absolute !max-h-0 !max-w-0" : "relative",
        )}
        {...props}
        alt={alt}
        onLoad={handleLoad} // Use the memoized function
      />

      {!isImageLoaded && (
        <Skeleton
          className={cn("relative h-full w-full", className)}
          style={{
            maxWidth: `${props.width}px`,
            maxHeight: `${props.height}px`,
          }}
        />
      )}
    </Fragment>
  );
});

Image.displayName = "Image";
