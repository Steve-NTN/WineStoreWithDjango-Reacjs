import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, Box, Rating } from '@mui/material';
import { useParams } from 'react-router-dom';
import apiTemplate from '../../api';
import useStyles from './styles';
import configs from '../../configs';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../actions/loadingAction';
import Loading from '../Loading';

const ProductDetail = ({product, openProductDetail, closeProductDetail}) => {
  const classes = useStyles();
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() =>  {
    const getData = async () => {
      dispatch(setLoading({open: true}));
      await apiTemplate('/product/product-detail', 'POST', {product_id: product?.product_id}, (res)=> {
        setData(res);
        console.log(res);
        dispatch(setLoading({open: false}));
      }, (error) => {
        console.log(error);
        dispatch(setLoading({open: false}));
      })
    };
    getData();
  }, [product]);

  // const getData = () => {
  //   console.log(product, 'hello')
  //   apiTemplate('/product/product-detail', 'POST', {product_id: product?.product_id}, (res)=> {
  //     setproductDetail(res);
  //     console.log(res);
  //   }, (error) => {
  //     console.log(error)
  //   })
  // };
  // getData();

  console.log(product, data)

  return (
    <Dialog open={openProductDetail} onClose={closeProductDetail}>
    {
      data? (
        <>
          <DialogTitle>
            <Typography className={classes.title} variant='h5'>
              Thông tin sản phẩm
            </Typography>
            <Typography className={classes.title} sx={{fontWeight: 600}}>
              {data?.product_name}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <img src={`${configs.DOMAIN}${data?.product_image}`} 
              style={{maxWidth: '100%'}}
            />
            <Box className={classes.productText}>
              <Typography sx={{fontWeight: 600, color: 'red'}}>
                $ {data?.product_price}
              </Typography>
              <Rating
                name="simple-controlled"
                value={data?.product_vote || 0}
                readOnly
              />
              <Typography className={classes.productName}>
                {data?.product_category}
              </Typography>
              <Typography variant='body2'>
                {data?.product_description}
              </Typography>
            </Box>
          </DialogContent>
        </>
      ) : <Loading/>
      }
    </Dialog>
  );
}

export default ProductDetail;