import React from 'react';
import {Box} from '@mui/material';
import { LoginForm, Footer } from '../../Conponents';

const Login = () => {
  return (
    <>
      <Box minHeight={'calc(100vh - 264px)'} 
        display='flex' alignItems={'center'}
        justifyContent='center'
      >
        <LoginForm/>

      </Box>
      <Footer />
    </>
  );
}

export default Login;