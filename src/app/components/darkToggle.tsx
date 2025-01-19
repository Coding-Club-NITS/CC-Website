"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted
  useEffect(() => setMounted(true), []);

  // Use resolvedTheme for SSR fallback
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  if (!mounted) return null;

  return (
    <div>
      <button
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
        aria-label="Toggle theme"
      >
        {currentTheme === "dark" ? (
          <IconSun className="w-6 h-6 text-yellow-400" />
        ) : (
          <IconMoon className="w-6 h-6 text-gray-900 dark:text-gray-100" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
