import { Button, type ButtonProps } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import type { Icon } from "@tabler/icons-react";

type OAuthButtonProps = {
  icon: Icon;
} & ButtonProps;
export function OAuthButton({
  className,

  children,
  ...props
}: OAuthButtonProps) {
  return (
    <Button
      variant={"outline"}
      color={"secondary"}
      size={"lg"}
      className={cn("relative w-full rounded-full", className)}
      {...props}
    >
      <props.icon className="absolute left-6 size-5" />
      {children}
    </Button>
  );
}
