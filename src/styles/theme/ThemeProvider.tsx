import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./Theme";
import { useThemeStore } from "./useThemeMode";

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useThemeStore();

  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
