import { Box, Grid, Typography, IconButton } from '@mui/material';
import React, {useState, useEffect} from 'react';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import apiTemplate from '../../api';
import configs from '../../configs';
import noImage from '../../assets/image/no-image.png';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../actions/loadingAction';
import Loading from '../Loading';
import Dots from '../Dots';

const ProductCategory = () => {
  const classes = useStyles();
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() =>  {
    dispatch(setLoading({open: true}));
    const getData = async () => {
      await apiTemplate('/product-category', null, null, (res)=> {
        setData(res);
        console.log(res);
        dispatch(setLoading({open: false}));
      }, (error) => {
        console.log(error);
        dispatch(setLoading({open: false}));
      })
    };
    getData();
  }, [dispatch]);

  return (
    <Box my={4}>
      <Typography variant='h5' sx={{fontWeight: 600}} align='center'>
        Có nhiều thương hiệu rượu nổi tiếng
      </Typography>


      <Grid container sx={{marginTop: 6}}>
        {
          data && data.map((category, index) => (
            <Grid md={3} sm={4} xs={6} item key={index} className={classes.categoryCard}>
              <IconButton className={classes.categoryImg} sx={{
                backgroundImage: `url(${category.product_category_image? `${configs.DOMAIN_MEDIA}${category.product_category_image}`: noImage})`
              }}>
                <Box >

                </Box>
              </IconButton>
              <Link className={classes.categoryName} to={`/${category?.product_category_name}`}>
                {category?.product_category_name}
              </Link>
              <Typography variant='body2'>
                {category?.product_category_org}
              </Typography>
            </Grid>
          ))
        }
      </Grid>
      <Dots num={4}/>
      <Loading/>
    </Box>
  );
}

export default ProductCategory;
