import { cn } from "@udecode/cn";
import type { EmojiCategoryList } from "@udecode/plate-emoji";
import type { UseEmojiPickerType } from "@udecode/plate-emoji/react";

import { Button } from "./button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

export type EmojiPickerNavigationProps = {
  onClick: (id: EmojiCategoryList) => void;
} & Pick<
  UseEmojiPickerType,
  "emojiLibrary" | "focusedCategory" | "i18n" | "icons"
>;

export function EmojiPickerNavigation({
  emojiLibrary,
  focusedCategory,
  i18n,
  icons,
  onClick,
}: EmojiPickerNavigationProps) {
  return (
    <TooltipProvider delayDuration={500}>
      <nav
        id="emoji-nav"
        className="mb-2.5 border-0 border-b border-solid border-b-border p-1.5"
      >
        <div className="relative flex items-center justify-evenly">
          {emojiLibrary
            .getGrid()
            .sections()
            .map(({ id }) => (
              <Tooltip key={id}>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="ghost"
                    className={cn(
                      "h-fit rounded-full fill-current p-1.5 text-muted-foreground hover:bg-muted hover:text-muted-foreground",
                      id === focusedCategory &&
                        "pointer-events-none bg-accent fill-current text-accent-foreground",
                    )}
                    onClick={() => {
                      onClick(id);
                    }}
                    aria-label={i18n.categories[id]}
                    type="button"
                  >
                    <span className="size-5">
                      {icons.categories[id].outline}
                    </span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  {i18n.categories[id]}
                </TooltipContent>
              </Tooltip>
            ))}
        </div>
      </nav>
    </TooltipProvider>
  );
}
