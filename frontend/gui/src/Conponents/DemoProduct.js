import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faEye} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class DemoProduct extends Component {
    
    state = {
        quantity: 0,
        products: [],
    }

    componentDidMount(){
        axios.get(`http://localhost:8000/product/products_a_page/1`)
            .then(res => {
                this.setState({
                    quantity: res.data.quantity,
                    products: res.data.products
                });
            })
    }

    Agree(){
        document.getElementById("notice-p").style.display = "none"
    }

    displayNotice(text){
        document.getElementById("notice-text").innerHTML = text
        document.getElementById("notice-p").style.display = "block"
    }

    clickView(product_code){
        localStorage.setItem("product_code", product_code)
    }


    clickBuy(product_id){
        if(localStorage.getItem("token")){
            const buyProduct = {token: localStorage.getItem("token"), product: product_id}
            fetch('http://127.0.0.1:8000/order/buy-product/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(buyProduct)
                })
                .then(res => res.json())
                .then(res => {
                        if(res === 1)
                            document.getElementById("selected-quantity").innerHTML = parseInt(document.getElementById("selected-quantity").innerHTML) + 1
                    }        
                )
        }
        else{
            
            this.displayNotice("Bạn cần đăng nhập để mua sản phẩm")
        }
    }
        
    render() {
        var products = this.state.products
        let elements = products.map((product, index) => {
            return (
                <div key={index} className="col-sm-6 col-md-3" data-aos="zoom-in" data-aos-delay="200">
                    <div className="product-content" style={{ width: '100%' }}>
                        <div className="product-image fit-image" style={{ backgroundImage: "url(http://localhost:8000" + product.product_image + ")", position: 'relative' }}>
                            <div className="product-option-out">
                                <div className="product-option">
                                    <p className="option-box" to="/#" product_code={product.product_code}
                                        onClick={() => this.clickBuy(product.product_id)}><FontAwesomeIcon icon={faShoppingCart} /></p>
                                    <Link className="option-box" to="/#"><FontAwesomeIcon icon={faHeart} /></Link>
                                    <Link className="option-box" to="/viewproduct" product_code={product.product_code} 
                                        onClick={()=> this.clickView(product.product_code)}><FontAwesomeIcon icon={faEye} /></Link>
                                </div>  
                            </div>
                        </div>
                        <div style={{ height: '150px', textAlign: 'center', padding: '20px' }}>
                            <span className="brk-text">{ product.product_type }</span>
                            <h3>{ product.product_name }</h3>
                            <p style={{ fontStyle: 'italic' }}>{ product.product_price } $</p>
                        </div>
                    </div>

                </div>
            )
        })
        return (
            <div>
                <section className="space-section">
                    <div className="container">
                        <div className="row" style={{ margin: '5vh' }}>
                            {elements}
                        </div>
                    </div>
                </section>
                <div id="notice-p" className="modal" style={{display:"none"}}>
                    <div className="modal-content animate" style={{width:'300px'}}>
                        <span onClick={this.Agree} className="close" title="Close Modal">&times;</span>
                        <div className="container">
                            <p id="notice-text"></p>
                            <button className="btn post-btn btn-view-all" onClick={this.Agree}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default DemoProduct;
