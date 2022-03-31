import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  titleText: {
    
  },
  buttonLeftHis: {
    overflow: 'hidden',
    transition: 'transform 2s',
    '& img': {
      width: '200px',
      height: '200px',
      margin: '0 auto'
    },
    '& img:hover': {
      transform: 'scale(2)'
    }
  }
}))