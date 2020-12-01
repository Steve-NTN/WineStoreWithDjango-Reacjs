import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

class Welcome extends Component {
    constructor(props){
        super(props)
        this.state = {
            toProduct: false,
            imageList: [
                {   
                    key: 1,
                    imageLink: "/assets/img/h1-img-1.jpg",
                    imageDes: "Image 1"
                }, 
                {   
                    key: 2,
                    imageLink: "/assets/img/h1-img-2.jpg",
                    imageDes: "Image 2"
                }, 
                {
                    key: 3,
                    imageLink: "/assets/img/h1-img-3.jpg",
                    imageDes: "Image 3"
                }, 
                {
                    key: 4,
                    imageLink: "/assets/img/h1-img-4.jpg",
                    imageDes: "Image 4"
                }, 
                {
                    imageLink: "/assets/img/h1-img-5.jpg",
                    imageDes: "Image 5"
                }, 
                {
                    key: 5,
                    imageLink: "/assets/img/h1-img-6.jpg",
                    imageDes: "Image 6"
                }, 
                {
                    key: 6,
                    imageLink: "/assets/img/h1-img-7.jpg",
                    imageDes: "Image 7"
                }
                 
            ]
        }
    }
    

    ViewNow = ()=>{
        this.setState({
            toProduct: true
        })
    }

    render() {
        const {toProduct} = this.state
        if(toProduct){
            return <Redirect exact to="/product" />
        }
        
        let elements = this.state.imageList.map((image, index) => {
            return (
                    <div key={index} className="site-background mySlides fade" data-aos="fade-up" data-aos-delay="100">
                        <img src={ image.imageLink } alt={ image.imageDes } />
                    </div>
            )
        })
        return (
            <div>
                <section className="site-title" style={{ position: 'relative' }}>
                    { elements }
                    <div className="site-background title-text">
                        <h1>NTNWINE</h1>
                        <h3>Sản phẩm của chúng tôi sẽ khiến bạn phải hài lòng</h3>
                        <button className="btn" id="btn-join" onClick={() => this.ViewNow()}>Xem ngay<span> </span> 
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </section>
                <br />
                <div className="container-dot">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span> 
                </div>
            </div>
        );
    }
}

export default Welcome;
