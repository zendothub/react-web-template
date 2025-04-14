import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "./ThemeProvider";

const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {localStorage.getItem("theme") === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeToggleButton;
// This component provides a button to toggle between light and dark themes.