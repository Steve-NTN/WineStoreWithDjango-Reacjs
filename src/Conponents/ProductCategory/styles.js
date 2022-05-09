import { makeStyles } from '@mui/styles';
import { padding } from '@mui/system';

export default makeStyles((theme) => ({
  categoryImg: {
    width: 100,
    height: 100,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      width: 80,
      height: 80
    }
  },
  categoryCard: {
    // display: 'flex',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column !important',
    paddingBottom: 32
  },
  categoryName: {
    textDecoration: 'none',
    color: 'red',
    fontWeight: 600,
    margin: '8px 0'
  }
}));