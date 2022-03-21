import { Box, Grid, Typography, IconButton } from '@mui/material';
import React from 'react';
import useStyles from './styles';
import { Link } from 'react-router-dom';

const ProductCategory = () => {
  const classes = useStyles();
    
  var typeList = [
    {
      typeName: 'Brandy',
      typeImage: '../assets/img/kind-1.jpg',
      typeDes: 'Type 1'
    },
    {
      typeName: 'Gin',
      typeImage: '../assets/img/kind-2.jpg',
      typeDes: 'Type 2'
    },
    {
      typeName: 'Rum',
      typeImage: '../assets/img/kind-3.jpg',
      typeDes: 'Type 3'
    },
    {
      typeName: 'Tequila',
      typeImage: '../assets/img/kind-4.jpg',
      typeDes: 'Type 4'
    },
    {
      typeName: 'Vodka',
      typeImage: '../assets/img/kind-5.jpg',
      typeDes: 'Type 5'
    },
    {
      typeName: 'Whiskey',
      typeImage: '../assets/img/kind-6.jpg',
      typeDes: 'Type 6'
    },
  ];

  return (
    <Box my={4}>
      <Typography variant='h5' sx={{fontWeight: 600}} align='center'>
        Loại rượu chúng tôi có
      </Typography>


      <Grid container sx={{marginTop: 2}}>
        {
          typeList.map((category, index) => (
            <Grid md={3} sm={4} xs={6} item key={index} className={classes.categoryCard}>
              <IconButton className={classes.categoryImg} sx={{
                backgroundImage: `url(${category.typeImage})`
              }}>
                <Box >

                </Box>
              </IconButton>
              <Link className={classes.categoryName} to='/product/category/'>
                {category.typeName}
              </Link>
              <Typography variant='body2'>
                {category.typeDes}
              </Typography>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}

export default ProductCategory;
