import React,{ } from 'react';
// import axios from 'axios';
import { NeedLogin, Footer } from '../../Conponents';
import { useSelector } from 'react-redux';
import {
  Box,Table,TableCell,TableContainer,
  TableHead,TableRow,Typography,
  TableBody, Paper, IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Cart = () => {
  const token = useSelector((state) => state.userReducer.token);

  function createData(name,calories,fat,carbs,protein) {
    return { name,calories,fat,carbs,protein };
  }

  const rows = [
    createData('Frozen yoghurt',159,6.0,24,4.0),
    createData('Ice cream sandwich',237,9.0,37,4.3),
    createData('Eclair',262,16.0,24,6.0),
    createData('Cupcake',305,3.7,67,4.3),
    createData('Gingerbread',356,16.0,49,3.9),
  ];


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
            <Typography variant='h5'>Giỏ hàng của tôi</Typography>
            <TableContainer component={Paper}>
              <Table sx={{ }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{'& p': {fontWeight: 600}}}>
                    <TableCell>Sản phẩm</TableCell>
                    <TableCell>Giá</TableCell>
                    <TableCell>Số lượng</TableCell>
                    <TableCell>Tổng</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.calories}</TableCell>
                      <TableCell>{row.fat}</TableCell>
                      <TableCell>{row.carbs}</TableCell>
                      <TableCell>
                        <UpdateBox index={row?.name}/>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <section className="cart-total">
              <div className="container">
                <h2 style={{ cursor: 'pointer' }}>Tổng tiền</h2>
                <p id="sum-total"></p>
              </div>
              <div className='container'>
                <div className="row" style={{ textAlign: 'center' }} data-aos="zoom-in" data-aos-delay="200">
                  <button className="btn post-btn btn-view-all">Thanh toán</button>
                </div>
              </div>
            </section>
            {/* <BonusAbout /> */}
          </Box>

        )
      }
      <Footer />
    </>

  )
};

const UpdateBox = ({index}) => {
  return (
    <Box display='flex' justifyContent={'center'} alignItems='center'>
      <IconButton>
        <AddIcon />
      </IconButton>
      <Typography>
      {1}
      </Typography>
      <IconButton>
        <RemoveIcon />
      </IconButton>
    </Box>
  )
}

export default Cart;