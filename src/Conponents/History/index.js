import { Grid, Typography, Button, Box } from '@mui/material';
import React, { Component } from 'react';
import CountUp from 'react-countup';
import { useHistory } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import useStyles from './styles';
import leftHis from '../../assets/image/h2-img-4.jpg';

const History = () => {
  const classes = useStyles();
  const history = useHistory();
  return (

    <Grid container sx={{padding: {md: 2, xs: 1}, marginTop: {md: 4, xs: 2}}}>
      <Grid item md={6} xs={12} textAlign='center'>
        <Typography variant='h5' className={classes.titleText} sx={{color: 'red'}}>
        Lịch sử
        </Typography>

        <Typography variant='h5' className={classes.titleText}>
        Quá trình hình thành công ty
        </Typography>
        <Button className={classes.buttonLeftHis} sx={{padding: 0, marginBottom: 2}} onClick={() => history.push('/about')}>
          <img src={leftHis} alt='leftHis'/>
        </Button>
        <Typography variant='body1'>
        Hình ảnh của xưởng được chụp 10 tháng 10 năm 2020
        </Typography>

      </Grid>

      <Grid item md={6} xs={12} textAlign='center' justifyContent='center' 
        sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography variant='h5'>
        Thành lập năm <span style={{color: 'red'}}>2022</span>
        </Typography>
        <Box sx={{margin: 2}}>
          <Typography sx={{marginTop: 2, marginBottom: 2, lineHeight: 1.5, textAlign: 'justify'}}>
          <span style={{marginBottom: 2}}>
          Lịch sử rượu vang kéo dài hàng nghìn năm và gắn bó chặt chẽ với lịch sử nông nghiệp, ẩm thực, văn minh, loài người. 
          Bằng chứng khảo cổ sớm nhất cho thấy con người đã làm rượu vang tại Gruzia vào khoảng 6000 năm TCN.
          </span>
          Rượu vang gắn liền với thần thoại về Dionysus/Bacchus, phổ biến ở La mã và Hy Lạp cổ đại,và nhiều vùng làm rượu vang chính ở Tây Âu ngày nay.
          Trải qua 4 năm xây dựng và phát triển, Công ty với thương hiệu HNP đã và đang ngày càng không chỉ khẳng định được vị thế của mình trong lĩnh vực kinh doanh rượu tại thị trường Việt Nam mà còn trên thị trường quốc tế. Một hành trình phát triển liên tục không ngừng, 
          Công ty đã gặt hái được nhiều thành tích đáng kể như tốc độ tăng trưởng kinh doanh đều đạt 150% so với năm trước, quy mô và đội ngũ nhân sự tăng trưởng mạnh, số lượng khách hàng tăng cao, hệ thống đối tác dịch vụ đa dạng và hợp tác chặt chẽ.
          </Typography>

          <Typography variant='h5'>
            <CountUp end={15892} duration={4} /> người tin dùng
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default History;
