"use client";
import { createTheme } from "@mui/material/styles";
import { typography } from "@/theme/typography";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9E7200",
      light: "#D89B00",
      100: "#98A2B3",
    },
    secondary: {
      main: "#9E7200",
      light: "#D89B00",
      200: "#CECECE",
    },
    error: {
      main: "#FE645E",
      light: "#fdeef0",
    },
    background: {
      paper: "#2E2E2E",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    grey: {
      50: "#0F0F0F",
      100: "#121212",
      200: "#494949",
      300: "#6E7278",
      400: "#F3F3F3",
    },
    custom: {
      lightBlue: "#e1f5fe",
      lightGreen: "#e8f5e8",
      softBlack: "#181818",
      green: "#1b5e20",
    },
  },
  typography: { ...typography },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle3: "h6",
        },
      },
    },
  },
});

export default theme;
