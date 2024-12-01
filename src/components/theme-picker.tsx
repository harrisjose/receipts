"use client";

import { useTheme } from "@/components/theme-provider";
import { Monitor, Moon, Sun } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

export function ThemePicker() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="grid grid-cols-3 gap-3">
      <ThemeButton
        icon={Sun}
        text="Light"
        isSelected={theme === "light"}
        onClick={() => setTheme("light")}
      />
      <ThemeButton
        icon={Moon}
        text="Dark"
        isSelected={theme === "dark"}
        onClick={() => setTheme("dark")}
      />
      <ThemeButton
        icon={Monitor}
        text="Auto"
        isSelected={theme === "system"}
        onClick={() => setTheme("system")}
      />
    </div>
  );
}

interface ThemeButtonProps {
  icon: React.ElementType;
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

function ThemeButton({
  icon: Icon,
  text,
  isSelected,
  onClick,
}: ThemeButtonProps) {
  return (
    <div className="flex flex-col items-center relative">
      <button
        onClick={onClick}
        className={cn(
          "group rounded-lg border-2 bg-background px-4 py-2",
          isSelected && "border-primary"
        )}
      >
        <div className="flex h-full flex-col items-center justify-between rounded-md p-2">
          <Icon className="h-4 w-4" />
        </div>
      </button>
      <div
        className={cn(
          "text-xs mt-1",
          isSelected ? "font-medium" : "text-muted-foreground"
        )}
      >
        {text}
      </div>
    </div>
  );
}
