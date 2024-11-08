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
      paper: "#E5E5E7",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    grey: {
      50: "#E5E5E7",
      100: "#5C5C5C",
      200: "#494949",
      300: "#6E7278",
      400: "#F3F3F3",
    },
    custom: {
      lightBlue: "#e1f5fe",
      lightGreen: "#e8f5e8",
      blue: "#0d47a1",
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
