import React from 'react';
import { BrowserRouter as Router,Route, Switch, useHistory } from 'react-router-dom';
import {Header, Footer} from './Conponents';
// import {theme} from "./utils/styles/theme";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Home, Login, Product, Cart} from './pages';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const history = useHistory();
  const theme = createTheme();
  theme.overrides = {
    MuiTypography: {
      root: {
        fontFamily: "'Inter', sans-serif !important",
      },
      body1: {
        fontSize: 16,
        [theme.breakpoints.down("sm")]: {
          fontSize: 12,
        },
      },
      body2: {
        fontSize: 14,
        [theme.breakpoints.down("sm")]: {
          fontSize: 10,
        },
      },
      h4: {
        fontSize: 25,
        [theme.breakpoints.up("md")]: {
          fontSize: "2.125rem",
        },
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Header />  
        <Switch>
          {/* Nội dung các trang */}
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/product" exact component={Product} />
          <Route path="/product/:productId" component={Product} />
          <Route path="/cart" component={Cart} /> 
          {/* <Route path="/" component={Home} /> */}
          
          {/* 
          <Route path="/viewproduct" exact component={ViewProduct} />
          <Route path="/about" exact component={About} />*/}
        </Switch>
        <Footer/>
      </Router>
    </ThemeProvider>
  )
}

export default App;
