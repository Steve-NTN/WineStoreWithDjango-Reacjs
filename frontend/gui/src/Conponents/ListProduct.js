import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faEye, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class ListProduct extends Component {
    
    indexPage = 1;

    state = {
        quantity: 0,
        products: []
    }

    prePageClick(quantity){
        if(this.indexPage > 1){
            var crp = document.getElementById("currentPage")
            this.indexPage -= 1
            crp.innerHTML = this.indexPage
            this.componentDidMount()
            this.render()
        }
    }

    nextPageClick(quantity){
        var maxPageNumber = this.state.quantity % 8 === 0 ? parseInt(this.state.quantity / 8) : parseInt(this.state.quantity / 8 + 1)
        if(this.indexPage < maxPageNumber){
            var crp = document.getElementById("currentPage")
            this.indexPage += 1
            crp.innerHTML = this.indexPage
            this.componentDidMount()
            this.render()
        }
    }

    Agree(){
        document.getElementById("notice-p").style.display = "none"
    }

    displayNotice(text){
        document.getElementById("notice-text").innerHTML = text
        document.getElementById("notice-p").style.display = "block"
    }

    componentDidMount(){
        axios.get(`http://localhost:8000/product/products_a_page/${this.indexPage}`)
            .then(res => {
                this.setState({
                    quantity: res.data.quantity,
                    products: res.data.products
                });
            })
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
                .then(
                    quantity =>{
                        if(quantity > 1)
                            document.getElementById("selected-quantity").innerHTML = parseInt(document.getElementById("selected-quantity").innerHTML) + 1
                    }        
                )
        }
        else{
            this.displayNotice("Bạn cần đăng nhập để mua sản phẩm")
        }
    }

    clickLike = ()=>{
        alert("Xử lí đánh giá sản phẩm")
    }

    render() {
        var products = this.state.products
        var quantity = this.state.quantity
        let elements = products.map((product, index) => {
            return (
                <div key={index} className="col-sm-6 col-md-3" data-aos="zoom-in" data-aos-delay="200">
                    <div className="product-content" style={{ width: '100%' }}>
                        <div className="product-image fit-image" style={{ backgroundImage: "url(http://localhost:8000" + product.product_image + ")", position: 'relative' }}>
                            <div className="product-option-out">
                                <div className="product-option">
                                    <p className="option-box" to="/#" product_code={product.product_code}
                                        onClick={() => this.clickBuy(product.product_id)}><FontAwesomeIcon icon={faShoppingCart} /></p>
                                    <Link className="option-box"  onClick={this.clickLike}><FontAwesomeIcon icon={faHeart} /></Link>
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
                <div className="pagination flex-row">
                        <button className="pages" onClick={()=> this.prePageClick(quantity)} data-aos="fade-left" data-aos-delay="200"><FontAwesomeIcon icon={faChevronLeft}/></button>
                        <p id="currentPage" className="current-page" data-aos="zoom-in" data-aos-delay="200">1</p>
                        <button className="pages" onClick={()=> this.nextPageClick(quantity)} data-aos="fade-right" data-aos-delay="200"><FontAwesomeIcon icon={faChevronRight}/></button>
                    </div>
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

export default ListProduct;
