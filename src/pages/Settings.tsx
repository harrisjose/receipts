import { ThemePicker } from "@/components/theme-picker";
import { Switch } from "@/components/ui/switch";

export const Settings = () => {
  return (
    <div className="flex flex-col mt-4">
      <div className="text-sm font-semibold mb-2 pl-2">General</div>
      <div className="flex flex-col max-w-lg border border-border rounded-md px-2">
        <div className="flex justify-between border-b border-border py-2.5">
          <div className="text-sm">Appearance</div>
          <ThemePicker />
        </div>
        <div className="flex justify-between border-border py-2.5">
          <div className="text-sm">Auto-hide sidebar</div>
          <Switch />
        </div>
      </div>
    </div>
  );
};
