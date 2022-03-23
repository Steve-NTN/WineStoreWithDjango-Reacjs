import React,{ Component } from 'react';
import Stars from '../Conponents/Stars'

class ReviewProduct extends Component {
    render() {

        var reviewList = [
            {
                reviewText: 'Phục vụ 24/7',
                reviewImage: '../assets/img/intro-img7.jpg',
                reviewDes: 'Review 1'
            },
            {
                reviewText: 'Giá hợp lí',
                reviewImage: '../assets/img/intro-img4.jpg',
                reviewDes: 'Review 2'
            },
            {
                reviewText: 'Miễn phí ship',
                reviewImage: '../assets/img/intro-img3.jpeg',
                reviewDes: 'Review 3'
            },
            {
                reviewText: 'Chất lượng',
                reviewImage: '../assets/img/intro-img5.jpg',
                reviewDes: 'Review 4'
            },
        ];

        let elements = reviewList.map((review,index) => {

            return (
                <div key={index} className="col-sm-6 col-md-3" data-aos="zoom-in" data-aos-delay="200">
                    <div className="product-content" style={{ width: '100%' }}>
                        <div className="product-image fit-image intro-image" 
                            style={{ height:'200px', overflow: 'hidden' }}>
                            <img className="img" src={review.reviewImage} alt={review.reviewDes}/>
                        </div>
                        <div style={{ height: '50px', textAlign: 'center', padding: '20px' }}>
                            <span className="brk-text">{review.reviewText}</span>

                        </div>
                    </div>
                </div>
                
            )
        })
        return (
            <div>
                <section className="space-section">
                    <div className="container">
                        <div className="row title-content" >
                            <div className="title-text">
                                <span>Review</span>
                                <h2>Đánh giá công ty</h2>
                                <Stars numberStar='5' />
                            </div>
                        </div>
                        <div className="row" style={{margin: '5vh'}}>    
                            { elements }
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ReviewProduct;

