import React, { useState, useEffect, useRef } from 'react';
import { Typography, Grid, Box, Card, CardMedia, CardContent, CardActionArea, CircularProgress,
  IconButton, InputAdornment, Rating
 } from '@mui/material';
import useStyles from './styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import apiTemplate from '../../api';
import configs from '../../configs';
import ProductDetail from '../ProductDetail';
import { useDispatch, useSelector } from 'react-redux';
import { reduceCart, addCart } from '../../actions/cartAction';
import Loading from '../Loading';
import noImage from '../../assets/image/no-image.png';
import { useHistory } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import CustomInput from '../CustomInput';
import CustomDialog from '../CustomDialog';
import SearchIcon from '@mui/icons-material/Search';

const ProductList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [data, setData] = useState({
    quantity: 0,
    products: []
  });
  const [productFilter, setproductFilter] = useState({
    page_index: 0,
    page_size: 16,
    search_key: ''
  });
  const [showLoading, setshowLoading] = useState(true);
  const [openProductDetail, setOpenProductDetail] = useState(false);
  const cart = useSelector((state) => state.cartReducer);
  const user = useSelector((state) => state.userReducer);
  const history = useHistory();

  const handleViewProduct = () => {
    setOpenProductDetail(true);
  };
  const handleLikeProduct = () => {
    console.log("Like");
  };
  const handleBuyProduct = (product) => {
    if(!user?.token) {
      history.push('/login');
    } else {
      if(product?.qlt_in_stock > 0) {
        dispatch(addCart(product));
      }
    }

  };
  const options = [
    {label: 'Xem chi tiết sản phẩm', icon: <VisibilityIcon/>, event: handleViewProduct},
    {label: 'Thêm vào danh sách yêu thích', icon: <FavoriteIcon/>, event: handleLikeProduct},
    {label: 'Thêm vào giỏ hàng', icon: <AddShoppingCartIcon/>, event: handleBuyProduct, canBlur: true}
  ];

  const handleChangePagination = (e, value) => {
    setproductFilter({...productFilter, page_index: value - 1})
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  }

  useEffect(() =>  {
    setshowLoading(true);
    const getData = async () => {
      await apiTemplate('/products', 'POST', productFilter, (res)=> {
        setData(res);
        setshowLoading(false);
      }, (error) => {
        console.log(error);
        setshowLoading(false);
      })
    };
    getData();
  }, [productFilter, dispatch]);

  return (
    <Box display='flex' justifyContent={'center'}>
      <Box maxWidth={1400} width='100%'>
        <Typography variant='h5' sx={{fontWeight: 600}} align='center' my={7}>
          Sản phẩm của chúng tôi
        </Typography>

        <Typography sx={{fontWeight: 600}} my={3} ml={2}>
          {`Tìm kiếm sản phẩm (${data?.products?.length} kết quả)`}
        </Typography>
        <CustomInput getValue={(value) => setproductFilter({...productFilter, search_key: value})}
          required={true} att={{marginLeft: 2}}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        {
          showLoading ? (
            <Box my={6} textAlign='center' minHeight={300}>
              <CircularProgress sx={{color: '#000'}}/>
            </Box>
          ) : (
              <Grid container className={classes.productContainer} spacing={{xs: 0, md: 1}}>
                <>
                  {
                    data && data?.products.map((product, index) => (            
                      <Grid item key={index} md={3} sm={4} xs={6} className={classes.productCard}>
                        <Card sx={{ maxWidth: 345 }} ref={wrapperRef}
                          className={classes.productContent}>
                          <CardActionArea onClick={() => handleSelectProduct(product)}>
                            <CardMedia
                              component="img"
                              height="140"
                              image={product?.product_image? `${configs.DOMAIN_MEDIA}${product?.product_image}`: noImage}
                              alt="green iguana"
                              sx={{objectFit: 'contain'}}
                            />
                            <CardContent>
                              <Box className={classes.productText}>
                                <Typography className={classes.productName} gutterBottom sx={{fontWeight: 600}}>
                                  {product?.product_name}
                                </Typography>

                                <Typography variant='body2' sx={{color: 'red', my: 1}}>
                                  $ {product?.product_price}
                                </Typography>
                                
                                <Rating
                                  name="simple-controlled"
                                  value={product?.product_vote || 0}
                                  readOnly
                                />

                                <Typography variant='body2'>
                                  {`(${product?.qlt_in_stock > 0? `Còn ${product?.qlt_in_stock} sản phẩm`: 'Hết hàng' })`}
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
                                  <div className={classes.optionBtn} onClick={() => option?.event(product)} 
                                    sx={{color: '#fff', backgroundColor: '#121212', minWidth: 45,
                                    '&:hover': {backgroundColor: '#121212', color: '#ddd', 
                                    opacity: option?.canBlur? (product?.qlt_in_stock > 0? 1: 0.5): 1}}}
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
                </>
              </Grid>
            )
          }
        <Box spacing={2} my={3} display='flex' justifyContent={'center'}>
          <Pagination count={Math.ceil(data?.quantity / productFilter?.page_size)} 
            page={productFilter?.page_index + 1} onChange={handleChangePagination} />
        </Box>
        {
          openProductDetail && (
            <ProductDetail 
            openProductDetail={openProductDetail} 
            product={selectedProduct}
            closeProductDetail={() => setOpenProductDetail(false)}
            />
            )
          }

      </Box>
    </Box>
 )   
};


export default ProductList;
