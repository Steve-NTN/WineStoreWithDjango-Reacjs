import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  productCard: {
    // display: 'flex',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'

  },
  productContainer: {
    marginBottom: `16px !important`,
    marginTop: `16px !important`,
    // [theme.breakpoints.down('sm')]: {
    //   marginBottom
    // }
  },
  productName: {
    // color: '#fff',
  },
  productBg: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    borderTopLeftRadius: theme.spacing(2),
    borderTopRightRadius: theme.spacing(2),
    marginBottom: theme.spacing(2),
    
  },
  productImg: {
    width: '100%',
    height: 250,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderTopLeftRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      height: 150
    }
  },
  productContent: {
    color: '#fff',
    width: 'calc(100% - 32px)',
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.5s linear',
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 16px)',
      margin: theme.spacing(1),
    },
    '&:hover': {
      // borderTopLeftRadius: theme.spacing(2),
      // backgroundColor: '#121212 !important',
      // '&.xxx': {
      //   display: 'flex'
      // }
    },
    position: 'relative',

  },
  optionBg: {
    width: '100%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(0%, -50%)'
  },
  option: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1)
    }
  },

  optionBtn: {
    width: '50px', height: '50px',
    backgroundColor: '#000',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      width: '30px', height: '30px',
      '& svg': {
        width: '15px', height: '15px',
      }
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  productText: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1)
    }
  }

}));