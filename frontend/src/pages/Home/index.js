import { Typography } from '@mui/material';
import React from 'react';

// import Welcome from '../Conponents/Welcome'
// import History from '../Conponents/History'
// import DemoProduct from '../Conponents/DemoProduct'
// import TypeProduct from '../Conponents/TypeProduct'
// import ReviewProduct from '../Conponents/ReviewProduct'
// import ButtonViewAll from '../Conponents/ButtonViewAll'
// import Tailer from '../../Conponents/Tailer';
import { Banner, ProductCategory } from '../../Conponents';

const Home = () => {
  return (
    <>
      <Banner/>
      <ProductCategory />
      <Typography> Hello
        {/* <Welcome /> */}
        {/* <History />
        <TypeProduct />
        <ButtonViewAll />
        <DemoProduct />
        <ReviewProduct /> */}
      </Typography>
    </>

  );
}

export default Home;