"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted
  useEffect(() => setMounted(true), []);

  // Use resolvedTheme for SSR fallback
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  if (!mounted) return null;

  return (
    <div className="absolute z-50">
      <button
        onClick={() => {
          setTheme(currentTheme === "dark" ? "light" : "dark");
          console.log(currentTheme);
        }}
        className="p-2 border rounded"
      >
        {currentTheme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default ThemeToggle;
