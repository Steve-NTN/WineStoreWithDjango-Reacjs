import { TextField } from '@mui/material';
import React from 'react';
import useStyles from './styles';


const CustomInput = ({
  variant="outlined", fullWidth=true, width, InputProps, type,
  getValue, required
}) => {
  const classes = useStyles();

  const changeInput = (e) => {
    getValue(e.target.value);
  }

  return ( 
    <TextField className={classes.roundInput} variant={variant} type={type} 
    InputProps={InputProps} onChange={changeInput} required={required}
    sx={{width: width}}
    />
  );
}

export default CustomInput;