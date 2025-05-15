import { createTheme } from "@mui/material/styles";

const neonPink = "#FF6EC7";
const darkShade = "#1A1A1A";

// Create the theme
const theme = createTheme({
  palette: {
    primary: {
      main: neonPink,
      light: "#FF8ED4",
      dark: "#D14A9A",
      contrastText: "#ffffff",
    },
    secondary: {
      main: darkShade,
      light: "#2C2C2C",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    background: {
      default: "#eee",
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 16px",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export default theme;
