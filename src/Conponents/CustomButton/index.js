import { Button, Typography } from '@mui/material';
import React from 'react';
import useStyles from './styles';

const CustomButton = ({event, text, padding, onSubmit, type}) => {
  const classes = useStyles();

  return ( 
    <Button className={classes.customButton} onClick={event} onSubmit={onSubmit} type={type}
      sx={{backgroundColor: '#121212 !important', color: '#fff', padding: padding || '8px 16px', textTransform: 'initial'}}>
      <Typography>
        {text}
      </Typography>
    </Button>
  );
}

export default CustomButton;