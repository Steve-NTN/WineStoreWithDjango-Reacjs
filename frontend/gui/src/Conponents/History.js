import React, { Component } from 'react';
import CountUp from 'react-countup';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

class History extends Component {

  state = {
    clickViewNow: false
  }

  ClickViewNow = () =>{
    this.setState({
      clickViewNow: true
    })
  }

  render() {
    const {clickViewNow} = this.state
    if(clickViewNow){
      return <Redirect to="/about" />
    }
    return (
      <div>
        <section className="space-section" >
          <div className="row title-content" data-aos="zoom-in" data-aos-delay="200">
            <div className="title-text">
              <span>History</span>
              <h2>Quá trình hình thành công ty</h2>
            </div>
          </div>
          <div className="site-content">
            <div className="posts">
              <div className="post-content" data-aos="zoom-in" data-aos-delay="200">
                <div className="post-image" style={{ paddingTop: '0' }}>
                  <div>
                    <img src="../assets/img/h2-img-4.jpg" className="img" alt="blog1" />
              </div>

                  </div>
                  <div className="post-title image-title">
                    <p>Hình ảnh của xưởng được chụp 10 tháng 10 năm 2020</p>
                    <button className="btn btn-view-all" onClick={this.ClickViewNow}>Xem ngay &nbsp; <FontAwesomeIcon icon={faChevronRight} /></button>
                  </div>
                </div>
              </div>
              <aside className="sidebar" data-aos="zoom-in" data-aos-delay="200">
                <h2>Lịch sử của chúng tôi</h2>
                <h4>Thành lập năm <strong className="brk-text">2020</strong></h4>
                <p>
                Lịch sử rượu vang kéo dài hàng nghìn năm và gắn bó chặt chẽ với lịch sử nông nghiệp, ẩm thực, văn minh, loài người. Bằng chứng khảo cổ sớm nhất cho thấy con người đã làm rượu vang tại Gruzia vào khoảng 6000 năm TCN.
              </p>
                <p>
                Rượu vang gắn liền với thần thoại về Dionysus/Bacchus, phổ biến ở La mã và Hy Lạp cổ đại,và nhiều vùng làm rượu vang chính ở Tây Âu ngày nay.
              </p>
                <h2>
                  <strong className="brk-text" id="numtest"><CountUp end={15892} duration={30} /></strong>
                  <span> </span>người tin dùng
                </h2>
              </aside>
            </div>
              </section>
            </div>
        );
    }
}

export default History;
