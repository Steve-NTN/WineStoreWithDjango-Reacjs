import React, { useState, useEffect, useRef } from 'react';
import { Typography, Grid, Box, Button, Card, CardMedia, CardContent, CardActions, CardActionArea } from '@mui/material';
import useStyles from './styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import apiTemplate from '../../api';
import configs from '../../configs';
import ProductDetail from '../ProductDetail';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../actions/loadingAction';
import Loading from '../Loading';

const ProductList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productList, setProductList] = useState([]);
  const [openProductDetail, setOpenProductDetail] = useState(false);
  const handleViewProduct = () => {
    setOpenProductDetail(true);
  };
  const handleLikeProduct = () => {
    console.log("Like");
  };
  const handleBuyProduct = () => {
    console.log('Buy product');
  };
  const options = [
    {label: 'Xem chi tiết sản phẩm', icon: <VisibilityIcon/>, event: handleViewProduct},
    {label: 'Thêm vào danh sách yêu thích', icon: <FavoriteIcon/>, event: handleLikeProduct},
    {label: 'Thêm vào giỏ hàng', icon: <AddShoppingCartIcon/>, event: handleBuyProduct}
  ];

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  }

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
  //       setSelectedProduct(null);
  //     }
  //   }
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [wrapperRef]);

  useEffect(() =>  {
    const getData = async () => {
      dispatch(setLoading({open: true}));
      await apiTemplate('/product/products', null, null, (res)=> {
        setProductList(res);
        dispatch(setLoading({open: false}));
      }, (error) => {
        console.log(error);
        dispatch(setLoading({open: false}));
      })
    };
    getData();
  }, [dispatch]);

  return (
    <>
      <Typography variant='h5' sx={{fontWeight: 600}} align='center'>
        Sản phẩm của chúng tôi
      </Typography>

      <Grid container className={classes.productContainer}>
        {
          productList && productList.map((product, index) => (            
            <Grid item key={index} md={3} sm={4} xs={6} className={classes.productCard}>
              <Card sx={{ maxWidth: 345 }} ref={wrapperRef}
                className={classes.productContent}>
                <CardActionArea onClick={() => handleSelectProduct(product)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`${configs.DOMAIN}${product?.product_image}`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Box className={classes.productText}>
                      <Typography className={classes.productName} gutterBottom sx={{fontWeight: 600}}>
                        {product?.product_name}
                      </Typography>
                      <Typography variant='body2'>
                        $ {product?.product_price}
                      </Typography>
                    </Box>

                  </CardContent>
                </CardActionArea>
                <Grid className={`${classes.optionBg}`} container width='100%'
                  sx={{display: selectedProduct === product? 'flex': 'none'}}
                >
                  {
                    options.map((option, index) => (
                      <Grid item xs={4} key={index} className={classes.option}>
                        <div className={classes.optionBtn} onClick={option?.event} 
                          sx={{color: '#fff', backgroundColor: '#121212', minWidth: 45,
                          '&:hover': {backgroundColor: '#121212', color: '#ddd'}}}
                        >
                        {option.icon}
                        </div>
                      </Grid>
                    ))
                  }
                </Grid>
              </Card>
            </Grid>
          ))
        }
        {
          openProductDetail && (
            <ProductDetail 
              openProductDetail={openProductDetail} 
              product={selectedProduct}
              closeProductDetail={() => setOpenProductDetail(false)}
            />
          )
        }
        <Loading/>
      </Grid>
    </>
 )   
};


export default ProductList;
