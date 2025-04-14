import { ThemeProvider, CssBaseline } from "@mui/material";
import { createContext, useContext } from "react";
import { lightTheme, darkTheme } from "./Theme";
import { useThemeMode } from "./useThemeMode";

const ThemeContext = createContext({ toggleTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default AppThemeProvider;
