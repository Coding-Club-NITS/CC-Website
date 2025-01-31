"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  if (!mounted) return null;
  // Remove setTheme dark and classname hidden to enable theme switching
  setTheme("dark");
  return (
    <div className="hidden">
      <button
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
        aria-label="Toggle theme"
      >
        {currentTheme === "dark" ? (
          <IconSun className="w-6 h-6 text-yellow-400" />
        ) : (
          <IconMoon className="w-6 h-6 text-gray-900" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
