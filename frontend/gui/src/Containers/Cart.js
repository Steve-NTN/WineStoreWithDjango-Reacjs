import React,{ Component } from 'react';
import Welcome from '../Conponents/Welcome'
import ProductCart from '../Conponents/ProductCart'
import Tailer from '../Conponents/Tailer'
import NeedLogin from '../Conponents/NeedLogin'
import BonusAbout from '../Conponents/BonusAbout'
import axios from 'axios';

export default class Cart extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null) {
            loggedIn = false
        }

        this.state = {
            loggedIn,
            orders: [],
            token: this.token,
            totalPrice: 0,
            products: {}
        }
    }


    componentDidMount() {
        axios.get(`http://localhost:8000/order/order-by-user/${localStorage.getItem("token")}`)
            .then(res => {
                this.setState({
                    orders: res.data,
                });
                if(this.state.orders) {
                    document.getElementById("selected-quantity").innerHTML = this.state.orders.length
                }
            })
    }

    remove = (productId) =>{  
        axios.delete(`http://localhost:8000/order/delete-selected/${localStorage.getItem("token")}/${productId}`)
            .then(res => {
                
            }).catch(console.error)
        const productCopy = this.state.orders.filter((row) => row.product !== productId);
        this.setState({orders: productCopy});
        document.getElementById("selected-quantity").innerHTML = parseInt(document.getElementById("selected-quantity").innerHTML) - 1
    };

    render() {
        if(!this.state.loggedIn) {
            return (
                <div>
                    <Welcome />
                    <NeedLogin />
                    <BonusAbout />
                    <Tailer />
                </div>
            )
        } else {
            var orders = this.state.orders
            let elements = orders.map((order,index) => {
                return (    
                    <ProductCart data={order} remove={this.remove} key={index} totalPrice={this.state.totalPrice}/>
                )
            })
            return (
                <div>
                    <Welcome />
                    <section className="space-section">
                        <div className="row title-content" data-aos="zoom-in" data-aos-delay="200">
                            <div className="title-text">
                                <span>Cart</span>
                                <h2>Giỏ hàng của tôi</h2>
                            </div>
                        </div>
                    </section>
                    <section className="space-section table-section">
                        <div className="container" style={{ padding: '0' }}>
                            <table className="table cart-table" id="table-cart" onChange={this.getTotal}>
                                <thead>
                                    <tr>
                                        <th style={{ paddingLeft: "105px" }}>Sản phẩm</th>
                                        <th>Giá</th>
                                        <th>Số lượng</th>
                                        <th>Tổng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {elements}
                                </tbody>
                            </table>
                            <hr style={{ marginTop: "0" }} />
                        </div>
                    </section>
                    <section className="cart-total">
                        <div className="container">
                            <h2 onClick={this.getTotal} style={{ cursor: 'pointer' }}>Tổng tiền</h2>
                            <p id="sum-total">{this.state.totalPrice}</p>
                        </div>
                    </section>
                    <BonusAbout />
                    <Tailer />
                </div>
            );
        }

    }
}