import { Box, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useStyles from './styles';

const Dots = ({num}) => {
  const classes = useStyles();
  const dots = [];
  for(var i=0; i < num; i++) {
    dots.push(i);
  }
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  return (
    <Box sx={{height: '50px'}} className={classes.dotBox}>
      {
        dots.map((image, index) => (
          <IconButton key={index} onClick={() => setCurrentBannerIndex(index)} sx={{padding: 0}}>
            <Box className={`${classes.dot} ${index === currentBannerIndex && classes.selectedDot}`}></Box>
          </IconButton>
        ))
      }
    </Box>
  )
}

export default Dots;
