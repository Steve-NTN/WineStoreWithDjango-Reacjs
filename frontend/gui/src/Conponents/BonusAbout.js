import React, { Component } from 'react';
import axios from 'axios';

class BonusAbout extends Component {
    
    state = {
        quantity: 0,
        products: []
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

    render() {
        var products = this.state.products
        let elements = products.map((product, index) => {
            return (
                <div key={index} className="col-sm-6 col-md-3" data-aos="zoom-in" data-aos-delay="200" style={{display: 'none'}}>
                    <div className="product-content" style={{ width: '100%' }}>
                        <div className="product-image fit-image" style={{ backgroundImage: "url(http://localhost:8000" + product.product_image + ")", position: 'relative' }}>
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
                        <div className="row" >
                            {elements}
                        </div>
                    </div>
                </section>
            </div>
        )
    };
}

export default BonusAbout;
