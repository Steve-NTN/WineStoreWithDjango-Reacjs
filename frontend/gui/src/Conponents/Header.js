import React,{ Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket,faBars,faHome } from '@fortawesome/free-solid-svg-icons'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: ''
        }
    }

    token = (data) => {
        this.setState({
            token: data
        })
        localStorage.setItem('token', data)
    }

    render() {
        return (
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
                                <a href="/"><FontAwesomeIcon icon={faHome} /> Trang chủ</a>
                                {/* <NavLink exact to="/" activeClassName="main-nav-active">Trang chủ</NavLink> */}
                            </li>
                            <li className="nav-link">
                                <a href="/product">Sản phẩm</a>
                            </li>
                            <li className="nav-link">
                                <p id="btn-contact">Liên hệ</p>
                            </li>
                            <li className="nav-link">
                                <a href="/about">Giới thiệu</a>
                            </li>
                            <li className="nav-link">
                                <a href="/cart">
                                    <FontAwesomeIcon icon={faShoppingBasket} />
                                    <span className="quanlity-product-buy">0</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="nav-items">
                            <li className="nav-link" id="logout-btn" style={{display:'none'}}>
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
        );
    }


}

export default Header;
