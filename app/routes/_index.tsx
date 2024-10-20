import type { MetaFunction } from "@remix-run/node";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { TerminalIcon } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container flex h-screen flex-col flex-wrap items-center justify-center gap-6">
      <Alert className="mx-auto w-full max-w-screen-sm">
        <TerminalIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
}
