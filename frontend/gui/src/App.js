import React,{ Component } from 'react';
import { BrowserRouter as Router,Route, NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faShoppingBasket} from '@fortawesome/free-solid-svg-icons';
import './index.css';
import Login from './Conponents/Login'
import Logout from './Conponents/Logout'
import Register from './Conponents/Register'
import Home from './Containers/Home'
import Product from './Containers/Product'
import ViewProduct from './Containers/ViewProduct'
import About from './Containers/About'
import Cart from './Containers/Cart'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">

          <nav className="navm">
            <div className="nav-menu flex-row">
              <div className="nav-brand center-text">
                <p href="/#" className="store-name">NTNWine Store</p>
              </div>
              <div className="toggle-collapse">
                <div className="toggle-icons">
                  <FontAwesomeIcon icon={faBars} />
                </div>
              </div>
              <div>
                <ul className="nav-items">
                  <li className="nav-link">
                    <NavLink to="/" exact activeClassName="main-nav-active"><FontAwesomeIcon icon={faHome} /> Trang chủ</NavLink>
                  </li>
                  <li className="nav-link">
                    <NavLink to="/product" exact activeClassName="main-nav-active">Sản phẩm</NavLink>
                  </li>
                  <li className="nav-link">
                    <p id="btn-contact">Liên hệ</p>
                  </li>
                  <li className="nav-link">
                    <NavLink to="/about" exact activeClassName="main-nav-active">Giới thiệu</NavLink>
                  </li>
                  <li className="nav-link">
                    <NavLink to="/cart" exact activeClassName="main-nav-active">
                      <FontAwesomeIcon icon={faShoppingBasket} />
                      <span className="quanlity-product-buy" id="selected-quantity">0</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="nav-items">
                  <li className="nav-link" id="logout-btn" style={{ display: 'none' }}>
                    <Logout />
                  </li>
                  <li className="nav-link" id="login-btn">
                    <Login token={this.token} />
                  </li>
                    <Register />
                </ul>
              </div>
            </div>
          </nav>
          {/* <HeadTest /> */}
          {/* Nội dung các trang */}
          <Route path="/" exact component={Home} />
          <Route path="/product/" exact component={Product} />
          <Route path="/viewproduct/" exact component={ViewProduct} />
          <Route path="/about/" exact component={About} />
          <Route path="/cart/" exact component={Cart} />
          {/* <Route path="/carttest/" exact component={CartTest} />
          <Route path="/producttest/" exact component={ProductTest} /> */}
        </div>
      </Router>

    )
  }
}




export default App;
