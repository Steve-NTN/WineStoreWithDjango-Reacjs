import { createTheme } from "@mui/material";

export const theme = createTheme((theme) => ({
  root: {
    fontFamily: "'Inter', sans-serif !important",
  },
  MuiTypography: {
    body1: {
      fontSize: 16,
      [theme.breakpoints.down("sm")]: {
        fontSize: 12,
      },
    },
    body2: {
      fontSize: 14,
      [theme.breakpoints.down("sm")]: {
        fontSize: 10,
      },
    },
    h4: {
      fontSize: 25,
      [theme.breakpoints.up("md")]: {
        fontSize: "2.125rem",
      },
    }
  }
}));