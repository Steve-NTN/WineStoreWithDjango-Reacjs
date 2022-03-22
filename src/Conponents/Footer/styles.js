import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  footer: {
    backgroundColor: "#121212 !important",
    // position: "fixed",
    width: "100%",
    bottom: 0,
    "& p, h5": {
      color: "#fff"
    }
  },
  menu: {
    paddingLeft: 0,
    listStyle: 'none',
    '& li': {
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(1)
      }
    },
    '& a': {
      color: '#fff',
      textDecoration: 'none'
    }
  },
  icon: {
    marginBottom: -5,
    marginRight: 5
  },
  socialBox: {
    '& a': {
      color: '#fff'
    }
  },
  scrollTopBtn: {
    top: 0,
    right: 0
  }
}));