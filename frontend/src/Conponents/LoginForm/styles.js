import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  loginBox: {
    margin: `${theme.spacing(4)} ${theme.spacing(2)}`,

  },
  loginFormBg: {
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(4)
  },
  loginForm: {
    width: '100%',
    maxWidth: 500
  },
  centerBox: {
    alignItems:'center',
    display:'flex',
    justifyContent:'center'
  },
  icon: {
    marginBottom: -5,
    marginRight: 5
  },
}))