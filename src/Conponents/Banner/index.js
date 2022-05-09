import { Box, Button, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import banner1 from '../../assets/image/h1-img-1.jpg';
import banner2 from '../../assets/image/h1-img-2.jpg';
import banner3 from '../../assets/image/h1-img-3.jpg';
import banner4 from '../../assets/image/h1-img-4.jpg';
import banner5 from '../../assets/image/h1-img-5.jpg';
import banner6 from '../../assets/image/h1-img-6.jpg';
import banner7 from '../../assets/image/h1-img-7.jpg';

const Banner = () => {
  const classes = useStyles();
  const history = useHistory();
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const imageList = [
    {imageLink: banner1, imageDes: "Image 1"}, 
    {imageLink: banner2, imageDes: "Image 2"}, 
    {imageLink: banner3, imageDes: "Image 3"}, 
    {imageLink: banner4, imageDes: "Image 4"}, 
    {imageLink: banner5, imageDes: "Image 5"}, 
    {imageLink: banner6, imageDes: "Image 6"}, 
    {imageLink: banner7, imageDes: "Image 7"}
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if(currentBannerIndex + 1 < imageList.length){
        setCurrentBannerIndex(currentBannerIndex + 1);
      } else {
        setCurrentBannerIndex(0);
      }
    }, 2500);
    return () => {
      clearInterval(interval);
    };
  }, [currentBannerIndex, imageList.length]);
    

  return (
    <Box className={classes.background} 
      sx={{backgroundImage: `url(${imageList[currentBannerIndex]?.imageLink})`, height: {md: 'calc(100vh - 72px)', xs: 250}}}>
      <Box textAlign='center'>
        <Typography variant='h4' className={classes.titleText}>HNPWINE</Typography>
        <Typography variant='h5' className={classes.titleText}>Sản phẩm của chúng tôi sẽ khiến bạn hài lòng</Typography>
        <Button className={classes.btn} onClick={() => history.push('/product')}
          sx={{backgroundColor: '#fff', padding: {md: `16px 32px`, sm: `8px 16px`}, borderRadius: 7, color: '#000', marginTop: 2,
            textTransform: 'none'
          }}
        >
          <Typography variant='body1' sx={{display: 'flex', alignItems: 'center'}}>
            Xem ngay
            <ArrowForwardIcon />
          </Typography> 
        </Button>

          <Box sx={{height: '50px'}} className={classes.dotBox}>
            {
              imageList.map((image, index) => (
                <IconButton key={index} onClick={() => setCurrentBannerIndex(index)} sx={{padding: 0}}>
                  <Box className={`${classes.dot} ${index === currentBannerIndex && classes.selectedDot}`}></Box>
                </IconButton>
              ))
            }
          </Box>
      </Box>
    </Box>


  )

    // ViewNow = ()=>{
    //     this.setState({
    //         toProduct: true
    //     })
    // }

    // render() {
    //     const {toProduct} = this.state
    //     if(toProduct){
    //         return <Redirect exact to="/product" />
    //     }
        
    //     let elements = this.state.imageList.map((image, index) => {
    //         return (
    //                 <div key={index} className="site-background mySlides fade" data-aos="fade-up" data-aos-delay="100">
    //                     <img src={ image.imageLink } alt={ image.imageDes } />
    //                 </div>
    //         )
    //     })
    //     return (
    //     );
    // }
}

export default Banner;
