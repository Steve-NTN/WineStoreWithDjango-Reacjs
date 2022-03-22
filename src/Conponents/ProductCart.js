import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

class ProductCart extends Component {
    constructor(props){
        super(props)
        this.state = {
            product: {},
            sumA: 0,
            totalPrice: 0
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:8000/product/detail-with-id/${this.props.data.product}`)
            .then(res => {
                this.setState({
                    product: res.data,
                    sumA: res.data.product_price * this.props.data.quantity,
                    totalPrice: this.state.totalPrice + this.state.sumA
                });
                
            })
    }

    quantityChanged = event =>{
        var sumA = this.state.sumA
        localStorage.setItem("totalPrice", parseInt(localStorage.getItem("totalPrice") - sumA))
        sumA = event.target.value * this.state.product.product_price;
        this.setState({
            sumA: sumA,
            totalPrice: this.state.totalPrice + sumA
        });
    }

    onPriceChange = (sumA) =>{
        this.setState({
            totalPrice: this.state.totalPrice + sumA
        })
    }

    render() {
        var data = this.props.data
        var product = this.state.product
        var sumA = parseInt(localStorage.getItem("totalPrice")) + this.state.sumA
        localStorage.setItem("totalPrice", sumA)
        document.getElementById("sum-total").innerHTML = localStorage.getItem("totalPrice") + ' $'
        return (
            <tr>
                <td style={{display:'flex', alignItems:'center'}}>
                    <FontAwesomeIcon icon={ faTrashAlt } className="btn-delete" onClick={() => this.props.remove(product.product_id)}/>
                    <div className="product-image fit-image img" style={{ backgroundImage: "url(http://localhost:8000" + product.product_image + ")" }}>     
                    </div>
                    <div style={{width:"calc(100% - 50px)"}}>
                        <p>{ product.product_name }</p>
                    </div></td>
                <td>{product.product_price} $</td>
                <td><input id="quantity" type="number" defaultValue={data.quantity} onChange={this.quantityChanged} min="1"></input></td>
                <td value={this.state.sumA} name='sumA' id='sum-a'>{this.state.sumA} $</td>
            </tr> 
        );
    }
}

export default ProductCart;
