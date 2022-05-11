import React,{ useState, useEffect } from 'react';
// import axios from 'axios';
import { NeedLogin, Footer } from '../../Conponents';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,Table,TableCell,TableContainer,
  TableHead,TableRow,Typography,
  TableBody, Paper, IconButton
} from '@mui/material';
import configs from '../../configs';
import { reduceCart, addCart } from '../../actions/cartAction';


import noImage from '../../assets/image/no-image.png';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Cart = () => {
  const token = useSelector((state) => state.userReducer.token);
  const cart = useSelector((state) => state.cartReducer.Carts);

  console.log(cart)

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
        !token ? (
          <>
            <NeedLogin />
          </>
        ) : (
          <Box my={4} mx={{md: 2, xs: 1}} minHeight='50vh' textAlign='center'>
          {
            cart.length < 1? (
              <Typography variant='h5'>Giỏ hàng của tôi</Typography>

            ) : (
              <>
                <Typography variant='h5'>Giỏ hàng của tôi</Typography>
                <TableContainer component={Paper}>
                  <Table sx={{ }} aria-label="simple table">
                    <TableHead>
                      <TableRow sx={{'& p': {fontWeight: 600}}}>
                        <TableCell>Sản phẩm</TableCell>
                        <TableCell>Giá</TableCell>
                        <TableCell>Số lượng</TableCell>
                        <TableCell>Tổng</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cart && cart.map((row, index) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            <Box display='flex'>
                              <img src={row?.product_image ? `${configs.DOMAIN_MEDIA}${row?.product_image}`: noImage}/>
                              {row?.product_name}
                            </Box>
                          </TableCell>
                          <TableCell>{row.product_price}</TableCell>
                          <TableCell>
                            <UpdateBox row={row} cart={cart}/>
                          </TableCell>
                          <TableCell>{row.product_price * row.quantity}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>

            )
          }

            {/* <section className="cart-total">
              <div className="container">
                <h2 style={{ cursor: 'pointer' }}>Tổng tiền</h2>
                <p id="sum-total"></p>
              </div>
              <div className='container'>
                <div className="row" style={{ textAlign: 'center' }} data-aos="zoom-in" data-aos-delay="200">
                  <button className="btn post-btn btn-view-all">Thanh toán</button>
                </div>
              </div>
            </section> */}
            {/* <BonusAbout /> */}
          </Box>

        )
      }
      <Footer />
    </>

  )
};

const UpdateBox = ({row, cart}) => {
  const dispatch = useDispatch();
  console.log(row, cart)

  return (
    <Box display='flex' justifyContent={'center'} alignItems='center'>
      <IconButton onClick={() => dispatch(addCart(row))}>
        <AddIcon />
      </IconButton>
      <Typography>
      {row?.quantity}
      </Typography>
      <IconButton onClick={() => dispatch(reduceCart(row))}>
        <RemoveIcon />
      </IconButton>
    </Box>
  )
}

export default Cart;