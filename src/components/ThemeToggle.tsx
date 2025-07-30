import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors relative
        ${theme === "dark" ? "ring-2 ring-purple-500 bg-[#232136]" : "ring-2 ring-yellow-400 bg-[#f7e9b0]"}
        hover:bg-[#1a1729]`}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-gray-800" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-300" />
      )}
    </Button>
  );
}

export default ThemeToggle;
