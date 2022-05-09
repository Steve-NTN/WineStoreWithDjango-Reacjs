import React, { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { 
  AppBar, Menu, Toolbar, Typography,
  Box, MenuItem, Button, Avatar, IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../actions/userAction';

export default function Header() {
  const history = useHistory();
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);
  const [showLeftTogger, setShowLeftTogger] = useState(false);
  const [showUserOption, setShowUserOption] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const wrapperRef = useRef(null);
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      padding: '0 4px'
    },
    '& button': {
      minWidth: 'auto',
    },
    '& svg': {
      width: 15, heihgt: 15
    },
    '& span': {
      height: 15, minWidth: 15
    }
  }));

  const pages = [
    {label: "Trang chủ", link: "/", icon: null},
    {label: "Sản phẩm", link: "/product", icon: null},
    {label: "Liên hệ", link: "/contact", icon: null},
    {label: "Giới thiệu", link: "/about", icon: null},
    {label: "", link: "/cart", icon: 
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    }
  ];
  const opendLoginForm = () => {
    history.push('/login');
  };

  const opendRegisterForm = () => {
    console.log("register");
  };

  const clickLogout = () => {
    dispatch(setUser({
      token: null, phone: null, first_name: null, email: null
    }));
    history.push('/login');
  };
  
  const userOptions = [
    {label: "Đăng nhập", event: opendLoginForm, icon: <PersonIcon className={classes.icon}/>, hidden: false},
    {label: "Đăng ký", event: opendRegisterForm, icon: <PersonAddIcon className={classes.icon}/>, hidden: (user? true: false) },
    {label: "Đăng xuất", event: clickLogout, icon: <LogoutIcon className={classes.icon}/>, hidden: (user? false: true)}
  ];

  const handleClickLink = (link, index, page) => {
    setShowLeftTogger(false);
    history.push(link);
    setSelectedOption(index);
  };

  const handleOpenUserMenu = (e)=> {
    setAnchorEl(e.currentTarget);
    setShowUserOption(true);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowLeftTogger(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <AppBar position="sticky" className={classes.background}>
      <Box className={classes.leftTogger} 
        sx={{ width: `${showLeftTogger? '45%': 0}`, display: {md: 0}}} 
        ref={wrapperRef}
      >
        <Box sx={{visibility: showLeftTogger? 'visible': 'hidden'}} className={classes.leftToggerContent}>
          <Box width="100%" textAlign='right'>
            <IconButton className={classes.cancelButton} onClick={() => setShowLeftTogger(false)}>
              x
            </IconButton>
          </Box>
          <Box>
            {pages.map((page, index) => (
              <Box key={index} sx={{textAlign: 'center', padding: 3}} 
                onClick={() => handleClickLink(page.link, index, page)}>
                <Typography textAlign="center" className={classes.link} sx={{color: index === selectedOption? 'red': '#fff'}}>
                  {page.icon}
                  {page.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box ml={2} mr={2}>
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Link to='/' style={{ color: '#fff', textDecoration: 'none' }}>
              <Typography noWrap sx={{display: { xs: 'none', md: 'flex' }}}>HNPWINE STORE</Typography>
            </Link>

            <IconButton 
              onClick={() => setShowLeftTogger(true)} 
              sx={{color: "#fff", display: { xs: 'flex', md: 'none'}}}>
              <MenuIcon/>
            </IconButton>

          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page, index) => (
              <Button key={index} onClick={() => handleClickLink(page.link, index, page)}
                sx={{ my: 2, display: 'flex', textTransform: 'initial', 
                minWidth: page.link==='/cart'? 'auto': '64px', color: index === selectedOption? 'red': '#fff'
              }}>
                {page.icon}
                <Typography textAlign="center">
                  {page.label}
                </Typography>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={user?.first_name} src="/static/images/avatar/2.jpg" />
            </IconButton>
            <Menu open={showUserOption} onClose={() => setShowUserOption(false)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              anchorEl={anchorEl}
            >
              {
                userOptions.filter(option => !option.hidden).map((option, index) => (
                  <MenuItem key={index} onClick={option.event} sx={{padding: option.hidden? 0: 'auto'}}>
                    {!option.hidden && (
                      <>
                        {option.icon}
                        <Typography>{option.label}</Typography>
                      </>
                    )}
                  </MenuItem>
                ))
              }
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>

  )
}
