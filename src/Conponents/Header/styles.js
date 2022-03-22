import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  icon: {
    marginBottom: 5,
    marginRight: 5
  },
  background: {
    backgroundColor: "#121212 !important"
  },
  leftTogger: {
    width: 0,
    height: "100vh",
    backgroundColor: "#121212",
    position: 'absolute',
    zIndex: 1,
    transition: 'width 0.2s linear',
    maxWidth: 300,
    [theme.breakpoints.up("md")]: {
      display: 'none'
    }
  },
  cancelButton: {
    color: "#fff !important",
    height: 'fit-content',
    marginLeft: 'auto !important'
  },
  leftToggerContent: {

  },
  link: {
    color: "#fff",
    textDecoration: 'none',
    cursor: 'pointer'
  }
}))