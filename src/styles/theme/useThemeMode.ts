import { useState, useEffect } from "react";

export const useThemeMode = () => {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [mode, setMode] = useState<"light" | "dark">(storedTheme as "light" | "dark");

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode(prev => (prev === "light" ? "dark" : "light"));
  };

  return { mode, toggleTheme };
};

// This hook manages the theme mode (light or dark) of the application.