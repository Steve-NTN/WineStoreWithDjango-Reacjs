import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  titleText: {
    marginBottom: `${theme.spacing(2)} !important`
  },
  buttonLeftHis: {
    overflow: 'hidden',
    '& img': {
      width: '100%',
      transition: 'transform 2s',
      margin: '0 auto'
    },
    '& img:hover': {
      transform: 'scale(2)'
    }
  }
}))