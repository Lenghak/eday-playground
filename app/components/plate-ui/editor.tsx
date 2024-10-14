import { forwardRef } from "react";

import { cn } from "@udecode/cn";
import type { PlateContentProps } from "@udecode/plate-common/react";
import { PlateContent } from "@udecode/plate-common/react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const editorVariants = cva(
  cn(
    "relative overflow-x-auto whitespace-pre-wrap break-words text-foreground",
    "min-h-[80px] w-full rounded-md bg-background px-6 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none",
    "[&_[data-slate-placeholder]]:text-muted-foreground [&_[data-slate-placeholder]]:!opacity-100",
    "[&_[data-slate-placeholder]]:top-[auto_!important]",
    "[&_strong]:font-bold",
  ),
  {
    defaultVariants: {
      focusRing: true,
      size: "sm",
      variant: "outline",
    },
    variants: {
      disabled: {
        true: "cursor-not-allowed opacity-50",
      },
      focusRing: {
        false: "",
        true: "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      },
      focused: {
        true: "ring-2 ring-ring ring-offset-2",
      },
      size: {
        md: "text-base",
        sm: "text-sm",
      },
      variant: {
        ghost: "",
        outline: "border border-input",
      },
    },
  },
);

export type EditorProps = PlateContentProps &
  VariantProps<typeof editorVariants>;

const Editor = forwardRef<HTMLDivElement, EditorProps>(
  (
    {
      className,
      disabled,
      focusRing,
      focused,
      readOnly,
      size,
      variant,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className="relative w-full"
      >
        <PlateContent
          className={cn(
            editorVariants({
              disabled,
              focusRing,
              focused,
              size,
              variant,
            }),
            className,
          )}
          readOnly={disabled ?? readOnly}
          aria-disabled={disabled}
          data-plate-selectable
          disableDefaultStyles
          {...props}
        />
      </div>
    );
  },
);
Editor.displayName = "Editor";

export { Editor };
