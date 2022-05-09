import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  dotBox: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    width: '100%'
  },
  dot: {
    marginRight: 10,
    width: theme.spacing(3),
    height: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(2),
      height: theme.spacing(2),
      marginRight: 5,
    },
    backgroundColor: '#000',
    borderRadius: '50%',
    '&:hover': {
    backgroundColor: '#fff',
      opacity: '0.5 !important'
    }
  },
  selectedDot: {
    backgroundColor: '#747474',
  }
}))