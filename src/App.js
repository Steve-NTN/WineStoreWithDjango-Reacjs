import React from 'react';
import { BrowserRouter as Router,Route, Switch, useHistory } from 'react-router-dom';
import {Header} from './Conponents';
// import {theme} from "./utils/styles/theme";
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import {Home, Login, Product, Cart, Register, About, Contact} from './pages';
// import './App.css';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const App = () => {
  const history = useHistory();
  
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Header />  
        <Switch>
          {/* Nội dung các trang */}
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/product" exact component={Product} />
          <Route path="/product/:productId" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App;
