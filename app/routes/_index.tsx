import type { MetaFunction } from "@remix-run/node";

import { Badge } from "@/components/ui/badge";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container flex h-screen flex-wrap items-center justify-center gap-6">
      <Badge
        dot
        variant={"soft"}
        color={"emerald"}
        className="rounded-full font-bold"
      >
        This is a badge
      </Badge>

      <Badge
        dot
        variant={"soft"}
        color={"fuchsia"}
        className="rounded-full font-bold"
      >
        This is a badge
      </Badge>

      <Badge
        variant={"soft"}
        color={"amber"}
        className="rounded-full font-bold"
      >
        This is a badge
      </Badge>

      <Badge
        variant={"soft"}
        color={"violet"}
        className="rounded-full font-bold"
      >
        This is a badge
      </Badge>
    </div>
  );
}
