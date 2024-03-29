import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, Box, Rating,
  Grid
} from '@mui/material';
// import { useParams } from 'react-router-dom';
import apiTemplate from '../../api';
import useStyles from './styles';
import configs from '../../configs';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../actions/loadingAction';
import Loading from '../Loading';
import noImage from '../../assets/image/no-image.png';

const ProductDetail = ({product, openProductDetail, closeProductDetail}) => {
  const classes = useStyles();
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() =>  {
    const getData = async () => {
      dispatch(setLoading({open: true}));
      await apiTemplate('/product-detail', 'POST', {product_id: product?.product_id}, (res)=> {
        setData(res);
        console.log(res);
        dispatch(setLoading({open: false}));
      }, (error) => {
        console.log(error);
        dispatch(setLoading({open: false}));
      })
    };
    getData();
  }, [product, dispatch]);

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
          </DialogTitle>
          <DialogContent sx={{
            '& .MuiPaper-root': {
              width: '85%'
            }
          }}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography className={classes.title} sx={{fontWeight: 600}}>
                  {data?.product_name}
                </Typography>
                <Box my={3} sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                  <img src={data?.product_image? `${configs.DOMAIN_MEDIA}${data?.product_image}`: noImage}
                    style={{maxWidth: '80%', maxHeight: 300}} alt='img_pro'
                  />
                </Box>
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
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography sx={{color: 'red', marginBottom: '20px'}}>
                  Mô tả:
                </Typography>
                <Typography variant='body5' sx={{mt: 2, wordSpacing:'7px'}}>
                  {data?.product_description}
                </Typography>
              </Grid>
            </Grid>
          </DialogContent>
        </>
      ) : <Loading/>
      }
    </Dialog>
  );
}

export default ProductDetail;