import { withRef, withVariants } from "@udecode/cn";
import { cva } from "class-variance-authority";

import { PlateElement } from "./plate-element";

const headingVariants = cva("relative mb-1", {
  variants: {
    variant: {
      h1: "font-heading mt-[1.6em] pb-1 text-4xl font-bold",
      h2: "font-heading mt-[1.4em] pb-px text-2xl font-semibold tracking-tight",
      h3: "font-heading mt-[1em] pb-px text-xl font-semibold tracking-tight",
      h4: "font-heading mt-[0.75em] text-lg font-semibold tracking-tight",
      h5: "mt-[0.75em] text-lg font-semibold tracking-tight",
      h6: "mt-[0.75em] text-base font-semibold tracking-tight",
    },
  },
});

const blockVariants = cva("", {
  variants: {
    isFirstBlock: {
      false: "",
      true: "mt-0",
    },
  },
});

const HeadingElementVariants = withVariants(
  withVariants(PlateElement, headingVariants, ["variant"]),
  blockVariants,
  ["isFirstBlock"],
);

export const HeadingElement = withRef<typeof HeadingElementVariants>(
  ({ children, isFirstBlock, variant = "h1", ...props }, ref) => {
    const { editor, element } = props;

    return (
      <HeadingElementVariants
        ref={ref}
        as={variant!}
        variant={variant}
        isFirstBlock={isFirstBlock || element === editor.children[0]}
        {...props}
      >
        {children}
      </HeadingElementVariants>
    );
  },
);
