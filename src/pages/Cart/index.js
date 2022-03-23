import React,{  } from 'react';
// import axios from 'axios';
import { NeedLogin } from '../../Conponents';
import { useSelector } from 'react-redux';

const Cart = () => {
  const token = useSelector((state) => state.userReducer.token);

  console.log("token", token)


    // componentDidMount() {
    //     axios.get(`http://localhost:8000/order/order-by-user/${localStorage.getItem("token")}`)
    //         .then(res => {
    //             this.setState({
    //                 orders: res.data,
    //             });
    //             if(this.state.orders) {
    //                 document.getElementById("selected-quantity").innerHTML = this.state.orders.length
    //             }
    //         })
    // }

    // remove = (productId) =>{  
    //     axios.delete(`http://localhost:8000/order/delete-selected/${localStorage.getItem("token")}/${productId}`)
    //         .then(res => {
                
    //         }).catch(console.error)
    //     const productCopy = this.state.orders.filter((row) => row.product !== productId);
    //     this.setState({orders: productCopy});
    //     document.getElementById("selected-quantity").innerHTML = parseInt(document.getElementById("selected-quantity").innerHTML) - 1
    // };

    // clickPay = () =>{
        
    //     alert("Xử lí thanh toán")
    // }

    return (
      <>
      {
        !token? (
          <div>
            {/* <Welcome /> */}
            <NeedLogin />
            {/* <BonusAbout /> */}
            {/* <Tailer /> */}
          </div>
        ) : (
        <div>
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
                    <table className="table cart-table" id="table-cart">
                        <thead>
                            <tr>
                                <th style={{ paddingLeft: "105px" }}>Sản phẩm</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Tổng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {elements} */}
                        </tbody>
                    </table>
                    <hr style={{ marginTop: "0" }} />
                </div>
            </section>
            <section className="cart-total">
                <div className="container">
                    <h2  style={{ cursor: 'pointer' }}>Tổng tiền</h2>
                    <p id="sum-total"></p>
                </div>
                <div className='container'>
                <div className="row" style={{textAlign: 'center'}} data-aos="zoom-in" data-aos-delay="200">
                    <button className="btn post-btn btn-view-all">Thanh toán</button>
                </div>
            </div>
            </section>
            {/* <BonusAbout /> */}
        </div>

        )
      }
      </>

    )
};

export default Cart;