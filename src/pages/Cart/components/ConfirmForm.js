import React,{ useState, useEffect } from 'react';
// import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box, Typography, Button, Grid, Divider,
} from '@mui/material';
import configs from '../../../configs';
import { resetCart } from '../../../actions/cartAction';
import validateCommon from '../../../validate/validateCommon'
import { Loading, CustomInput } from '../../../Conponents';
import apiTemplate from '../../../api';
import { setLoading } from '../../../actions/loadingAction';
import useStyles from './styles';

const ConfirmForm = ({accept, close, setdiaContent}) => {
  const classes = useStyles();
  const token = useSelector((state) => state.userReducer.token);
  const cart = useSelector((state) => state.cartReducer.Carts);
  const dispatch = useDispatch();
  const getTotal = () => {
    let total = 0;
    cart?.map((c) => {
      total += c?.quantity * c?.product_price
    })
    return total
  };

  const [order, setOrder] = useState({
    token: token,
    products: cart,
    username: '',
    phone_number: '',
    ship_address: '',
    total: 0
  });
  console.log(order)

  const hadnleConfirmPayment = async (e) => {
    e.preventDefault();
    dispatch(setLoading({open: true}));
    setOrder({order, total: getTotal()});
    await apiTemplate('/order/create_order', 'POST', {...order, total: getTotal()}, 
    (res)=> {
      setdiaContent(<SuccessfulForm/>);
      dispatch(setLoading({open: false}));
      dispatch(resetCart());
    }, (error) => {
      console.log(error);
      setdiaContent(<FaildForm />);
      dispatch(setLoading({open: false}));
    })
  };
  
  return (
    <>
      <Typography variant='h5' fontWeight={600} align='center'>
        Xác nhận thanh toán
      </Typography>

      <Box component={'form'} onSubmit={hadnleConfirmPayment} mt={2} justifyContent='space-between'>

        <Grid container>
          {/* Left */}
          <Grid item xs={12}>
            <Box my={3}>
              {
                cart?.map((product, index) => (
                  <Grid container key={index} mt={1}>
                    <Grid xs={6}>
                      <Typography>
                        {product?.product_name}
                      </Typography>
                    </Grid>

                    <Grid xs={3}>
                      <span>
                        {`x${product?.quantity || 0}`}
                      </span>
                    </Grid>
                    <Grid xs={3}>
                      <Typography fontWeight={600}>
                        =
                        <span>
                          {` ${validateCommon(product?.quantity * product?.product_price, 'money') || 0}`}
                        </span>
                      </Typography>
                    </Grid>
                  </Grid>
                ))
              }
            </Box>

            <Typography fontWeight={600} sx={{mb: 3}} align='left'>
              {`Tổng tiền phải thanh toán: ${validateCommon(getTotal(), 'money')}`}
            </Typography>
            
            <Divider />
          </Grid>

          {/* Right */}
          <Grid item xs={12}>
            <Typography variant='h5' fontWeight={600} align='center' mt={2}>
              Thông tin người nhận hàng
            </Typography>
            <Grid container mt={2}>
              <Grid item xs={4} className={classes.centerBox}>
                <Typography>Tên người nhận hàng</Typography>
              </Grid>
              <Grid item xs={8}>
                <CustomInput width='100%' getValue={(value) => setOrder({...order, username: value})}
                  required={true}
                />
              </Grid>
            </Grid>

            <Grid container mt={2}>
              <Grid item xs={4} className={classes.centerBox}>
                <Typography>Số điện thoại</Typography>
              </Grid>
              <Grid item xs={8}>
                <CustomInput width='100%' getValue={(value) => setOrder({...order, phone_number: value})}
                  required={true}
                />
              </Grid>
            </Grid>

            <Grid container mt={2}>
              <Grid item xs={4} className={classes.centerBox}>
                <Typography>Địa điểm giao hàng</Typography>
              </Grid>
              <Grid item xs={8}>
                <CustomInput width='100%' getValue={(value) => setOrder({...order, ship_address: value})}
                  required={true}
                />
              </Grid>
            </Grid>
          </Grid>

        </Grid>

        
        <Box display='flex' justifyContent='space-between' mt={2}>
          <Button sx={{color: 'green'}} type='submit'>
            Đồng ý
          </Button>
          <Button sx={{color: 'red'}} onClick={close}>
            Hủy bỏ
          </Button>
        </Box>
      </Box>
      <Loading/>
    </>
  )
}


const SuccessfulForm = () => {
  return (
    <>
      <Typography variant='h5' fontWeight={600} align='center'>
        Đang chờ cửa hàng xác nhận thông tin
      </Typography>
    </>
  )
}

const FaildForm = () => {
  return (
    <>
      <Typography variant='h5' fontWeight={600} align='center'>
        Có lỗi xảy ra khi đặt hàng. Vui lòng quay trở lại trong ít phút.
      </Typography>
    </>
  )
}

export default ConfirmForm;