import { Box, Grid, InputAdornment, Typography, IconButton } from '@mui/material';
import React, {useState} from 'react';
import useStyles from './styles';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
// import CustomDialog from '../CustomDialog';
import { Link, useHistory } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import KeyIcon from '@mui/icons-material/Key';
import apiTemplate from '../../api';
import { useDispatch } from 'react-redux';
import { setUser } from '../../actions/userAction';
import { setLoading } from '../../actions/loadingAction';
import Loading from '../Loading';

const LoginForm = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [errorText, setErrorText] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  
  const [account, setAccount] = useState({
    username: null,
    password: null,
    fullname: null,
    email: null,
    rePassword: null
  });

  const submitForm = async (e)=> {
    e.preventDefault();
    console.log(account);

    // Check password
    if(account?.password !== account?.rePassword) {
      setErrorText('Mật khẩu nhập lại không chính xác. Vui lòng kiểm tra')
    }

    dispatch(setLoading({open: true}));
    await apiTemplate('/register', 'POST', account, (res)=> {
      dispatch(setLoading({open: false}));
      history.push('/login');
    }, (error) => {
      console.log(error);
      setErrorText('Có lỗi xảy ra khi đăng ký.')
      dispatch(setLoading({open: false}));
    })
  };
    
  return ( 
    <Box className={classes.loginBox}>
      <Typography variant='h4' align='center'>Đăng nhập</Typography>
      <Box className={classes.loginFormBg}>
        <Box className={classes.loginForm} autoComplete={false} component='form' onSubmit={submitForm}>
          <Box>
            <Grid item container>
              <Grid item xs={4} className={classes.centerBox}>
                <Typography variant='body1' align='center'>
                  Tài khoản
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <CustomInput width='100%' getValue={(value) => setAccount({...account, username: value})}
                  required={true}
                />
              </Grid>
            </Grid>

            {/* Ho ten */}
            <Grid item container sx={{my: 2}}>
              <Grid item xs={4} className={classes.centerBox}>
                <Typography variant='body1' align='center'>
                  Họ tên
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <CustomInput width='100%' getValue={(value) => setAccount({...account, fullname: value})}
                  required={true}
                />
              </Grid>
            </Grid>

             {/* Email */}
             <Grid item container>
              <Grid item xs={4} className={classes.centerBox}>
                <Typography variant='body1' align='center'>
                  Email
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <CustomInput width='100%' getValue={(value) => setAccount({...account, email: value})}/>
              </Grid>
            </Grid>

            {/* Password */}
            <Grid item container sx={{marginTop: 2}}>
              <Grid item xs={4} className={classes.centerBox}>
                <Typography>
                  Mật khẩu
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <CustomInput width='100%' getValue={(value) => setAccount({...account, password: value})} 
                  type={showPassword? 'text': 'password'} required={true}/>
              </Grid>
            </Grid>

            {/* Password */}
            <Grid item container sx={{marginTop: 2}}>
              <Grid item xs={4} className={classes.centerBox}>
                <Typography>
                  Nhập lại mật khẩu
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <CustomInput width='100%' getValue={(value) => setAccount({...account, rePassword: value})} 
                  type={showPassword? 'text': 'password'} required={true}/>
              </Grid>
            </Grid>
            {
              errorText && (
                <Typography style={{color: 'red', textAlign: 'center', marginTop: 32}}>
                  {errorText}
                </Typography>
              )
            }

            <Box mt={4} className={classes.centerBox} sx={{justifyContent: 'center'}}>
              <CustomButton text='Đăng ký' padding='8px 16px' type='submit'/>
            </Box>


            <Box my={2}>
              <Typography align='center'>
                Đã có tài khoản,
                <Link to='/login'> đăng nhập? </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Loading />
      </Box> 
    </Box>
  );
}

export default LoginForm;