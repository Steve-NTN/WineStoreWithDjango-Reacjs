import { Box, Grid, Typography, IconButton,
  CircularProgress, Pagination
} from '@mui/material';
import React, {useState, useEffect} from 'react';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import apiTemplate from '../../api';
import configs from '../../configs';
import noImage from '../../assets/image/no-image.png';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../actions/loadingAction';

const ProductCategory = () => {
  const classes = useStyles();
  const [showLoading, setshowLoading] = useState(true);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const [ProductCategory, setProductCategory] = useState({
    page_index: 0,
    page_size: 8
  });
  const handleChangePagination = (e, value) => {
    setProductCategory({...ProductCategory, page_index: value - 1});
  };

  useEffect(() =>  {
    setshowLoading(true);

    const getData = async () => {
      await apiTemplate('/categories', 'POST', ProductCategory, (res)=> {
        setData(res);
        console.log(res);
        setshowLoading(false);

      }, (error) => {
        console.log(error);
        setshowLoading(false);

      })
    };
    getData();
  }, [ProductCategory, dispatch]);

  return (
    <Box my={4}>
      <Typography variant='h5' sx={{fontWeight: 600}} align='center'>
        Có nhiều thương hiệu rượu nổi tiếng
      </Typography>

      {
        showLoading ? (
          <Box my={6} textAlign='center'>
            <CircularProgress sx={{color: '#000'}}/>
          </Box>
        ) : (
          <Grid container sx={{marginTop: 6}}>
            {
              data && data?.categories.map((category, index) => (
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
        )
      }
      <Box spacing={2} my={3} display='flex' justifyContent={'center'}>
        <Pagination count={Math.ceil(data?.quantity / ProductCategory?.page_size)} 
          page={ProductCategory?.page_index + 1} onChange={handleChangePagination} />
      </Box>
    </Box>
  );
}

export default ProductCategory;
