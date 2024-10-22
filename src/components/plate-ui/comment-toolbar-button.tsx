"use client";

import { Icons } from "@/components/icons";

import { useCommentAddButton } from "@udecode/plate-comments/react";

import { ToolbarButton } from "./toolbar";

export function CommentToolbarButton() {
  const { hidden, props } = useCommentAddButton();

  if (hidden) return null;

  return (
    <ToolbarButton
      tooltip="Comment (⌘+⇧+M)"
      {...props}
    >
      <Icons.commentAdd />
    </ToolbarButton>
  );
}
