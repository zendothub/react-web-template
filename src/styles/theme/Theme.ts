import { createTheme } from "@mui/material/styles";
// import { PaletteOptions } from "@mui/material/styles/createPalette";

// Extend the Palette and PaletteOptions interfaces
declare module "@mui/material/styles" {
  interface Palette {
    border: {
      main: string;
    };
  }
  interface PaletteOptions {
    border?: {
      main: string;
    };
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dffefb",
    },
    border: {
      main: "#434572", // Custom border color
    },
    background: {
      default: "#f4f4f4",
      paper: "#fff",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#bb86fc",
    },
    secondary: {
      main: "#244b47",
      
    },
    border: {
      main: "#434572", // Custom border color
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
});
