import type { MetaFunction } from "@remix-run/node";

import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container flex h-screen flex-col flex-wrap items-center justify-center gap-6">
      <div className="flex h-fit w-full flex-wrap items-center justify-center gap-6">
        <Slider
          color="fuchsia"
          defaultValue={[50]}
          max={100}
          step={1}
          className="w-1/2"
        />
        <Switch color={"emerald"} />

        <Progress
          color="cyan"
          value={50}
          className="w-1/2"
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          color="blue"
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    </div>
  );
}
