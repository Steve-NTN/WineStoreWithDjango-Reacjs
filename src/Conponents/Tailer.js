import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF,faTwitter,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons'
// import { faShoppingBasket,faMapMarked,faPhone,faPaperPlane,faArrowCircleUp, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'

class Tailer extends Component {

    ScrollToHead(){
        window.scroll({
            top: -document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    DisplayLogin(){
        document.getElementById('login').style.display = 'block'
    }

    DisplayRegister(){
        document.getElementById("register").style.display = "block"
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container-m">
                        <div className="about-us" data-aos="fade-right" data-aos-delay="200">
                            <h2>NTNWINE Store</h2>
                            <p>ThHE SMART CHOICE</p>
                        </div>
                        <div className="newsletter" data-aos="fade-right" data-aos-delay="200">
                            <h2>Tài khoản</h2>
                            <ul className="footer-list">
                                <li><span style={{color:"#fff"}} onClick={this.DisplayLogin}><FontAwesomeIcon icon={faUser} className='icon-space'/> Đăng nhập </span></li>
                                <li><span style={{color:"#fff"}} onClick={this.DisplayRegister}><FontAwesomeIcon icon={faUserPlus} className='icon-space'/> Đăng ký </span></li>
                                <li><Link to="/cart"><FontAwesomeIcon icon={faShoppingBasket} className='icon-space' />Giỏ hàng của tôi</Link></li>
                            </ul>
                        </div>
                        <div className="instagram" data-aos="fade-left" data-aos-delay="200">
                            <h2>Địa chỉ & Liên hệ</h2>
                            <ul className="footer-list">
                                <li><a href="/#"><FontAwesomeIcon icon={faMapMarked} className='icon-space' /> Cầu Giấy, Hà Nội, Việt Nam</a></li>
                                <li><a href="/#"><FontAwesomeIcon icon={faPhone} className='icon-space' /> +0364307871</a></li>
                                <li><a href="/#"><FontAwesomeIcon icon={faPaperPlane} className='icon-space' /> trongnghiafes@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                        <div className="follow" data-aos="fade-left" data-aos-delay="200">
                            <h2>Mạng xã hội</h2>
                            <p>Theo dõi chúng tôi trên</p>
                            <div>
                                {/* <a href="http://facebook.com"><FontAwesomeIcon icon={faFacebookF} className='icon-space' /></a>
                                <a href="http://twitter.com"><FontAwesomeIcon icon={faTwitter} className='icon-space' /></a>
                                <a href="instagram.com"><FontAwesomeIcon icon={faInstagram} className='icon-space' /></a>
                                <a href="youtube.com"><FontAwesomeIcon icon={faYoutube} className='icon-space' /></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="move-up" onClick={this.ScrollToHead}>
                        <span><FontAwesomeIcon icon={faArrowCircleUp} className='fa-2x' /></span>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Tailer;
