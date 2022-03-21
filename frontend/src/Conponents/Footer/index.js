import React from 'react';
import {Link} from 'react-router-dom';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import useStyles from './styles';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer = () => {
  const classes = useStyles();

  const ScrollToHead = () => {
    window.scroll({
      top: -document.body.scrollHeight,
      behavior: 'smooth'
    });
  }

  const userOptions = [
    {label: "Đăng nhập", link: '/login', icon: <PersonIcon className={classes.icon}/>},
    {label: "Đăng ký", link: '/register', icon: <PersonAddIcon className={classes.icon}/>},
    {label: "Giỏ hàng của tôi", link: '/cart', icon: <ShoppingCartIcon className={classes.icon}/>}
  ];

  const addressContact = [
    {label: "Cầu Giấy, Hà Nội, Việt Nam", event: null, icon: <BusinessIcon className={classes.icon}/>},
    {label: "+0364307871", event: null, icon: <PhoneIcon className={classes.icon}/>},
    {label: "trongnghiafes@gmail.com", event: null, icon: <AlternateEmailIcon className={classes.icon}/>}
  ];

  const socialMedia = [
    {label: "Facebook", link: '/db', icon: <FacebookIcon className={classes.icon}/>},
    {label: "Youtube", link: '/yt', icon: <YouTubeIcon className={classes.icon}/>},
    {label: "Instagram", link: '/is', icon: <InstagramIcon className={classes.icon}/>}
  ];

  return (
    <Box className={classes.footer}>
      <Grid container sx={{padding: 2}}>
        <Grid item md={3} sm={6} xs={12}>
          <Typography variant='h5'>NTNWINE Store</Typography>
          <Typography variant='body1'>THE SMART CHOICE</Typography>
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
          <Typography variant='h5'>Tài khoản</Typography>
          <ul className={classes.menu}>
            {
              userOptions.map((option, index) => (
                <li key={index}>
                  <Link to={option.link} style={{display: 'flex'}}>
                    {option.icon}
                    <Typography>{option.label}</Typography>
                  </Link>
                </li>
              ))
            }
          </ul>
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
          <Typography variant='h5'>Địa chỉ & Liên hệ</Typography>
          <ul className={classes.menu}>
            {
              addressContact.map((option, index) => (
                <li key={index}>
                  <span onClick={option.event}>
                    <Typography>
                      {option.icon}
                      {option.label}
                    </Typography>
                  </span>
                </li>
              ))
            }
          </ul>
        </Grid>

        <Grid item md={3} sm={6} xs={12} position='relative'>
          <Typography variant='h5'>Mạng xã hội</Typography>
          <Typography>Theo dõi chúng tôi trên</Typography>
          <Box className={classes.socialBox}>
            {
              socialMedia.map((option, index) => (
                <Link to={option.link} key={index}>
                  {option.icon}
                </Link>
              ))
            }
          </Box>
          <IconButton className={classes.scrollTopBtn} onClick={ScrollToHead} 
            sx={{backgroundColor: '#064678', position: 'absolute'}}>
            <ArrowUpwardIcon sx={{color: '#fff', fontWeight: 600}}/>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
