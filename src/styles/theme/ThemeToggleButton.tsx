import { IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useThemeStore } from "./useThemeMode";

const ThemeToggleButton = () => {
  const { mode, toggleMode } = useThemeStore();

  return (
    <IconButton onClick={toggleMode} color="inherit">
      { mode === "dark" ? (
        <DarkMode />
      ) : (
        <LightMode />
      )}
    </IconButton>
  );
};

export default ThemeToggleButton;
// This component provides a button to toggle between light and dark themes.