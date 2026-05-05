"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1D1E3F",
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;
