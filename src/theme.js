import { createTheme } from "@mui/material/styles";

const theme = createTheme();

theme.root = {...theme.root, 
  fontFamily: "'Inter', sans-serif !important",
}

theme.typography = {...theme.typography,
  typography: {
    fontFamily: "'Inter', sans-serif !important",
  },
  body1: {
    fontSize: 16,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    }
  },
  body2: {
    fontSize: 14,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  h5: {
    fontSize: 24,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  h4: {
    fontSize: 28,
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
  }
};

export default theme;