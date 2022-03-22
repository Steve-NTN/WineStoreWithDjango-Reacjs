import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  background: {
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    color: '#fff',
    fontWeight: 600
  },
  btn: {
    '&:hover': {
      backgroundColor: '#fff',
      opacity: '0.5 !important'
    }
  },
  dotBox: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2)
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
    backgroundColor: '#fff',
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