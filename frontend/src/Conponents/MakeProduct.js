import React, { Component } from 'react';

class MakeProduct extends Component {

    ClickPlayVideo = () =>{
        window.location.href = "https://www.youtube.com/watch?v=7gquYRxLMFI"
    }

    render() {
        return (
            <div>
                <section className="container space-section space-bottom max-width">
                    <div className="row title-content" data-aos="zoom-in" data-aos-delay="200">
                        <div className="title-text">
                            <span>Produce</span>
                            <h2>Quy trình sản xuất</h2>
                        </div>
                    </div>
                    <div className="site-content" style={{ gridTemplateColumns: '100%' }}>
                        <div className="posts">
                            <div className="post-content" data-aos="zoom-in" data-aos-delay="200">

                                <div className="post-image" style={{ paddingBottom: '0' }}>
                                    <div className="video-container">
                                        <img src="../assets/img/h1-video-img-1.jpg" className="img" alt="blog1" />
                                        <span onClick={this.ClickPlayVideo} className="qodef-m-play-inner">
                                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="125px" height="125px" viewBox="0 0 197 197" enableBackground="new 0 0 197 197">
                                                <circle className="video-button-stroke" strokeLinecap="round" cx="98.5" cy="98.6" r="97.5"></circle>
                                                <circle className="video-button-circle" strokeLinecap="round" cx="98.5" cy="98.6" r="95.5"></circle>
                                                <g><path fill="currentColor" d="M88.5,78.6l20,20l-20,20V78.6z"></path></g>
                                            </svg>
                                        </span>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default MakeProduct;
